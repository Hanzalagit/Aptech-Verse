import * as THREE from 'three';
import * as RAPIER from '@dimforge/rapier3d-compat';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

let scene, camera, renderer, controls, world, character, characterBody;

init();
animate();

async function init() {
  // Scene
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x20232a);

  // Camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.set(0, 2, 5);

  // Renderer
  renderer = new THREE.WebGLRenderer({antialias: true});
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Controls
  controls = new OrbitControls(camera, renderer.domElement);

  // Lights
  const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
  hemiLight.position.set(0, 20, 0);
  scene.add(hemiLight);

  const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
  dirLight.position.set(5, 10, 2);
  dirLight.castShadow = true;
  scene.add(dirLight);

  // Physics
  await RAPIER.init();
  world = new RAPIER.World({x: 0, y: -9.81, z: 0});

  // Ground
  const groundGeometry = new THREE.BoxGeometry(50, 1, 50);
  const groundMaterial = new THREE.MeshStandardMaterial({color: 0x333333});
  const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
  groundMesh.position.set(0, -0.5, 0);
  scene.add(groundMesh);

  const groundBody = world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(0, -0.5, 0));
  const groundCollider = world.createCollider(RAPIER.ColliderDesc.cuboid(25, 0.5, 25), groundBody);

  // Character
  const charGeometry = new THREE.CapsuleGeometry(0.3, 1.2, 4, 8);
  const charMaterial = new THREE.MeshStandardMaterial({color: 0x00ffcc});
  character = new THREE.Mesh(charGeometry, charMaterial);
  character.castShadow = true;
  scene.add(character);

  characterBody = world.createRigidBody(RAPIER.RigidBodyDesc.kinematicPositionBased().setTranslation(0, 2, 0));
  world.createCollider(RAPIER.ColliderDesc.capsule(0.6, 0.3), characterBody);

  // Simple Staircase
  createStairs();

  // Resize
  window.addEventListener('resize', onWindowResize);
}

// Create Stairs
function createStairs() {
  for (let i = 0; i < 10; i++) {
    const step = new THREE.Mesh(
      new THREE.BoxGeometry(2, 0.3, 1),
      new THREE.MeshStandardMaterial({color: 0x6666ff})
    );
    step.position.set(0, i * 0.3, -i);
    scene.add(step);

    const stepBody = world.createRigidBody(RAPIER.RigidBodyDesc.fixed().setTranslation(0, i*0.3, -i));
    world.createCollider(RAPIER.ColliderDesc.cuboid(1, 0.15, 0.5), stepBody);
  }
}

// Walkthrough Controls
const keys = {};
document.addEventListener('keydown', (e) => keys[e.code] = true);
document.addEventListener('keyup', (e) => keys[e.code] = false);

function moveCharacter() {
  let speed = 0.05;
  let pos = characterBody.translation();
  
  if (keys['KeyW']) pos.z -= speed;
  if (keys['KeyS']) pos.z += speed;
  if (keys['KeyA']) pos.x -= speed;
  if (keys['KeyD']) pos.x += speed;

  // Step climbing logic
  let stepOffset = 0.3;
  pos.y = Math.max(pos.y, getGroundHeight(pos.x, pos.z) + stepOffset);

  characterBody.setNextKinematicTranslation(pos);
  character.position.copy(pos);
}

// Fake ground height detector (for stairs)
function getGroundHeight(x, z) {
  if (z < 0 && z > -10) {
    return Math.abs(Math.floor(z)) * 0.3;
  }
  return 0;
}

function animate() {
  requestAnimationFrame(animate);
  world.step();

  moveCharacter();

  controls.update();
  renderer.render(scene, camera);
}

function onWindowResize() {
  camera.aspect = window.innerWidth/window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}
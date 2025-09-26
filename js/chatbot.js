const trigger = document.getElementById("chatbot-trigger");
const modal = document.getElementById("chatbot-modal");
const closeBtn = document.getElementById("close-chat");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const messages = document.getElementById("chatbot-messages");

const chatbotMessages = document.getElementById("chatbot-messages");

const welcomeMessage = `
  <div class="bot-message" style=" --bg-color: white; --text-color: black; color:var(--text-color); background:var(--bg-color); padding:12px; border-radius:10px; margin-bottom:10px; font-family:sans-serif;">
    👋 <strong>Welcome to Aptech Verse Assistant!</strong><br><br>
    I'm your virtual guide here to help you explore everything about Aptech Verse.<br>
    You can ask me about:<br>
    🔹 Courses & Programs<br>
    🔹 Admission Info<br>
    🔹 Events & Activities<br>
    🔹 Campus Tour & More<br><br>
    💬 Just type your question below — I'm here to help!
  </div>
`;
chatbotMessages.innerHTML = welcomeMessage;

const qaPairs = {
  "what is aptech":
  "Aptech is a global career education company that provides industry-relevant IT training and certification. It's known for producing skilled professionals in fields like software development, multimedia, and networking.",
  "what is aptech?":
  "Aptech is a global career education company that provides industry-relevant IT training and certification. It's known for producing skilled professionals in fields like software development, multimedia, and networking.",
  "What is Aptech?":
  "Aptech is a global career education company that provides industry-relevant IT training and certification. It's known for producing skilled professionals in fields like software development, multimedia, and networking.",
  "Hello":
  "Hello Sir/Mam, How can I assist you today?",
  "hello":
  "Hello Sir/Mam, How can I assist you today?",
  "hi":
  "Hi Sir/Mam, How can I assist you today?",
  "Hi":
  "Hi Sir/Mam, How can I assist you today?",
  "asalam o alikum":
  "Wa Alaikum Assalam! 😊 Welcome to Aptech Verse AI Assistant! How can I guide you today regarding our courses, admissions, or career paths?",
  "How can I enroll in Aptech?":
  "You can visit your nearest Aptech center or apply online. Most centers offer free career counseling and entrance assessments before admission.",
  "Can I transfer to another Aptech center internationally?":
  "Yes. Aptech has centers in over 40 countries, and students may transfer depending on availability, course compatibility, and visa requirements.",
  "Is there any online learning option at Aptech?":
  "Yes, Aptech offers blended learning with a mix of online content, live sessions, and on-campus lab work depending on your location and course type.",
  "Does Aptech help with job placement?":
  "Absolutely. Aptech has a Placement Cell that helps students get internships and full-time jobs through job fairs, mock interviews, and corporate connections.",
  "Is Aptech suitable for professionals already working?":
  "Yes! Aptech offers flexible class timings and short-term certification courses designed for working professionals who want to upgrade their skills.",
  "Do I need any prior knowledge to join Aptech?":
  "Not at all. Aptech’s programs are beginner-friendly. You can join right after completing matriculation or intermediate, depending on the course level.?",
  "What is the duration of Aptech’s diploma program?":
  "The Aptech Certified Computer Professional (ACCP) diploma program typically spans 3 years, divided into six semesters, with options for early exit certificates.",
  "What programs does Aptech offer?":
  "Aptech offers diploma and certification courses in Software Engineering, Web & Mobile App Development, Graphic & Multimedia Design ,Networking & Cybersecurity, Data Science & AI",
  "Is Aptech a government-recognized institute?":
  "Yes. Aptech operates under international educational standards and is recognized by various education and government bodies in multiple countries, including certifications approved by SDC and other global partners.",
  "aptech kya hai":
    "Aptech aik IT training institute hai jo IT, multimedia, animation aur software development courses offer karta hai.",
  "aptech alag kyun hai":
    "Aptech ne duniya bhar mein 30+ saal se practical learning aur certified faculty ke zariye apni pehchaan banaayi hai.",
  "course timing flexible hoti hain?":
    "Haan, Aptech flexible timing offer karta hai — morning, evening shifts, ya alternate-day classes.",
  "practical experience milta hai?":
    "Bilkul — Aptech workshops aur hands-on classes se practical exposure deta hai.",
  "placement assistance milti hai?":
    "Haan, Aptech job placement aur recruitment assistance provide karta hai.",
  "credit transfer facility kya hai?":
    "Course complete hone par tum apne credits Middlesex University, London etc. me transfer karwa sakte ho.",
  "aptech courses kitne duration ke hotay hain?":
    "Duration course par depend karta hai: diploma 2‑3 saal, short courses kuch hafton ke hote hain.",
  "aptech centres kaha kaha hain?":
    "Aptech Pakistan ke centres Karachi, Lahore, Islamabad waghera main available hain.",
  "placement ke baad kya hota hai?":
    "Aptech ke placement team student ko companies se connect karti hai taake job mil sakay.",
};

trigger.onclick = () => {
  modal.style.display = "flex";
};

closeBtn.onclick = () => {
  modal.style.display = "none";
};

sendBtn.onclick = () => {
  const msg = userInput.value.trim().toLowerCase();
  if (!msg) return;

  messages.innerHTML += `<div class="user-msg"><b>You:</b> ${msg}</div>`;
  const reply = qaPairs[msg] || "Sorry, mujhe is sawal ka jawab nahi maloom.";
  messages.innerHTML += `<div class="bot-msg"><b>Assistant:</b> ${reply}</div>`;
  userInput.value = "";
  messages.scrollTop = messages.scrollHeight;
};
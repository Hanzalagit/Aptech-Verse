let text = document.getElementById("text");
let hill2 = document.getElementById("hill2");
let hill3 = document.getElementById("hill3");
let hill4 = document.getElementById("hill4");
let tree = document.getElementById("tree");
let leaf = document.getElementById("leaf");

function paralex() {
    let website_scrrol = window.scrollY;
    text.style.marginTop=website_scrrol *2+ "px"
    hill2.style.marginTop=website_scrrol *3+ "px"
    hill3.style.marginTop=website_scrrol *3+ "px"
    hill4.style.marginRight=website_scrrol *1+ "px"
    tree.style.marginLeft=website_scrrol *3+ "px"
    leaf.style.top=website_scrrol *-3+ "px"
}
window.addEventListener("scroll",paralex)
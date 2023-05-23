window.scrollTo(0, 0);

setTimeout(function() {
  let spinner = document.getElementById("spinner-container");
  spinner.style.display = "none";
  setTimeout(type, initialDelay);
}, 5000);

document.addEventListener("scroll", function() {
  let header = document.getElementById("header-container");
  if(window.scrollY >= 100) {
    header.classList.add("scrollHeaderColor");
  } else {
    header.classList.remove("scrollHeaderColor");
  }
});

let copyrightYear = document.getElementById("copyrightYear");
copyrightYear.textContent = new Date().getFullYear();

let navLinks = document.getElementsByClassName("nav-link");
let header = document.getElementById("header-container");
for(let link of navLinks) {
  link.addEventListener("click", function(e) {
    if(!link.getAttribute("data-link")) {
      e.preventDefault();
      window.scrollTo(0, document.querySelector(link.getAttribute("href")).offsetTop - header.clientHeight);
    }
  });
}

let liame = document.getElementById("liame");
liame.addEventListener("click", function() {
  window.open(["mai", "lto:", "con", "tact", "@", "bigyan", "dahal", ".com"].join(""), "_blank");
});


const texts = ["Software Engineer", "Tech Ensusiast", "Curious Philonoist"];
const typedText = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");
const textCount = texts.length;
let letterIndex = 0;
let textIndex = 0;
const typingDelay = 50;
const erasingDelay = 100;
const initialDelay = 2000;

const type = () => {
  if(letterIndex < texts[textIndex].length) {
    if(!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typedText.textContent += texts[textIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursor.classList.remove("typing");
    setTimeout(erase, initialDelay);
  }
};

const erase = () => {
  if(letterIndex > -1) {
    if(!cursor.classList.contains("typing")) cursor.classList.add("typing");
    typedText.textContent = texts[textIndex].substring(0, letterIndex);
    letterIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursor.classList.remove("typing");
    textIndex++;
    if(textIndex >= texts.length) {
      textIndex = 0;
    }
    setTimeout(type, initialDelay);
  }
}; 

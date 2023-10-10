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

document.getElementById("intro-scroll").addEventListener("click", function() {
  window.scrollTo(0, document.querySelector("#about").offsetTop - header.clientHeight);
});

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

const projects = [
  {
    name: "Password Manager (PassMan)",
    description: "A password manager based on Django.",
    image: "/assets/img/projects/passman.png",
    links: {
      github: "https://github.com/bigyanse/passman",
      live: "https://iambigyandahal.pythonanywhere.com",
    },
    tags: ["Python", "Django", "Bootstrap"],
  },
  {
    name: "Library Management System (LMS)",
    description: "A library management system built using JavaScript/TypeScript, Express, React and TailwindCSS.",
    image: "/assets/img/projects/lms.png",
    links: {
      github: "https://github.com/bigyanse/lms-frontend",
      live: "https://library-management-system-lms.netlify.app",
    },
    tags: ["JavaScript/TypeScript", "Express", "Node.js", "React", "TailwindCSS", "PostgreSQL", "Prisma"],
  },
  {
    name: "Moard",
    description: "A message board built using JavaScript/TypeScript, Express, Pug and TailwindCSS.",
    image: "/assets/img/projects/moard.jpg",
    links: {
      github: "https://github.com/iambigyandahal/moard",
      live: "https://moard.onrender.com",
    },
    tags: ["JavaScript/TypeScript", "Express", "Node.js", "Pug", "TailwindCSS"],
  },
  {
    name: "SamacharAPI",
    description: "An API to get latest news updates from top nepali sites.",
    image: "/assets/img/projects/samacharapi.jpg",
    links: {
      github: "https://github.com/iambigyandahal/samacharapi",
      live: "https://samacharapi.herokuapp.com",
    },
    tags: ["JavaScript/TypeScript", "MongoDB", "Express", "Node.js"],
  },
  {
    name: "Todo App",
    description: "A todo app made with React, JavaScript/TypeScript and TailwindCSS.",
    image: "/assets/img/projects/todoapp.jpg",
    links: {
      github: "https://github.com/iambigyandahal/todoapp",
      live: "https://thegreattodoapp.netlify.app",
    },
    tags: ["JavaScript/TypeScript", "React", "TailwindCSS"],
  },
  {
    name: "Sweneht",
    description: "A HackerNews API powered news aggregator built with JavaScript/TypeScript, React and TailwindCSS.",
    image: "/assets/img/projects/sweneht.jpg",
    links: {
      github: "https://github.com/iambigyandahal/sweneht",
      live: "https://sweneht.netlify.app",
    },
    tags: ["JavaScript/TypeScript", "React", "TailwindCSS"],
  },
];
function filterProjects(tag) {
  const projectsElement = document.querySelector("#projects-container");
  projectsElement.innerHTML = "";
  for(let project of projects) {
    if(project.tags.includes(tag) || tag == "all") {
      projectsElement.innerHTML += `
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-4 pb-3">
          <div class="card">
            <img class="card-img-top" src="${project.image}" alt="${project.name}" />
            <div class="card-body">
              <h5 class="card-title">${project.name}</h5>
              <p class="card-text pt-2 pb-3">${project.description}</p>
              <a href="${project.links.github}" class="btn btn-primary me-1">GitHub</a><a href="${project.links.live}" class="btn btn-danger">Live</a>
            </div>
          </div>
        </div>
      `;
    }
  }
}
const tags = Array.from(new Set(projects.map(project => project.tags).flat()));
const tagsElement = document.querySelector("#tags");
tagsElement.innerHTML = "";
tagsElement.innerHTML += `<button class="tag" onclick="filterProjects('all')">All</button>`;
for(let tag of tags) {
  tagsElement.innerHTML += `<button class="tag" onclick="filterProjects('${tag}')">${tag}</button>`;
}
filterProjects("all");

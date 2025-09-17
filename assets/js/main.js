const menu_btn = document.querySelector(".header__menu-btn");
const menu = document.querySelector(".header__ul");
menu_btn.addEventListener("click", () => {
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
  } else {
    menu.classList.add("show");
  }
});

window.addEventListener("click", (event) => {
  if (!menu.contains(event.target) && !menu_btn.contains(event.target)) {
    menu.classList.remove("show");
  }
});

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > header.scrollHeight) {
    const header = document.querySelector("header");
    header.classList.add("header__borderize");
  } else {
    header.classList.remove("header__borderize");
  }
});

const skills_list_section = document.querySelector(".skills__list");

const skills = ["html", "css", "sass", "tailwind", "javascript", "typescript", "react", "redux", "nodejs", "express", "nestjs", "nextjs", "php", "wordpress", "laravel", "python", "flask", "django", "java", "mongodb", "postgresql", "mysql", "git", "linux", "windows", "nix", "bash", "powershell", "go", "rust", "tauri", "docker", "kubernetes", "prometheus", "grafana", "aws", "azure"];
for (let skill of skills) {
  const img = document.createElement("img");
  img.src = `https://skillicons.dev/icons?i=${skill}`;
  img.alt = skill;
  img.width = 48;
  img.height = 48;
  img.setAttribute("loading", "lazy");
  skills_list_section.appendChild(img);
}

const skills_section_loader = document.querySelector(".skills__list .loader__container");
skills_section_loader.remove();

const blog_url = "https://gql.hashnode.com";
const query = `query Publication {
    publication(host: "blog.bigyandahal.com") {
        isTeam
        title
        posts(first: 10) {
            edges {
                node {
                    title
                    brief
                    url
                    publishedAt
                    coverImage {
                      url
                    }
                }
            }
        }
    }
}`;
fetch(blog_url, {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    query,
  }),
}).then(res => res.json()).then(res => {
  const blog_posts = document.querySelector(".blog__posts");
  const posts = res.data.publication.posts.edges;
  for (let post of posts) {
    const cover_image = post.node.coverImage.url;
    const title = post.node.title;
    const brief = post.node.brief;
    const url = post.node.url;
    const formatter = new Intl.DateTimeFormat('en', { month: "short", year: "numeric" });
    const published_at = formatter.format(new Date(post.node.publishedAt));
    blog_posts.innerHTML += `<a target="_blank" href="${url}"><div class="blog__post">
            <img src="${cover_image}" alt="${title}" loading="lazy" />
            <div class="blog__post-info">
              <div class="blog__post-info-meta">
                <h3 class="line-clamp-2">${title}</h3>
                <small> ${published_at}</small>
              </div>
              <div class="blog__post-info-excerpt line-clamp-2">${brief}</div>
            </div>
          </div></a>`;
  }
  const skills_section_loader = document.querySelector(".blog__posts .loader__container");
  skills_section_loader.remove();
});

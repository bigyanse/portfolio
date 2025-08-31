(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();const c=document.querySelector(".header__menu-btn"),l=document.querySelector(".header__ul");c.addEventListener("click",()=>{l.classList.contains("show")?l.classList.remove("show"):l.classList.add("show")});window.addEventListener("click",t=>{!l.contains(t.target)&&!c.contains(t.target)&&l.classList.remove("show")});window.addEventListener("scroll",()=>{const t=document.querySelector("header");window.scrollY>t.scrollHeight?document.querySelector("header").classList.add("header__borderize"):t.classList.remove("header__borderize")});const m=document.querySelector(".skills__list"),p=["html","css","sass","tailwind","javascript","typescript","react","redux","nodejs","express","nestjs","nextjs","php","wordpress","laravel","python","flask","django","java","mongodb","postgresql","mysql","git","linux","windows","nix","bash","powershell","go","docker","kubernetes","prometheus","grafana"];for(let t of p){const s=document.createElement("img");s.src=`https://skillicons.dev/icons?i=${t}`,s.alt=t,s.width=48,s.height=48,s.setAttribute("loading","lazy"),m.appendChild(s)}const h=document.querySelector(".skills__list .loader__container");h.remove();const f="https://gql.hashnode.com",_=`query Publication {
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
}`;fetch(f,{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify({query:_})}).then(t=>t.json()).then(t=>{const s=document.querySelector(".blog__posts"),n=t.data.publication.posts.edges;for(let e of n){const o=e.node.coverImage.url,r=e.node.title,a=e.node.brief,d=e.node.url,u=new Intl.DateTimeFormat("en",{month:"short",year:"numeric"}).format(new Date(e.node.publishedAt));s.innerHTML+=`<a target="_blank" href="${d}"><div class="blog__post">
            <img src="${o}" alt="${r}" loading="lazy" />
            <div class="blog__post-info">
              <div class="blog__post-info-meta">
                <h3 class="line-clamp-2">${r}</h3>
                <small> ${u}</small>
              </div>
              <div class="blog__post-info-excerpt line-clamp-2">${a}</div>
            </div>
          </div></a>`}document.querySelector(".blog__posts .loader__container").remove()});

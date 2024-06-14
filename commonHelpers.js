import{A as d}from"./assets/vendor-8f98089f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const g=[{src:"../img/My-project/js-jpg/energy.jpg",retina:"../img/My-project/js-jpg/energy-2x.jpg",alt:"Energy Flow Webservice"},{src:"../img/My-project/js-jpg/fruitbox.jpg",retina:"../img/My-project/js-jpg/fruitbox-2x.jpg",alt:"fruitbox online store"},{src:"../img/My-project/js-jpg/jewelry.jpg",retina:"../img/My-project/js-jpg/jewelry-2x.jpg",alt:"chego jewelry website"},{src:"../img/My-project/js-jpg/mimino.jpg",retina:"../img/My-project/js-jpg/mimino-2x.jpg",alt:"mimino website"},{src:"../img/My-project/js-jpg/power.jpg",retina:"../img/My-project/js-jpg/power-2x.jpg",alt:"power pulse webservice"},{src:"../img/My-project/js-jpg/starlight.jpg",retina:"../img/My-project/js-jpg/starlight-2x.jpg",alt:"starlight studio landing page"},{src:"../img/My-project/js-jpg/vyshyvanka.jpg",retina:"../img/My-project/js-jpg/vyshyvanka-2x.jpg",alt:"vyshyvanka vibes Landing Page"}],p=document.querySelector(".load-more-btn"),u=document.querySelector(".image-list");let n=0;p.addEventListener("click",m);function m(){j()}function j(){for(let e=0;e<3;e++){if(n>=g.length){p.style.display="none";return}u.insertAdjacentHTML("beforeend",f(g[n])),n++}}function f(e){return`
            <li class="image-item">
        
          <picture>
            <source
              media="(min-width: 1280px)"
              srcset="
                ${e.src} 1x,
                ${e.retina} 2x
              "
            />
            <source
              media="(min-width: 768px)"
              srcset="
                ${e.src} 1x,
                ${e.retina} 2x
              "
            />
            <source
              media="(max-width: 767px)"
              srcset="
                ${e.src} 1x,
                ${e.retina} 2x
              "
            />
            <img
              src="${e.src}"
              alt="${e.alt}"
              width="1008"
              height="578"
              class="img"
            />
          </picture>
        
        <p class="technologies">React, JavaScript, Node JS, Git</p>
        <div class="link-wrapper">
          <p class="img-naming">${e.alt}</p>
          <a class="visit-link" href="">
            Visit
            <svg class="visit-icon" width="24" height="24">
              <use href="../img/symbol-defs.svg#visit-icon"></use>
            </svg>
          </a>
        </div>
      </li>
        `}const y=new d(".accordion-container");y.open(0);let r=document.querySelector(".ac.is-open");const l=document.querySelector(".ac:first-child");l.classList.add("is-open");l.style.backgroundColor="rgba(0, 176, 104, 0.2)";l.style.borderRadius="16px";const h=document.querySelectorAll(".ac-trigger");h.forEach((e,o)=>{e.addEventListener("click",()=>{const i=e.closest(".ac");i.classList.contains("is-open")||(r&&!r.classList.contains("ac:first-child")&&(r.classList.remove("is-open"),r.style.backgroundColor="",r.style.borderRadius=""),r=i),i.classList.toggle("is-open"),i.classList.contains("is-open")?(i.style.backgroundColor="rgba(0, 176, 104, 0.2)",i.style.borderRadius="16px"):(i.style.backgroundColor="",i.style.borderRadius="")})});
//# sourceMappingURL=commonHelpers.js.map

import{A as f}from"./assets/vendor-8f98089f.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))d(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&d(c)}).observe(document,{childList:!0,subtree:!0});function r(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(t){if(t.ep)return;t.ep=!0;const s=r(t);fetch(t.href,s)}})();const g=[{src:"../img/My-project/js-jpg/energy.jpg",retina:"../img/My-project/js-jpg/energy-2x.jpg",alt:"Energy Flow Webservice"},{src:"../img/My-project/js-jpg/fruitbox.jpg",retina:"../img/My-project/js-jpg/fruitbox-2x.jpg",alt:"fruitbox online store"},{src:"../img/My-project/js-jpg/jewelry.jpg",retina:"../img/My-project/js-jpg/jewelry-2x.jpg",alt:"chego jewelry website"},{src:"../img/My-project/js-jpg/mimino.jpg",retina:"../img/My-project/js-jpg/mimino-2x.jpg",alt:"mimino website"},{src:"../img/My-project/js-jpg/power.jpg",retina:"../img/My-project/js-jpg/power-2x.jpg",alt:"power pulse webservice"},{src:"../img/My-project/js-jpg/starlight.jpg",retina:"../img/My-project/js-jpg/starlight-2x.jpg",alt:"starlight studio landing page"},{src:"../img/My-project/js-jpg/vyshyvanka.jpg",retina:"../img/My-project/js-jpg/vyshyvanka-2x.jpg",alt:"vyshyvanka vibes Landing Page"}],u=document.querySelector(".load-more-btn"),h=document.querySelector(".image-list");let n=0;u.addEventListener("click",v);function v(){b()}function b(){for(let e=0;e<3;e++){if(n>=g.length){u.style.display="none";return}h.insertAdjacentHTML("beforeend",x(g[n])),n++}}function x(e){return`
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
        `}const L=new f(".accordion-container");L.open(0);let i=document.querySelector(".ac.is-open");const l=document.querySelector(".ac:first-child");l.classList.add("is-open");l.style.backgroundColor="rgba(0, 176, 104, 0.2)";l.style.borderRadius="16px";const k=document.querySelectorAll(".ac-trigger");k.forEach((e,o)=>{e.addEventListener("click",()=>{const r=e.closest(".ac");r.classList.contains("is-open")||(i&&!i.classList.contains("ac:first-child")&&(i.classList.remove("is-open"),i.style.backgroundColor="",i.style.borderRadius=""),i=r),r.classList.toggle("is-open"),r.classList.contains("is-open")?(r.style.backgroundColor="rgba(0, 176, 104, 0.2)",r.style.borderRadius="16px"):(r.style.backgroundColor="",r.style.borderRadius="")})});const p=document.querySelector(".burger"),j=document.querySelector(".header-nav"),w=document.querySelectorAll(".nav-menu-item a"),a=document.querySelector(".header"),y=document.querySelector(".night-mode-checkbox");p.addEventListener("click",()=>{j.classList.toggle("active"),p.classList.toggle("active")});w.forEach(e=>{e.addEventListener("click",()=>{j.classList.remove("active")})});const m=localStorage.getItem("theme");m&&m==="dark"&&(a.classList.add("dark-mode"),y.checked=!0);y.addEventListener("change",e=>{e.target.checked?(a.classList.add("dark-mode"),localStorage.setItem("theme","dark")):(a.classList.remove("dark-mode"),localStorage.setItem("theme","light"))});
//# sourceMappingURL=commonHelpers.js.map

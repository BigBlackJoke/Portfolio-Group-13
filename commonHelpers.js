import{A as h,S as v,a as w}from"./assets/vendor-b2203cf7.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();const p=[{src:"../img/My-project/js-jpg/energy.jpg",retina:"../img/My-project/js-jpg/energy-2x.jpg",alt:"Energy Flow Webservice"},{src:"../img/My-project/js-jpg/fruitbox.jpg",retina:"../img/My-project/js-jpg/fruitbox-2x.jpg",alt:"fruitbox online store"},{src:"../img/My-project/js-jpg/jewelry.jpg",retina:"../img/My-project/js-jpg/jewelry-2x.jpg",alt:"chego jewelry website"},{src:"../img/My-project/js-jpg/mimino.jpg",retina:"../img/My-project/js-jpg/mimino-2x.jpg",alt:"mimino website"},{src:"../img/My-project/js-jpg/power.jpg",retina:"../img/My-project/js-jpg/power-2x.jpg",alt:"power pulse webservice"},{src:"../img/My-project/js-jpg/starlight.jpg",retina:"../img/My-project/js-jpg/starlight-2x.jpg",alt:"starlight studio landing page"},{src:"../img/My-project/js-jpg/vyshyvanka.jpg",retina:"../img/My-project/js-jpg/vyshyvanka-2x.jpg",alt:"vyshyvanka vibes Landing Page"}],j=document.querySelector(".load-more-btn"),b=document.querySelector(".image-list");let a=0;j.addEventListener("click",L);function L(){x()}function x(){for(let e=0;e<3;e++){if(a>=p.length){j.style.display="none";return}b.insertAdjacentHTML("beforeend",k(p[a])),a++}}function k(e){return`
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
        `}const S=new h(".accordion-container");S.open(0);let n=document.querySelector(".ac.is-open");const d=document.querySelector(".ac:first-child");d.classList.add("is-open");d.style.backgroundColor="rgba(0, 176, 104, 0.2)";d.style.borderRadius="16px";const M=document.querySelectorAll(".ac-trigger");M.forEach((e,r)=>{e.addEventListener("click",()=>{const s=e.closest(".ac");s.classList.contains("is-open")||(n&&!n.classList.contains("ac:first-child")&&(n.classList.remove("is-open"),n.style.backgroundColor="",n.style.borderRadius=""),n=s),s.classList.toggle("is-open"),s.classList.contains("is-open")?(s.style.backgroundColor="rgba(0, 176, 104, 0.2)",s.style.borderRadius="16px"):(s.style.backgroundColor="",s.style.borderRadius="")})});const u=document.querySelector(".burger"),f=document.querySelector(".header-nav"),E=document.querySelectorAll(".nav-menu-item a"),l=document.querySelector(".header"),y=document.querySelector(".night-mode-checkbox");u.addEventListener("click",()=>{f.classList.toggle("active"),u.classList.toggle("active")});E.forEach(e=>{e.addEventListener("click",()=>{f.classList.remove("active")})});const g=localStorage.getItem("theme");g&&g==="dark"&&(l.classList.add("dark-mode"),y.checked=!0);y.addEventListener("change",e=>{e.target.checked?(l.classList.add("dark-mode"),localStorage.setItem("theme","dark")):(l.classList.remove("dark-mode"),localStorage.setItem("theme","light"))});async function q(){const s="https://portfolio-js.b.goit.study/api/reviews";try{return(await w.get(s)).data}catch(o){throw console.error("Error fetching data from API",o),o}}function $(e){return e.map(r=>`
        <div class="swiper-slide swiper-dark">
        <p class="text text-dark">${r.review}</p>
        <div class="author-container">
            <img src="${r.avatar_url}" alt="">
            <h3 class="author author-dark">${r.author}</h3>
        </div>
        </div>
    `).join("")}async function I(){try{const e=await q(),r=$(e),s=document.querySelector(".swiper-wrapper");s.innerHTML=r,new v(".swiper-container",{loop:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:1,spaceBetween:20},1280:{slidesPerView:2,spaceBetween:32}},centeredSlides:!1,slidesPerView:"auto"}),swiper.on("slideChange",function(){m(swiper)}),m(swiper)}catch(e){console.error(e)}}function m(e){const{isBeginning:r,isEnd:s}=e,o=document.querySelector(".swiper-button-prev"),t=document.querySelector(".swiper-button-next");r?o.classList.add("swiper-button-disabled"):o.classList.remove("swiper-button-disabled"),s?t.classList.add("swiper-button-disabled"):t.classList.remove("swiper-button-disabled")}document.addEventListener("DOMContentLoaded",I);
//# sourceMappingURL=commonHelpers.js.map

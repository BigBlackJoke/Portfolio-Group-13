import{A as h,S as v,a as w}from"./assets/vendor-b2203cf7.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const p=[{src:"./img/My-project/js-jpg/energy.jpg",retina:"./img/My-project/js-jpg/energy-2x.jpg",alt:"Energy Flow Webservice"},{src:"./img/My-project/js-jpg/fruitbox.jpg",retina:"./img/My-project/js-jpg/fruitbox-2x.jpg",alt:"fruitbox online store"},{src:"./img/My-project/js-jpg/jewelry.jpg",retina:"./img/My-project/js-jpg/jewelry-2x.jpg",alt:"chego jewelry website"},{src:"./img/My-project/js-jpg/mimino.jpg",retina:"./img/My-project/js-jpg/mimino-2x.jpg",alt:"mimino website"},{src:"./img/My-project/js-jpg/power.jpg",retina:"./img/My-project/js-jpg/power-2x.jpg",alt:"power pulse webservice"},{src:"./img/My-project/js-jpg/starlight.jpg",retina:"./img/My-project/js-jpg/starlight-2x.jpg",alt:"starlight studio landing page"},{src:"./img/My-project/js-jpg/vyshyvanka.jpg",retina:"./img/My-project/js-jpg/vyshyvanka-2x.jpg",alt:"vyshyvanka vibes Landing Page"}],j=document.querySelector(".load-more-btn"),b=document.querySelector(".image-list");let a=0;j.addEventListener("click",L);function L(){x()}function x(){for(let e=0;e<3;e++){if(a>=p.length){j.style.display="none";return}b.insertAdjacentHTML("beforeend",S(p[a])),a++}}function S(e){return`
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
        `}const k=new h(".accordion-container");k.open(0);let c=document.querySelector(".ac.is-open");const d=document.querySelector(".ac:first-child");d.classList.add("is-open");d.style.backgroundColor="rgba(0, 176, 104, 0.2)";d.style.borderRadius="16px";const M=document.querySelectorAll(".ac-trigger");M.forEach((e,i)=>{e.addEventListener("click",()=>{const s=e.closest(".ac");s.classList.contains("is-open")||(c&&!c.classList.contains("ac:first-child")&&(c.classList.remove("is-open"),c.style.backgroundColor="",c.style.borderRadius=""),c=s),s.classList.toggle("is-open"),s.classList.contains("is-open")?(s.style.backgroundColor="rgba(0, 176, 104, 0.2)",s.style.borderRadius="16px"):(s.style.backgroundColor="",s.style.borderRadius="")})});const u=document.querySelector(".burger"),f=document.querySelector(".header-nav"),E=document.querySelectorAll(".nav-menu-item a"),l=document.querySelector(".header"),y=document.querySelector(".night-mode-checkbox");u.addEventListener("click",()=>{f.classList.toggle("active"),u.classList.toggle("active")});E.forEach(e=>{e.addEventListener("click",()=>{f.classList.remove("active")})});const g=localStorage.getItem("theme");g&&g==="dark"&&(l.classList.add("dark-mode"),y.checked=!0);y.addEventListener("change",e=>{e.target.checked?(l.classList.add("dark-mode"),localStorage.setItem("theme","dark")):(l.classList.remove("dark-mode"),localStorage.setItem("theme","light"))});async function q(){const s="https://portfolio-js.b.goit.study/api/reviews";try{return(await w.get(s)).data}catch(o){throw console.error("Error fetching data from API",o),o}}function I(e){return e.map(i=>`
        <div class="swiper-slide swiper-dark">
        <p class="text text-dark">${i.review}</p>
        <div class="author-container">
            <img src="${i.avatar_url}" alt="">
            <h3 class="author author-dark">${i.author}</h3>
        </div>
        </div>
    `).join("")}async function $(){try{const e=await q(),i=I(e),s=document.querySelector(".swiper-wrapper");s.innerHTML=i;const o=new v(".swiper-container",{loop:!0,navigation:{nextEl:".button-next",prevEl:".button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:1,spaceBetween:20},1280:{slidesPerView:2,spaceBetween:32}},centeredSlides:!1,slidesPerView:"auto"});o.on("slideChange",function(){m(o)}),m(o)}catch(e){console.log(e)}}function m(e){const{isBeginning:i,isEnd:s}=e,o=document.querySelector(".button-prev"),t=document.querySelector(".button-next"),r=document.querySelector(".icon-prev"),n=document.querySelector(".icon-next");i?(o.classList.add("swiper-button-disabled"),r.classList.add("swiper-icon-disabled")):(o.classList.remove("swiper-button-disabled"),r.classList.remove("swiper-icon-disabled")),s?(t.classList.add("swiper-button-disabled"),n.classList.add("swiper-icon-disabled")):(t.classList.remove("swiper-button-disabled"),n.classList.remove("swiper-icon-disabled"))}document.addEventListener("DOMContentLoaded",$);
//# sourceMappingURL=commonHelpers.js.map

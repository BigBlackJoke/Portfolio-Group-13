import{A as k,S as x,a as S,i as E}from"./assets/vendor-951662e8.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const m=[{src:"./img/My-project/js-jpg/energy.jpg",retina:"./img/My-project/js-jpg/energy-2x.jpg",alt:"Energy Flow Webservice"},{src:"./img/My-project/js-jpg/fruitbox.jpg",retina:"./img/My-project/js-jpg/fruitbox-2x.jpg",alt:"fruitbox online store"},{src:"./img/My-project/js-jpg/jewelry.jpg",retina:"./img/My-project/js-jpg/jewelry-2x.jpg",alt:"chego jewelry website"},{src:"./img/My-project/js-jpg/mimino.jpg",retina:"./img/My-project/js-jpg/mimino-2x.jpg",alt:"mimino website"},{src:"./img/My-project/js-jpg/power.jpg",retina:"./img/My-project/js-jpg/power-2x.jpg",alt:"power pulse webservice"},{src:"./img/My-project/js-jpg/starlight.jpg",retina:"./img/My-project/js-jpg/starlight-2x.jpg",alt:"starlight studio landing page"},{src:"./img/My-project/js-jpg/vyshyvanka.jpg",retina:"./img/My-project/js-jpg/vyshyvanka-2x.jpg",alt:"vyshyvanka vibes Landing Page"}],j=document.querySelector(".load-more-btn"),q=document.querySelector(".image-list");let d=0;j.addEventListener("click",M);function M(){I()}function I(){for(let e=0;e<3;e++){if(d>=m.length){j.style.display="none";return}q.insertAdjacentHTML("beforeend",$(m[d])),d++}}function $(e){return`
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
        `}const P=new k(".accordion-container"),u=document.querySelector(".ac:first-child");u.style.backgroundColor="rgba(0, 176, 104, 0.2)";u.style.borderRadius="16px";P.open(0);let a=u;const _=document.querySelectorAll(".ac-trigger");_.forEach(e=>{e.addEventListener("click",()=>{const r=e.closest(".ac");a!==r&&(a.style.backgroundColor="",a.style.borderRadius=""),r.style.backgroundColor="rgba(0, 176, 104, 0.2)",r.style.borderRadius="16px",a=r})});const f=document.querySelector(".burger"),v=document.querySelector(".header-nav"),B=document.querySelectorAll(".nav-menu-item a"),p=document.querySelector(".header"),w=document.querySelector(".night-mode-checkbox");f.addEventListener("click",()=>{v.classList.toggle("active"),f.classList.toggle("active")});B.forEach(e=>{e.addEventListener("click",()=>{v.classList.remove("active")})});const h=localStorage.getItem("theme");h&&h==="dark"&&(p.classList.add("dark-mode"),w.checked=!0);w.addEventListener("change",e=>{e.target.checked?(p.classList.add("dark-mode"),localStorage.setItem("theme","dark")):(p.classList.remove("dark-mode"),localStorage.setItem("theme","light"))});async function N(){const i="https://portfolio-js.b.goit.study/api/reviews";try{return(await S.get(i)).data}catch(o){throw console.error("Error fetching data from API",o),o}}function O(e){return e.map(r=>`
        <div class="swiper-slide swiper-dark">
        <p class="text text-dark">${r.review}</p>
        <div class="author-container">
            <img src="${r.avatar_url}" alt="">
            <h3 class="author author-dark">${r.author}</h3>
        </div>
        </div>
    `).join("")}async function A(){try{const e=await N(),r=O(e),i=document.querySelector(".swiper-wrapper");i.innerHTML=r;const o=new x(".swiper-container",{loop:!1,navigation:{nextEl:".button-next",prevEl:".button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:1,spaceBetween:20},1280:{slidesPerView:2,spaceBetween:32}},centeredSlides:!1,slidesPerView:"auto",keyboard:{enabled:!0,onlyInViewport:!1}});o.on("slideChange",function(){y(o)}),y(o)}catch{iziToast.error({title:"Error",message:"Not found",position:"topRight"})}}function y(e){const{isBeginning:r,isEnd:i}=e,o=document.querySelector(".button-prev"),t=document.querySelector(".button-next"),s=document.querySelector(".icon-prev"),n=document.querySelector(".icon-next");r?(o.classList.add("swiper-button-disabled"),s.classList.add("swiper-icon-disabled")):(o.classList.remove("swiper-button-disabled"),s.classList.remove("swiper-icon-disabled")),i?(t.classList.add("swiper-button-disabled"),n.classList.add("swiper-icon-disabled")):(t.classList.remove("swiper-button-disabled"),n.classList.remove("swiper-icon-disabled"))}document.addEventListener("DOMContentLoaded",A);function C(){const e=document.querySelector(".work-together__form");e.addEventListener("submit",r);function r(i){i.preventDefault();const o=i.target.email.value,t=i.target.message.value,s="https://portfolio-js.b.goit.study/api/requests",n={email:o,comment:t},l=document.querySelector(".work-together__backdrop"),b=document.querySelector(".modal__close"),L=document.querySelector(".work-together__backdrop");fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(c=>{if(!c.ok)throw new Error("Network response was not ok");return c.json()}).then(c=>{l.classList.add("active"),b.addEventListener("click",()=>{l.classList.remove("active")}),L.addEventListener("click",g=>{g.target===g.currentTarget&&l.classList.remove("active")}),e.reset()}).catch(c=>{E.error({title:"Error",message:c.message,backgroundColor:"#de4f69",iconColor:"#ffffff",messageColor:"#fff"})})}}C();
//# sourceMappingURL=commonHelpers.js.map

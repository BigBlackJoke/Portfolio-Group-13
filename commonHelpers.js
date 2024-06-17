import{A as E,S as q,a as M,i as I}from"./assets/vendor-951662e8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=i(r);fetch(r.href,s)}})();const f=[{src:"./img/My-project/js-jpg/energy.jpg",retina:"./img/My-project/js-jpg/energy-2x.jpg",alt:"Energy Flow Webservice"},{src:"./img/My-project/js-jpg/fruitbox.jpg",retina:"./img/My-project/js-jpg/fruitbox-2x.jpg",alt:"fruitbox online store"},{src:"./img/My-project/js-jpg/jewelry.jpg",retina:"./img/My-project/js-jpg/jewelry-2x.jpg",alt:"chego jewelry website"},{src:"./img/My-project/js-jpg/mimino.jpg",retina:"./img/My-project/js-jpg/mimino-2x.jpg",alt:"mimino website"},{src:"./img/My-project/js-jpg/power.jpg",retina:"./img/My-project/js-jpg/power-2x.jpg",alt:"power pulse webservice"},{src:"./img/My-project/js-jpg/starlight.jpg",retina:"./img/My-project/js-jpg/starlight-2x.jpg",alt:"starlight studio landing page"},{src:"./img/My-project/js-jpg/vyshyvanka.jpg",retina:"./img/My-project/js-jpg/vyshyvanka-2x.jpg",alt:"vyshyvanka vibes Landing Page"}],w=document.querySelector(".load-more-btn"),$=document.querySelector(".image-list");let l=0;w.addEventListener("click",B);function B(){P()}function P(){for(let e=0;e<3;e++){if(l>=f.length){w.style.display="none";return}$.insertAdjacentHTML("beforeend",_(f[l])),l++}}function _(e){return`
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
        `}const N=new E(".accordion-container"),m=document.querySelector(".ac:first-child");m.style.backgroundColor="rgba(0, 176, 104, 0.2)";m.style.borderRadius="16px";N.open(0);let a=m;const O=document.querySelectorAll(".ac-trigger");O.forEach(e=>{e.addEventListener("click",()=>{const t=e.closest(".ac");a!==t&&(a.style.backgroundColor="",a.style.borderRadius=""),t.style.backgroundColor="rgba(0, 176, 104, 0.2)",t.style.borderRadius="16px",a=t})});const h=document.querySelector(".burger"),b=document.querySelector(".header-nav"),A=document.querySelectorAll(".nav-menu-item a"),u=document.querySelector(".header"),k=document.querySelector(".night-mode-checkbox");h.addEventListener("click",()=>{b.classList.toggle("active"),h.classList.toggle("active")});A.forEach(e=>{e.addEventListener("click",()=>{b.classList.remove("active")})});const y=localStorage.getItem("theme");y&&y==="dark"&&(u.classList.add("dark-mode"),k.checked=!0);k.addEventListener("change",e=>{e.target.checked?(u.classList.add("dark-mode"),localStorage.setItem("theme","dark")):(u.classList.remove("dark-mode"),localStorage.setItem("theme","light"))});async function T(){const i="https://portfolio-js.b.goit.study/api/reviews";try{return(await M.get(i)).data}catch(o){throw console.error("Error fetching data from API",o),o}}function C(e){return e.map(t=>`
        <div class="swiper-slide swiper-dark">
        <p class="text text-dark">${t.review}</p>
        <div class="author-container">
            <img src="${t.avatar_url}" alt="">
            <h3 class="author author-dark">${t.author}</h3>
        </div>
        </div>
    `).join("")}async function R(){try{const e=await T(),t=C(e),i=document.querySelector(".swiper-wrapper");i.innerHTML=t;const o=new q(".swiper-container",{loop:!1,navigation:{nextEl:".button-next",prevEl:".button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:1,spaceBetween:20},1280:{slidesPerView:2,spaceBetween:32}},centeredSlides:!1,slidesPerView:"auto",keyboard:{enabled:!0,onlyInViewport:!1}});o.on("slideChange",function(){v(o)}),v(o)}catch{iziToast.error({title:"Error",message:"Not found",position:"topRight"})}}function v(e){const{isBeginning:t,isEnd:i}=e,o=document.querySelector(".button-prev"),r=document.querySelector(".button-next"),s=document.querySelector(".icon-prev"),c=document.querySelector(".icon-next");t?(o.classList.add("swiper-button-disabled"),s.classList.add("swiper-icon-disabled")):(o.classList.remove("swiper-button-disabled"),s.classList.remove("swiper-icon-disabled")),i?(r.classList.add("swiper-button-disabled"),c.classList.add("swiper-icon-disabled")):(r.classList.remove("swiper-button-disabled"),c.classList.remove("swiper-icon-disabled"))}document.addEventListener("DOMContentLoaded",R);function V(){const e=document.querySelector(".work-together__form");e.addEventListener("submit",t);function t(i){i.preventDefault();const o=i.target.email.value,r=i.target.message.value,s="https://portfolio-js.b.goit.study/api/requests",c={email:o,comment:r},d=document.querySelector(".work-together__backdrop"),S=document.querySelector(".modal__close"),x=document.querySelector(".work-together__backdrop");fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then(n=>{if(!n.ok)throw new Error("Network response was not ok");return n.json()}).then(n=>{d.classList.add("active"),S.addEventListener("click",()=>{d.classList.remove("active")}),x.addEventListener("click",g=>{g.target===g.currentTarget&&d.classList.remove("active")}),e.reset()}).catch(n=>{I.error({title:"Error",message:n.message,backgroundColor:"#de4f69",iconColor:"#ffffff",messageColor:"#fff"})})}}V();const L=document.querySelector(".night-mode-checkbox"),p=document.querySelectorAll("section"),j=localStorage.getItem("theme");j&&j==="dark"&&(p.forEach(e=>{e.classList.add("dark-mode")}),L.checked=!0);L.addEventListener("change",e=>{e.target.checked?(p.forEach(t=>{t.classList.add("dark-mode")}),localStorage.setItem("theme","dark")):(p.forEach(t=>{t.classList.remove("dark-mode")}),localStorage.setItem("theme","light"))});
//# sourceMappingURL=commonHelpers.js.map

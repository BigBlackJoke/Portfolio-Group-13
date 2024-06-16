import{A as b,S as L,a as x,i as k}from"./assets/vendor-951662e8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const g=[{src:"./img/My-project/js-jpg/energy.jpg",retina:"./img/My-project/js-jpg/energy-2x.jpg",alt:"Energy Flow Webservice"},{src:"./img/My-project/js-jpg/fruitbox.jpg",retina:"./img/My-project/js-jpg/fruitbox-2x.jpg",alt:"fruitbox online store"},{src:"./img/My-project/js-jpg/jewelry.jpg",retina:"./img/My-project/js-jpg/jewelry-2x.jpg",alt:"chego jewelry website"},{src:"./img/My-project/js-jpg/mimino.jpg",retina:"./img/My-project/js-jpg/mimino-2x.jpg",alt:"mimino website"},{src:"./img/My-project/js-jpg/power.jpg",retina:"./img/My-project/js-jpg/power-2x.jpg",alt:"power pulse webservice"},{src:"./img/My-project/js-jpg/starlight.jpg",retina:"./img/My-project/js-jpg/starlight-2x.jpg",alt:"starlight studio landing page"},{src:"./img/My-project/js-jpg/vyshyvanka.jpg",retina:"./img/My-project/js-jpg/vyshyvanka-2x.jpg",alt:"vyshyvanka vibes Landing Page"}],y=document.querySelector(".load-more-btn"),S=document.querySelector(".image-list");let l=0;y.addEventListener("click",E);function E(){q()}function q(){for(let e=0;e<3;e++){if(l>=g.length){y.style.display="none";return}S.insertAdjacentHTML("beforeend",M(g[l])),l++}}function M(e){return`
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
        `}const I=new b(".accordion-container");I.open(0);let a=document.querySelector(".ac.is-open");const u=document.querySelector(".ac:first-child");u.classList.add("is-open");u.style.backgroundColor="rgba(0, 176, 104, 0.2)";u.style.borderRadius="16px";const $=document.querySelectorAll(".ac-trigger");$.forEach((e,o)=>{e.addEventListener("click",()=>{const t=e.closest(".ac");t.classList.contains("is-open")||(a&&!a.classList.contains("ac:first-child")&&(a.classList.remove("is-open"),a.style.backgroundColor="",a.style.borderRadius=""),a=t),t.classList.toggle("is-open"),t.classList.contains("is-open")?(t.style.backgroundColor="rgba(0, 176, 104, 0.2)",t.style.borderRadius="16px"):(t.style.backgroundColor="",t.style.borderRadius="")})});const m=document.querySelector(".burger"),j=document.querySelector(".header-nav"),P=document.querySelectorAll(".nav-menu-item a"),d=document.querySelector(".header"),v=document.querySelector(".night-mode-checkbox");m.addEventListener("click",()=>{j.classList.toggle("active"),m.classList.toggle("active")});P.forEach(e=>{e.addEventListener("click",()=>{j.classList.remove("active")})});const f=localStorage.getItem("theme");f&&f==="dark"&&(d.classList.add("dark-mode"),v.checked=!0);v.addEventListener("change",e=>{e.target.checked?(d.classList.add("dark-mode"),localStorage.setItem("theme","dark")):(d.classList.remove("dark-mode"),localStorage.setItem("theme","light"))});async function O(){const t="https://portfolio-js.b.goit.study/api/reviews";try{return(await x.get(t)).data}catch(i){throw console.error("Error fetching data from API",i),i}}function B(e){return e.map(o=>`
        <div class="swiper-slide swiper-dark">
        <p class="text text-dark">${o.review}</p>
        <div class="author-container">
            <img src="${o.avatar_url}" alt="">
            <h3 class="author author-dark">${o.author}</h3>
        </div>
        </div>
    `).join("")}async function C(){try{const e=await O(),o=B(e),t=document.querySelector(".swiper-wrapper");t.innerHTML=o;const i=new L(".swiper-container",{loop:!0,navigation:{nextEl:".button-next",prevEl:".button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:1,spaceBetween:20},1280:{slidesPerView:2,spaceBetween:32}},centeredSlides:!1,slidesPerView:"auto"});i.on("slideChange",function(){h(i)}),h(i)}catch(e){console.log(e)}}function h(e){const{isBeginning:o,isEnd:t}=e,i=document.querySelector(".button-prev"),s=document.querySelector(".button-next"),r=document.querySelector(".icon-prev"),n=document.querySelector(".icon-next");o?(i.classList.add("swiper-button-disabled"),r.classList.add("swiper-icon-disabled")):(i.classList.remove("swiper-button-disabled"),r.classList.remove("swiper-icon-disabled")),t?(s.classList.add("swiper-button-disabled"),n.classList.add("swiper-icon-disabled")):(s.classList.remove("swiper-button-disabled"),n.classList.remove("swiper-icon-disabled"))}document.addEventListener("DOMContentLoaded",C);function N(){const e=document.querySelector(".work-together__form");e.addEventListener("submit",o);function o(t){t.preventDefault();const i=t.target.email.value,s=t.target.message.value,r="https://portfolio-js.b.goit.study/api/requests",n={email:i,comment:s},p=document.querySelector(".work-together__backdrop"),w=document.querySelector(".modal__close");fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(c=>{if(!c.ok)throw console.log(c.statusText),new Error("Network response was not ok");return c.json()}).then(c=>{p.classList.add("active"),w.addEventListener("click",()=>{p.classList.remove("active")}),e.reset()}).catch(c=>{k.error({title:"Error",message:c.message,backgroundColor:"#de4f69",iconColor:"#ffffff",messageColor:"#fff"})})}}N();
//# sourceMappingURL=commonHelpers.js.map

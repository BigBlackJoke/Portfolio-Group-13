import{A as k,S as x,a as S,i as E}from"./assets/vendor-951662e8.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();const m=[{src:"./img/My-project/js-jpg/energy.jpg",retina:"./img/My-project/js-jpg/energy-2x.jpg",alt:"Energy Flow Webservice"},{src:"./img/My-project/js-jpg/fruitbox.jpg",retina:"./img/My-project/js-jpg/fruitbox-2x.jpg",alt:"fruitbox online store"},{src:"./img/My-project/js-jpg/jewelry.jpg",retina:"./img/My-project/js-jpg/jewelry-2x.jpg",alt:"chego jewelry website"},{src:"./img/My-project/js-jpg/mimino.jpg",retina:"./img/My-project/js-jpg/mimino-2x.jpg",alt:"mimino website"},{src:"./img/My-project/js-jpg/power.jpg",retina:"./img/My-project/js-jpg/power-2x.jpg",alt:"power pulse webservice"},{src:"./img/My-project/js-jpg/starlight.jpg",retina:"./img/My-project/js-jpg/starlight-2x.jpg",alt:"starlight studio landing page"},{src:"./img/My-project/js-jpg/vyshyvanka.jpg",retina:"./img/My-project/js-jpg/vyshyvanka-2x.jpg",alt:"vyshyvanka vibes Landing Page"}],j=document.querySelector(".load-more-btn"),q=document.querySelector(".image-list");let d=0;j.addEventListener("click",M);function M(){I()}function I(){for(let e=0;e<3;e++){if(d>=m.length){j.style.display="none";return}q.insertAdjacentHTML("beforeend",$(m[d])),d++}}function $(e){return`
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
        `}const P=new k(".accordion-container");P.open(0);let n=document.querySelector(".ac.is-open");const u=document.querySelector(".ac:first-child");u.classList.add("is-open");u.style.backgroundColor="rgba(0, 176, 104, 0.2)";u.style.borderRadius="16px";const _=document.querySelectorAll(".ac-trigger");_.forEach((e,o)=>{e.addEventListener("click",()=>{const t=e.closest(".ac");t.classList.contains("is-open")||(n&&!n.classList.contains("ac:first-child")&&(n.classList.remove("is-open"),n.style.backgroundColor="",n.style.borderRadius=""),n=t),t.classList.toggle("is-open"),t.classList.contains("is-open")?(t.style.backgroundColor="rgba(0, 176, 104, 0.2)",t.style.borderRadius="16px"):(t.style.backgroundColor="",t.style.borderRadius="")})});const f=document.querySelector(".burger"),v=document.querySelector(".header-nav"),B=document.querySelectorAll(".nav-menu-item a"),p=document.querySelector(".header"),w=document.querySelector(".night-mode-checkbox");f.addEventListener("click",()=>{v.classList.toggle("active"),f.classList.toggle("active")});B.forEach(e=>{e.addEventListener("click",()=>{v.classList.remove("active")})});const h=localStorage.getItem("theme");h&&h==="dark"&&(p.classList.add("dark-mode"),w.checked=!0);w.addEventListener("change",e=>{e.target.checked?(p.classList.add("dark-mode"),localStorage.setItem("theme","dark")):(p.classList.remove("dark-mode"),localStorage.setItem("theme","light"))});async function O(){const t="https://portfolio-js.b.goit.study/api/reviews";try{return(await S.get(t)).data}catch(i){throw console.error("Error fetching data from API",i),i}}function C(e){return e.map(o=>`
        <div class="swiper-slide swiper-dark">
        <p class="text text-dark">${o.review}</p>
        <div class="author-container">
            <img src="${o.avatar_url}" alt="">
            <h3 class="author author-dark">${o.author}</h3>
        </div>
        </div>
    `).join("")}async function N(){try{const e=await O(),o=C(e),t=document.querySelector(".swiper-wrapper");t.innerHTML=o;const i=new x(".swiper-container",{loop:!0,navigation:{nextEl:".button-next",prevEl:".button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:1,spaceBetween:20},1280:{slidesPerView:2,spaceBetween:32}},centeredSlides:!1,slidesPerView:"auto"});i.on("slideChange",function(){y(i)}),y(i)}catch(e){console.log(e)}}function y(e){const{isBeginning:o,isEnd:t}=e,i=document.querySelector(".button-prev"),s=document.querySelector(".button-next"),r=document.querySelector(".icon-prev"),c=document.querySelector(".icon-next");o?(i.classList.add("swiper-button-disabled"),r.classList.add("swiper-icon-disabled")):(i.classList.remove("swiper-button-disabled"),r.classList.remove("swiper-icon-disabled")),t?(s.classList.add("swiper-button-disabled"),c.classList.add("swiper-icon-disabled")):(s.classList.remove("swiper-button-disabled"),c.classList.remove("swiper-icon-disabled"))}document.addEventListener("DOMContentLoaded",N);function A(){const e=document.querySelector(".work-together__form");e.addEventListener("submit",o);function o(t){t.preventDefault();const i=t.target.email.value,s=t.target.message.value,r="https://portfolio-js.b.goit.study/api/requests",c={email:i,comment:s},l=document.querySelector(".work-together__backdrop"),b=document.querySelector(".modal__close"),L=document.querySelector(".work-together__backdrop");fetch(r,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).then(a=>{if(!a.ok)throw new Error("Network response was not ok");return a.json()}).then(a=>{l.classList.add("active"),b.addEventListener("click",()=>{l.classList.remove("active")}),L.addEventListener("click",g=>{g.target===g.currentTarget&&l.classList.remove("active")}),e.reset()}).catch(a=>{E.error({title:"Error",message:a.message,backgroundColor:"#de4f69",iconColor:"#ffffff",messageColor:"#fff"})})}}A();
//# sourceMappingURL=commonHelpers.js.map

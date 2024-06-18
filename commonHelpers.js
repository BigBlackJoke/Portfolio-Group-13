import{A as E,S as P,a as j,i as q}from"./assets/vendor-951662e8.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function i(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(o){if(o.ep)return;o.ep=!0;const s=i(o);fetch(o.href,s)}})();const I="/Portfolio-Group-13/assets/energy-1dd075ef.jpg",G="/Portfolio-Group-13/assets/energy-2x-0b723d78.jpg",R="/Portfolio-Group-13/assets/fruitbox-3666c205.jpg",B="/Portfolio-Group-13/assets/fruitbox-2x-5983be8c.jpg",_="/Portfolio-Group-13/assets/jewelry-b69487e0.jpg",N="/Portfolio-Group-13/assets/jewelry-2x-2129e382.jpg",O="/Portfolio-Group-13/assets/mimino-fa2c5b59.jpg",A="/Portfolio-Group-13/assets/mimino-2x-32e1b76a.jpg",T="/Portfolio-Group-13/assets/power-2d59559c.jpg",C="/Portfolio-Group-13/assets/power-2x-fe48c942.jpg",M="/Portfolio-Group-13/assets/starlight-690dd13b.jpg",V="/Portfolio-Group-13/assets/starlight-2x-11132803.jpg",D="/Portfolio-Group-13/assets/vyshyvanka-3183c7ab.jpg",F="/Portfolio-Group-13/assets/vyshyvanka-2x-028b95ab.jpg",f=[{src:`${I}`,retina:`${G}`,alt:"Energy Flow Webservice"},{src:`${R}`,retina:`${B}`,alt:"fruitbox online store"},{src:`${_}`,retina:`${N}`,alt:"chego jewelry website"},{src:`${O}`,retina:`${A}`,alt:"mimino website"},{src:`${T}`,retina:`${C}`,alt:"power pulse webservice"},{src:`${M}`,retina:`${V}`,alt:"starlight studio landing page"},{src:`${D}`,retina:`${F}`,alt:"vyshyvanka vibes Landing Page"}],w=document.querySelector(".load-more-btn"),J=document.querySelector(".image-list");let d=0;w.addEventListener("click",z);function z(){H()}function H(){for(let e=0;e<3;e++){if(d>=f.length){w.style.display="none";return}J.insertAdjacentHTML("beforeend",U(f[d])),d++}}function U(e){return`
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
          <a class="visit-link" href="javascript:void(0);">
            Visit
            <svg width="24" height="24">
              <use href="./img/symbol-defs.svg#icon-visit"></use>
            </svg>
          </a>
        </div>
      </li>
        `}const W=new E(".accordion-container"),m=document.querySelector(".ac:first-child");m.style.backgroundColor="rgba(0, 176, 104, 0.2)";m.style.borderRadius="16px";W.open(0);let c=m;const K=document.querySelectorAll(".ac-trigger");K.forEach(e=>{e.addEventListener("click",()=>{const t=e.closest(".ac");c!==t&&(c.style.backgroundColor="",c.style.borderRadius=""),t.style.backgroundColor="rgba(0, 176, 104, 0.2)",t.style.borderRadius="16px",c=t})});const h=document.querySelector(".burger"),k=document.querySelector(".header-nav"),Q=document.querySelectorAll(".nav-menu-item a"),u=document.querySelector(".header"),L=document.querySelector(".night-mode-checkbox");h.addEventListener("click",()=>{k.classList.toggle("active"),h.classList.toggle("active")});Q.forEach(e=>{e.addEventListener("click",()=>{k.classList.remove("active")})});const v=localStorage.getItem("theme");v&&v==="dark"&&(u.classList.add("dark-mode"),L.checked=!0);L.addEventListener("change",e=>{e.target.checked?(u.classList.add("dark-mode"),localStorage.setItem("theme","dark")):(u.classList.remove("dark-mode"),localStorage.setItem("theme","light"))});async function X(){const i="https://portfolio-js.b.goit.study/api/reviews";try{return(await j.get(i)).data}catch(r){throw console.error("Error fetching data from API",r),r}}function Y(e){return e.map(t=>`
        <div class="swiper-slide swiper-dark">
        <p class="text text-dark">${t.review}</p>
        <div class="author-container">
            <img src="${t.avatar_url}" alt="">
            <h3 class="author author-dark">${t.author}</h3>
        </div>
        </div>
    `).join("")}async function Z(){try{const e=await X(),t=Y(e),i=document.querySelector(".swiper-wrapper");i.innerHTML=t;const r=new P(".swiper-container",{loop:!1,navigation:{nextEl:".button-next",prevEl:".button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:1,spaceBetween:20},1280:{slidesPerView:2,spaceBetween:32}},centeredSlides:!1,slidesPerView:"auto",keyboard:{enabled:!0,onlyInViewport:!1}});r.on("slideChange",function(){b(r)}),b(r)}catch{iziToast.error({title:"Error",message:"Not found",position:"topRight"})}}function b(e){const{isBeginning:t,isEnd:i}=e,r=document.querySelector(".button-prev"),o=document.querySelector(".button-next"),s=document.querySelector(".icon-prev"),n=document.querySelector(".icon-next");t?(r.classList.add("swiper-button-disabled"),s.classList.add("swiper-icon-disabled")):(r.classList.remove("swiper-button-disabled"),s.classList.remove("swiper-icon-disabled")),i?(o.classList.add("swiper-button-disabled"),n.classList.add("swiper-icon-disabled")):(o.classList.remove("swiper-button-disabled"),n.classList.remove("swiper-icon-disabled"))}document.addEventListener("DOMContentLoaded",Z);function ee(){const e=document.querySelector(".work-together__form");e.addEventListener("submit",t);function t(i){i.preventDefault();const r=i.target.email.value,o=i.target.message.value,s="https://portfolio-js.b.goit.study/api/requests",n={email:r,comment:o},l=document.querySelector(".work-together__backdrop"),x=document.querySelector(".modal__close"),$=document.querySelector(".work-together__backdrop");fetch(s,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(a=>{if(!a.ok)throw new Error("Network response was not ok");return a.json()}).then(a=>{l.classList.add("active"),x.addEventListener("click",()=>{l.classList.remove("active")}),$.addEventListener("click",g=>{g.target===g.currentTarget&&l.classList.remove("active")}),e.reset()}).catch(a=>{q.error({title:"Error",message:a.message,backgroundColor:"#de4f69",iconColor:"#ffffff",messageColor:"#fff"})})}}ee();const S=document.querySelector(".night-mode-checkbox"),p=document.querySelectorAll("section"),y=localStorage.getItem("theme");y&&y==="dark"&&(p.forEach(e=>{e.classList.add("dark-mode")}),S.checked=!0);S.addEventListener("change",e=>{e.target.checked?(p.forEach(t=>{t.classList.add("dark-mode")}),localStorage.setItem("theme","dark")):(p.forEach(t=>{t.classList.remove("dark-mode")}),localStorage.setItem("theme","light"))});
//# sourceMappingURL=commonHelpers.js.map

import{A as w,S as b,a as L}from"./assets/vendor-b2203cf7.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const g=[{src:"./img/My-project/js-jpg/energy.jpg",retina:"./img/My-project/js-jpg/energy-2x.jpg",alt:"Energy Flow Webservice"},{src:"./img/My-project/js-jpg/fruitbox.jpg",retina:"./img/My-project/js-jpg/fruitbox-2x.jpg",alt:"fruitbox online store"},{src:"./img/My-project/js-jpg/jewelry.jpg",retina:"./img/My-project/js-jpg/jewelry-2x.jpg",alt:"chego jewelry website"},{src:"./img/My-project/js-jpg/mimino.jpg",retina:"./img/My-project/js-jpg/mimino-2x.jpg",alt:"mimino website"},{src:"./img/My-project/js-jpg/power.jpg",retina:"./img/My-project/js-jpg/power-2x.jpg",alt:"power pulse webservice"},{src:"./img/My-project/js-jpg/starlight.jpg",retina:"./img/My-project/js-jpg/starlight-2x.jpg",alt:"starlight studio landing page"},{src:"./img/My-project/js-jpg/vyshyvanka.jpg",retina:"./img/My-project/js-jpg/vyshyvanka-2x.jpg",alt:"vyshyvanka vibes Landing Page"}],y=document.querySelector(".load-more-btn"),x=document.querySelector(".image-list");let l=0;y.addEventListener("click",S);function S(){k()}function k(){for(let e=0;e<3;e++){if(l>=g.length){y.style.display="none";return}x.insertAdjacentHTML("beforeend",E(g[l])),l++}}function E(e){return`
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
        `}const M=new w(".accordion-container");M.open(0);let a=document.querySelector(".ac.is-open");const u=document.querySelector(".ac:first-child");u.classList.add("is-open");u.style.backgroundColor="rgba(0, 176, 104, 0.2)";u.style.borderRadius="16px";const q=document.querySelectorAll(".ac-trigger");q.forEach((e,i)=>{e.addEventListener("click",()=>{const s=e.closest(".ac");s.classList.contains("is-open")||(a&&!a.classList.contains("ac:first-child")&&(a.classList.remove("is-open"),a.style.backgroundColor="",a.style.borderRadius=""),a=s),s.classList.toggle("is-open"),s.classList.contains("is-open")?(s.style.backgroundColor="rgba(0, 176, 104, 0.2)",s.style.borderRadius="16px"):(s.style.backgroundColor="",s.style.borderRadius="")})});const m=document.querySelector(".burger"),j=document.querySelector(".header-nav"),I=document.querySelectorAll(".nav-menu-item a"),d=document.querySelector(".header"),v=document.querySelector(".night-mode-checkbox");m.addEventListener("click",()=>{j.classList.toggle("active"),m.classList.toggle("active")});I.forEach(e=>{e.addEventListener("click",()=>{j.classList.remove("active")})});const f=localStorage.getItem("theme");f&&f==="dark"&&(d.classList.add("dark-mode"),v.checked=!0);v.addEventListener("change",e=>{e.target.checked?(d.classList.add("dark-mode"),localStorage.setItem("theme","dark")):(d.classList.remove("dark-mode"),localStorage.setItem("theme","light"))});async function $(){const s="https://portfolio-js.b.goit.study/api/reviews";try{return(await L.get(s)).data}catch(o){throw console.error("Error fetching data from API",o),o}}function P(e){return e.map(i=>`
        <div class="swiper-slide swiper-dark">
        <p class="text text-dark">${i.review}</p>
        <div class="author-container">
            <img src="${i.avatar_url}" alt="">
            <h3 class="author author-dark">${i.author}</h3>
        </div>
        </div>
    `).join("")}async function O(){try{const e=await $(),i=P(e),s=document.querySelector(".swiper-wrapper");s.innerHTML=i;const o=new b(".swiper-container",{loop:!0,navigation:{nextEl:".button-next",prevEl:".button-prev"},breakpoints:{320:{slidesPerView:1,spaceBetween:10},768:{slidesPerView:1,spaceBetween:20},1280:{slidesPerView:2,spaceBetween:32}},centeredSlides:!1,slidesPerView:"auto"});o.on("slideChange",function(){h(o)}),h(o)}catch(e){console.log(e)}}function h(e){const{isBeginning:i,isEnd:s}=e,o=document.querySelector(".button-prev"),t=document.querySelector(".button-next"),r=document.querySelector(".icon-prev"),c=document.querySelector(".icon-next");i?(o.classList.add("swiper-button-disabled"),r.classList.add("swiper-icon-disabled")):(o.classList.remove("swiper-button-disabled"),r.classList.remove("swiper-icon-disabled")),s?(t.classList.add("swiper-button-disabled"),c.classList.add("swiper-icon-disabled")):(t.classList.remove("swiper-button-disabled"),c.classList.remove("swiper-icon-disabled"))}document.addEventListener("DOMContentLoaded",O);function N(){console.log("Form initialisation");const e=document.querySelector(".work-together__form");e.addEventListener("submit",i);function i(o){o.preventDefault();const t=o.target.email.value,r=o.target.message.value,c="https://portfolio-js.b.goit.study/api/requests",p={email:t,message:r};console.log(p),fetch(c,{method:"POST",body:JSON.stringify(p)}).then(n=>{if(console.table("response",n),!n.ok)throw console.log(n.statusText),new Error("Network response was not ok");return n.json()}).then(n=>{console.log(n),s("Request created successfully!"),e.reset()}).catch(n=>{console.log("Error:",n),s(n)})}function s(o){alert(o)}}N();
//# sourceMappingURL=commonHelpers.js.map

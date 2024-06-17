import energy from '../img/My-project/js-jpg/energy.jpg'
import energyRetina from "../img/My-project/js-jpg/energy-2x.jpg"
import fruitbox from "../img/My-project/js-jpg/fruitbox.jpg"
import fruitboxRetina from "../img/My-project/js-jpg/fruitbox-2x.jpg"
import jewelry from "../img/My-project/js-jpg/jewelry.jpg"
import jewelryRetina from "../img/My-project/js-jpg/jewelry-2x.jpg"
import mimino from "../img/My-project/js-jpg/mimino.jpg"
import miminoRetina from "../img/My-project/js-jpg/mimino-2x.jpg"
import power from "../img/My-project/js-jpg/power.jpg"
import powerRetina from "../img/My-project/js-jpg/power-2x.jpg"
import starlight from "../img/My-project/js-jpg/starlight.jpg"
import starlightRetina from "../img/My-project/js-jpg/starlight-2x.jpg"
import vyshyvanka from "../img/My-project/js-jpg/vyshyvanka.jpg"
import vyshyvankaRetina from "../img/My-project/js-jpg/vyshyvanka-2x.jpg"



const arr = [
    {
        src: `${energy}`,
        retina: `${energyRetina}`,
        alt: "Energy Flow Webservice"
    },
    {
        src: `${fruitbox}`,
        retina: `${fruitboxRetina}`,
        alt: "fruitbox online store"
    },
    {
        src: `${jewelry}`,
        retina: `${jewelryRetina}`,
        alt: "chego jewelry website"
    },
    {
        src: `${mimino}`,
        retina: `${miminoRetina}`,
        alt: "mimino website"
    },
    {
        src: `${power}`,
        retina: `${powerRetina}`,
        alt: "power pulse webservice"
    },
    {
        src: `${starlight}`,
        retina: `${starlightRetina}`,
        alt: "starlight studio landing page"
    },
    {
        src: `${vyshyvanka}`,
        retina: `${vyshyvankaRetina}`,
        alt: "vyshyvanka vibes Landing Page"
    },
]

const btn = document.querySelector(".load-more-btn");
const imageList = document.querySelector(".image-list");

let index = 0;

btn.addEventListener("click", handleClick); 

function handleClick() {
    loadImages();
}

function loadImages () {
    for (let i = 0; i < 3; i++) {
        if (index >= arr.length) {
            btn.style.display = "none";
            return;
        }
        imageList.insertAdjacentHTML("beforeend", renderImage(arr[index]))
        index++;
    }
    

}

function renderImage(array) {
    return `
            <li class="image-item">
        
          <picture>
            <source
              media="(min-width: 1280px)"
              srcset="
                ${array.src} 1x,
                ${array.retina} 2x
              "
            />
            <source
              media="(min-width: 768px)"
              srcset="
                ${array.src} 1x,
                ${array.retina} 2x
              "
            />
            <source
              media="(max-width: 767px)"
              srcset="
                ${array.src} 1x,
                ${array.retina} 2x
              "
            />
            <img
              src="${array.src}"
              alt="${array.alt}"
              width="1008"
              height="578"
              class="img"
            />
          </picture>
        
        <p class="technologies">React, JavaScript, Node JS, Git</p>
        <div class="link-wrapper">
          <p class="img-naming">${array.alt}</p>
          <a class="visit-link" href="javascript:void(0);">
            Visit
            <svg width="24" height="24">
              <use href="./img/symbol-defs.svg#icon-visit"></use>
            </svg>
          </a>
        </div>
      </li>
        `
}
// const arr = [
//     {
//         src: "../img/My-project/js-jpg/energy.jpg",
//         retina: "../img/My-project/js-jpg/energy-2x.jpg",
//         alt: "Energy Flow Webservice"
//     },
//     {
//         src: "../img/My-project/js-jpg/fruitbox.jpg",
//         retina: "../img/My-project/js-jpg/fruitbox-2x.jpg",
//         alt: "fruitbox online store"
//     },
//     {
//         src: "../img/My-project/js-jpg/jewelry.jpg",
//         retina: "../img/My-project/js-jpg/jewelry-2x.jpg",
//         alt: "chego jewelry website"
//     },
//     {
//         src: "../img/My-project/js-jpg/mimino.jpg",
//         retina: "../img/My-project/js-jpg/mimino-2x.jpg",
//         alt: "mimino website"
//     },
//     {
//         src: "../img/My-project/js-jpg/power.jpg",
//         retina: "../img/My-project/js-jpg/power-2x.jpg",
//         alt: "power pulse webservice"
//     },
//     {
//         src: "../img/My-project/js-jpg/starlight.jpg",
//         retina: "../img/My-project/js-jpg/starlight-2x.jpg",
//         alt: "starlight studio landing page"
//     },
//     {
//         src: "../img/My-project/js-jpg/vyshyvanka.jpg",
//         retina: "../img/My-project/js-jpg/vyshyvanka-2x.jpg",
//         alt: "vyshyvanka vibes Landing Page"
//     },
// ]

// const btn = document.querySelector(".load-more-btn");
// const imageList = document.querySelector(".image-list");

// let index = 0;

// btn.addEventListener("click", handleClick); 

// function handleClick() {
//     loadImages();
// }

// function loadImages () {
//     for (let i = 0; i < 3; i++) {
//         if (index >= arr.length) {
//             btn.style.display = "none";
//             return;
//         }
//         imageList.insertAdjacentHTML("beforeend", renderImage(arr[index]))
//         index++;
//     }
    

// }

// function renderImage(array) {
//     return `
//             <li class="image-item">
        
//           <picture>
//             <source
//               media="(min-width: 1280px)"
//               srcset="
//                 ${array.src} 1x,
//                 ${array.retina} 2x
//               "
//             />
//             <source
//               media="(min-width: 768px)"
//               srcset="
//                 ${array.src} 1x,
//                 ${array.retina} 2x
//               "
//             />
//             <source
//               media="(max-width: 767px)"
//               srcset="
//                 ${array.src} 1x,
//                 ${array.retina} 2x
//               "
//             />
//             <img
//               src="${array.src}"
//               alt="${array.alt}"
//               width="1008"
//               height="578"
//               class="img"
//             />
//           </picture>
        
//         <p class="technologies">React, JavaScript, Node JS, Git</p>
//         <div class="link-wrapper">
//           <p class="img-naming">${array.alt}</p>
//           <a class="visit-link" href="">
//             Visit
//             <svg class="visit-icon" width="24" height="24">
//               <use href="../img/symbol-defs.svg#visit-icon"></use>
//             </svg>
//           </a>
//         </div>
//       </li>
//         `
// }
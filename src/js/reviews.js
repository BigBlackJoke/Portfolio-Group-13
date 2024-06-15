import axios from 'axios';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

async function getApi() {
    const BASE_URL = 'https://portfolio-js.b.goit.study/api';
    const END_POINT = '/reviews';
    const url = `${BASE_URL}${END_POINT}`;
    try {
    const response = await axios.get(url);
    return response.data; 
    } catch (error) {
    console.error('Error fetching data from API', error);
    throw error;
    }
}


function createMarkup(data) {
    return data.map(el => 
    `
        <div class="swiper-slide swiper-dark">
        <p class="text text-dark">${el.review}</p>
        <div class="author-container">
            <img src="${el.avatar_url}" alt="">
            <h3 class="author author-dark">${el.author}</h3>
        </div>
        </div>
    `
    ).join('');
}

async function initSwiper() {
    try {
    const data = await getApi();
    const markup = createMarkup(data);
    
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.innerHTML = markup;
    
    new Swiper('.swiper-container', {
        loop: true,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    // pagination: {
    //     el: '.swiper-pagination',
    //     clickable: true,
    // },
    breakpoints: {
        320: { 
        slidesPerView: 1,
        spaceBetween: 10
        },
        768: { 
        slidesPerView: 1,
        spaceBetween: 20
        },
        1280: { 
        slidesPerView: 2,
        spaceBetween: 32
        }
    },
    centeredSlides: false, 
    slidesPerView: 'auto', 
    });

    swiper.on('slideChange', function () {
        updateNavigationButtons(swiper);
    });

    updateNavigationButtons(swiper);
    } catch (error) {
        console.error(error);
    }
}

function updateNavigationButtons(swiper) {
    const { isBeginning, isEnd } = swiper;
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');
    
    if (isBeginning) {
    prevButton.classList.add('swiper-button-disabled');
    } else {
    prevButton.classList.remove('swiper-button-disabled');
    }
    
    if (isEnd) {
    nextButton.classList.add('swiper-button-disabled');
    } else {
    nextButton.classList.remove('swiper-button-disabled');
    }
}

document.addEventListener('DOMContentLoaded', initSwiper);
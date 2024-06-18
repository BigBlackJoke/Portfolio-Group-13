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
    const swiper = new Swiper('.swiper-container', {
        loop: false,
        navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
        },
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
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    });
    swiper.on('slideChange', function () {
        updateNavigationButtons(swiper);
    });
    updateNavigationButtons(swiper);
    } catch (error) {
        iziToast.error({
            title: 'Error',
            message: 'Not found',
            position: 'topRight'
        });
    }
}
function updateNavigationButtons(swiper) {
    const { isBeginning, isEnd } = swiper;
    const prevButton = document.querySelector('.button-prev');
    const nextButton = document.querySelector('.button-next');
    const prevIcon = document.querySelector('.icon-prev');
    const nextIcon = document.querySelector('.icon-next');
    const prevButtonDark = document.querySelector('.prev-dark-btn');
    const nextButtonDark = document.querySelector('.next-dark-btn');
    const prevIconDark = document.querySelector('.prev-dark');
    const nextIconDark = document.querySelector('.next-dark');
    if (isBeginning) {
    prevButton.classList.add('swiper-button-disabled');
    prevIcon.classList.add('swiper-icon-disabled');
    prevButtonDark.classList.add('swiper-button-disabled-dark');
    prevIconDark.classList.add('swiper-icon-disabled-dark');
    } else {
    prevButton.classList.remove('swiper-button-disabled');
    prevIcon.classList.remove('swiper-icon-disabled');
    prevButtonDark.classList.remove('swiper-button-disabled-dark');
    prevIconDark.classList.remove('swiper-icon-disabled-dark');
    }
    if (isEnd) {
    nextButton.classList.add('swiper-button-disabled');
    nextIcon.classList.add('swiper-icon-disabled');
    nextButtonDark.classList.add('swiper-button-disabled-dark');
    nextIconDark.classList.add('swiper-icon-disabled-dark');
    } else {
    nextButton.classList.remove('swiper-button-disabled');
    nextIcon.classList.remove('swiper-icon-disabled');
    nextButtonDark.classList.remove('swiper-button-disabled-dark');
    nextIconDark.classList.remove('swiper-icon-disabled-dark');
    }
}
document.addEventListener('DOMContentLoaded', initSwiper);
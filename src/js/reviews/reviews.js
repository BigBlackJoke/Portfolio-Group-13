import Swiper from 'swiper';
import { Navigation, Keyboard, Mousewheel } from 'swiper/modules';

import { getReview } from "./reviews-api";
import { reviewtTamplate } from "./reviews-render";

// Ініціалізація Swiper з використанням потрібних модулів
Swiper.use([Navigation, Keyboard, Mousewheel]);

document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
    slidesPerView: 1, //Початкове значення для mob and tab
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    mousewheel: {
        invert: false,
    },
    on: {
        reachEnd: function() {
        document.querySelector('.swiper-button-next').classList.add('swiper-button-disabled');
        },
        reachBeginning: function() {
        document.querySelector('.swiper-button-prev').classList.add('swiper-button-disabled');
        },
        fromEdge: function() {
        document.querySelector('.swiper-button-next').classList.remove('swiper-button-disabled');
        document.querySelector('.swiper-button-prev').classList.remove('swiper-button-disabled');
        }
    }
    });

    function updateSlider() {
        const width = window.innerWidth;
        let newSlidesPerView;
        if(width >= 1280 ){
            newSlidesPerView = 2;
        }
    }
});

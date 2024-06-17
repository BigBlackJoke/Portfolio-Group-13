import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.accordion-container');

const firstItem = document.querySelector('.ac:first-child');

firstItem.style.backgroundColor = 'rgba(0, 176, 104, 0.2)';
firstItem.style.borderRadius = '16px';

accordion.open(0);

let lastOpenedItem = firstItem;

const btnEl = document.querySelectorAll('.ac-trigger');
btnEl.forEach(element => {
    element.addEventListener('click', () => {
        const currentItem = element.closest('.ac');

        if (lastOpenedItem !== currentItem) {
            lastOpenedItem.style.backgroundColor = '';
            lastOpenedItem.style.borderRadius = '';
        }

        currentItem.style.backgroundColor = 'rgba(0, 176, 104, 0.2)';
        currentItem.style.borderRadius = '16px'; 

        lastOpenedItem = currentItem;
    });
});


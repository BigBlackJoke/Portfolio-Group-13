import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordion = new Accordion('.accordion-container');
accordion.open(0); 

let lastOpenedItem = document.querySelector('.ac.is-open');

const firstItem = document.querySelector('.ac:first-child');
firstItem.classList.add('is-open');
firstItem.style.backgroundColor = 'rgba(0, 176, 104, 0.2)'; 
firstItem.style.borderRadius = '16px';

const btnEl = document.querySelectorAll('.ac-trigger');
btnEl.forEach((element, index) => {
    element.addEventListener('click', () => {
        const currentItem = element.closest('.ac');

        if (!currentItem.classList.contains('is-open')) {
            if (lastOpenedItem && !lastOpenedItem.classList.contains('ac:first-child')) {
                lastOpenedItem.classList.remove('is-open');
                lastOpenedItem.style.backgroundColor = '';
                lastOpenedItem.style.borderRadius = '';
            }
            lastOpenedItem = currentItem;
        }

        currentItem.classList.toggle('is-open');
        if (currentItem.classList.contains('is-open')) {
            currentItem.style.backgroundColor = 'rgba(0, 176, 104, 0.2)';
            currentItem.style.borderRadius = '16px'; 
        } else {
            currentItem.style.backgroundColor = '';
            currentItem.style.borderRadius = ''
            
        }
    });
});

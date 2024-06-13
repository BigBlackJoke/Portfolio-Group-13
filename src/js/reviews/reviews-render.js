export { reviewtTamplate };
// ---------------------------------------

function createMarkup( review, avatar_url, author){
    return`
    <li class="swiper-slide">
    <p class="swiper-text">${review}</p>
    <img class="swiper-img" src="${avatar_url}"/>
    <h3 class="swiper-name">${author}</h3>
    </li>
    `;
}

function reviewtTamplate(arr){
    return arr.map(createMarkup).join('');
}
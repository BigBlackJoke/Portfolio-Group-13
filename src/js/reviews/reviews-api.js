export { getReview }
// -----------------------------------

async function getReview(){
    const BASE_URL = 'https://portfolio-js.b.goit.study/api';
    const END_POINT = '/reviews';
    const url = `${BASE_URL}${END_POINT}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
        } catch (error) {
        console.error('Error fetching reviews:', error);
        throw error;
        }


//     return fetch(url).then(res => res.json())
// .then(data => {
//     console.log(data);
// })
}

// getReview();


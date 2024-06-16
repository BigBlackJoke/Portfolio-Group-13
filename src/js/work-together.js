import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
export function handleForm() {
  const contactForm = document.querySelector(".work-together__form");
  contactForm.addEventListener("submit", handleSubmit);
  function handleSubmit(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const message = event.target.message.value;
    const url = "https://portfolio-js.b.goit.study/api/requests";
    const requestData = {
      email: email,
      comment: message,
    };
    const modal = document.querySelector('.work-together__backdrop');
    const closeModalBtn = document.querySelector('.modal__close');
    fetch(url, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (!response.ok) {
          console.log(response.statusText);
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        modal.classList.add('active');
        closeModalBtn.addEventListener('click', () => {
          modal.classList.remove('active');
        });
        contactForm.reset();
      })
      .catch((error) => {
        iziToast.error({
          title: 'Error',
          message: error.message,
          backgroundColor: '#de4f69',
          iconColor: '#ffffff',
          messageColor: '#fff',
        });
      });
  }
}
handleForm();
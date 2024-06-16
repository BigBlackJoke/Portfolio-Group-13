export const tester = 'Ok';

export function handleForm() {
  console.log('Form initialisation');

  const contactForm = document.querySelector(".work-together__form");

  contactForm.addEventListener("submit", handleSubmit);

  function handleSubmit(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const message = event.target.message.value;
    const url = "https://portfolio-js.b.goit.study/api/requests";
    const requestData = {
      email: email,
      message: message,
    };
    console.log(requestData);

    fetch(url, {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/json",
      // },
      body: JSON.stringify(requestData),
      // body: {
      //   "email": "tototo@gmail.com",
      //   "comment": "User's comment"
      // },
    })
      .then((response) => {
        console.table("response", response);
        if (!response.ok) {
          console.log(response.statusText);
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);

        showModal("Request created successfully!");

        contactForm.reset();
      })
      .catch((error) => {
        console.log("Error:", error);
        showModal(error);
      });
  }

  function showModal(message) {
    alert(message);
  }
}

handleForm();
const form = document.querySelector('.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea');
const formData = {
  email: '',
  message: '',
};

const savedData = localStorage.getItem("feedback-form-state");
const parseDate = JSON.parse(savedData);
console.log(parseDate);

if (savedData) {
    email.value = parseDate.email;
    message.value = parseDate.message;
    formData.email = parseDate.email;
    formData.message = parseDate.message;
}


form.addEventListener("input", event => {
    event.preventDefault();
    if (event.target.name === "email") {
        formData.email = event.target.value;
    } else {
        formData.message = event.target.value;
    }

    const value = JSON.stringify(formData);
    localStorage.setItem("feedback-form-state", value); 
});

form.addEventListener('submit', event => {
    event.preventDefault();

    if (email.value.trim() && message.value.trim()) {
        console.log(formData);
        localStorage.removeItem("feedback-form-state");
        form.reset(); 
        formData.email = '';
        formData.message = '';
    } else {
        alert("Fill please all fields");
    }
});

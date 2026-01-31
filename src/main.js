import './style.css';
// import {build} from "vite";

const submitButton = document.querySelector('.btn-submit-js');
const emailInput = document.querySelector('.email-input-js');
const form = document.querySelector('.form-js');
const isLargeScreen = window.matchMedia('(min-width: 768px)');
const errorMessageMobile = document.querySelector('.error-text-mobile-js');
const errorMessageDesktop = document.querySelector('.error-text-desktop-js');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});


function checkInputs() {

    const email = emailInput.value.trim().toLowerCase();


    if (email === '') {
        console.log('email text is required');
        console.log(email)
        emailInput.classList.replace('border-blue-800', 'border-rose-700');
        emailInput.classList.add('bg-rose-100')
        emailInput.classList.add('text-rose-500')

        if (isLargeScreen.matches) {
            errorMessageDesktop.classList.remove('hidden');
        } else {
            errorMessageMobile.classList.remove('hidden');
        }

    } else {
        // window.location.href="/success.html"
        window.open('newsletter-sign-up/success.html', '_blank');

    }

}

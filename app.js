const form = document.querySelector('form');
form.addEventListener('submit', (event) => confirmPwd(event));

function confirmPwd(event) {
    const pwd = document.querySelector('#password');
    const pwdConfirmed = document.querySelector('#confirm_password');
    if(pwd.value !== pwdConfirmed.value || pwd === '') {
        event.preventDefault();
        alert('*Passwords do not match')
    }
};

const pwdInput = document.querySelector('#password')
const pwdConfirmInput = document.querySelector('#confirm_password');
const errorMsg = document.querySelector('div.error')
const errorElements = document.querySelectorAll('.error');

pwdInput.addEventListener('change', () => checkPwd());
pwdConfirmInput.addEventListener('change', () => checkPwd());

function checkPwd () {
    const pwd = document.querySelector('#password');
    const pwdConfirmed = document.querySelector('#confirm_password');
    if(pwd.value !== pwdConfirmed.value) {
        errorElements.forEach((element) => element.classList.add('error'));
        errorMsg.textContent = '*Passwords do not match';
    } else {
        errorElements.forEach((element) => element.classList.remove('error'));
        errorMsg.textContent = '';
    }
};
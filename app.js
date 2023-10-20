const form = document.querySelector('form');
form.addEventListener('submit', (event) => confirmPwd(event));

function confirmPwd(event) {
    const pwd = document.querySelector('#password');
    const pwdConfirmed = document.querySelector('#confirm_password');
    if(pwd.value !== pwdConfirmed.value) {
        event.preventDefault();
        return alert('no match');
    } else {
        return alert('match');
    }
};
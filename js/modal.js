// Login modal window
const loginBtn = document.querySelector('.menu__login');
const loginModal = document.querySelector('.login-modal-window');
const closeBtn = document.querySelector('.login-modal-window__close-btn');
const modalForm = document.querySelector('.login-modal-window__form');
const rememberChckbx = modalForm.querySelector('#remember-login');
const login = modalForm.querySelector('#login');
const registerBtn = modalForm.querySelector('.login-modal-window__register');
const password = modalForm.querySelector('#password');

const openModal = () => {
    event.preventDefault();
    if (localStorage.username) {
        const storedLogin = localStorage.getItem('username');
        rememberChckbx.checked = true;
        login.value = storedLogin;
        password.value = localStorage.getItem(`${storedLogin}`);
    } 
    loginModal.classList.add('visible', 'modal-opening');
    setTimeout(() => loginModal.classList.remove('modal-opening'), 1000)
    window.addEventListener('keydown', closeModalEsc);
}

const closeModal = () => {
    if (!rememberChckbx.checked) {
        clearInputs();
        localStorage.clear();
    }
    loginModal.classList.remove('visible', 'modal-opening');
    window.removeEventListener('keydown', closeModalEsc);
}

const closeModalEsc = () => {
    if (event.keyCode == 27) {
        closeModal();
    }
}

const clearInputs = () => {
    login.value = '';
    password.value = '';
}

const modalError = () => {
    loginModal.classList.add('modal-error');
    setTimeout(() => loginModal.classList.remove('modal-error'), 1000);
}

registerBtn.addEventListener('click', () => {
    if (rememberChckbx.checked) {
        localStorage.setItem('username', login.value);
        localStorage.setItem(`${login.value}`, password.value);
        closeModal();
    }
})

modalForm.addEventListener('submit', () => {
    event.preventDefault();
    if (!localStorage.username) {
        alert('No such a user has been registered');
    } 
    else {
        alert('You have successfully logged in');
        closeModal(loginModal);
    }  
})


login.addEventListener('invalid', modalError) 
password.addEventListener('invalid', modalError) 
loginBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);


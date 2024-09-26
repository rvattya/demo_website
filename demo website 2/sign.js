document.addEventListener('DOMContentLoaded', () => {
    const openLoginBtn = document.getElementById('openLoginBtn');
    const openSignupBtn = document.getElementById('openSignupBtn');
    const popup = document.getElementById('popup');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');

    openLoginBtn.addEventListener('click', () => {
        popup.classList.remove('hidden');
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
    });

    openSignupBtn.addEventListener('click', () => {
        popup.classList.remove('hidden');
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });

    closePopupBtn.addEventListener('click', () => {
        popup.classList.add('hidden');
    });

    window.addEventListener('click', (event) => {
        if (event.target === popup) {
            popup.classList.add('hidden');
        }
    });
});

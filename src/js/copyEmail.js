export default () => {
    const emailLink = document.querySelector('.js-email');
    const email = emailLink.dataset.email;

    emailLink.addEventListener('click', () => {
        navigator.clipboard.writeText(email).then(() => {
            emailLink.classList.add('is-copied');
            setTimeout(() => {
                emailLink.classList.remove('is-copied');
            }, 1000)
        });
    })

    

}


const nav = document.querySelector('#nav');
const navButton = document.querySelector('#nav-button');
const navButtonImg = document.querySelector('#nav-button-img');

navButton.onclick = () => {
    if (nav.classList.toggle('open')) {
        navButtonImg.src = "./img/icons/NAV-close.svg";
    } else {
        navButtonImg.src = "./img/icons/NAV-open.svg";
    }
}

AOS.init({
    disable: 'mobile',
    once: true
});
const wrapper = document.querySelector(".wrapper");
const navBar = document.querySelector("nav");
const hamburgerMenu = document.querySelector("#hamburger")

let menuOpen = false;

hamburgerMenu.addEventListener('click', () => {
    navBar.style.clipPath = "inset(0 0 100% 0)"
    if(!menuOpen) {
        hamburgerMenu.setAttribute('src', 'public/images/icon-close.svg');
        navBar.classList.remove('hidden');
        setTimeout( () => {
            navBar.style.clipPath = "inset(0 0 0 0)"
        }, 100);
        menuOpen = true;
    } else {
        hamburgerMenu.setAttribute('src', 'public/images/icon-hamburger.svg')
        navBar.style.clipPath = "inset(0 0 100% 0)"
        setTimeout( () => {
            navBar.classList.add('hidden');
        }, 500);
        menuOpen = false;

    }
  });
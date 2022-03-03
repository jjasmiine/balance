//  ()

const headerToggle = document.getElementById('header-toggle'),
    main = document.getElementById('main'),
    navClose = document.getElementById('nav-close')

if (headerToggle) {
    headerToggle.addEventListener('click', () => {
        main.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        main.classList.remove('show-menu')
    })
}






const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const main = document.getElementById('main')

    main.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))






function headerAnimation() {
    const header = document.getElementById('header')

    if (this.scrollY >= 100) {
        header.classList.add('header-animation')
    }

    else if (this.scrollY <= 100) {
        header.classList.remove('header-animation')
    }
}

window.addEventListener('scroll', headerAnimation)

document.addEventListener('DOMContentLoaded', () => {
    // burger menu
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.header__nav')
    if (burger) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('open');
            nav.classList.toggle('active');
        })
        document.addEventListener('click', e => {
            const target = e.target;
            if (!target.closest('.burger') && !target.closest('.header__nav')) {
                nav.classList.remove('active');
                burger.classList.remove('open');
            }
        })
    }
    let images = document.querySelectorAll('.hero__img-svg div');

    function animationImages() {
        images.forEach((img, i) => {
            img.animate([
                { transform: 'rotate(0) translate(-50%,-50%)' },
                { transform: 'rotate(360deg) translate(-50%,-50%)' }
            ], { duration: 5000 + i * 300, fill: 'forwards', easing: 'ease-in-out' })
        })
    }
    animationImages();
    let intervalAnimation = setInterval(() => {
        animationImages();
    }, 8000);

    // form span upper
    let connectForm = document.querySelector('.js-form');
    let connectFormInputs = document.querySelectorAll('.js-input');
    if (connectForm) {
        connectFormInputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.nextElementSibling.style.transform = 'translateY(-18px)';
                input.nextElementSibling.style.fontSize = '14px';
            })
            input.addEventListener('blur', () => {
                if (input.value === '') {
                    input.nextElementSibling.style.transform = 'translateY(-50%)';
                    input.nextElementSibling.style.fontSize = '16px';
                }
            })
        })
    }

    window.addEventListener('scroll', addClassHeader)
    let header = document.querySelector('.header')

    function addClassHeader() {
        if (window.scrollY > 50) {
            header.classList.add('active')
        } else {
            header.classList.remove('active')
        }
    }
    addClassHeader();

    // animate img program
    let programImages = document.querySelectorAll('.program__item-img');
    if (programImages) {
        programImages.forEach((img, i) => {
            img.animate([
                { transform: 'translateY(0)' },
                { transform: 'translateY(-10px)' },
                { transform: 'translateY(0)' },
                { transform: 'translateY(10px)' },
                { transform: 'translateY(0)' }
            ], { duration: 2000, easing: 'linear', iterations: Infinity, fill: 'forwards', delay: 200 * i })
        })
    }
})
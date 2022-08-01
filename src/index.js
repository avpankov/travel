//Carousel
let gallery = document.querySelector('.gallery');

prev.addEventListener('click', () => {
    gallery.style.marginLeft = '285px';
    prev.classList.add('switcher_active');
    middle.classList.remove('switcher_active');
    next.classList.remove('switcher_active');
});

middle.addEventListener('click', () => {
    gallery.style.marginLeft = '-575px';
    prev.classList.remove('switcher_active');
    middle.classList.add('switcher_active');
    next.classList.remove('switcher_active');
});

next.addEventListener('click', () => {
    gallery.style.marginLeft = '-1435px';
    prev.classList.remove('switcher_active');
    middle.classList.remove('switcher_active');
    next.classList.add('switcher_active');
})

//Estimate scroll width
let div = document.createElement('div');
div.style.overflowY = 'scroll';
div.style.width = '50px';
div.style.height = '50px';
document.body.append(div);
let scrollWidth = div.offsetWidth - div.clientWidth;
div.remove();

//Log-in form
logIn.addEventListener('click', () => {
    document.querySelector('.overlay').style.display = 'block';
    document.querySelector('.log-in').style.marginTop = 152 + 'px';
    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = scrollWidth + 'px';
})

document.querySelector('.overlay').addEventListener('click', () => {
    document.querySelector('.overlay').style.display = 'none';
    document.querySelector('.log-in').style.marginTop = -800 + 'px';
    document.body.style.overflowY = 'auto';
    document.body.style.paddingRight = 0;
})

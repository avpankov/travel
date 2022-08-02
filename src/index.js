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
function estimateScrollBarWidth() {
    let div = document.createElement('div');
    div.style.overflowY = 'scroll';
    div.style.width = '50px';
    div.style.height = '50px';
    document.body.append(div);
    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
}

//Log-in form
let overlay = document.createElement('div');
overlay.style.cssText = `display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 102%;
    height: 100%;
    background: #000;
    opacity: 0.5;
    z-index: 2;
    transition: display .3s;
    overflow: hidden;`;

logInBtn.addEventListener('click', () => {
    document.body.append(overlay);
    document.querySelector('.authentication').style.marginTop = 152 + 'px';
    document.querySelector('.log-in').style.display = 'block';
    document.querySelector('.sign-up').style.display = 'none';

    document.body.style.overflowY = 'hidden';
    document.body.style.paddingRight = estimateScrollBarWidth() + 'px';
})

overlay.addEventListener('click', () => {
    overlay.remove();
    document.querySelector('.authentication').style.marginTop = -800 + 'px';
    document.body.style.overflowY = 'auto';
    document.body.style.paddingRight = 0;
})

//Register link
registerLink.addEventListener('click', () => {
    document.querySelector('.log-in').style.display = 'none';
    document.querySelector('.sign-up').style.display = 'block';
})

//Log in link
loginLink.addEventListener('click', () => {
    document.querySelector('.log-in').style.display = 'block';
    document.querySelector('.sign-up').style.display = 'none';
})
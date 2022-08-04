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

//Carousel in mobile view
if (document.getElementsByTagName('body')[0].clientWidth <= 390) {
    prev.classList.add('switcher_active');
    middle.classList.remove('switcher_active');
    next.classList.remove('switcher_active');
}

let position = -10;

arrowNext.addEventListener('click', () => {
    position -= 385;
    position = Math.max(position, -780);
    gallery.style.marginLeft = position + 'px';
    if (position == -780) {
        arrowNext.childNodes[1].setAttribute('fill-opacity', 0.5);
        arrowPrev.childNodes[1].setAttribute('fill-opacity', 1);
        prev.classList.remove('switcher_active');
        middle.classList.remove('switcher_active');
        next.classList.add('switcher_active');
    } else if (position == -395) {
        arrowNext.childNodes[1].setAttribute('fill-opacity', 1);
        arrowPrev.childNodes[1].setAttribute('fill-opacity', 1);
        prev.classList.remove('switcher_active');
        middle.classList.add('switcher_active');
        next.classList.remove('switcher_active');
    } else {
        arrowPrev.childNodes[1].setAttribute('fill-opacity', 0.5);
        arrowNext.childNodes[1].setAttribute('fill-opacity', 1);
        prev.classList.add('switcher_active');
        middle.classList.remove('switcher_active');
        next.classList.remove('switcher_active');
    }
})

arrowPrev.addEventListener('click', () => {
    position += 385;
    position = Math.min(position, -10)
    gallery.style.marginLeft = position + 'px';
    if (position == -10) {
        arrowPrev.childNodes[1].setAttribute('fill-opacity', 0.5);
        arrowNext.childNodes[1].setAttribute('fill-opacity', 1);
        prev.classList.add('switcher_active');
        middle.classList.remove('switcher_active');
        next.classList.remove('switcher_active');
    } else if (position == -395) {
        arrowNext.childNodes[1].setAttribute('fill-opacity', 1);
        arrowPrev.childNodes[1].setAttribute('fill-opacity', 1);
        prev.classList.remove('switcher_active');
        middle.classList.add('switcher_active');
        next.classList.remove('switcher_active');
    } else {
        arrowPrev.childNodes[1].setAttribute('fill-opacity', 1);
        arrowNext.childNodes[1].setAttribute('fill-opacity', 0.5);
        prev.classList.remove('switcher_active');
        middle.classList.remove('switcher_active');
        next.classList.add('switcher_active');
    }
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
    height: 102%;
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
    menu.style.right = '-200px';
    setTimeout(() => {
        menu.remove();
    }, 900);
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

//Story description cut
let descriptions = document.querySelectorAll('.story__description');

if (document.getElementsByTagName('body')[0].clientWidth <= 390) {
    for (let p of descriptions) {
        p.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla.Lorem ipsum dolor sit a... <b style="text-decoration: underline">Read More</b>';
    }
}

//Hamburger menu 
let menu = document.createElement('div');
menu.classList.add('hamburger__menu');
let ul = document.createElement('ul');
ul.classList.add('hamburger__menu__list');
ul.innerHTML = '<li>How It Works</li><li>Plan Your Trip</li><li>Destinations</li><li>Travel Stories</li><li id="account">Account</li><li>Social Media</li>';
menu.append(ul);
let close = document.createElement('img');
close.src = './src/images/mobile/icons/x.png';
close.style.cssText = `position: absolute;
    top: 15.5px;
    left: 15.5px;`;
menu.append(close);

hamburger.addEventListener('click', () => {
    document.body.append(overlay);
    document.querySelector('.navigation').append(menu);
    setTimeout(() => {
        menu.style.right = '-15px';
    }, 0);

    document.body.style.overflowY = 'clip';
    account.addEventListener('click', () => {
        document.body.append(overlay);
        document.querySelector('.authentication').style.transform = 'scale(0.55)';
        document.querySelector('.authentication').style.marginTop = 152 + 'px';
        document.querySelector('.authentication').style.marginLeft = 15 + 'px';
        document.querySelector('.log-in').style.display = 'block';
        document.querySelector('.sign-up').style.display = 'none';
    })
})

close.addEventListener('click', () => {
    overlay.remove();
    menu.style.right = '-200px';
    setTimeout(() => {
        menu.remove();
    }, 900);
})

//Submit forms
loginForm.addEventListener('submit', () => {
    alert(`Login: ${loginEmail.value}\nPassword: ${loginPassword.value}`)
})

signupForm.addEventListener('submit', () => {
    alert(`Login: ${signupEmail.value}\nPassword: ${signupPassword.value}`)
})
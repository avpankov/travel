export let gallery = document.querySelector('.gallery');

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
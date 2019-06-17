const $el = document.querySelector('.content');
const duration = 1;
const from = {opacity: 0, ease: Linear.ease};
const to = { opacity: 1};

function fadeIn() {
    TweenLite.fromT0($el, duration, from, to);
}
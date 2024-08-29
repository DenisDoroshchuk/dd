import './styles.scss';
import anime from 'animejs/lib/anime.es.js';

anime({
    targets: '.logo__container, h1',
    scale: [.5, 1],
    opacity: [0, 1],
    duration: 500,
    easing: 'easeInOutSine',
});

anime({
    targets: '.logo__container img',
    translateX: 5,
    rotate: 2,
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    duration: 2000
});

anime({
    targets: '.text__container',
    translateX: [-100, 0],
    opacity: [0, .7],
    duration: 500,
    easing: 'easeInOutSine',
});

anime({
    targets: '.footer p',
    scale: [.5, 1],
    opacity: [0, .7],
    duration: 500,
    easing: 'easeInOutSine',
});

anime({
    targets: '.footer p.or',
    scale: [.5, 1],
    opacity: [0, .7],
    duration: 500,
    delay: 500,
    easing: 'easeInOutSine',
});

anime({
    targets: '.social-link--facebook',
    translateY: [100, 0],
    opacity: [0, 1],
    duration: 300,
    delay: 800,
    easing: 'easeInOutSine',
    complete: function (anim) {
        anime({
            targets: '.social-link--facebook',
            translateY: [0, 6],
            loop: true,
            duration: 2000,
            easing: 'easeInOutSine',
            direction: 'alternate',
        });
    }
});


anime({
    targets: '.social-link--upwork',
    translateY: [100, 0],
    opacity: [0, 1],
    duration: 300,
    delay: 1100,
    easing: 'easeInOutSine',
    complete: function (anim) {
        anime({
            targets: '.social-link--upwork',
            translateY: [0, 6],
            loop: true,
            duration: 2000,
            easing: 'easeInOutSine',
            direction: 'alternate',
        });
    }
});

anime({
    targets: '.social-link--linkedin',
    translateY: [100, 0],
    opacity: [0, 1],
    duration: 300,
    delay: 1400,
    easing: 'easeInOutSine',
    complete: function (anim) {
        anime({
            targets: '.social-link--linkedin',
            translateY: [0, 6],
            loop: true,
            duration: 2000,
            easing: 'easeInOutSine',
            direction: 'alternate',
        });
    }
});

const element = document.querySelector('.text-animation');
const lettersHtml = element.textContent.replace(/\S/g, '<span class="letter">$&</span>');
element.innerHTML = `<div class="letters">${lettersHtml}</div><span class="cursor">|</span>`;
element.style.display = 'block';

const letters = Array.from(element.querySelectorAll('.letter'));
const TYPE_AFTER_MS = 500;
const JUMP_AFTER_MS = 150;

const blink = anime({
    targets: '.text-animation .cursor',
    loop: true,
    duration: 750,
    opacity: [
        {value: [1, 1]},
        {value: [0, 0]}
    ],
});

anime.timeline()
    .add({
        targets: '.text-animation .cursor',
        translateX: letters.map((letter, i) =>
            ({
                value: letter.offsetLeft + letter.offsetWidth,
                duration: 1,
                delay: i === 0 ? 0 : JUMP_AFTER_MS
            }))
    }, TYPE_AFTER_MS)
    .add({
        targets: '.text-animation .letter',
        opacity: [0, 1],
        duration: 1,
        delay: anime.stagger(JUMP_AFTER_MS),
    }, TYPE_AFTER_MS)
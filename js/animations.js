const cursor = document.createElement('div');
cursor.className = 'cursor';
document.body.appendChild(cursor);

const cursorText = document.createElement('div');
cursorText.className = 'cursor-text';
document.body.appendChild(cursorText);

let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    const diffX = mouseX - cursorX;
    const diffY = mouseY - cursorY;
    
    cursorX += diffX * 0.8;
    cursorY += diffY * 0.8;
    
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    
    cursorText.style.left = (cursorX + 20) + 'px';
    cursorText.style.top = (cursorY - 10) + 'px';
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

const interactiveElements = document.querySelectorAll('a, button, .hover-target');

gsap.registerPlugin(ScrollTrigger);

const fadeInElements = document.querySelectorAll('.fade-in');
const slideLeftElements = document.querySelectorAll('.slide-in-left');
const slideRightElements = document.querySelectorAll('.slide-in-right');
const scaleInElements = document.querySelectorAll('.scale-in');

fadeInElements.forEach(el => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 50%',
            toggleClass: 'visible',
            once: true
        }
    });
});

slideLeftElements.forEach(el => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 50%',
            toggleClass: 'visible',
            once: true
        }
    });
});

slideRightElements.forEach(el => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 50%',
            toggleClass: 'visible',
            once: true
        }
    });
});

scaleInElements.forEach(el => {
    gsap.to(el, {
        scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 50%',
            toggleClass: 'visible',
            once: true
        }
    });
});

const parallaxElements = document.querySelectorAll('.parallax');

parallaxElements.forEach(el => {
    gsap.to(el, {
        y: -100,
        scrollTrigger: {
            trigger: el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
});

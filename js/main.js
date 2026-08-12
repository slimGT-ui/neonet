
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


const speedModeToggle = document.querySelector('.speed-mode-toggle');
const body = document.body;

let speedModeActive = false;

speedModeToggle.addEventListener('click', () => {
    speedModeActive = !speedModeActive;
    body.classList.toggle('speed-mode', speedModeActive);
    

    if (speedModeActive) {
        showSpeedModeIndicator();
    } else {
        hideSpeedModeIndicator();
    }
});

function showSpeedModeIndicator() {
    let indicator = document.querySelector('.speed-mode-indicator');
    
    if (!indicator) {
        indicator = document.createElement('div');
        indicator.className = 'speed-mode-indicator';
        indicator.textContent = 'SPEED MODE ON';
        document.body.appendChild(indicator);
    }
    
    indicator.style.opacity = '1';
}

function hideSpeedModeIndicator() {
    const indicator = document.querySelector('.speed-mode-indicator');
    if (indicator) {
        indicator.style.opacity = '0';
    }
}


window.addEventListener('load', () => {

    gsap.to('.hero-line', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'power3.out',
        delay: 0.2
    });
    

    const speedNumber = document.querySelector('.speed-number');
    let startValue = 0;
    let endValue = 942;
    let duration = 2000; 
    
    gsap.to(speedNumber, {
        opacity: 1,
        duration: 0.5,
        delay: 0.5
    });
    
    let startTime = null;
    
    function animateSpeed(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentSpeed = Math.floor(easeOutQuart * endValue);
        
        speedNumber.textContent = currentSpeed;
        
        if (progress < 1) {
            requestAnimationFrame(animateSpeed);
        } else {
            speedNumber.textContent = endValue;
        }
    }
    
    setTimeout(() => {
        requestAnimationFrame(animateSpeed);
    }, 500);
});

let lastScroll = 0;

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.background = 'rgba(5, 5, 5, 0.95)';
    } else {
        navbar.style.background = 'rgba(5, 5, 5, 0.8)';
    }
    
    lastScroll = currentScroll;
});

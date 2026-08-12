const modal = document.querySelector('.speed-test-modal');
const modalOverlay = modal.querySelector('.modal-overlay');
const modalClose = modal.querySelector('.modal-close');
const navbarCta = document.querySelector('.navbar-cta');
const heroCheckSpeed = document.querySelector('.btn-secondary');

const screenReady = modal.querySelector('.screen-ready');
const screenTesting = modal.querySelector('.screen-testing');
const screenResults = modal.querySelector('.screen-results');

const startBtn = modal.querySelector('.test-start-btn');
const resultBtn = modal.querySelector('.result-btn');

const pingValue = modal.querySelector('.ping-value');
const downloadValue = modal.querySelector('.download-value');
const uploadValue = modal.querySelector('.upload-value');
const downloadProgress = modal.querySelector('.download-progress');
const uploadProgress = modal.querySelector('.upload-progress');

function openModal() {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    resetTest();
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function resetTest() {
    screenReady.classList.add('active');
    screenTesting.classList.remove('active');
    screenResults.classList.remove('active');
}

function showScreen(screen) {
    screenReady.classList.remove('active');
    screenTesting.classList.remove('active');
    screenResults.classList.remove('active');
    screen.classList.add('active');
}

function runTest() {
    showScreen(screenTesting);
    
    setTimeout(() => {
        animatePing();
    }, 500);
    
    setTimeout(() => {
        animateDownload();
    }, 1500);
    
    setTimeout(() => {
        animateUpload();
    }, 4000);
    
    setTimeout(() => {
        showScreen(screenResults);
    }, 6500);
}

function animatePing() {
    let ping = 0;
    const targetPing = 4;
    const interval = setInterval(() => {
        ping = Math.floor(Math.random() * 15) + 3;
        pingValue.textContent = ping + ' ms';
        
        if (ping <= targetPing + 1) {
            clearInterval(interval);
            pingValue.textContent = targetPing + ' ms';
        }
    }, 100);
}

function animateDownload() {
    let speed = 0;
    const targetSpeed = 873;
    let progress = 0;
    
    const interval = setInterval(() => {
        speed += Math.floor(Math.random() * 120) + 80;
        if (speed > targetSpeed) speed = targetSpeed;
        
        progress = (speed / 1000) * 100;
        
        downloadValue.textContent = speed + ' Mbps';
        downloadProgress.style.width = progress + '%';
        
        if (speed >= targetSpeed) {
            clearInterval(interval);
        }
    }, 150);
}

function animateUpload() {
    let speed = 0;
    const targetSpeed = 641;
    let progress = 0;
    
    const interval = setInterval(() => {
        speed += Math.floor(Math.random() * 100) + 60;
        if (speed > targetSpeed) speed = targetSpeed;
        
        progress = (speed / 1000) * 100;
        
        uploadValue.textContent = speed + ' Mbps';
        uploadProgress.style.width = progress + '%';
        
        if (speed >= targetSpeed) {
            clearInterval(interval);
        }
    }, 150);
}

navbarCta.addEventListener('click', openModal);
heroCheckSpeed.addEventListener('click', openModal);
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
startBtn.addEventListener('click', runTest);

resultBtn.addEventListener('click', () => {
    closeModal();
    document.querySelector('#plans').scrollIntoView({ behavior: 'smooth' });
});

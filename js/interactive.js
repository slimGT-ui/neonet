const activityButtons = document.querySelectorAll('.activity-btn');
const activityCards = document.querySelectorAll('.activity-card');

activityButtons.forEach(button => {
    button.addEventListener('click', () => {
        const activity = button.getAttribute('data-activity');
        
        activityButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        activityCards.forEach(card => {
            card.classList.remove('active');
            if (card.getAttribute('data-content') === activity) {
                card.classList.add('active');
            }
        });
    });
});


const networkNodes = document.querySelectorAll('.network-node');
const tooltip = document.querySelector('.node-tooltip');

networkNodes.forEach(node => {
    node.addEventListener('mouseenter', (e) => {
        const city = node.getAttribute('data-city');
        const ping = node.getAttribute('data-ping');
        const traffic = node.getAttribute('data-traffic');
        
        const tooltipCity = tooltip.querySelector('.tooltip-city');
        const tooltipPing = tooltip.querySelector('.tooltip-ping');
        const tooltipTraffic = tooltip.querySelector('.tooltip-traffic');
        
        tooltipCity.textContent = city.toUpperCase() + ' NODE';
        tooltipPing.textContent = ping + ' ms';
        tooltipTraffic.textContent = traffic + ' TB/s';
        
        tooltip.classList.add('active');
        
        updateTooltipPosition(e);
    });
    
    node.addEventListener('mousemove', (e) => {
        updateTooltipPosition(e);
    });
    
    node.addEventListener('mouseleave', () => {
        tooltip.classList.remove('active');
    });
});

function updateTooltipPosition(e) {
    const map = document.querySelector('.network-map');
    const mapRect = map.getBoundingClientRect();
    
    const x = e.clientX - mapRect.left;
    const y = e.clientY - mapRect.top;
    
    tooltip.style.left = (x + 20) + 'px';
    tooltip.style.top = (y - 40) + 'px';
}


const liveStats = document.querySelectorAll('.live-stat');

liveStats.forEach(stat => {
    const numberElement = stat.querySelector('.stat-number');
    const target = parseFloat(numberElement.getAttribute('data-target'));
    
    let currentValue = 0;
    const isDecimal = target % 1 !== 0;
    const step = isDecimal ? target / 100 : target / 50;
    
    function animateToTarget() {
        if (currentValue < target) {
            currentValue += step;
            if (currentValue > target) currentValue = target;
            
            if (isDecimal) {
                numberElement.textContent = currentValue.toFixed(2);
            } else {
                numberElement.textContent = Math.floor(currentValue).toLocaleString();
            }
            
            requestAnimationFrame(animateToTarget);
        } else {
            startRandomFluctuation();
        }
    }
    
    function startRandomFluctuation() {
        setInterval(() => {
            const variance = isDecimal ? 0.02 : Math.floor(target * 0.002);
            const randomChange = (Math.random() - 0.5) * variance * 2;
            let newValue = target + randomChange;
            
            if (isDecimal) {
                numberElement.textContent = newValue.toFixed(2);
            } else {
                numberElement.textContent = Math.floor(newValue).toLocaleString();
            }
        }, 2000);
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateToTarget();
                observer.disconnect();
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(stat);
});

const toggleButtons = document.querySelectorAll('.toggle-btn');
const priceAmounts = document.querySelectorAll('.price-amount');
const yearlySavings = document.querySelector('.yearly-savings');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        const period = button.getAttribute('data-period');
        
        toggleButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        priceAmounts.forEach(price => {
            const monthlyPrice = price.getAttribute('data-monthly');
            const yearlyPrice = price.getAttribute('data-yearly');
            
            if (period === 'yearly') {
                price.textContent = '€' + yearlyPrice;
                yearlySavings.classList.add('active');
            } else {
                price.textContent = '€' + monthlyPrice;
                yearlySavings.classList.remove('active');
            }
        });
    });
});


const testimonialCards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

let currentSlide = 0;
const totalSlides = testimonialCards.length;

function showSlide(index) {
    testimonialCards.forEach((card, i) => {
        card.classList.remove('active');
        if (i === index) {
            card.classList.add('active');
        }
    });
    
    dots.forEach((dot, i) => {
        dot.classList.remove('active');
        if (i === index) {
            dot.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});


const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        
        faqItems.forEach(faq => faq.classList.remove('active'));
        
        if (!isActive) {
            item.classList.add('active');
        }
    });
});



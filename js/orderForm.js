const orderModal = document.querySelector('.order-modal');
const orderOverlay = orderModal.querySelector('.modal-overlay');
const orderClose = orderModal.querySelector('.modal-close');

const screenStep1 = orderModal.querySelector('.screen-step1');
const screenStep2 = orderModal.querySelector('.screen-step2');
const screenStep3 = orderModal.querySelector('.screen-step3');
const screenFinal = orderModal.querySelector('.screen-final');

const continueBtn = orderModal.querySelector('.continue-btn');
const connectionOptions = orderModal.querySelectorAll('.connection-option');
const confirmBtn = orderModal.querySelector('.confirm-btn');

let selectedPlan = {
    name: 'BOOST',
    speed: '700',
    price: '29',
    period: 'monthly'
};

let selectedInstallation = '';

function openOrderModal(planData) {
    if (planData) {
        selectedPlan = planData;
    }
    
    const planNameDisplay = orderModal.querySelector('.plan-name-display');
    const planPriceDisplay = orderModal.querySelector('.plan-price-display');
    
    planNameDisplay.textContent = selectedPlan.name;
    planPriceDisplay.textContent = `€${selectedPlan.price}/mo`;
    
    orderModal.classList.add('active');
    document.body.style.overflow = 'hidden';
    resetOrderForm();
}

function closeOrderModal() {
    orderModal.classList.remove('active');
    document.body.style.overflow = '';
}

function resetOrderForm() {
    showOrderScreen(screenStep1);
    orderModal.querySelectorAll('.form-input').forEach(input => input.value = '');
    connectionOptions.forEach(opt => opt.classList.remove('selected'));
    selectedInstallation = '';
}

function showOrderScreen(screen) {
    screenStep1.classList.remove('active');
    screenStep2.classList.remove('active');
    screenStep3.classList.remove('active');
    screenFinal.classList.remove('active');
    screen.classList.add('active');
}

continueBtn.addEventListener('click', () => {
    const inputs = screenStep1.querySelectorAll('.form-input');
    let allFilled = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            allFilled = false;
            input.style.borderColor = '#ff3333';
        } else {
            input.style.borderColor = '';
        }
    });
    
    if (allFilled) {
        showOrderScreen(screenStep2);
    }
});

connectionOptions.forEach(option => {
    option.addEventListener('click', () => {
        connectionOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        selectedInstallation = option.getAttribute('data-type');
        
        setTimeout(() => {
            showOrderScreen(screenStep3);
            updateSummary();
        }, 300);
    });
});

function updateSummary() {
    const planSummary = orderModal.querySelector('.plan-summary');
    const speedSummary = orderModal.querySelector('.speed-summary');
    const priceSummary = orderModal.querySelector('.price-summary');
    const installSummary = orderModal.querySelector('.install-summary');
    
    planSummary.textContent = selectedPlan.name;
    speedSummary.textContent = selectedPlan.speed + ' Mbps';
    priceSummary.textContent = `€${selectedPlan.price} / month`;
    installSummary.textContent = selectedInstallation === 'installation' ? 'FREE' : 'SELF INSTALL';
}

confirmBtn.addEventListener('click', () => {
    showOrderScreen(screenFinal);
    
    setTimeout(() => {
        closeOrderModal();
    }, 4000);
});

orderClose.addEventListener('click', closeOrderModal);
orderOverlay.addEventListener('click', closeOrderModal);

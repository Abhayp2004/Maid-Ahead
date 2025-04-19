function calculatePrice() {
    const children = parseInt(document.getElementById('children').value);
    const hours = parseInt(document.getElementById('hours').value);
    const serviceType = document.querySelector('input[name="service-type"]:checked').value;
    const gender = document.querySelector('input[name="sitter-gender"]:checked').value;

    
    const baseRatePerHour = 200; 
    const baseRatePerMonth = 15000; 

    
    let baseRate;
    if (serviceType === 'full-time') {
        baseRate = baseRatePerMonth;
        document.getElementById('rate-period').textContent = '/month';
    } else {
        baseRate = baseRatePerHour * hours;
        document.getElementById('rate-period').textContent = '/day';
    }

    
    if (children > 1) {
        baseRate = baseRate + (baseRate * 0.5 * (children - 1));
    }

  
    if (gender !== 'any') {
        baseRate *= 1.1;
    }

    
    let timeDiscount = 0;
    if (serviceType === 'part-time') {
        switch(hours) {
            case 4:
                timeDiscount = baseRate * 0.1; 
                break;
            case 6:
                timeDiscount = baseRate * 0.15; 
                break;
            case 8:
                timeDiscount = baseRate * 0.2; 
                break;
            default:
                timeDiscount = 0;
        }
    }

    
    baseRate = Math.round(baseRate / 10) * 10;
    timeDiscount = Math.round(timeDiscount / 10) * 10;
    const totalAmount = baseRate - timeDiscount;

    document.getElementById('base-rate').textContent = '₹' + baseRate;
    document.getElementById('time-discount').textContent = '-₹' + timeDiscount;
    document.getElementById('total-amount').textContent = '₹' + totalAmount;
}

function updateTimeSlots() {
    const hours = parseInt(document.getElementById('hours').value);
    const slotsContainer = document.getElementById('time-slots');
    slotsContainer.innerHTML = ''; // Clear existing slots

    const slots = generateTimeSlots(hours);
    
    
    slots.forEach(slot => {
        const slotElement = document.createElement('div');
        slotElement.className = 'time-slot';
        slotElement.textContent = slot;
        slotElement.onclick = function() {
           
            document.querySelectorAll('.time-slot').forEach(s => 
                s.classList.remove('active')
            );
           
            this.classList.add('active');
            calculatePrice();
        };
        slotsContainer.appendChild(slotElement);
    });

   
    if (!document.querySelector('.time-slot.active') && slots.length > 0) {
        slotsContainer.firstChild.classList.add('active');
    }
}

function generateTimeSlots(hours) {
    const slots = [];
    const startTimes = [6, 8, 10, 12, 14, 16]; 
    
    startTimes.forEach(startHour => {
        const endHour = startHour + parseInt(hours);
        if (endHour <= 20) { 
            const startTime = startHour < 12 ? 
                `${startHour}:00 AM` : 
                `${startHour === 12 ? 12 : startHour - 12}:00 PM`;
            const endTime = endHour < 12 ? 
                `${endHour}:00 AM` : 
                `${endHour === 12 ? 12 : endHour - 12}:00 PM`;
            slots.push(`${startTime} - ${endTime}`);
        }
    });
    
    return slots;
}

function incrementChildren() {
    const input = document.getElementById('children');
    const currentValue = parseInt(input.value);
    if (currentValue < parseInt(input.max)) {
        input.value = currentValue + 1;
        calculatePrice();
    }
}

function decrementChildren() {
    const input = document.getElementById('children');
    const currentValue = parseInt(input.value);
    if (currentValue > parseInt(input.min)) {
        input.value = currentValue - 1;
        calculatePrice();
    }
}

// Add to your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize radio buttons
    document.querySelectorAll('.radio-label input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const radioGroup = this.closest('.radio-group');
            radioGroup.querySelectorAll('.radio-label').forEach(label => {
                label.classList.remove('selected');
            });
            if (this.checked) {
                this.closest('.radio-label').classList.add('selected');
            }
            calculatePrice();
        });
    });

    // Initialize first radio button in each group as selected
    document.querySelectorAll('.radio-group').forEach(group => {
        const firstRadio = group.querySelector('input[type="radio"]');
        if (firstRadio) {
            firstRadio.checked = true;
            firstRadio.closest('.radio-label').classList.add('selected');
        }
    });

    // Add event listener for hours select
    document.getElementById('hours').addEventListener('change', function() {
        updateTimeSlots();
        calculatePrice();
    });

    // Initialize time slots
    updateTimeSlots();
    calculatePrice();

    // Add animation to price card
    const priceCard = document.querySelector('.price-card');
    priceCard.classList.add('animate-in');

    // Add event listeners for all inputs that affect price
    document.getElementById('children').addEventListener('change', calculatePrice);
    document.getElementById('hours').addEventListener('change', calculatePrice);
    document.querySelectorAll('input[name="service-type"]').forEach(radio => {
        radio.addEventListener('change', calculatePrice);
    });
    document.querySelectorAll('input[name="sitter-gender"]').forEach(radio => {
        radio.addEventListener('change', calculatePrice);
    });
    document.getElementById('time-slots').addEventListener('click', calculatePrice);
});

function redirectToBabysitting() {
    try {
        console.log('Starting redirection process...');
        
        // Store the current selections in sessionStorage
        const serviceType = document.querySelector('input[name="service-type"]:checked').value;
        const hours = document.getElementById('hours').value;
        const children = document.getElementById('children').value;
        const gender = document.querySelector('input[name="sitter-gender"]:checked').value;
        
        console.log('Selected values:', { serviceType, hours, children, gender });
        
        // Store values in sessionStorage
        sessionStorage.setItem('serviceType', serviceType);
        sessionStorage.setItem('hours', hours);
        sessionStorage.setItem('children', children);
        sessionStorage.setItem('gender', gender);
        
        console.log('Values stored in sessionStorage');
        console.log('Redirecting to:', '../Babysitter/babysitting.html');
        
        // Redirect to babysitting.html
        window.location.href = '../Babysitter/babysitting.html';
    } catch (error) {
        console.error('Redirect error:', error);
        alert('Error during redirection: ' + error.message);
    }
} 
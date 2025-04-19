function calculatePrice() {
    const gender = document.getElementById('caregiver-gender').value;
    const hours = parseInt(document.getElementById('hours').value);
    const serviceType = document.getElementById('service-type').value;

    // Base costs
    const hourlyRate = 300;  // ₹300 per hour
    const monthlyRate = 25000; // ₹25,000 per month

    // Calculate base rate
    let baseRate;
    if (serviceType === 'full-time') {
        baseRate = monthlyRate * 1.40;
    } else {
        baseRate = hourlyRate * hours * 1.45;
    }

    // Gender preference adds cost
    if (gender !== 'any') {
        baseRate *= 1.15;
    }

    // Calculate time-based discount
    let timeDiscount = 0;
    switch(hours) {
        case 2:
            timeDiscount = baseRate * 0.05; // 5% discount for 2 hours
            break;
        case 4:
            timeDiscount = baseRate * 0.10; // 10% discount
            break;
        case 6:
            timeDiscount = baseRate * 0.15; // 15% discount
            break;
        case 8:
            timeDiscount = baseRate * 0.20; // 20% discount
            break;
    }

    // Round all amounts to nearest 100
    baseRate = Math.round(baseRate / 100) * 100;
    timeDiscount = Math.round(timeDiscount / 100) * 100;
    
    const total = baseRate - timeDiscount;

    // Update display
    document.getElementById('base-rate').textContent = '₹' + baseRate;
    document.getElementById('time-discount').textContent = '-₹' + timeDiscount;
    document.getElementById('total-amount').textContent = '₹' + total;
    document.getElementById('rate-period').textContent = serviceType === 'full-time' ? '/month' : '/day';
}

function updateTimeSlots() {
    const hours = parseInt(document.getElementById('hours').value);
    const slotsContainer = document.getElementById('time-slots');
    slotsContainer.innerHTML = '';

    const slots = generateTimeSlots(hours);
    slots.forEach(slot => {
        const slotElement = document.createElement('div');
        slotElement.className = 'time-slot';
        slotElement.textContent = slot;
        slotElement.onclick = function() {
            document.querySelectorAll('.time-slot').forEach(s => s.classList.remove('active'));
            this.classList.add('active');
        };
        slotsContainer.appendChild(slotElement);
    });
}

function generateTimeSlots(hours) {
    const slots = [];
    const startTimes = [6, 8, 10, 12, 14, 16, 18];
    
    startTimes.forEach(startHour => {
        const endHour = startHour + hours;
        if (endHour <= 22) { // Extended to 10 PM for elder care
            const startTime = startHour < 12 ? 
                `${startHour}AM` : 
                `${startHour === 12 ? 12 : startHour - 12}PM`;
            const endTime = endHour < 12 ? 
                `${endHour}AM` : 
                `${endHour === 12 ? 12 : endHour - 12}PM`;
            slots.push(`${startTime} - ${endTime}`);
        }
    });
    
    return slots;
}

function redirectToEldercare() {
    console.log('Attempting redirection...');
    try {
        // Get the selected values
        const gender = document.getElementById('caregiver-gender').value;
        const hours = document.getElementById('hours').value;
        const serviceType = document.getElementById('service-type').value;
        
        // Store in sessionStorage
        sessionStorage.setItem('eldercare_gender', gender);
        sessionStorage.setItem('eldercare_hours', hours);
        sessionStorage.setItem('eldercare_serviceType', serviceType);
        
        console.log('Current location:', window.location.href);
        console.log('Redirecting with values:', { gender, hours, serviceType });
        window.location.href = '../Eldercare/eldercare.html';
    } catch (error) {
        console.error('Redirection failed:', error);
        alert('Failed to redirect: ' + error.message);
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    updateTimeSlots();
    calculatePrice();
    
    const priceCard = document.querySelector('.price-card');
    priceCard.classList.add('animate-in');
}); 


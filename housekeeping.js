function calculateCharge() {
    const foodType = document.querySelector('input[name="food-type"]:checked').value;
    const members = parseInt(document.getElementById('members').value);
    const hours = parseInt(document.getElementById('time-slot').value);
    const serviceType = document.querySelector('input[name="service-type"]:checked').value;
    const ratePeriod = document.getElementById('rate-period');
    
    // Base charges
    let baseCharge;
    if (serviceType === 'monthly') {
        baseCharge = 3000; // Monthly base charge
        ratePeriod.textContent = '/month';
    } else {
        baseCharge = 200; // Per day base charge
        ratePeriod.textContent = '/day';
    }

    // Additional charge for non-veg
    if (foodType === 'nonveg') {
        baseCharge += (serviceType === 'monthly') ? 500 : 50;
    }

    // Additional charge per member
    baseCharge = baseCharge + (members - 1) * (serviceType === 'monthly' ? 1000 : 50);

    // Multiply base charge based on hours
    let timeMultiplier;
    switch(hours) {
        case 2:
            timeMultiplier = 1;    // Base price for 2 hours
            break;
        case 4:
            timeMultiplier = 1.8;  // 80% more for 4 hours
            break;
        case 6:
            timeMultiplier = 2.5;  // 150% more for 6 hours
            break;
        case 8:
            timeMultiplier = 3;    // 200% more for 8 hours
            break;
        default:
            timeMultiplier = 1;
    }

    const totalCharge = Math.round(baseCharge * timeMultiplier);
    document.getElementById('cooking-charge').textContent = '₹' + totalCharge;
}

function generateTimeSlots(hours) {
    const slots = [];
    const startTimes = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
    
    startTimes.forEach(startHour => {
        const endHour = startHour + hours;
        if (endHour <= 20) { // Don't create slots that end after 8 PM
            const startTime = startHour < 12 ? 
                `${startHour} AM` : 
                `${startHour === 12 ? 12 : startHour - 12} PM`;
            const endTime = endHour < 12 ? 
                `${endHour} AM` : 
                `${endHour === 12 ? 12 : endHour - 12} PM`;
            slots.push([`${startTime} - ${endTime}`, `slot_${startHour}_${endHour}`]);
        }
    });
    
    return slots;
}

function updateShiftOptions() {
    const timeSlot = parseInt(document.getElementById('time-slot').value);
    const shiftSelect = document.getElementById('shift');
    
    // Clear existing options
    shiftSelect.innerHTML = '';
    
    // Generate and add available time slots
    const availableSlots = generateTimeSlots(timeSlot);
    addShiftOptions(availableSlots, shiftSelect);
}

function addShiftOptions(shifts, selectElement) {
    shifts.forEach(([label, value]) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = label;
        selectElement.appendChild(option);
    });
}

function toggleServiceForm(card) {
    // Remove active class from all cards
    document.querySelectorAll('.service-card').forEach(c => {
        c.classList.remove('active');
    });
    
    // Add active class to clicked card
    card.classList.add('active');
}

function calculateCleaningCharge() {
    const serviceType = document.querySelector('input[name="cleaning-service-type"]:checked').value;
    // ... existing calculateCleaningCharge function ...
}

function updateCleaningShiftOptions() {
    const timeSlot = parseInt(document.getElementById('cleaning-time-slot').value);
    const shiftSelect = document.getElementById('cleaning-shift');
    
    // Clear existing options
    shiftSelect.innerHTML = '';
    
    // Generate and add available time slots
    const availableSlots = generateTimeSlots(timeSlot);
    addShiftOptions(availableSlots, shiftSelect);
}

function calculateCombinedCharge() {
    const foodType = document.querySelector('input[name="combined-food-type"]:checked').value;
    const serviceType = document.querySelector('input[name="combined-service-type"]:checked').value;
    // ... existing calculateCombinedCharge function ...
}

function updateCombinedShiftOptions() {
    const timeSlot = parseInt(document.getElementById('combined-time-slot').value);
    const shiftSelect = document.getElementById('combined-shift');
    
    // Clear existing options
    shiftSelect.innerHTML = '';
    
    // Generate and add available time slots
    const availableSlots = generateTimeSlots(timeSlot);
    addShiftOptions(availableSlots, shiftSelect);
}

function highlightProgress(step) {
    const steps = document.querySelectorAll('.progress-step');
    steps.forEach((s, index) => {
        if (index <= step) {
            s.classList.add('active');
        } else {
            s.classList.remove('active');
        }
    });
}

function selectService(cardId) {
    // Remove active class from all cards and mini-cards
    document.querySelectorAll('.service-card').forEach(card => {
        card.classList.remove('active');
    });
    document.querySelectorAll('.mini-card').forEach(miniCard => {
        miniCard.classList.remove('active');
    });

    // Add active class to selected card and show form
    const card = document.getElementById(cardId);
    card.classList.add('active');
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    toggleServiceForm(card);

    // Update mini-cards in all service forms
    const serviceType = cardId.split('-')[0];
    document.querySelectorAll(`.mini-card[data-service="${serviceType}"]`).forEach(miniCard => {
        miniCard.classList.add('active');
    });
}

function showService(serviceId) {
    // Hide all service details first
    const allServices = document.querySelectorAll('.service-details');
    allServices.forEach(service => {
        service.style.display = 'none';
        service.classList.remove('active');
    });

    // Remove active class from all options
    const allOptions = document.querySelectorAll('.service-option');
    allOptions.forEach(option => {
        option.classList.remove('active');
    });

    // Show selected service and add active class
    const selectedService = document.getElementById(serviceId + '-details');
    const selectedOption = document.querySelector(`.service-option.${serviceId}`);
    
    if (selectedService) {
        selectedService.style.display = 'block';
        selectedService.classList.add('active');
    }
    
    if (selectedOption) {
        selectedOption.classList.add('active');
    }

    // Calculate charges based on the selected service
    if (serviceId === 'cooking') {
        calculateCharge();
    } else if (serviceId === 'cleaning') {
        calculateCleaningCharge();
    } else if (serviceId === 'combined') {
        calculateCombinedCharge();
    }

    // Update shift options for the selected service
    if (serviceId === 'cooking') {
        updateShiftOptions();
    } else if (serviceId === 'cleaning') {
        updateCleaningShiftOptions();
    } else if (serviceId === 'combined') {
        updateCombinedShiftOptions();
    }
}

// Add this function to handle radio button selections
function handleRadioChange(name) {
    const radioButtons = document.querySelectorAll(`input[name="${name}"]`);
    radioButtons.forEach(radio => {
        const label = radio.parentElement;
        if (radio.checked) {
            label.classList.add('selected');
        } else {
            label.classList.remove('selected');
        }
    });
}

function incrementMembers(inputId) {
    const input = document.getElementById(inputId);
    const currentValue = parseInt(input.value);
    if (currentValue < parseInt(input.max)) {
        input.value = currentValue + 1;
        input.dispatchEvent(new Event('change'));
    }
}

function decrementMembers(inputId) {
    const input = document.getElementById(inputId);
    const currentValue = parseInt(input.value);
    if (currentValue > parseInt(input.min)) {
        input.value = currentValue - 1;
        input.dispatchEvent(new Event('change'));
    }
}

// Add this function to handle redirection with service type
function redirectToMaidProfiles(serviceType) {
    try {
        // Get the selected values based on service type
        let selectedValues = {};
        
        if (serviceType === 'cooking') {
            selectedValues = {
                serviceType: 'cooking',
                foodType: document.querySelector('input[name="food-type"]:checked').value,
                members: document.getElementById('members').value,
                timeSlot: document.getElementById('time-slot').value
            };
        } else if (serviceType === 'cleaning') {
            selectedValues = {
                serviceType: 'cleaning',
                bhkSize: document.getElementById('bhk-size').value,
                timeSlot: document.getElementById('cleaning-time-slot').value
            };
        } else if (serviceType === 'combined') {
            selectedValues = {
                serviceType: 'combined',
                foodType: document.querySelector('input[name="combined-food-type"]:checked').value,
                members: document.getElementById('combined-members').value,
                bhkSize: document.getElementById('combined-bhk-size').value,
                timeSlot: document.getElementById('combined-time-slot').value
            };
        }

        // Store values in sessionStorage
        sessionStorage.setItem('housekeeping_preferences', JSON.stringify(selectedValues));
        
        // Redirect to housekeeping_maid.html
        window.location.href = 'Housekeeping/housekeeping_maid.html';
    } catch (error) {
        console.error('Redirect error:', error);
        alert('Error during redirection: ' + error.message);
    }
}

// Initialize event listeners when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize shift options
    updateShiftOptions();
    updateCleaningShiftOptions();
    updateCombinedShiftOptions();

    // Initialize progress tracking
    document.querySelectorAll('.form-group select, .form-group input').forEach((input, index) => {
        input.addEventListener('change', function() {
            const step = Math.floor(index / 2);
            highlightProgress(step);
        });
    });

    // Initialize mini-card click handlers
    document.querySelectorAll('.mini-card').forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.dataset.service + '-card';
            selectService(targetId);
        });
    });

    // Show initial service
    showService('cooking');

    // Initialize radio button states
    ['food-type', 'service-type', 'cleaning-service-type', 'combined-food-type', 'combined-service-type'].forEach(name => {
        handleRadioChange(name);
    });

    // Initialize all gender radio groups
    ['maid-gender', 'cleaning-maid-gender', 'combined-maid-gender'].forEach(name => {
        handleRadioChange(name);
    });
}); 
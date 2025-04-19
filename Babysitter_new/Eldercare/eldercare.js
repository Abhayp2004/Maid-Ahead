
const storedGender = sessionStorage.getItem('gender');
const storedHours = sessionStorage.getItem('hours');
const storedServiceType = sessionStorage.getItem('serviceType');

console.log('Stored preferences:', { storedGender, storedHours, storedServiceType });


sessionStorage.clear();


displayCaregivers();

function displayCaregivers() {
    const caregiverGrid = document.getElementById('caregiver-grid');
    const caregivers = getCaregivers(storedGender);
    
    caregiverGrid.innerHTML = '';
    
    caregivers.forEach(caregiver => {
        const card = document.createElement('div');
        card.className = 'caregiver-card';
        card.innerHTML = `
            <h3>${caregiver.name}</h3>
            <p>Experience: ${caregiver.experience}</p>
            <p>Specialization: ${caregiver.specialization}</p>
            <p>Rate: ${caregiver.rate}</p>
            <button class="book-btn" onclick="bookCaregiver(${caregiver.id})">Book Now</button>
        `;
        caregiverGrid.appendChild(card);
    });
}

function getCaregivers(gender) {
    
    return [
        {
            id: 1,
            name: "Dr. Rajesh Kumar",
            experience: "15 years",
            specialization: "Geriatric Care",
            rate: "₹30,000/month"
        },
        {
            id: 2,
            name: "Nurse Priya Singh",
            experience: "10 years",
            specialization: "Elder Care",
            rate: "₹25,000/month"
        }
        
    ];
}

function bookCaregiver(caregiverId) {
  
    alert(`Booking caregiver ${caregiverId}`);
}

function displayMaidProfiles() {
    const maidProfilesContainer = document.getElementById('maidProfiles');
    maidProfilesContainer.innerHTML = '';
    
    maids.forEach((maid, index) => {
        const maidCard = document.createElement('div');
        maidCard.className = 'maid-card';
        maidCard.style.setProperty('--i', index + 1);
        maidCard.style.animation = 'fadeIn 0.5s ease forwards';
        maidCard.style.animationDelay = `${index * 0.1}s`;
        
        maidCard.innerHTML = `
            <div class="maid-info">
                <div class="maid-header">
                    <h3>${maid.name}</h3>
                    <div class="rating">
                        <span class="stars">${"★".repeat(Math.floor(maid.rating))}</span>
                        <span class="rating-number">(${maid.rating})</span>
                    </div>
                </div>
                
                <div class="maid-details-grid">
                    <div class="detail-item">
                        <span class="label">Gender:</span>
                        <span class="value">${maid.gender}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Age:</span>
                        <span class="value">${maid.age}</span>
                    </div>
                    <div class="detail-item">
                        <span class="label">Experience:</span>
                        <span class="value">${maid.experience}</span>
                    </div>
                </div>

                <div class="skills-section">
                    <div class="skills-list">
                        ${maid.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>

                <button onclick="showDetails('${maid.name}')" class="view-button">Proceed to Book</button>
            </div>
        `;
        
        maidProfilesContainer.appendChild(maidCard);
    });
}

function showDetails(maidName) {
    const maid = maids.find(m => m.name === maidName);
    
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    document.body.appendChild(backdrop);
    
    const detailsModal = document.createElement('div');
    detailsModal.className = 'hidden-details';
    
    detailsModal.innerHTML = `
        <button class="modal-close" onclick="closeDetails(this)">×</button>
        <h3>Book Appointment with ${maid.name}</h3>

        <div class="booking-section">
            <h4>Enter Your Details</h4>
            <form id="bookingForm" onsubmit="bookAppointment(event, '${maid.name}')">
                <div class="form-grid single-column">
                    <div class="form-group">
                        <label for="userName">Your Name *</label>
                        <input type="text" id="userName" required placeholder="Enter your full name">
                    </div>
                    <div class="form-group">
                        <label for="userEmail">Email Address *</label>
                        <input type="email" id="userEmail" required placeholder="Enter your email">
                    </div>
                    <div class="form-group">
                        <label for="userMobile">Mobile Number *</label>
                        <input type="tel" id="userMobile" required pattern="[0-9]{10}" placeholder="Enter 10-digit mobile number">
                    </div>
                    <div class="form-group">
                        <label for="userAddress">Address *</label>
                        <textarea id="userAddress" rows="2" required placeholder="Enter your complete address"></textarea>
                    </div>
                    <div class="form-group">
                        <label for="userNotes">Additional Requirements</label>
                        <textarea id="userNotes" rows="3" placeholder="Any specific requirements or medical conditions we should know about"></textarea>
                    </div>
                </div>
                <button type="submit" class="book-button">
                    Confirm Booking
                </button>
            </form>
        </div>
    `;
    
    document.body.appendChild(detailsModal);
    document.body.style.overflow = 'hidden';
}

function closeDetails(button) {
    const modal = button.closest('.hidden-details');
    const backdrop = document.querySelector('.modal-backdrop');
    
    modal.remove();
    backdrop.remove();
    
    // Restore body scrolling
    document.body.style.overflow = 'auto';
}

function bookAppointment(event, maidName) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('userName').value,
        email: document.getElementById('userEmail').value,
        mobile: document.getElementById('userMobile').value,
        address: document.getElementById('userAddress').value,
        notes: document.getElementById('userNotes').value
    };

    // Show confirmation notification
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
        <div class="notification-content">
            <h4>Booking Request Received</h4>
            <p>Thank you ${formData.name}!</p>
            <p>Your request for ${maidName} has been received.</p>
            <p>Our team will contact you shortly at ${formData.mobile} to discuss service details and schedule.</p>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Close the modal
    const modal = document.querySelector('.hidden-details');
    const backdrop = document.querySelector('.modal-backdrop');
    modal.remove();
    backdrop.remove();
    document.body.style.overflow = 'auto';
    
    // Remove notification after 5 seconds
    setTimeout(() => {
        notification.remove();
    }, 5000);
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function showServices() {
    const servicesModal = document.createElement('div');
    servicesModal.className = 'hidden-details';
    
    servicesModal.innerHTML = `
        <button class="modal-close" onclick="closeDetails(this)">×</button>
        <h3>Our Services</h3>
        <div class="services-content">
            <div class="service-item">
                <h4>Personal Care</h4>
                <p>Assistance with daily activities, hygiene, and mobility</p>
            </div>
            <div class="service-item">
                <h4>Medical Care</h4>
                <p>Medication management and health monitoring</p>
            </div>
            <div class="service-item">
                <h4>Companionship</h4>
                <p>Emotional support and engaging activities</p>
            </div>
        </div>
    `;
    
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    
    document.body.appendChild(backdrop);
    document.body.appendChild(servicesModal);
    document.body.style.overflow = 'hidden';
}

function showContact() {
    const contactModal = document.createElement('div');
    contactModal.className = 'hidden-details';
    
    contactModal.innerHTML = `
        <button class="modal-close" onclick="closeDetails(this)">×</button>
        <h3>Contact Us</h3>
        <div class="contact-content">
            <div class="contact-item">
                <h4>📞 Phone</h4>
                <p>+91 1234567890</p>
            </div>
            <div class="contact-item">
                <h4>✉️ Email</h4>
                <p>info@eldercare.com</p>
            </div>
            <div class="contact-item">
                <h4>📍 Address</h4>
                <p>123 Elder Street, Care City, 100001</p>
            </div>
        </div>
    `;
    
    const backdrop = document.createElement('div');
    backdrop.className = 'modal-backdrop';
    
    document.body.appendChild(backdrop);
    document.body.appendChild(contactModal);
    document.body.style.overflow = 'hidden';
}

function toggleMaidProfiles() {
    const mainContent = document.getElementById('mainContent');
    const maidsContent = document.getElementById('maidsContent');
    const header = document.querySelector('header');
    
    mainContent.style.display = 'none';
    header.style.display = 'none';
    maidsContent.style.display = 'block';
    
    if (!document.querySelector('.maid-card')) {
        displayMaidProfiles();
    }
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goBack() {
    const mainContent = document.getElementById('mainContent');
    const maidsContent = document.getElementById('maidsContent');
    const header = document.querySelector('header');
    
    // Hide maids content and show main content and header
    maidsContent.style.display = 'none';
    mainContent.style.display = 'block';
    header.style.display = 'block';
    
    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showMaids() {
    toggleMaidProfiles(); // Reuse the same function for consistency
}

function calculateMedicalCharge() {
    const duration = document.querySelector('input[name="medical-duration"]:checked').value;
    const hours = parseInt(document.getElementById('medical-hours').value);
    
    let baseRate = duration === 'full-time' ? 25000 : 1500 * hours;
    
    document.getElementById('medical-charge').textContent = `₹${baseRate.toLocaleString()}`;
    document.getElementById('medical-rate-period').textContent = duration === 'full-time' ? '/month' : '/day';
}

function calculateCompanionCharge() {
    const duration = document.querySelector('input[name="companion-duration"]:checked').value;
    const hours = parseInt(document.getElementById('companion-hours').value);
    
    let baseRate = duration === 'full-time' ? 15000 : 800 * hours;
    
    document.getElementById('companion-charge').textContent = `₹${baseRate.toLocaleString()}`;
    document.getElementById('companion-rate-period').textContent = duration === 'full-time' ? '/month' : '/day';
}

function calculateFullCharge() {
    const medicalCharge = 25000;
    const companionCharge = 15000;
    const discount = 5000;
    const total = medicalCharge + companionCharge - discount;
    
    document.getElementById('full-medical-charge').textContent = `₹${medicalCharge.toLocaleString()}`;
    document.getElementById('full-companion-charge').textContent = `₹${companionCharge.toLocaleString()}`;
    document.getElementById('full-discount').textContent = `-₹${discount.toLocaleString()}`;
    document.getElementById('full-total-charge').textContent = `₹${total.toLocaleString()}`;
}

function redirectToProfiles(serviceType) {
    try {
        // Get form values based on service type
        let formData = {
            serviceType: serviceType
        };

        if (serviceType === 'medical') {
            formData.duration = document.querySelector('input[name="medical-duration"]:checked').value;
            formData.hours = document.getElementById('medical-hours').value;
        } else if (serviceType === 'companion') {
            formData.duration = document.querySelector('input[name="companion-duration"]:checked').value;
            formData.hours = document.getElementById('companion-hours').value;
        }

        // Store in sessionStorage
        sessionStorage.setItem('eldercare_preferences', JSON.stringify(formData));
        
        // Redirect to profiles page
        window.location.href = 'eldercare_maid.html';
    } catch (error) {
        console.error('Redirect error:', error);
        alert('Error during redirection: ' + error.message);
    }
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Medical care form
    document.querySelectorAll('input[name="medical-duration"]').forEach(radio => {
        radio.addEventListener('change', calculateMedicalCharge);
    });
    document.getElementById('medical-hours').addEventListener('change', calculateMedicalCharge);

    // Companion care form
    document.querySelectorAll('input[name="companion-duration"]').forEach(radio => {
        radio.addEventListener('change', calculateCompanionCharge);
    });
    document.getElementById('companion-hours').addEventListener('change', calculateCompanionCharge);

    // Calculate initial charges
    calculateMedicalCharge();
    calculateCompanionCharge();
    calculateFullCharge();
}); 
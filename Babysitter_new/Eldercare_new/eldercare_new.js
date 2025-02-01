const maids = [
    {
        id: 1,
        name: "Lakshmi Patel",
        gender: "Female",
        age: 32,
        experience: "7 years",
        availability: "Full-time",
        salary: "₹18,000/month",
        skills: ["Medication Management", "Personal Care", "Mobility Assistance"],
        rating: 4.9
    },
    {
        id: 2,
        name: "Priya Singh",
        gender: "Female",
        age: 35,
        experience: "8 years",
        availability: "Full-time",
        salary: "₹20,000/month",
        skills: ["Elderly Care", "Medication Management", "Physiotherapy"],
        rating: 4.8
    },
    {
        id: 3,
        name: "Lakshmi Devi",
        gender: "Female",
        age: 42,
        experience: "12 years",
        availability: "Full-time",
        salary: "₹25,000/month",
        skills: ["Dementia Care", "Personal Care", "Patient Monitoring"],
        rating: 4.9
    },
    {
        id: 4,
        name: "Anjali Sharma",
        gender: "Female",
        age: 38,
        experience: "10 years",
        availability: "Part-time",
        salary: "₹15,000/month",
        skills: ["Physiotherapy", "Exercise Assistance", "Mobility Support"],
        rating: 4.7
    },
    {
        id: 5,
        name: "Meena Kumari",
        gender: "Female",
        age: 45,
        experience: "15 years",
        availability: "Full-time",
        salary: "₹28,000/month",
        skills: ["Palliative Care", "Pain Management", "Emergency Response"],
        rating: 5.0
    },
    {
        id: 6,
        name: "Deepa Patel",
        gender: "Female",
        age: 36,
        experience: "9 years",
        availability: "Full-time",
        salary: "₹22,000/month",
        skills: ["Elder Care", "Housekeeping", "Meal Preparation"],
        rating: 4.8
    },
    {
        id: 7,
        name: "Radha Krishna",
        gender: "Female",
        age: 40,
        experience: "11 years",
        availability: "Full-time",
        salary: "₹24,000/month",
        skills: ["Post-Surgery Care", "Wound Dressing", "Rehabilitation"],
        rating: 4.9
    },
    {
        id: 8,
        name: "Sushma Reddy",
        gender: "Female",
        age: 37,
        experience: "7 years",
        availability: "Part-time",
        salary: "₹14,000/month",
        skills: ["Diabetes Care", "Blood Sugar Monitoring", "Diet Management"],
        rating: 4.7
    },
    {
        id: 9,
        name: "Kavita Verma",
        gender: "Female",
        age: 39,
        experience: "10 years",
        availability: "Full-time",
        salary: "₹23,000/month",
        skills: ["Alzheimer's Care", "Memory Support", "Behavioral Management"],
        rating: 4.8
    },
    {
        id: 10,
        name: "Sunita Das",
        gender: "Female",
        age: 41,
        experience: "13 years",
        availability: "Full-time",
        salary: "₹26,000/month",
        skills: ["Stroke Recovery", "Speech Therapy Support", "Physical Therapy"],
        rating: 4.9
    },
    {
        id: 11,
        name: "Rajesh Kumar",
        gender: "Male",
        age: 35,
        experience: "8 years",
        availability: "Full-time",
        salary: "₹22,000/month",
        skills: ["Elder Care", "Physiotherapy", "Patient Lifting"],
        rating: 4.8
    },
    {
        id: 12,
        name: "Amit Singh",
        gender: "Male",
        age: 38,
        experience: "10 years",
        availability: "Full-time",
        salary: "₹25,000/month",
        skills: ["Medical Care", "Emergency Response", "Mobility Support"],
        rating: 4.9
    },
    {
        id: 13,
        name: "Suresh Patel",
        gender: "Male",
        age: 42,
        experience: "12 years",
        availability: "Full-time",
        salary: "₹27,000/month",
        skills: ["Dementia Care", "Patient Monitoring", "First Aid"],
        rating: 4.9
    },
    {
        id: 14,
        name: "Vikram Reddy",
        gender: "Male",
        age: 36,
        experience: "9 years",
        availability: "Part-time",
        salary: "₹18,000/month",
        skills: ["Physiotherapy", "Exercise Training", "Rehabilitation"],
        rating: 4.7
    },
    {
        id: 15,
        name: "Mohan Das",
        gender: "Male",
        age: 45,
        experience: "15 years",
        availability: "Full-time",
        salary: "₹30,000/month",
        skills: ["Critical Care", "Medical Assistance", "Emergency Management"],
        rating: 5.0
    }
];

function displayMaidProfiles() {
    const maidProfilesContainer = document.getElementById('maidProfiles');
    if (!maidProfilesContainer) {
        console.error('Maid profiles container not found');
        return;
    }

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
                    <div class="detail-item">
                        <span class="label">Salary:</span>
                        <span class="value">${maid.salary}</span>
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
    
    // Get today's date for min attribute
    const today = new Date().toISOString().split('T')[0];
    
    detailsModal.innerHTML = `
        <button class="modal-close" onclick="closeDetails(this)">×</button>
        <h3>Book Appointment with ${maid.name}</h3>

        <div class="booking-section">
            <h4>Enter Your Details</h4>
            <form id="bookingForm" onsubmit="bookAppointment(event, '${maid.id}')">
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
                        <label for="care_duration">Care Duration *</label>
                        <select name="care_duration" required>
                            <option value="">Select duration</option>
                            <option value="full-time">Full-time Care</option>
                            <option value="day">Day Care (8 AM - 8 PM)</option>
                            <option value="night">Night Care (8 PM - 8 AM)</option>
                            <option value="hourly">Hourly Care</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="booking_date">Start Date *</label>
                        <input type="date" name="booking_date" required min="${today}">
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

function bookAppointment(event, maidId) {
    event.preventDefault();

    // Validate form data
    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userMobile = document.getElementById('userMobile').value;
    const userAddress = document.getElementById('userAddress').value;
    const careDuration = document.querySelector('select[name="care_duration"]').value;
    const bookingDate = document.querySelector('input[name="booking_date"]').value;
    const userNotes = document.getElementById('userNotes')?.value || '';

    if (!userName || !userEmail || !userMobile || !userAddress || !careDuration || !bookingDate) {
        alert('Please fill in all required fields');
        return;
    }

    // Create form data object
    const formData = {
        maid_id: maidId,
        customer_name: document.getElementById('userName').value,
        customer_email: document.getElementById('userEmail').value,
        customer_phone: document.getElementById('userMobile').value,
        customer_address: document.getElementById('userAddress').value,
        care_duration: document.querySelector('select[name="care_duration"]').value || '',
        booking_date: document.querySelector('input[name="booking_date"]').value || '',
        requirements: document.getElementById('userNotes')?.value || ''
    };
    
    console.log("Sending data:", formData);
    
    fetch('/Eldercare_new/eldercare_new.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Response from server:", data);
        if (data.success) {
            alert('Booking successful!');
            window.location.href = 'eldercare_new.html';
        } else {
            alert('Booking failed: ' + data.message);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while booking. Please try again.');
    });
    
    // Send booking request
    fetch('eldercare_new.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(async response => {
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || 'Network response was not ok');
        }
        return data;
    })
    .then(data => {
        if (data.success) {
            // Find the caregiver details
            const caregiver = maids.find(m => m.id === parseInt(maidId));
            if (!caregiver) {
                throw new Error('Caregiver not found');
            }
            
            // Close the booking modal
            const modal = document.querySelector('.hidden-details');
            const backdrop = document.querySelector('.modal-backdrop');
            if (modal) modal.remove();
            if (backdrop) backdrop.remove();
            document.body.style.overflow = 'auto';
            
            // Store booking data in sessionStorage
            const bookingDetails = {
                ...formData,
                booking_id: data.booking_id,
                caregiver: {
                    name: caregiver.name,
                    experience: caregiver.experience,
                    specialization: caregiver.skills.join(', ')
                },
                booking_date: new Date(formData.booking_date).toLocaleDateString(),
                timestamp: new Date().toLocaleString()
            };

            try {
                // Generate and show bill immediately
                const billSection = document.getElementById('bill-section');
                if (!billSection) {
                    throw new Error('Bill section not found');
                }
                
                // Store booking data before generating bill
                sessionStorage.setItem('bookingData', JSON.stringify(bookingDetails));
                
                // Generate bill
                generateBill(bookingDetails);
                
                // Update URL and scroll to bill
                window.history.pushState({}, '', '#bill-section');
                billSection.scrollIntoView({ behavior: 'smooth' });
            } catch (error) {
                console.error('Bill generation error:', error);
                alert('Error generating bill. Please try again.');
            }
        } else {
            throw new Error(data.message || 'Booking failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert(error.message || 'An error occurred while booking. Please try again.');
    });
}

function generateBill(bookingData) {
    try {
        const billSection = document.getElementById('bill-section');
        if (!billSection) {
            throw new Error('Bill section not found');
        }

        // Calculate charges
        let baseCharge = 0;
        switch(bookingData.care_duration) {
            case 'full-time': baseCharge = 25000; break;
            case 'day': baseCharge = 15000; break;
            case 'night': baseCharge = 15000; break;
            case 'hourly': baseCharge = 500; break;
            default: baseCharge = 15000;
        }

        const gst = baseCharge * 0.18;
        const totalCharge = baseCharge + gst;

        // Update bill content
        document.getElementById('bookingId').textContent = bookingData.booking_id;
        document.getElementById('bookingDate').textContent = bookingData.timestamp;
        document.getElementById('customerName').textContent = bookingData.customer_name;
        document.getElementById('customerEmail').textContent = bookingData.customer_email;
        document.getElementById('customerPhone').textContent = bookingData.customer_phone;
        document.getElementById('customerAddress').textContent = bookingData.customer_address;
        document.getElementById('caregiverName').textContent = bookingData.caregiver.name;
        document.getElementById('caregiverExperience').textContent = bookingData.caregiver.experience;
        document.getElementById('caregiverSpecialization').textContent = bookingData.caregiver.specialization;
        document.getElementById('careDuration').textContent = bookingData.care_duration;
        document.getElementById('startDate').textContent = bookingData.booking_date;
        document.getElementById('requirements').textContent = bookingData.requirements || 'None';
        document.getElementById('baseCharge').textContent = `₹${baseCharge.toFixed(2)}`;
        document.getElementById('gstCharge').textContent = `₹${gst.toFixed(2)}`;
        document.getElementById('totalCharge').textContent = `₹${totalCharge.toFixed(2)}`;

        // Show the bill section
        billSection.style.display = 'block';
        billSection.scrollIntoView({ behavior: 'smooth' });
        
        console.log('Bill generated successfully');
    } catch (error) {
        console.error('Error generating bill:', error);
        alert('Error generating bill: ' + error.message);
    }
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
    
    if (mainContent && maidsContent) {
        mainContent.style.display = 'none';
        maidsContent.style.display = 'block';
        displayMaidProfiles(); // Display profiles when toggling
    }
}

function goBack() {
    const mainContent = document.getElementById('mainContent');
    const maidsContent = document.getElementById('maidsContent');
    
    if (mainContent && maidsContent) {
        maidsContent.style.display = 'none';
        mainContent.style.display = 'block';
    }
}

function showMaids() {
    toggleMaidProfiles(); // Reuse the same function for consistency
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Display initial profiles
    displayMaidProfiles();
    
    // Show maids content and hide main content initially
    const mainContent = document.getElementById('mainContent');
    const maidsContent = document.getElementById('maidsContent');
    
    if (mainContent && maidsContent) {
        mainContent.style.display = 'none';
        maidsContent.style.display = 'block';
    }

    // Check URL hash for bill section
    if (window.location.hash === '#bill-section') {
        const bookingData = sessionStorage.getItem('bookingData');
        if (bookingData) {
            try {
                const data = JSON.parse(bookingData);
                generateBill(data);
                // Clear the stored data
                sessionStorage.removeItem('bookingData');
            } catch (error) {
                console.error('Error loading booking data:', error);
            }
        }
    }
}); 
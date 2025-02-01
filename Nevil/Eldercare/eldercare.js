const maids = [
    {
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
    
    const maid = maids.find(m => m.name === maidName);
    const formData = {
        name: document.getElementById('userName').value,
        email: document.getElementById('userEmail').value,
        mobile: document.getElementById('userMobile').value,
        address: document.getElementById('userAddress').value,
        notes: document.getElementById('userNotes').value
    };

    // Calculate bill amount (example calculation)
    const billAmount = parseInt(maid.salary.replace(/[^0-9]/g, ''));
    const gst = billAmount * 0.18; // 18% GST
    const totalAmount = billAmount + gst;

    // Create bill HTML
    const billHTML = `
        <div class="bill-content">
            <div class="bill-header">
                <h3>ElderCare Pro Services</h3>
                <p>Invoice #: ECB-${Date.now().toString().slice(-6)}</p>
                <p>Date: ${new Date().toLocaleDateString()}</p>
            </div>
            <div class="bill-details">
                <div class="customer-details">
                    <h4>Customer Details:</h4>
                    <p>Name: ${formData.name}</p>
                    <p>Email: ${formData.email}</p>
                    <p>Mobile: ${formData.mobile}</p>
                    <p>Address: ${formData.address}</p>
                </div>
                <div class="service-details">
                    <h4>Service Details:</h4>
                    <p>Caregiver: ${maid.name}</p>
                    <p>Experience: ${maid.experience}</p>
                    <p>Skills: ${maid.skills.join(', ')}</p>
                </div>
                <div class="amount-details">
                    <div class="amount-row">
                        <span>Base Amount:</span>
                        <span>₹${billAmount.toLocaleString()}</span>
                    </div>
                    <div class="amount-row">
                        <span>GST (18%):</span>
                        <span>₹${gst.toLocaleString()}</span>
                    </div>
                    <div class="amount-row total">
                        <span>Total Amount:</span>
                        <span>₹${totalAmount.toLocaleString()}</span>
                    </div>
                </div>
            </div>
            <div class="bill-footer">
                <p>Thank you for choosing ElderCare Pro Services!</p>
                <p>For any queries, contact: +91 1234567890</p>
            </div>
        </div>
    `;

    // Show confirmation notification with bill
    const notification = document.createElement('div');
    notification.className = 'notification large-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <h4>Booking Confirmed!</h4>
            <p>Thank you ${formData.name}!</p>
            <p>Your booking with ${maidName} has been confirmed.</p>
            <p>Our team will contact you shortly at ${formData.mobile}.</p>
            ${billHTML}
            <button onclick='downloadBill(${JSON.stringify({
                maidName: maidName,
                formData: formData,
                billAmount: billAmount,
                gst: gst,
                totalAmount: totalAmount
            })})'
            class="download-bill-btn">
                Download Invoice PDF
                <span class="download-icon">📥</span>
            </button>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Close the modal
    const modal = document.querySelector('.hidden-details');
    const backdrop = document.querySelector('.modal-backdrop');
    modal.remove();
    backdrop.remove();
    document.body.style.overflow = 'auto';
    
    // Remove notification after user closes it
    const closeButton = document.createElement('button');
    closeButton.className = 'notification-close';
    closeButton.innerHTML = '×';
    closeButton.onclick = () => notification.remove();
    notification.appendChild(closeButton);
}

function downloadBill(data) {
    // Create bill content for PDF
    const billContent = `
        <html>
            <head>
                <style>
                    body { 
                        font-family: Arial, sans-serif; 
                        padding: 20px;
                        line-height: 1.6;
                    }
                    .bill-header { 
                        text-align: center; 
                        margin-bottom: 30px;
                        padding-bottom: 20px;
                        border-bottom: 2px solid #4f46e5;
                    }
                    .bill-details { 
                        margin-bottom: 30px;
                    }
                    .amount-details { 
                        margin-top: 20px;
                        background: #f8fafc;
                        padding: 15px;
                        border-radius: 8px;
                    }
                    .amount-row { 
                        display: flex; 
                        justify-content: space-between;
                        padding: 8px 0;
                    }
                    .total { 
                        font-weight: bold; 
                        margin-top: 10px;
                        padding-top: 10px;
                        border-top: 1px solid #ccc;
                    }
                    h2, h3 { 
                        color: #4f46e5;
                    }
                    .bill-footer {
                        margin-top: 40px;
                        text-align: center;
                        color: #666;
                        border-top: 1px solid #eee;
                        padding-top: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="bill-header">
                    <h2>ElderCare Pro Services</h2>
                    <p>Invoice #: ECB-${Date.now().toString().slice(-6)}</p>
                    <p>Date: ${new Date().toLocaleDateString()}</p>
                </div>
                <div class="bill-details">
                    <h3>Customer Details:</h3>
                    <p>Name: ${data.formData.name}</p>
                    <p>Email: ${data.formData.email}</p>
                    <p>Mobile: ${data.formData.mobile}</p>
                    <p>Address: ${data.formData.address}</p>
                    
                    <h3>Service Details:</h3>
                    <p>Caregiver: ${data.maidName}</p>
                    
                    <div class="amount-details">
                        <div class="amount-row">
                            <span>Base Amount:</span>
                            <span>₹${data.billAmount.toLocaleString()}</span>
                        </div>
                        <div class="amount-row">
                            <span>GST (18%):</span>
                            <span>₹${data.gst.toLocaleString()}</span>
                        </div>
                        <div class="amount-row total">
                            <span>Total Amount:</span>
                            <span>₹${data.totalAmount.toLocaleString()}</span>
                        </div>
                    </div>
                </div>
                <div class="bill-footer">
                    <p>Thank you for choosing ElderCare Pro Services!</p>
                    <p>For any queries, contact: +91 1234567890</p>
                </div>
            </body>
        </html>
    `;

    // Convert HTML to PDF and download
    const opt = {
        margin: [0.5, 0.5],
        filename: `ElderCare_Invoice_${Date.now()}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2,
            useCORS: true,
            logging: true
        },
        jsPDF: { 
            unit: 'in', 
            format: 'a4', 
            orientation: 'portrait'
        }
    };

    // Use html2pdf library to generate PDF
    html2pdf().set(opt).from(billContent).save();
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
// Simple babysitter profiles with basic information
const maids = [
    // Male Caregivers
    {
        id: 1,
        name: "Rajesh Kumar",
        age: 28,
        rating: 4.8,
        gender: "Male",
        timing: "9 AM - 5 PM"
    },
    {
        id: 2,
        name: "Amit Singh",
        age: 32,
        rating: 4.9,
        gender: "Male",
        timing: "8 AM - 4 PM"
    },
    {
        id: 3,
        name: "Suresh Patel",
        age: 30,
        rating: 4.7,
        gender: "Male",
        timing: "9 AM - 5 PM"
    },
    {
        id: 4,
        name: "Vikram Malhotra",
        age: 35,
        rating: 5.0,
        gender: "Male",
        timing: "9 AM - 5 PM"
    },
    {
        id: 5,
        name: "Rahul Verma",
        age: 29,
        rating: 4.6,
        gender: "Male",
        timing: "9 AM - 5 PM"
    },
    {
        id: 6,
        name: "Arun Sharma",
        age: 33,
        rating: 4.8,
        gender: "Male",
        timing: "9 AM - 5 PM"
    },
    {
        id: 7,
        name: "Deepak Gupta",
        age: 31,
        rating: 4.7,
        gender: "Male",
        timing: "9 AM - 5 PM"
    },
    {
        id: 8,
        name: "Sanjay Yadav",
        age: 34,
        rating: 4.9,
        gender: "Male",
        timing: "9 AM - 5 PM"
    },
    {
        id: 9,
        name: "Mohan Kapoor",
        age: 32,
        rating: 4.8,
        gender: "Male",
        timing: "9 AM - 5 PM"
    },
    {
        id: 10,
        name: "Karan Mehra",
        age: 36,
        rating: 4.9,
        gender: "Male",
        timing: "10 AM - 6 PM"
    },
    // Female Caregivers
    {
        id: 11,
        name: "Priya Sharma",
        age: 28,
        rating: 4.8,
        gender: "Female",
        timing: "9 AM - 5 PM"
    },
    {
        id: 12,
        name: "Anjali Verma",
        age: 32,
        rating: 4.9,
        gender: "Female",
        timing: "9 AM - 5 PM"
    },
    {
        id: 13,
        name: "Meera Patel",
        age: 30,
        rating: 4.7,
        gender: "Female",
        timing: "9 AM - 5 PM"
    },
    {
        id: 14,
        name: "Pooja Malhotra",
        age: 35,
        rating: 5.0,
        gender: "Female",
        timing: "9 AM - 5 PM"
    },
    {
        id: 15,
        name: "Neha Gupta",
        age: 29,
        rating: 4.6,
        gender: "Female",
        timing: "9 AM - 5 PM"
    },
    {
        id: 16,
        name: "Ritu Kapoor",
        age: 33,
        rating: 4.8,
        gender: "Female",
        timing: "9 AM - 5 PM"
    },
    {
        id: 17,
        name: "Kavita Singh",
        age: 31,
        rating: 4.7,
        gender: "Female",
        timing: "9 AM - 5 PM"
    },
    {
        id: 18,
        name: "Suman Yadav",
        age: 34,
        rating: 4.9,
        gender: "Female",
        timing: "9 AM - 5 PM"
    },
    {
        id: 19,
        name: "Deepika Reddy",
        age: 32,
        rating: 4.8,
        gender: "Female",
        timing: "9 AM - 5 PM"
    },
    {
        id: 20,
        name: "Anita Mehra",
        age: 36,
        rating: 4.9,
        gender: "Female",
        timing: "8 AM - 4 PM"
    }
];

// Function to create star rating
function createStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for(let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    if(hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for(let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    return stars;
}

// Function to create skill tags
function createSkillTags(skills) {
    return skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');
}

// Function to display maid profiles
function displayMaidProfiles() {
    const maidGrid = document.querySelector('.maid-grid');
    maidGrid.innerHTML = '';
    
    document.querySelector('.online-status span:last-child').textContent = 
        `${maids.length} Caregivers Available`;
    
    maids.forEach(maid => {
        const maidCard = document.createElement('div');
        maidCard.className = 'maid-card';
        maidCard.innerHTML = `
            <div class="card-header">
                <h3>${maid.name}</h3>
                <span class="online-dot"></span>
            </div>
            <div class="rating">
                ${createStarRating(maid.rating)}
                <span>(${maid.rating})</span>
            </div>
            <div class="maid-info">
                <p><i class="fas fa-user"></i> Age: ${maid.age}</p>
                <p><i class="fas fa-venus-mars"></i> Gender: ${maid.gender}</p>
                <p><i class="fas fa-clock"></i> Timing: ${maid.timing}</p>
            </div>
            <button class="view-btn" onclick="showMaidDetails(${maid.id})">
                <i class="fas fa-arrow-right"></i> Proceed to Book
            </button>
        `;
        maidGrid.appendChild(maidCard);
    });
}

// Function to show maid details in modal
function showMaidDetails(maidId) {
    const maid = maids.find(m => m.id === maidId);
    if (!maid) return;

    const modalDetails = document.getElementById('modal-details');
    modalDetails.innerHTML = `
        <div class="modal-header">
            <div class="profile-header">
                <div class="profile-image">
                    <i class="fas fa-user-circle"></i>
                </div>
                <div class="profile-title">
                    <h2>${maid.name}</h2>
                    <div class="rating">
                        ${createStarRating(maid.rating)}
                        <span class="rating-number">(${maid.rating})</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-info">
            <form id="booking-form" onsubmit="handleBookingSubmit(event, ${maid.id})">
                <div class="form-group">
                    <label>Your Name:</label>
                    <input type="text" name="client_name" required>
                </div>
                <div class="form-group">
                    <label>Your Email:</label>
                    <input type="email" name="client_email" required>
                </div>
                <div class="form-group">
                    <label>Phone Number:</label>
                    <input type="tel" name="client_phone" pattern="[0-9]{10}" required>
                </div>
                <div class="form-group">
                    <label>Address:</label>
                    <textarea name="client_address" required rows="3"></textarea>
                </div>
                <input type="hidden" name="maid_id" value="${maid.id}">
                <button type="submit" class="book-btn">Confirm Booking</button>
            </form>
            <div id="bill-preview" style="display: none;">
                <div class="bill-container">
                    <div class="bill-header">
                        <h3>Booking Confirmation</h3>
                    </div>
                    <div class="bill-content">
                        <!-- Bill content will be populated by JavaScript -->
                    </div>
                    <button onclick="downloadBill()" class="download-btn">
                        <i class="fas fa-download"></i> Download PDF
                    </button>
                </div>
            </div>
        </div>
    `;
    
    document.getElementById('modal').style.display = 'block';
}

// Close modal when clicking the close button or outside the modal
document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayMaidProfiles();
    
    // Setup view maids button
    const viewMaidsBtn = document.getElementById('view-maids-btn');
    const maidsSection = document.getElementById('maids-section');

    viewMaidsBtn.addEventListener('click', function() {
        maidsSection.style.display = 'block';
        maidsSection.scrollIntoView({ behavior: 'smooth' });
        viewMaidsBtn.style.display = 'none';
    });
    
    // Setup booking form
    document.getElementById('booking-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.book-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        submitBtn.disabled = true;
        
        const formData = new FormData(this);
        
        fetch('process_booking.php', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                submitBtn.innerHTML = '<i class="fas fa-check"></i> Booked Successfully!';
                setTimeout(() => {
                    document.getElementById('modal').style.display = 'none';
                    this.reset();
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                }, 2000);
            } else {
                throw new Error(data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            submitBtn.innerHTML = '<i class="fas fa-exclamation-circle"></i> Error';
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
            alert('An error occurred while processing your booking');
        });
    });
});

// Home button functionality
document.querySelector('a[href="#home"]').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Hide maids section
    const maidsSection = document.getElementById('maids-section');
    maidsSection.style.display = 'none';
    
    // Show the view maids button again
    const viewMaidsBtn = document.getElementById('view-maids-btn');
    viewMaidsBtn.style.display = 'inline-flex';
    
    // Scroll to top smoothly
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add navbar background color change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#ffffff';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Add new functions for handling booking and bill generation
function handleBookingSubmit(event, maidId) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const maid = maids.find(m => m.id === maidId);
    
    // Calculate costs
    const basicCharge = 15000;
    const gst = basicCharge * 0.18; // 18% GST
    const totalAmount = basicCharge + gst;
    
    // Store booking details for bill generation
    window.bookingDetails = {
        maidId: maidId,
        maidName: maid.name,
        clientName: formData.get('client_name'),
        clientEmail: formData.get('client_email'),
        clientPhone: formData.get('client_phone'),
        clientAddress: formData.get('client_address'),
        bookingDate: new Date().toLocaleDateString(),
        bookingId: 'BK' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        basicCharge: basicCharge,
        gst: gst,
        totalAmount: totalAmount
    };

    // Hide form and show bill
    form.style.display = 'none';
    const billPreview = document.getElementById('bill-preview');
    billPreview.style.display = 'block';
    
    // Display bill content
    const billContent = billPreview.querySelector('.bill-content');
    billContent.innerHTML = `
        <div class="bill-details">
            <div class="bill-section">
                <h4>Booking Details</h4>
                <p><strong>Booking ID:</strong> ${window.bookingDetails.bookingId}</p>
                <p><strong>Date:</strong> ${window.bookingDetails.bookingDate}</p>
                <p><strong>Caregiver:</strong> ${window.bookingDetails.maidName}</p>
            </div>
            
            <div class="bill-section">
                <h4>Client Information</h4>
                <p><strong>Name:</strong> ${window.bookingDetails.clientName}</p>
                <p><strong>Phone:</strong> ${window.bookingDetails.clientPhone}</p>
                <p><strong>Email:</strong> ${window.bookingDetails.clientEmail}</p>
                <p><strong>Address:</strong> ${window.bookingDetails.clientAddress}</p>
            </div>
            
            <div class="bill-section">
                <h4>Charges Breakdown</h4>
                <div class="charges-table">
                    <div class="charge-row">
                        <span>Basic Charge:</span>
                        <span>₹${window.bookingDetails.basicCharge.toLocaleString()}</span>
                    </div>
                    <div class="charge-row">
                        <span>GST (18%):</span>
                        <span>₹${window.bookingDetails.gst.toLocaleString()}</span>
                    </div>
                    <div class="charge-row total">
                        <span>Total Amount:</span>
                        <span>₹${window.bookingDetails.totalAmount.toLocaleString()}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function downloadBill() {
    const { 
        maidName, 
        clientName, 
        clientEmail, 
        clientPhone, 
        clientAddress, 
        bookingDate, 
        bookingId,
        basicCharge,
        gst,
        totalAmount 
    } = window.bookingDetails;
    
    const billHTML = `
        <div style="font-family: Arial, sans-serif; padding: 40px; max-width: 800px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 30px;">
                <h1 style="color: #7c5dfa; margin-bottom: 10px;">BabyCare Services</h1>
                <h2 style="color: #333;">Booking Confirmation Bill</h2>
            </div>
            
            <div style="margin: 20px 0; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                <h3 style="color: #7c5dfa; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #eee;">Booking Details</h3>
                <p style="margin: 10px 0;"><strong style="display: inline-block; width: 150px;">Booking ID:</strong> ${bookingId}</p>
                <p style="margin: 10px 0;"><strong style="display: inline-block; width: 150px;">Date:</strong> ${bookingDate}</p>
                <p style="margin: 10px 0;"><strong style="display: inline-block; width: 150px;">Caregiver Name:</strong> ${maidName}</p>
            </div>

            <div style="margin: 20px 0; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                <h3 style="color: #7c5dfa; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #eee;">Client Information</h3>
                <p style="margin: 10px 0;"><strong style="display: inline-block; width: 150px;">Client Name:</strong> ${clientName}</p>
                <p style="margin: 10px 0;"><strong style="display: inline-block; width: 150px;">Phone Number:</strong> ${clientPhone}</p>
                <p style="margin: 10px 0;"><strong style="display: inline-block; width: 150px;">Email:</strong> ${clientEmail}</p>
                <p style="margin: 10px 0;"><strong style="display: inline-block; width: 150px;">Address:</strong> ${clientAddress}</p>
            </div>
            
            <div style="margin: 20px 0; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                <h3 style="color: #7c5dfa; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #eee;">Charges Breakdown</h3>
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                    <tr style="background: #f8f8f8;">
                        <th style="padding: 15px; border: 1px solid #ddd; text-align: left;">Description</th>
                        <th style="padding: 15px; border: 1px solid #ddd; text-align: right;">Amount</th>
                    </tr>
                    <tr>
                        <td style="padding: 15px; border: 1px solid #ddd;">Basic Charge</td>
                        <td style="padding: 15px; border: 1px solid #ddd; text-align: right;">₹${basicCharge.toLocaleString()}</td>
                    </tr>
                    <tr>
                        <td style="padding: 15px; border: 1px solid #ddd;">GST (18%)</td>
                        <td style="padding: 15px; border: 1px solid #ddd; text-align: right;">₹${gst.toLocaleString()}</td>
                    </tr>
                    <tr style="background: #f8f8f8; font-weight: bold;">
                        <td style="padding: 15px; border: 1px solid #ddd;">Total Amount</td>
                        <td style="padding: 15px; border: 1px solid #ddd; text-align: right;">₹${totalAmount.toLocaleString()}</td>
                    </tr>
                </table>
            </div>
            
            <div style="margin-top: 40px; text-align: center; color: #666; border-top: 2px solid #eee; padding-top: 20px;">
                <p style="margin: 5px 0;">Thank you for choosing BabyCare Services!</p>
                <p style="margin: 5px 0;">For any queries, please contact support@babycare.com</p>
                <p style="margin: 5px 0; color: #7c5dfa;">www.babycare.com</p>
            </div>
        </div>
    `;

    const opt = {
        margin: 0.5,
        filename: `booking_bill_${bookingId}.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2,
            useCORS: true,
            letterRendering: true
        },
        jsPDF: { 
            unit: 'in', 
            format: 'a4', 
            orientation: 'portrait'
        }
    };

    html2pdf().from(billHTML).set(opt).save()
        .catch(err => {
            console.error('PDF generation failed:', err);
            alert('Failed to generate PDF. Please try again.');
        });
}
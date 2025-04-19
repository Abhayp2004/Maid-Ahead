// Simple babysitter profiles with basic information
const maids = [
    {
        id: 1,
        name: "Priya Sharma",
        age: 28,
        experience: "4 years",
        rating: 4.8,
        salary: "₹15,000/month",
        availability: "Full-time",
        skills: ["Infant Care", "Toddler Care", "Child Activities"]
    },
    {
        id: 2,
        name: "Lakshmi Patel",
        age: 32,
        experience: "7 years",
        rating: 4.9,
        salary: "₹18,000/month",
        availability: "Full-time",
        skills: ["Newborn Care", "Story Telling", "Educational Activities"]
    },
    {
        id: 3,
        name: "Anjali Verma",
        age: 25,
        experience: "3 years",
        rating: 4.7,
        salary: "₹14,000/month",
        availability: "Full-time",
        skills: ["Baby Care", "Arts & Crafts", "Indoor Games"]
    },
    {
        id: 4,
        name: "Sunita Devi",
        age: 35,
        experience: "10 years",
        rating: 5.0,
        salary: "₹20,000/month",
        availability: "Live-in",
        skills: ["Child Care", "Educational Support", "Outdoor Activities"]
    },
    {
        id: 5,
        name: "Meena Kumari",
        age: 29,
        experience: "5 years",
        rating: 4.6,
        salary: "₹16,000/month",
        availability: "Full-time",
        skills: ["Infant Care", "Child Safety", "Basic First Aid"]
    },
    {
        id: 6,
        name: "Rekha Singh",
        age: 31,
        experience: "6 years",
        rating: 4.8,
        salary: "₹17,000/month",
        availability: "Live-in",
        skills: ["Baby Care", "Story Reading", "Creative Activities"]
    },
    {
        id: 7,
        name: "Radha Gupta",
        age: 27,
        experience: "4 years",
        rating: 4.7,
        salary: "₹15,000/month",
        availability: "Full-time",
        skills: ["Child Care", "Drawing & Painting", "Educational Games"]
    },
    {
        id: 8,
        name: "Kavita Yadav",
        age: 33,
        experience: "8 years",
        rating: 4.9,
        salary: "₹19,000/month",
        availability: "Live-in",
        skills: ["Toddler Care", "Child Development", "Learning Activities"]
    },
    {
        id: 9,
        name: "Sushma Kumari",
        age: 30,
        experience: "5 years",
        rating: 4.8,
        salary: "₹16,000/month",
        availability: "Full-time",
        skills: ["Infant Care", "Interactive Games", "Basic Child Care"]
    },
    {
        id: 10,
        name: "Geeta Devi",
        age: 34,
        experience: "7 years",
        rating: 4.7,
        salary: "₹17,000/month",
        availability: "Full-time",
        skills: ["Baby Care", "Child Entertainment", "Safety First"]
    }
];

// Male babysitter profiles
const maleMaids = [
    {
        id: 1,
        name: "Rajesh Kumar",
        age: 28,
        experience: "4 years",
        rating: 4.8,
        salary: "₹15,000/month",
        availability: "Full-time",
        skills: ["Child Care", "Educational Activities", "Sports Training"]
    },
    {
        id: 2,
        name: "Amit Singh",
        age: 32,
        experience: "7 years",
        rating: 4.9,
        salary: "₹18,000/month",
        availability: "Full-time",
        skills: ["Child Development", "Educational Support", "Indoor Games"]
    },
    {
        id: 3,
        name: "Suresh Patel",
        age: 25,
        experience: "3 years",
        rating: 4.7,
        salary: "₹14,000/month",
        availability: "Full-time",
        skills: ["Child Care", "Arts & Crafts", "Physical Activities"]
    },
    {
        id: 4,
        name: "Rahul Verma",
        age: 35,
        experience: "10 years",
        rating: 5.0,
        salary: "₹20,000/month",
        availability: "Live-in",
        skills: ["Child Education", "Sports Coaching", "Safety First"]
    },
    {
        id: 5,
        name: "Arun Sharma",
        age: 29,
        experience: "5 years",
        rating: 4.6,
        salary: "₹16,000/month",
        availability: "Full-time",
        skills: ["Child Care", "Basic First Aid", "Educational Games"]
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
    
    // Get gender preference from sessionStorage
    const storedGender = sessionStorage.getItem('gender');
    console.log('Stored gender preference:', storedGender);
    
    // Choose which profiles to display based on gender
    let profilesToShow;
    if (storedGender === 'male') {
        profilesToShow = maleMaids;
        console.log('Showing male profiles');
    } else if (storedGender === 'female') {
        profilesToShow = maids;
        console.log('Showing female profiles');
    } else {
        // For 'any' preference, show female profiles by default
        profilesToShow = maids;
        console.log('Showing default female profiles');
    }
    
    profilesToShow.forEach(maid => {
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
                <p><i class="fas fa-briefcase"></i> Experience: ${maid.experience}</p>
                <p><i class="fas fa-clock"></i> Availability: ${maid.availability}</p>
                <p><i class="fas fa-rupee-sign"></i> Salary: ${maid.salary}</p>
            </div>
            <div class="skill-tags">
                ${createSkillTags(maid.skills)}
            </div>
            <button class="view-btn" onclick="showMaidDetails(${maid.id})">
                <i class="fas fa-eye"></i> View Details
            </button>
        `;
        maidGrid.appendChild(maidCard);
    });
    
    // Store the current gender preference
    if (!sessionStorage.getItem('gender')) {
        sessionStorage.setItem('gender', 'female'); // default to female
    }
}

// Function to show maid details in modal
function showMaidDetails(maidId) {
    // Get gender preference from sessionStorage
    const storedGender = sessionStorage.getItem('gender');
    
    // Find the maid in the appropriate array
    let maid;
    if (storedGender === 'male') {
        maid = maleMaids.find(m => m.id === maidId);
    } else {
        maid = maids.find(m => m.id === maidId);
    }

    if (!maid) return;

    const modal = document.getElementById('modal');
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
                    <span class="availability-badge ${maid.availability.toLowerCase().replace(' ', '-')}">
                        <i class="fas fa-clock"></i> ${maid.availability}
                    </span>
                </div>
            </div>
        </div>
        <div class="modal-info">
            <div class="info-section">
                <h3><i class="fas fa-info-circle"></i> Basic Information</h3>
                <div class="info-grid">
                    <div class="info-item">
                        <i class="fas fa-user"></i>
                        <div class="info-content">
                            <label>Age</label>
                            <span>${maid.age} years</span>
                        </div>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-briefcase"></i>
                        <div class="info-content">
                            <label>Experience</label>
                            <span>${maid.experience}</span>
                        </div>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-rupee-sign"></i>
                        <div class="info-content">
                            <label>Expected Salary</label>
                            <span>${maid.salary}</span>
                        </div>
                    </div>
                    <div class="info-item">
                        <i class="fas fa-calendar-check"></i>
                        <div class="info-content">
                            <label>Availability</label>
                            <span>${maid.availability}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="skills-section">
                <h3><i class="fas fa-star"></i> Specializations</h3>
                <div class="skills-grid">
                    ${maid.skills.map(skill => `
                        <div class="skill-item">
                            <i class="fas fa-check-circle"></i>
                            <span>${skill}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
        
        <!-- Update the booking form section -->
        <div class="booking-section">
            <h3>Book Appointment</h3>
            <form id="booking-form">
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
                        <select name="care_duration" id="care_duration" required>
                            <option value="">Select duration</option>
                            <option value="full-time">Full-time Care</option>
                            <option value="part-time">Part-time Care</option>
                            <option value="hourly">Hourly Care</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="booking_date">Start Date *</label>
                        <input type="date" id="booking_date" name="booking_date" required min="${new Date().toISOString().split('T')[0]}">
                    </div>
                    <div class="form-group">
                        <label for="userNotes">Additional Requirements</label>
                        <textarea id="userNotes" rows="3" placeholder="Any specific requirements we should know about"></textarea>
                    </div>
                </div>
                <button type="submit" class="book-button" onclick="bookAppointment(event, ${maid.id})">
                    Confirm Booking
                </button>
            </form>
        </div>
    `;
    
    // Show the modal
    modal.style.display = 'block';
    modal.scrollTop = 0;
    document.body.style.overflow = 'hidden';
}

// Modify the modal close handlers to restore body scrolling
document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Restore scrolling
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    // Display maid profiles immediately
    displayMaidProfiles();
    
    // Show maids section by default
    const maidsSection = document.getElementById('maids-section');
    maidsSection.style.display = 'block';
    
    // Hide the view maids button since we're showing profiles immediately
    const viewMaidsBtn = document.getElementById('view-maids-btn');
    if (viewMaidsBtn) {
        viewMaidsBtn.style.display = 'none';
    }
    
    // Read stored preferences
    const storedGender = sessionStorage.getItem('gender');
    console.log('Initial stored gender:', storedGender);
    
    // Clear stored preferences after reading them
    sessionStorage.clear();

    // Setup booking form
    document.getElementById('booking-form').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('.book-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
        submitBtn.disabled = true;
        
        const formData = new FormData(this);
        
        fetch('../Babysitter/process_booking.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
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

    // Add listener for gender preference changes
    document.querySelectorAll('input[name="sitter-gender"]').forEach(radio => {
        radio.addEventListener('change', function() {
            console.log('Gender preference changed to:', this.value); // Debug log
            displayMaidProfiles();
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

// Filter functionality
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        displayMaidProfiles();
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

function bookService(serviceType) {
    let serviceName;
    switch(serviceType) {
        case 'cooking':
            serviceName = 'Cooking Service';
            break;
        case 'cleaning':
            serviceName = 'Cleaning Service';
            break;
        case 'complete':
            serviceName = 'Complete Package (Cooking + Cleaning)';
            break;
        default:
            serviceName = 'Unknown Service';
    }
    
    // You can customize this to integrate with your booking system
    alert(`Booking form will open for: ${serviceName}`);
    // Here you can add code to open a booking modal or redirect to a booking page
}

// Update the bookAppointment function
function bookAppointment(event, maidId) {
    event.preventDefault();

    const userName = document.getElementById('userName').value;
    const userEmail = document.getElementById('userEmail').value;
    const userMobile = document.getElementById('userMobile').value;
    const userAddress = document.getElementById('userAddress').value;
    const careDuration = document.getElementById('care_duration').value;
    const bookingDate = document.getElementById('booking_date').value;
    const userNotes = document.getElementById('userNotes')?.value || '';

    if (!userName || !userEmail || !userMobile || !userAddress || !careDuration || !bookingDate) {
        alert('Please fill in all required fields');
        return;
    }

    const formData = {
        maid_id: maidId,
        customer_name: userName,
        customer_email: userEmail,
        customer_phone: userMobile,
        customer_address: userAddress,
        care_duration: careDuration,
        booking_date: bookingDate,
        requirements: userNotes
    };

    fetch('process_booking.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            const storedGender = sessionStorage.getItem('gender');
            const babysitter = storedGender === 'male' ? 
                maleMaids.find(m => m.id === maidId) : 
                maids.find(m => m.id === maidId);

            if (!babysitter) {
                throw new Error('Babysitter not found');
            }

            const bookingDetails = {
                booking_id: data.booking_id,
                babysitter: {
                    name: babysitter.name,
                    experience: babysitter.experience,
                    specialization: babysitter.skills.join(', ')
                },
                customer_name: userName,
                customer_email: userEmail,
                customer_phone: userMobile,
                customer_address: userAddress,
                care_duration: careDuration,
                booking_date: new Date(bookingDate).toLocaleDateString(),
                requirements: userNotes,
                timestamp: new Date().toLocaleString()
            };

            sessionStorage.setItem('bookingData', JSON.stringify(bookingDetails));
            window.location.href = '../Babysitter_new/babysitter_new.html#bill-section';

        } else {
            throw new Error(data.message || 'Booking failed');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while processing your booking. Please try again.');
    });
}

// Update the generateBill function
function generateBill(bookingData) {
    // Calculate charges based on care duration
    let baseCharge = 0;
    switch(bookingData.care_duration) {
        case 'full-time': baseCharge = 15000; break;
        case 'part-time': baseCharge = 8000; break;
        case 'hourly': baseCharge = 300; break;
        default: baseCharge = 8000;
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
    document.getElementById('caregiverName').textContent = bookingData.babysitter.name;
    document.getElementById('caregiverExperience').textContent = bookingData.babysitter.experience;
    document.getElementById('caregiverSpecialization').textContent = bookingData.babysitter.specialization;
    document.getElementById('careDuration').textContent = bookingData.care_duration;
    document.getElementById('startDate').textContent = bookingData.booking_date;
    document.getElementById('requirements').textContent = bookingData.requirements || 'None';
    document.getElementById('baseCharge').textContent = `₹${baseCharge.toFixed(2)}`;
    document.getElementById('gstCharge').textContent = `₹${gst.toFixed(2)}`;
    document.getElementById('totalCharge').textContent = `₹${totalCharge.toFixed(2)}`;

    // Show the bill section
    const billSection = document.getElementById('bill-section');
    billSection.style.display = 'flex';
}
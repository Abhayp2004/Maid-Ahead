
const maids = [
    {
        id: 1,
        name: "Rajesh Kumar",
        age: 32,
        gender: "Male",
        experience: "6 years",
        rating: 4.8,
        services: ["Cleaning"]
    },
    {
        id: 2,
        name: "Amit Sharma",
        age: 28,
        gender: "Male",
        experience: "4 years",
        rating: 4.7,
        services: ["Cleaning", "Cooking"]
    },
    {
        id: 3,
        name: "Priya Singh",
        age: 30,
        experience: "5 years",
        rating: 4.9,
        services: ["Cooking"]
    },
    {
        id: 4,
        name: "Suresh Patel",
        age: 35,
        experience: "8 years",
        rating: 4.8,
        services: ["Cleaning"]
    },
    {
        id: 5,
        name: "Deepak Verma",
        age: 29,
        experience: "3 years",
        rating: 4.6,
        services: ["Cleaning", "Cooking"]
    },
    {
        id: 6,
        name: "Lakshmi Devi",
        age: 33,
        experience: "7 years",
        rating: 4.7,
        services: ["Cooking"]
    },
    {
        id: 7,
        name: "Ramesh Yadav",
        age: 31,
        experience: "5 years",
        rating: 4.8,
        services: ["Cleaning"]
    },
    {
        id: 8,
        name: "Sanjay Gupta",
        age: 34,
        experience: "6 years",
        rating: 4.7,
        services: ["Cleaning", "Cooking"]
    },
    {
        id: 9,
        name: "Meena Kumari",
        age: 29,
        experience: "4 years",
        rating: 4.9,
        services: ["Cooking"]
    },
    {
        id: 10,
        name: "Vikram Singh",
        age: 36,
        experience: "9 years",
        rating: 4.8,
        services: ["Cleaning"]
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
    return stars;
}

// Function to create skill tags
function createSkillTags(skills) {
    return skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('');
}

// Function to display housekeeper profiles
function displayMaidProfiles(filteredMaids = maids) {
    const maidGrid = document.querySelector('.maid-grid');
    maidGrid.innerHTML = '';
    
    filteredMaids.forEach(maid => {
        const maidCard = document.createElement('div');
        maidCard.className = 'maid-profile';
        maidCard.innerHTML = `
            <div class="profile-content">
                <h2>${maid.name}</h2>
                <div class="rating">
                    ${createStarRating(maid.rating)}
                    <span>(${maid.rating})</span>
                </div>
                <p class="gender"><i class="fas fa-venus-mars"></i> Gender: ${maid.gender}</p>
                <p class="age"><i class="fas fa-user"></i> Age: ${maid.age} years</p>
                <p class="experience"><i class="fas fa-briefcase"></i> Experience: ${maid.experience}</p>
                <p class="services"><i class="fas fa-concierge-bell"></i> Services: ${maid.services.join(' & ')}</p>
                <button class="view-btn" onclick="showMaidDetails(${maid.id})">Proceed to Book</button>
            </div>
        `;
        maidGrid.appendChild(maidCard);
    });
}

// Function to show booking form in modal
function showMaidDetails(maidId) {
    const maid = maids.find(m => m.id === maidId);
    const modalDetails = document.getElementById('modal-details');
    
    modalDetails.innerHTML = `
        <h2>Book ${maid.name}</h2>
        <div class="modal-info">
            <div class="housekeeper-details">
                <p><i class="fas fa-venus-mars"></i> Gender: ${maid.gender}</p>
                <p><i class="fas fa-user"></i> Age: ${maid.age} years</p>
                <p><i class="fas fa-briefcase"></i> Experience: ${maid.experience}</p>
                <p><i class="fas fa-concierge-bell"></i> Services: ${maid.services.join(' & ')}</p>
                <div class="rating">
                    ${createStarRating(maid.rating)}
                    <span>(${maid.rating})</span>
                </div>
            </div>
        </div>
        <form id="booking-form" class="booking-form">
            <div class="form-group">
                <label>Your Name:</label>
                <input type="text" name="customer_name" placeholder="Enter your full name" required>
            </div>
            <div class="form-group">
                <label>Email:</label>
                <input type="email" name="customer_email" placeholder="Enter your email" required>
            </div>
            <div class="form-group">
                <label>Phone Number:</label>
                <input type="tel" name="customer_phone" placeholder="Enter your phone number" required>
            </div>
            <div class="form-group">
                <label>Address:</label>
                <textarea name="customer_address" rows="4" placeholder="Enter your complete address" required></textarea>
            </div>
            <input type="hidden" name="housekeeper_id" value="${maid.id}">
            <button type="submit" class="book-btn">Submit Booking</button>
        </form>
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

// Load housekeeper profiles when page loads
window.onload = displayMaidProfiles;

// Hide housekeeper section initially and show it when clicking the button
document.addEventListener('DOMContentLoaded', function() {
    const viewMaidsBtn = document.getElementById('view-maids-btn');
    const maidsSection = document.getElementById('maids-section');
    const heroSection = document.querySelector('.hero-section');
    const featuresSection = document.getElementById('features-section');

    // Show maids section when button is clicked
    viewMaidsBtn.addEventListener('click', function() {
        // Hide hero and features sections
        heroSection.style.display = 'none';
        featuresSection.style.display = 'none';
        
        // Show maids section
        maidsSection.style.display = 'block';
        displayMaidProfiles();
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    function addHireButtonListeners() {
        const hireButtons = document.querySelectorAll('.maid-profile .view-btn');
        hireButtons.forEach(button => {
            button.addEventListener('click', function() {
                const maidProfile = this.closest('.maid-profile');
                showModal(maidProfile);
            });
        });
    }

    function showModal(maidProfile) {
        const modal = document.getElementById('modal');
        const modalDetails = document.getElementById('modal-details');
        const maidName = maidProfile.querySelector('h2').textContent;
        const maidDetails = maidProfile.querySelectorAll('p');
        
        modalDetails.innerHTML = `
            <h2>${maidName}</h2>
            ${Array.from(maidDetails).map(p => p.outerHTML).join('')}
        `;
        
        modal.style.display = 'block';
    }

    // Close modal functionality
    const closeBtn = document.querySelector('.close');

    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});

// Form submission
document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);

    fetch('housekeeping.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            alert('Booking successful!');
            document.getElementById('modal').style.display = 'none';
            this.reset();
        } else {
            alert(data.message);
        }
    })
    .catch(error => {
        alert('Error submitting booking. Please try again.');
    });
});

// Add navbar background color change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#ffffff';
        navbar.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Add this function to handle active state of filter buttons
function setActiveFilter(service) {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase().includes(service.toLowerCase())) {
            btn.classList.add('active');
        }
    });
}

// Update the filterHousekeepers function
function filterHousekeepers(service) {
    setActiveFilter(service);
    const filteredMaids = service === 'all' 
        ? maids 
        : maids.filter(maid => {
            if (service === 'both') {
                return maid.services.includes('Cleaning') && maid.services.includes('Cooking');
            }
            return maid.services.includes(service);
        });
    
    displayMaidProfiles(filteredMaids);
} 
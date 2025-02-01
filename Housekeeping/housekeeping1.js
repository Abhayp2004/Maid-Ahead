// Add this new function to handle redirection
function redirectToHousekeeping() {
    try {
        console.log('Starting redirection process...');
        
        // Get any form values you want to pass (if they exist)
        const timeSlot = document.querySelector('select[name="booking_time"]')?.value;
        
        // Store any values you want to pass
        if (timeSlot) {
            sessionStorage.setItem('housekeeping_time', timeSlot);
        }
        
        // Redirect to housekeeping.html
        window.location.href = '../housekeeping.html';
    } catch (error) {
        console.error('Redirect error:', error);
        alert('Error during redirection: ' + error.message);
    }
}

// Update the showMaidDetails function to use the new redirection
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
        <button onclick="redirectToHousekeeping()" class="book-btn">Book Now</button>
    `;
    
    document.getElementById('modal').style.display = 'block';
}

// Add maid profiles data
const maids = [
    {
        id: 1,
        name: "Priya Sharma",
        gender: "Female",
        age: 28,
        experience: "4 years",
        rating: 4.8,
        services: ["Cleaning", "Cooking"],
        availability: "Full-time"
    },
    {
        id: 2,
        name: "Lakshmi Patel",
        gender: "Female",
        age: 32,
        experience: "7 years",
        rating: 4.9,
        services: ["Cleaning"],
        availability: "Part-time"
    },
    {
        id: 3,
        name: "Anjali Verma",
        gender: "Female",
        age: 25,
        experience: "3 years",
        rating: 4.7,
        services: ["Cooking"],
        availability: "Full-time"
    },
    // Add more maid profiles as needed
];

// Function to create star rating HTML
function createStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let starsHtml = '';
    
    for (let i = 0; i < fullStars; i++) {
        starsHtml += '<i class="fas fa-star"></i>';
    }
    if (hasHalfStar) {
        starsHtml += '<i class="fas fa-star-half-alt"></i>';
    }
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        starsHtml += '<i class="far fa-star"></i>';
    }
    
    return starsHtml;
}

// Function to display maid profiles
function displayMaidProfiles() {
    const container = document.querySelector('.maid-profiles-container');
    const activeFilter = document.querySelector('.filter-btn.active').textContent.trim();
    
    // Filter maids based on selected service
    const filteredMaids = maids.filter(maid => {
        if (activeFilter === 'All Services') return true;
        if (activeFilter === 'Cleaning Only') return maid.services.includes('Cleaning') && !maid.services.includes('Cooking');
        if (activeFilter === 'Cooking Only') return maid.services.includes('Cooking') && !maid.services.includes('Cleaning');
        if (activeFilter === 'Cleaning & Cooking') return maid.services.includes('Cleaning') && maid.services.includes('Cooking');
        return true;
    });

    // Clear existing profiles
    container.innerHTML = '';

    // Add filtered profiles
    filteredMaids.forEach(maid => {
        const profileHtml = `
            <div class="maid-profile">
                <div class="profile-content">
                    <h2>${maid.name}</h2>
                    <p><i class="fas fa-venus-mars"></i> ${maid.gender}</p>
                    <p><i class="fas fa-user"></i> Age: ${maid.age}</p>
                    <p><i class="fas fa-briefcase"></i> Experience: ${maid.experience}</p>
                    <p><i class="fas fa-concierge-bell"></i> Services: ${maid.services.join(' & ')}</p>
                    <div class="rating">
                        ${createStarRating(maid.rating)}
                        <span>(${maid.rating})</span>
                    </div>
                    <button onclick="showMaidDetails(${maid.id})" class="view-btn">View Details</button>
                </div>
            </div>
        `;
        container.innerHTML += profileHtml;
    });
}

// Initialize event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Show maids section when "View Available Housekeepers" is clicked
    const viewMaidsBtn = document.getElementById('view-maids-btn');
    if (viewMaidsBtn) {
        viewMaidsBtn.addEventListener('click', function() {
            document.getElementById('maids-section').style.display = 'block';
            this.style.display = 'none';
            displayMaidProfiles();
        });
    }

    // Initialize filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            displayMaidProfiles();
        });
    });

    // Set minimum date for booking to today
    const dateInput = document.querySelector('input[name="booking_date"]');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }
});

// Close modal when clicking the close button or outside the modal
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal || event.target.className === 'close') {
        modal.style.display = 'none';
    }
} 
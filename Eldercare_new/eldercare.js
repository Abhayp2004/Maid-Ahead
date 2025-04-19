
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


document.addEventListener('DOMContentLoaded', function() {
   
    displayMaidProfiles();
    
    
    const mainContent = document.getElementById('mainContent');
    const maidsContent = document.getElementById('maidsContent');
    
    if (mainContent && maidsContent) {
        mainContent.style.display = 'none';
        maidsContent.style.display = 'block';
    }
}); 
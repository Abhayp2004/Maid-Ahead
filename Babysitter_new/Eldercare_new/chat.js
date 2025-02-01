let isChatOpen = false;

function toggleChat() {
    const chatBox = document.getElementById('chatBox');
    const notificationBadge = document.querySelector('.notification-badge');
    
    isChatOpen = !isChatOpen;
    chatBox.style.display = isChatOpen ? 'flex' : 'none';
    
    if (isChatOpen) {
        notificationBadge.style.display = 'none';
        document.getElementById('messageInput').focus();
    }
}

function sendMessage() {
    const input = document.getElementById('messageInput');
    const message = input.value.trim();
    
    if (message) {
        addMessage(message, 'user');
        input.value = '';
        
        // Simulate support response
        setTimeout(() => {
            const responses = [
                "Thank you for your message. How can I assist you today?",
                "I'll be happy to help you with that.",
                "Let me check that information for you.",
                "Is there anything else you'd like to know?",
                "Please feel free to ask any questions about our services."
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage(randomResponse, 'support');
        }, 1000);
    }
}

function addMessage(text, type) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    messageDiv.innerHTML = `
        <div class="message-content">${text}</div>
        <span class="message-time">${time}</span>
    `;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Handle enter key in textarea
document.getElementById('messageInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
});

// Show notification badge after 3 seconds
setTimeout(() => {
    if (!isChatOpen) {
        document.querySelector('.notification-badge').style.display = 'flex';
    }
}, 3000); 
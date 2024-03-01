// Hide loading overlay when the content is loaded
window.addEventListener('load', function() {
    var loadingOverlay = document.querySelector('.loading-overlay');
    loadingOverlay.style.display = 'none';
});

// Show main content with fade-in animation when the content is loaded
window.addEventListener('load', function() {
    var mainContent = document.querySelector('.main-content');
    mainContent.classList.add('active'); // Add active class to trigger animation
});

window.addEventListener('load', function() {
    var socialMediaButtons = document.querySelectorAll('.social-media-button');
    socialMediaButtons.forEach(function(button, index) {
        var delay = (index + 1) * 150; // Adjust the delay for each button
        setTimeout(function() {
            button.style.opacity = '1'; // Ensure button remains visible before animation
            button.style.transform = 'translateX(0)'; // Ensure button remains visible before animation
            setTimeout(function() {
                button.classList.add('active'); // Add active class to trigger animation
            }, 50); // Add a slight delay before adding the active class to ensure the transition is applied correctly
        }, delay); // Set the delay for each button
    });
});
// 1. Hover effect: Change border and show project brief on mouseover
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    const brief = card.querySelector('.project-brief'); // Find the brief inside the card
    
    card.addEventListener('mouseover', () => {
        card.style.border = '3px solid #3498db'; // Change border
        if (brief) brief.classList.remove('hidden'); // Show brief if it exists
    });
    
    card.addEventListener('mouseout', () => {
        card.style.border = '3px solid #34495e'; // Revert border
        if (brief) brief.classList.add('hidden'); // Hide brief if it exists
    });
});

// 2. Toggle fun fact visibility on contact page (unchanged)
const toggleBtn = document.getElementById('toggleBtn');
const funFact = document.getElementById('funFact');

if (toggleBtn && funFact) {
    toggleBtn.addEventListener('click', () => {
        funFact.classList.toggle('hidden');
    });
}
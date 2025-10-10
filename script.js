// script.js
document.addEventListener('DOMContentLoaded', function() {
    createPetals();
});

function createPetals() {
    const petalsContainer = document.getElementById('petals-container');
    const petalCount = 15;

    for (let i = 0; i < petalCount; i++) {
        setTimeout(() => {
            createPetal();
        }, i * 500);
    }

    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'petal';
        
        // Losowa pozycja początkowa
        const startX = Math.random() * window.innerWidth;
        
        // Losowy czas opadania
        const duration = 8 + Math.random() * 7;
        
        // Losowy rozmiar
        const size = 8 + Math.random() * 10;
        
        // Losowe opóźnienie
        const delay = Math.random() * 0;
        
        petal.style.left = `${startX}px`;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        petal.style.animationDuration = `${duration}s`;
        petal.style.animationDelay = `${delay}s`;
        
        petalsContainer.appendChild(petal);
        
        // Usuwanie płatka po zakończeniu animacji
        setTimeout(() => {
            if (petal.parentNode === petalsContainer) {
                petalsContainer.removeChild(petal);
            }
        }, (duration + delay) * 1000);
    }

    // Tworzenie nowych płatków co jakiś czas
    setInterval(createPetal, 2000);
}
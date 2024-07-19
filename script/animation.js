document.addEventListener('DOMContentLoaded', () => {
    const small = document.querySelectorAll('.animate-small');
    const sparkle = document.querySelector('.sparkle');
    const dollar = document.querySelector('.dollar');
    let currentIndex = 0;

    small[currentIndex].classList.add('visible');
    setInterval(() => {
        small[currentIndex].classList.remove('visible');
        currentIndex = (currentIndex + 1) % small.length;
        small[currentIndex].classList.add('visible');
        
        if (currentIndex === 0) {
            dollar.classList.remove('visible');
            sparkle.classList.add('visible');
        } else if (currentIndex === 6) {
            sparkle.classList.remove('visible');
            dollar.classList.add('visible');
        }
    }, 700);
});
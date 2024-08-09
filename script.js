document.addEventListener("DOMContentLoaded", function() {
    const fadeText = document.querySelector('.fade-text');

    function handleScroll() {
        const rect = fadeText.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight - 50) { // 50px from the bottom
            fadeText.classList.add('visible');
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Initial check in case the element is already in view
    handleScroll();
});
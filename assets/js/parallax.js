(function () {
    const wrapper = document.querySelector('.parallax-wrapper');
    if (!wrapper) return;

    let ticking = false;

    function updateParallax() {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    const offset = scrollY * 0.1
    wrapper.style.backgroundPosition = `center ${-offset}px`;
    ticking = false;
    }

    function requestTick() {
    if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
    }
    }

    window.addEventListener('scroll', requestTick, { passive: true });
    updateParallax();
})();

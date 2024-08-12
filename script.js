document.addEventListener("DOMContentLoaded", function() {
    const target = document.querySelector('.efeito2');
    const cards = document.querySelectorAll('.card');
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function restartAnimation(element) {
        element.classList.remove('animate');
        void element.offsetWidth;
        element.classList.add('animate');
    }

    function onScroll() {
        if (isElementInViewport(target)) {
            restartAnimation(target);
        }

        cards.forEach(card => {
            if (isElementInViewport(card)) {
                restartAnimation(card);
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);
    onScroll();
});

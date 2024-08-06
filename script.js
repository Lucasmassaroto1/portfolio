document.addEventListener("DOMContentLoaded", function() {
      const target = document.querySelector('.efeito2');

      function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
      }
      function onScroll() {
        if (isElementInViewport(target)) {
          target.classList.add('animate');
        } else {
          target.classList.remove('animate');
        }
      }
 window.addEventListener('scroll', onScroll);
      window.addEventListener('resize', onScroll);
      onScroll();
    });

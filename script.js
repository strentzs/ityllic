const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const block1 = document.getElementById('container1');
const block2 = document.getElementById('container2');
const block3 = document.getElementById('container3');

function showBlock1() {
    block1.classList.remove('hidden');
    block2.classList.add('hidden');
    block3.classList.add('hidden');
    scrollToNextSection(window.innerHeight, 0);
    function scrollToNextSection(height, currentScrollY) {
        var targetScrollY = currentScrollY + height;
        var duration = 1000; // Durée de l'animation en millisecondes
        var startTime = null;

        function scrollAnimation(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = timestamp - startTime;
            var scrollY = easeInOutQuad(progress, currentScrollY, targetScrollY - currentScrollY, duration);

            window.scrollTo(0, scrollY);

            if (progress < duration) {
            window.requestAnimationFrame(scrollAnimation);
            }
        }

        // Fonction d'interpolation pour une transition en douceur
        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        window.requestAnimationFrame(scrollAnimation);
    }
}

function showBlock2() {
    block1.classList.add('hidden');
    block2.classList.remove('hidden');
    block3.classList.add('hidden');
    scrollToNextSection(window.innerHeight, 0);
    function scrollToNextSection(height, currentScrollY) {
        var targetScrollY = currentScrollY + height;
        var duration = 1000; // Durée de l'animation en millisecondes
        var startTime = null;

        function scrollAnimation(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = timestamp - startTime;
            var scrollY = easeInOutQuad(progress, currentScrollY, targetScrollY - currentScrollY, duration);

            window.scrollTo(0, scrollY);

            if (progress < duration) {
            window.requestAnimationFrame(scrollAnimation);
            }
        }

        // Fonction d'interpolation pour une transition en douceur
        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        window.requestAnimationFrame(scrollAnimation);
    }
}

function showBlock3() {
    block1.classList.add('hidden');
    block2.classList.add('hidden');
    block3.classList.remove('hidden');
    scrollToNextSection(window.innerHeight, 0);
    function scrollToNextSection(height, currentScrollY) {
        var targetScrollY = currentScrollY + height;
        var duration = 1000; // Durée de l'animation en millisecondes
        var startTime = null;

        function scrollAnimation(timestamp) {
            if (!startTime) startTime = timestamp;
            var progress = timestamp - startTime;
            var scrollY = easeInOutQuad(progress, currentScrollY, targetScrollY - currentScrollY, duration);

            window.scrollTo(0, scrollY);

            if (progress < duration) {
            window.requestAnimationFrame(scrollAnimation);
            }
        }

        // Fonction d'interpolation pour une transition en douceur
        function easeInOutQuad(t, b, c, d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }

        window.requestAnimationFrame(scrollAnimation);
    }
}
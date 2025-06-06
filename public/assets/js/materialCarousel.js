// Carousel infini vanilla JS pour 4 images

document.addEventListener('DOMContentLoaded', function () {
    const track = document.getElementById('carouselTrack');
    const prevBtn = document.getElementById('carouselPrevBtn');
    const nextBtn = document.getElementById('carouselNextBtn');
    const dotsContainer = document.getElementById('carouselDots');
    const items = Array.from(track.querySelectorAll('.carousel-item'));
    const total = items.length;
    let currentIndex = 1; // On commence à 1 à cause du clone
    let isTransitioning = false;
    let autoRotateInterval;

    // Clone pour effet infini
    const firstClone = items[0].cloneNode(true);
    const lastClone = items[total - 1].cloneNode(true);
    firstClone.classList.add('clone');
    lastClone.classList.add('clone');
    track.appendChild(firstClone);
    track.insertBefore(lastClone, items[0]);

    const allItems = Array.from(track.querySelectorAll('.carousel-item'));

    // Position initiale
    track.style.transition = 'none';
    track.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Dots
    function renderDots() {
        dotsContainer.innerHTML = '';
        for (let i = 0; i < total; i++) {
            const dot = document.createElement('button');
            dot.className = 'dot' + (i === getRealIndex() ? ' active' : '');
            dot.addEventListener('click', () => goToIndex(i));
            dotsContainer.appendChild(dot);
        }
    }
    function getRealIndex() {
        if (currentIndex === 0) return total - 1;
        if (currentIndex === total + 1) return 0;
        return currentIndex - 1;
    }

    function updateTrack(transition = true) {
        if (!transition) track.style.transition = 'none';
        else track.style.transition = 'transform 0.5s cubic-bezier(.77,0,.18,1)';
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        renderDots();
    }

    function goToIndex(idx) {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex = idx + 1;
        updateTrack();
        setTimeout(() => { isTransitioning = false; }, 500);
    }
    function handleNext() {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex++;
        updateTrack();
        setTimeout(() => { isTransitioning = false; }, 500);
    }
    function handlePrev() {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex--;
        updateTrack();
        setTimeout(() => { isTransitioning = false; }, 500);
    }

    // Transition infini
    track.addEventListener('transitionend', () => {
        if (currentIndex === 0) {
            track.style.transition = 'none';
            currentIndex = total;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            void track.offsetWidth;
            track.style.transition = 'transform 0.5s cubic-bezier(.77,0,.18,1)';
        } else if (currentIndex === total + 1) {
            track.style.transition = 'none';
            currentIndex = 1;
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            void track.offsetWidth;
            track.style.transition = 'transform 0.5s cubic-bezier(.77,0,.18,1)';
        }
        isTransitioning = false;
        renderDots();
    });

    // Auto-rotation
    function startAutoRotate() {
        autoRotateInterval = setInterval(handleNext, 5000);
    }
    function stopAutoRotate() {
        clearInterval(autoRotateInterval);
    }

    // Clic sur image uniquement
    allItems.forEach((item) => {
        const img = item.querySelector('img');
        if (img) {
            img.addEventListener('click', (e) => {
                if (item.classList.contains('clone')) return;
                if (isTransitioning) return;
                const link = item.getAttribute('data-link');
                if (link) window.location.href = link;
                e.stopPropagation();
            });
        }
    });

    prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        handlePrev();
    });
    nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        handleNext();
    });
    track.addEventListener('mouseenter', stopAutoRotate);
    track.addEventListener('mouseleave', startAutoRotate);

    renderDots();
    startAutoRotate();
});

document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger-menu');
    const navList = document.getElementById('main-nav');
    if (burger && navList) {
        burger.addEventListener('click', function() {
            navList.classList.toggle('open');
            burger.setAttribute('aria-expanded', navList.classList.contains('open') ? 'true' : 'false');
        });
    }
    // Ferme le menu si on clique en dehors sur mobile
    document.addEventListener('click', function(e) {
        if (navList && burger && navList.classList.contains('open')) {
            if (!navList.contains(e.target) && !burger.contains(e.target)) {
                navList.classList.remove('open');
                burger.setAttribute('aria-expanded', 'false');
            }
        }
    });
});

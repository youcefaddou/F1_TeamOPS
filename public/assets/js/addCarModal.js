document.addEventListener('DOMContentLoaded', function () {
    // Sélectionne le bouton stylisé (celui dans .buttonadd)
    const openBtn = document.querySelector('#openAddCarModal');
    const modal = document.getElementById('addCarModal');
    const closeBtn = document.getElementById('closeAddCarModal');

    if (openBtn && modal && closeBtn) {
        openBtn.addEventListener('click', () => {
            modal.style.display = 'block';
            setTimeout(() => { modal.querySelector('.modal-content').style.transform = 'scale(1)'; }, 10);
        });
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }
});
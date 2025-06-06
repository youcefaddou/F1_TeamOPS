document.addEventListener('DOMContentLoaded', function() {
    const openBtn = document.getElementById('openAddMemberModal');
    const closeBtn = document.getElementById('closeAddMemberModal');
    const modal = document.getElementById('addMemberModal');
    if (openBtn && closeBtn && modal) {
        openBtn.addEventListener('click', () => modal.style.display = 'block');
        closeBtn.addEventListener('click', () => modal.style.display = 'none');
        window.addEventListener('click', (e) => {
            if (e.target === modal) modal.style.display = 'none';
        });
    }
});

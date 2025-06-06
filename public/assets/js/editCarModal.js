document.addEventListener('DOMContentLoaded', function () {
    const editBtns = document.querySelectorAll('.action-btn.edit');
    const modal = document.getElementById('editCarModal');
    const closeBtn = document.getElementById('closeEditCarModal');
    const form = document.getElementById('editCarForm');

    editBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            const row = btn.closest('tr');
            const carId = row.getAttribute('data-car-id');
            const chassisNum = row.querySelector('.car-chassisNum').textContent.trim();
            const model = row.querySelector('.car-model').textContent.trim();
            const pilotId = row.querySelector('.car-pilot').getAttribute('data-pilot-id');

            document.getElementById('editCarId').value = carId;
            document.getElementById('editChassisNum').value = chassisNum;
            document.getElementById('editModel').value = model;
            document.getElementById('editPilotId').value = pilotId || '';
            modal.style.display = 'block';
        });
    });
    if (closeBtn && modal) {
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
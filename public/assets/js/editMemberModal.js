// Ouvre la modale d'édition avec les infos du membre
const editModal = document.getElementById('editMemberModal');
const closeEditModal = document.getElementById('closeEditMemberModal');
const editForm = document.getElementById('editMemberForm');

document.querySelectorAll('.openEditModal').forEach(btn => {
    btn.addEventListener('click', function() {
        const card = btn.closest('.member-card');
        editForm.action = `/members/edit/${card.dataset.memberId}`;
        editForm.querySelector('#editFirstName').value = card.dataset.memberFirstname;
        editForm.querySelector('#editLastName').value = card.dataset.memberLastname;
        editForm.querySelector('#editEmail').value = card.dataset.memberEmail;
        editForm.querySelector('#editRole').value = card.dataset.memberRole;
        editForm.querySelector('#editNationality').value = card.dataset.memberNationality;
        editForm.querySelector('#editAge').value = card.dataset.memberAge;
        editModal.style.display = 'block';
    });
});

// Si la page contient editMemberId (rendu backend), ouvrir la modale pré-remplie
window.addEventListener('DOMContentLoaded', function() {
    if (typeof editMemberId !== 'undefined' && editMemberId) {
        editModal.style.display = 'block';
        // On s'assure que le formulaire pointe sur la bonne route
        editForm.action = `/members/edit/${editMemberId}`;
    }
});

closeEditModal.addEventListener('click', () => editModal.style.display = 'none');
window.addEventListener('click', (e) => {
    if (e.target === editModal) editModal.style.display = 'none';
});
// Modale suppression
const deleteModal = document.getElementById('deleteMemberModal');
const closeDeleteModal = document.getElementById('closeDeleteMemberModal');
const deleteForm = document.getElementById('deleteMemberForm');
document.querySelectorAll('.openDeleteModal').forEach(btn => {
    btn.addEventListener('click', function() {
        const card = btn.closest('.member-card');
        deleteForm.action = `/members/delete/${card.dataset.memberId}`;
        deleteModal.style.display = 'block';
    });
});
closeDeleteModal.addEventListener('click', () => deleteModal.style.display = 'none');
window.addEventListener('click', (e) => {
    if (e.target === deleteModal) deleteModal.style.display = 'none';
});

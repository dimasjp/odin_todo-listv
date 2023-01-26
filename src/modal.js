

const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.btn-close-modal');
const form = document.querySelector('#modal-form');
const modalContainer = document.querySelector('.modal-content');

const openModal = () => {
    modal.classList.remove('display-none');
    
}



document.addEventListener('click', (event) => {
    if (event.target === modal || event.target === closeButton) {
        closeModal();
    }
})

const closeModal = () => {
    form.classList.remove('project-form');
    form.classList.remove('task-form');
    form.classList.remove('task-detail');
    form.classList.remove('edit-form');
    form.reset();
    modal.classList.add('display-none')
    form.innerHTML = '';
}

export {openModal, closeModal}
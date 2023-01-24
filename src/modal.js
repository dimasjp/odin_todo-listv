

const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.btn-close-modal');



const openModal = () => {
    modal.classList.remove('display-none');
    
}

document.addEventListener('click', (event) => {
    if (event.target === modal || event.target === closeButton) {
        closeModal();
    }
})

const closeModal = () => {
    modal.classList.add('display-none')
}

export {openModal, closeModal}
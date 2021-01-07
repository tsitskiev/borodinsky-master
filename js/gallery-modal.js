// Gallery modal window
const sliderItems = document.querySelectorAll('.sl-items');
const galleryItems = document.querySelector('.gl-items');
const galleryWrapper = document.querySelector('.modal-wrapper');

const openGalleryModal = () => {
    event.preventDefault();
    galleryWrapper.classList.add('visible');
    window.addEventListener('keydown', closeGalleryModalEsc);
}

const closeGalleryModal = () => {
    galleryWrapper.classList.remove('visible');
    window.removeEventListener('keydown', closeGalleryModalEsc);
}

const closeGalleryModalEsc = () => {
    if (event.keyCode == 27) {
        closeGalleryModal();
    }
}

if (sliderItems && galleryItems) {
    sliderItems.forEach((elem) => {
        elem.addEventListener('click', openGalleryModal);
    });

    galleryWrapper.addEventListener('click', closeGalleryModal);
    galleryItems.addEventListener('click', (event) => event.stopPropagation());
}


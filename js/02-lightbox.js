import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divGalleryRef = document.querySelector('.gallery');
const galleryImage = createGalleryImage(galleryItems);
divGalleryRef.insertAdjacentHTML('beforeend', galleryImage);
function createGalleryImage(galleryItems) {
    return galleryItems.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}"><img class="gallery__image" src="${preview}" alt="${description}"/></a>`;
    }).join(''); 
};

const lightbox = new SimpleLightbox('.gallery a', {captions: true, captionDelay: 250, captionsData: 'alt' });
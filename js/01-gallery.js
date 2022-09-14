import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);
const divGalleryRef = document.querySelector('.gallery');
const galleryImage = createGalleryImage(galleryItems);
divGalleryRef.insertAdjacentHTML('beforeend', galleryImage);
divGalleryRef.addEventListener('click', onGalleryClick);

function createGalleryImage(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>
      `;
    }).join('');
};

function onGalleryClick (evt) {
    evt.preventDefault();
console.log(evt.target)
const isGalleryImageEl = evt.target.classList.contains('gallery__image');
if (!isGalleryImageEl) {
    return;
}
}

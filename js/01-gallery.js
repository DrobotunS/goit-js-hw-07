import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

import { basicLightbox } from '../dist/basicLightbox.min.js';

const instance = basicLightbox.create(`
    <img src="assets/images/image.png" width="800" height="600">
`)

instance.show()
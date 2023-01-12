import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(SimpleLightbox);
console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
console.log(galleryRef);

galleryRef.addEventListener('click', onStopRestart);

const markup = galleryItems.reduce(
  (acc, { preview, original, description }) =>
    acc +
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`,
  ''
);

galleryRef.insertAdjacentHTML('beforeend', markup);

function onStopRestart(e) {
  e.preventDefault();
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

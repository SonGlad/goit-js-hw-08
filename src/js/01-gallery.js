// // Add imports below this line
// import {galleryItems} from './gallery-items';
// import SimpleLightbox from "simplelightbox";

// // Extra styles import

// import "simplelightbox/dist/simple-lightbox.min.css";

// // Change code below this line

// const refs = {
//   ulEl: document.querySelector(".gallery")
// };
// refs.ulEl.style.listStyle = "none";

// const galleryOfItems = creatGalleryItems(galleryItems);
// refs.ulEl.insertAdjacentHTML("beforeend", galleryOfItems);

// function creatGalleryItems(galleryItems){
//   return galleryItems.map(({preview, original, description}) => {
//     return `<li class="gallery__item">
//               <a class="gallery__link" href="${original}">
//                 <img class="gallery__image" 
//                 src="${preview}" 
//                 alt="${description}"/></a></li>`
//   }).join('');
// };

// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 300,
// });
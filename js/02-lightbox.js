import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

// / Создать и добавить разметку
const galleryContainer = document.querySelector(".gallery");
const createImageCards = addGalleryItem(galleryItems);
// Добавить созданные элементы в разметку
galleryContainer.insertAdjacentHTML("beforeend", createImageCards);
function addGalleryItem(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
                  <a class="gallery__item" href="${original}">
                     <img class="gallery__image" src="${preview}" alt="${description}" />
                  </a>
               </div>`;
    })
    .join("");
}
// / Создать lightBox для галереи
const lightBox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});

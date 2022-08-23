import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

// Создание и рендер разметки по массиву данных galleryItems
/*<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="small-image.jpg"
      data-source="large-image.jpg"
      alt="Image description"
    />
  </a>
</div>
*/
const galleryContainer = document.querySelector(".gallery");
// Переменная для хранения вызова функции
const createImageCards = addGalleryItem(galleryItems);
// Добавить созданныые элементы в разметку
galleryContainer.insertAdjacentHTML("beforeend", createImageCards);
// Создать функцию в разметку
function addGalleryItem(items) {
  //   console.log(items);
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
         <a class="gallery__link" href="${original}">
            <img
               class="gallery__image"
               src="${preview}"
               data-source="${original}"
               alt="${description}"
            />
      </a>
    </div>`;
    })
    .join("");
}

// Реализация делегирования на div.gallery и получение url большого изображения.

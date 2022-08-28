import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

// /Создание и рендер разметки по массиву данных galleryItems
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
const createImageCards = addGalleryItem(galleryItems);

// Добавить созданные элементы в разметку
galleryContainer.insertAdjacentHTML("beforeend", createImageCards);

// /Создать функцию которая добавляет элементы  в разметку
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

/// Реализация делегирования на div.gallery и получение url большого изображения.
galleryContainer.addEventListener("click", onClickGallery);
// / Открытие и закрытие модального окна в переменной
let instance = basicLightbox.create(
  `
   <img  src="">
   `,
  {
    onShow: () => {
      //   console.log("Open");
      window.addEventListener("keydown", onEscModalClose);
    },
    onClose: () => {
      //   console.log("Close");
      window.removeEventListener("keydown", onEscModalClose);
    },
  }
);
// /Функция клика по элементам галереи
function onClickGallery(e) {
  //  Запретить переход на новую страницу по клику на ссылку
  e.preventDefault();

  const isGalleryImgEl = e.target.classList.contains("gallery__image");
  if (!isGalleryImgEl) {
    return;
  }
  //   Получить url большого изображения
  const bigImageUrl = e.target.dataset.source;
  //  Добавить src на картинку
  const elem = instance.element();
  //   console.log(elem);
  const img = elem.querySelector("img");
  //   console.log(img.src);
  img.src = bigImageUrl;

  instance.show();
}
// /Закрытие модалки кнопкой
function onEscModalClose(evt) {
  if (evt.code === "Escape") {
    instance.close();
  }
}

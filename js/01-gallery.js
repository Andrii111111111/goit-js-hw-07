import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector(".gallery")

const links = document.querySelector(".gallery__item")

function writeMarkup(arr) {
   return arr.map(({ preview, original, description }) =>
  `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li> `).join('')
}

 list.innerHTML = writeMarkup(galleryItems)


console.log(list)
console.log(links)

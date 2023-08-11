import { galleryItems } from './gallery-items.js';
// Change code below this line

const list = document.querySelector(".gallery")


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



list.insertAdjacentHTML("afterbegin", writeMarkup(galleryItems))


list.addEventListener("click", getBigImg)
function getBigImg(evt) {

  evt.preventDefault()

   if (!evt.target.classList.contains('gallery__image') ) {
     return;
   }

  const instance = basicLightbox.create(`
   <img src="${evt.target.dataset.source}" >
`)

  instance.show()
  

list.addEventListener("keydown", closeImg)
  function closeImg(evt) {
  if (evt.code === 'Escape') {
    return instance.close()
  }

}
}
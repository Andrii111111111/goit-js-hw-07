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
      alt="${description}"
    />
  </a>
</li> `).join('')
}


list.insertAdjacentHTML("afterbegin", writeMarkup(galleryItems))

list.addEventListener("click", getBigImg)
function getBigImg(evt) {

  evt.preventDefault()
console.log(evt.target.alt)
   if (!evt.target.classList.contains('gallery__image') ) {
     return;
   }
    var lightbox = new SimpleLightbox('.gallery a', { 
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
  });
  
}


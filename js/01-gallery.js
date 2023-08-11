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

//  list.innerHTML = writeMarkup(galleryItems)

 
list.insertAdjacentHTML("afterbegin", writeMarkup(galleryItems))
const links = document.querySelector('.gallery__link')
//  links.style.pointerEvents = "none";
const li = document.querySelector('.gallery__item')

list.addEventListener("click", getBigImg)
function getBigImg(evt) {
    // if (evt.target === evt.currentTarget)
    //     return
    // console.log(evt.target)
    // if (!evt.target.classList.contains('gallery__item')) {
    //     return;
    // }
    // console.log(getBigImg())
    const href = evt.target.src
    
    const instance = basicLightbox.create(`
    <img src="${href}" width="800" height="600">
`)

    instance.show()
    console.log(instance)
}

//  console.log(getBigImg())
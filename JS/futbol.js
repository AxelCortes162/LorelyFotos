const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const carousel = document.getElementById("carousel");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
let currentIndex = 0;

const albumPhotos = {
  1: ["img/a1-1.jpg", "img/a1-2.jpg", "img/a1-3.jpg"],
  2: ["img/a2-1.jpg", "img/a2-2.jpg"],
  3: ["img/a3-1.jpg"],
  4: ["img/a4-1.jpg"],
  5: ["img/a5-1.jpg"],
  6: ["img/a6-1.jpg"]
};

const albums = document.querySelectorAll('.album');
albums.forEach(album => {
  album.addEventListener('click', () => {
    const id = album.dataset.album;
    currentIndex = 0;
    loadImage(id);
    modal.classList.remove('hidden');
  });
});

function loadImage(id) {
  const photos = albumPhotos[id];
  carousel.innerHTML = `<img src="${photos[currentIndex]}">`;
}

prevBtn.addEventListener('click', () => {
  const id = document.querySelector('.album[data-album]').dataset.album;
  const photos = albumPhotos[id];
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  loadImage(id);
});

nextBtn.addEventListener('click', () => {
  const id = document.querySelector('.album[data-album]').dataset.album;
  const photos = albumPhotos[id];
  currentIndex = (currentIndex + 1) % photos.length;
  loadImage(id);
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});
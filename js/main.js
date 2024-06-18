let offset = 0;

const sliderline = document.querySelector(".swiper-slide");

document.querySelector(".next").addEventListener("click", function () {
  offset = offset + 200;
  if (offset > 400) {
    offset = 0;
  }
  sliderline.style.left = -offset + "px";
});

document.querySelector(".prev").addEventListener("click", function () {
  offset = offset - 200;
  if (offset < 0) {
    offset = 400;
  }
  sliderline.style.left = -offset + "px";
});

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  let currentSlide = 1;
  const totalSlides = 3;

  function nextSlide() {
    currentSlide = currentSlide >= totalSlides ? 1 : currentSlide + 1;
    document.getElementById(`carousel-${currentSlide}`).checked = true;
  }

  setInterval(nextSlide, 5000);

  const carousel = document.querySelector(".carousel");
  carousel.addEventListener("mouseenter", function () {
    clearInterval(interval);
  });

  carousel.addEventListener("mouseleave", function () {
    interval = setInterval(nextSlide, 5000);
  });

  let interval = setInterval(nextSlide, 5000);
});

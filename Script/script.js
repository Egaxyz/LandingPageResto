document.querySelectorAll(".order-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const productName = this.getAttribute("data-product");
    const phoneNumber = "+6285806428673";
    const message = `Halo SteakHouse, saya ingin memesan ${productName}. Bisa dibantu?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  });
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

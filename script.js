document.addEventListener("DOMContentLoaded", function () {
    let cartCount = 0;

    // Add to cart functionality
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            cartCount++;
            document.getElementById("cart-count").textContent = cartCount;
        });
    });

    // Image slider
    let index = 0;
    function slideImages() {
        const slides = document.querySelector(".slides");
        index = (index + 1) % 3; 
        slides.style.transform = `translateX(-${index * 100}%)`;
    }
    setInterval(slideImages, 3000);
});

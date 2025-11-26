contador = document.getElementById("contador");

function sumar() {
    valor = contador.textContent;
    contador.textContent = parseInt(valor) + 1;
}

ofertas = document.getElementById("ofertas");

function link_ofertas() {
    valor = ofertas.textContent;

    let cards = document.querySelectorAll("[data-image-group='on']");

    if (valor == "Ofertas") {
        cards.forEach((card) => (card.style.display = "none"));
        ofertas.textContent = "Todo";
    } else {
        cards.forEach((card) => (card.style.display = "block"));
        ofertas.textContent = "Ofertas";
    }
}
/* 
document.addEventListener("DOMContentLoaded", () => {
    const likeButtons = document.querySelectorAll(".btn-like");

    likeButtons.forEach((button) => {
        button.addEventListener("click", (event) => {
            const productElement = event.target.closest(".producto");
            const productId = productElement.getAttribute("data-product-id");
            const countElement = productElement.querySelector(".count-like");

            handleLike(productId, countElement);
        });
    });
});

function handleLike(productId, countElement) {
    let currentLikes = parseInt(countElement.textContent);
    currentLikes++;
    countElement.textContent = currentLikes;
}
 */

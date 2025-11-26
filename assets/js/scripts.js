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
var productos = {
    Hueso_cuerda: { precio: 4000, cant: 0 },
    Juguete_dental: { precio: 1800, cant: 0 },
    Pelota_goma: { precio: 1000, cant: 0 },
    Pelotita_cuerda: { precio: 4000, cant: 0 },
    Torre_rascadora: { precio: 8000, cant: 0 },
    Dispensador_premios: { precio: 12000, cant: 0 },
    Raton_juguete: { precio: 1800, cant: 0 },
    Interactivo: { precio: 10000, cant: 0 },
};

var cart = {};
var total = 0;

document.getElementById("1").onclick = function () {
    addToCart("Hueso_cuerda");
};
document.getElementById("2").onclick = function () {
    addToCart("Juguete_dental");
};
document.getElementById("3").onclick = function () {
    addToCart("Pelota_goma");
};
document.getElementById("4").onclick = function () {
    addToCart("Pelotita_cuerda");
};
document.getElementById("5").onclick = function () {
    addToCart("Torre_rascadora");
};
document.getElementById("6").onclick = function () {
    addToCart("Dispensador_premios");
};
document.getElementById("7").onclick = function () {
    addToCart("Raton_juguete");
};
document.getElementById("8").onclick = function () {
    addToCart("Interactivo");
};

contador = document.getElementById("contador");

function sumar() {
    valor = contador.textContent;
    contador.textContent = parseInt(valor) + 1;
}

function addToCart(productName) {
    valor = contador.textContent;
    // primero, comprobar si el producto ya existe en el carrito
    if (productName in cart) {
        cart[productName]++;
        contador.textContent = parseInt(valor) + 1;
    } else {
        cart[productName] = 1;
        contador.textContent = parseInt(valor) + 1;
    }

    // contar cantidad
    productos[productName]["cant"]++;

    // aumentar suma total
    total += productos[productName]["precio"];

    document.getElementById("total").innerText = "$" + total;
    document.getElementById("cartItems").innerText = JSON.stringify(cart);
}

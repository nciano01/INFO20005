var quantity = document.querySelectorAll(".quantity p")[0];
var totalPrice = document.querySelectorAll(".total-price h3")[0];

function plus() {
    quantity.textContent = String(Number(quantity.textContent) + 1);
    totalPrice.textContent = "$" + String(Number(totalPrice.textContent.slice(1)) + Number(totalPrice.textContent));
}

function minus() {
    quantity.textContent = String(Number(quantity.textContent) - 1);
    totalPrice.textContent = "$" + String(Number(totalPrice.textContent.slice(1)) - Number(totalPrice.textContent));
}
/* functions allowing for the functionality of quantity button on product page */

var quantity = document.getElementsByClassName("current-quantity")[0];
var totalPrice = document.querySelectorAll(".total-price h3")[0];

var curQuantity = Number(quantity.textContent);
var curPrice = Number(totalPrice.textContent.slice(1));

function plus() {
    if (document.getElementsByClassName('large')[0].style.borderColor == 'var(--light-grey)'){
        curQuantity += 1;
        quantity.textContent = String(curQuantity);

        curPrice += 19.5;
        totalPrice.textContent = "$" + String(curPrice.toFixed(2));
    } else {
        curQuantity += 1;
        quantity.textContent = String(curQuantity);

        curPrice += 14.5;
        totalPrice.textContent = "$" + String(curPrice.toFixed(2));
    }
}

function minus() {
    if (quantity.textContent == "2") {
        if (document.getElementsByClassName('large')[0].style.borderColor == 'var(--color-tertiary)'){
            curQuantity -= 1;
            quantity.textContent = String(curQuantity);

            curPrice -= 19.5;
            totalPrice.textContent = "$" + String(curPrice.toFixed(2));
        } else {
            curQuantity -= 1;
            quantity.textContent = String(curQuantity);

            curPrice -= 14.5;
            totalPrice.textContent = "$" + String(curPrice.toFixed(2));
        }
    }
}
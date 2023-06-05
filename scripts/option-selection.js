var totalPrice = document.querySelectorAll(".total-price h3")[0];

var clicked = 0

function smallSelection() {
    if (document.getElementsByClassName('small')[0].style.borderColor == 'var(--color-tertiary)') {
        document.getElementsByClassName('small')[0].style.borderColor = 'var(--color-tertiary)';
        document.getElementsByClassName('large')[0].style.borderColor = 'var(--light-grey)';
        clicked = 0
    } else {
        document.getElementsByClassName('small')[0].style.borderColor = 'var(--color-tertiary)';
        document.getElementsByClassName('small')[0].style.color = 'var(--black)';
        document.getElementsByClassName('large')[0].style.borderColor = 'var(--light-grey)';
        document.getElementsByClassName('large')[0].style.color = 'var(--medium-grey)';
        totalPrice.textContent = "$" + String((Number(totalPrice.textContent.slice(1)) - 5).toFixed(2));
        clicked = 0
    }
}

function largeSelection() {
    if (document.getElementsByClassName('large')[0].style.borderColor == 'var(--color-tertiary)') {
        document.getElementsByClassName('large')[0].style.borderColor = 'var(--color-tertiary)';
        document.getElementsByClassName('small')[0].style.borderColor = 'var(--light-grey)';
        clicked = 1
    } else {
        document.getElementsByClassName('large')[0].style.borderColor = 'var(--color-tertiary)';
        document.getElementsByClassName('large')[0].style.color = 'var(--black)';
        document.getElementsByClassName('small')[0].style.borderColor = 'var(--light-grey)';
        document.getElementsByClassName('small')[0].style.color = 'var(--medium-grey)';
        totalPrice.textContent = "$" + String((Number(totalPrice.textContent.slice(1)) + 5).toFixed(2));
        clicked = 1
    }
}

function pitaSelection() {
    if (document.getElementsByClassName('pita')[0].style.borderColor == 'var(--color-tertiary)') {
        document.getElementsByClassName('pita')[0].style.borderColor = 'var(--color-tertiary)';
        document.getElementsByClassName('turkish')[0].style.borderColor = 'var(--light-grey)';
    } else {
        document.getElementsByClassName('pita')[0].style.borderColor = 'var(--color-tertiary)';
        document.getElementsByClassName('pita')[0].style.color = 'var(--black)';
        document.getElementsByClassName('turkish')[0].style.borderColor = 'var(--light-grey)';
        document.getElementsByClassName('turkish')[0].style.color = 'var(--medium-grey)';
    }
}

function turkishSelection() {
    if (document.getElementsByClassName('turkish')[0].style.borderColor == 'var(--color-tertiary)') {
        document.getElementsByClassName('turkish')[0].style.borderColor = 'var(--color-tertiary)';
        document.getElementsByClassName('pita')[0].style.borderColor = 'var(--light-grey)';
    }
    else {
        document.getElementsByClassName('turkish')[0].style.borderColor = 'var(--color-tertiary)';
        document.getElementsByClassName('turkish')[0].style.color = 'var(--black)';
        document.getElementsByClassName('pita')[0].style.borderColor = 'var(--light-grey)';
        document.getElementsByClassName('pita')[0].style.color = 'var(--medium-grey)';
    }
}

/* qty button */

var quantity = document.getElementsByClassName("current-quantity")[0];

var curQuantity = Number(quantity.textContent);
var curPrice = Number(totalPrice.textContent.slice(1));

function plus() {
    if (clicked == 1) {
        curQuantity += 1;
        quantity.textContent = String(curQuantity);

        totalPrice.textContent = "$" + String((Number(totalPrice.textContent.slice(1)) + 19.5).toFixed(2));
    } else {
        curQuantity += 1;
        quantity.textContent = String(curQuantity);

        totalPrice.textContent = "$" + String((Number(totalPrice.textContent.slice(1)) + 14.5).toFixed(2));
    }
}

function minus() {
    if (quantity.textContent >= "2") {
        if (clicked == 1) {
            curQuantity -= 1;
            quantity.textContent = String(curQuantity);
    
            totalPrice.textContent = "$" + String((Number(totalPrice.textContent.slice(1)) - 19.5).toFixed(2));
        } else {
            curQuantity -= 1;
            quantity.textContent = String(curQuantity);
    
            totalPrice.textContent = "$" + String((Number(totalPrice.textContent.slice(1)) - 14.5).toFixed(2));
        }
    }
}
window.addEventListener("load", priceCalc);
window.addEventListener("load", cartHeightEquivalence);
window.addEventListener("resize", cartHeightEquivalence);

/* ensures the cart items are the same height */
function cartHeightEquivalence() {
    /* reset heights */
    var cartItemCount = document.getElementsByClassName('cart-table');
    var descripItemCount = document.getElementsByClassName('cart-descrip');
    for (var i=0; i<cartItemCount.length; i++) {
        cartItemCount[i].removeAttribute("style");
        descripItemCount[i].removeAttribute("style");
    }
    console.log(cartItemCount);
    var maxHeight = 0;
    for (var i=0; i<cartItemCount.length; i++) {
        if (maxHeight < cartItemCount[i].scrollHeight ) {
            maxHeight = cartItemCount[i].scrollHeight;
        }
    }
    for (var i=0; i<cartItemCount.length; i++) {
        cartItemCount[i].style.height = maxHeight + "px";
    }

    for (var i=0; i<descripItemCount.length; i++) {
        descripItemCount[i].style.height = maxHeight + "px";
    }
}

function priceCalc() {
    var allPrices = document.getElementsByClassName('item-price');
    var totalPrice = 0;
    for (var i=0; i<allPrices.length; i++) {
        var currPrice = allPrices[i].innerHTML.slice(1) * 1;
        totalPrice += currPrice;
    }
    textPrice = (Math.round(totalPrice * 100) / 100).toFixed(2);
    document.getElementsByClassName('subtotal')[0].innerHTML = "$" + textPrice;

    /* get delivery price */
    var cartItemCount = document.getElementsByClassName('cart-table').length;
    if (cartItemCount > 0) {
        document.getElementsByClassName('delivery')[0].innerHTML = "$10.00"
    }
    else {
        document.getElementsByClassName('delivery')[0].innerHTML = "$0.00"
    }

    var deliveryPrice = document.getElementsByClassName('delivery')[0].innerHTML.slice(1) * 1;

    /* calculate total */

    totalPrice += deliveryPrice;
    textPrice = (Math.round(totalPrice * 100) / 100).toFixed(2);
    document.getElementsByClassName('total')[0].innerHTML = "$" + textPrice;
}

deleteButtons = document.getElementsByClassName('button-delete');

for (var i=0; i<deleteButtons.length; i++) {
    deleteButtons[i].addEventListener("click", itemRemoval);
}

function itemRemoval() {
    /* moves up from the hierarchy, staring from the button that was clicked */
    var buttons = event.currentTarget.parentNode.parentNode;
    var row = buttons.parentNode.parentNode;
    var info = row.parentNode;
    var item = info.parentNode;
    /* deletes the item */
    item.remove();
    /* re-calculates price */
    priceCalc();
    /* re-calculates cart height */
    cartHeightEquivalence();
    /* re-directs to menu if no items are left */
    if (deleteButtons.length == 0) {
        window.location.href = "/product.html"
    }
}

addButtons = document.getElementsByClassName('button-add');

for (var i=0; i<addButtons.length; i++) {
    addButtons[i].addEventListener("click", itemAddition);
}

function itemAddition() {
    /* moves up from the hierarchy, staring from the button that was clicked */
    var buttons = event.currentTarget.parentNode.parentNode;
    var row = buttons.parentNode.parentNode;
    var info = row.parentNode;
    /* grabs element title and price */
    var productInfo = info.getElementsByClassName('suggestion-contents');
    /* adds to the table */
    var table = document.getElementsByClassName('cart-items')[0];
    table.innerHTML += '<div class="cart-table"> <div class="cart-img img-selection--' + event.currentTarget.id + '"></div> <div class="cart-descrip"><h2 class="in-box-title">' + productInfo[0].innerHTML + '</h2><table class="table-order-actions"><tr><td class="bottom"><h2 class="in-box-title item-price">' + productInfo[1].innerHTML + '</h2></td><td class="square-col"><button class="button--action"><img src="images/modify.png" class="square-button-image"></button></td><td class="square-col"><button class="button--action button-delete"><img src="images/bin.png" class="square-button-image"></button></td></tr></table></div></div>';
    /* re-calculates price */
    priceCalc();
    /* re-calculates cart height */
    cartHeightEquivalence();
    /* re-adds delete functionality to buttons */
    deleteButtons = document.getElementsByClassName('button-delete');
    for (var i=0; i<deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", itemRemoval);
    }
}

quantityAdditionButtons = document.getElementsByClassName('addition');

for (var i=0; i<quantityAdditionButtons.length; i++) {
    quantityAdditionButtons[i].addEventListener("click", quantityAdd);
}

function quantityAdd() {
    quantityHTML = event.currentTarget.parentNode;
    var currQuantity = quantityHTML.getElementsByTagName('p')[0].innerHTML * 1;
    currQuantity += 1;
    quantityHTML.getElementsByTagName('p')[0].innerHTML = currQuantity;
}

quantitySubtractionButtons = document.getElementsByClassName('subtraction');

for (var i=0; i<quantitySubtractionButtons.length; i++) {
    quantitySubtractionButtons[i].addEventListener("click", quantitySubtract);
}

function quantitySubtract() {
    quantityHTML = event.currentTarget.parentNode;
    var currQuantity = quantityHTML.getElementsByTagName('p')[0].innerHTML * 1;
    currQuantity -= 1;
    quantityHTML.getElementsByTagName('p')[0].innerHTML = currQuantity;
    if (currQuantity == 0) {
        itemRemovalQuantity();
    }
}

function itemRemovalQuantity() {
    /* moves up from the hierarchy, staring from the button that was clicked */
    var button = event.currentTarget.parentNode.parentNode;
    var buttons = button.parentNode;
    var row = buttons.parentNode.parentNode;
    var info = row.parentNode;
    var item = info.parentNode;
    /* deletes the item */
    item.remove();
    /* re-calculates price */
    priceCalc();
    /* re-calculates cart height */
    cartHeightEquivalence();
    /* re-directs to menu if no items are left */
    if (deleteButtons.length == 0) {
        window.location.href = "/product.html"
    }
}
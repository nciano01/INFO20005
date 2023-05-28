window.addEventListener("load", priceCalc);
window.addEventListener("load", cartHeightEquivalence);
window.addEventListener("resize", cartHeightEquivalence);

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
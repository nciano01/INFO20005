window.addEventListener("load", priceCalc);

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
    /* adds empty cart item */
    if (deleteButtons.length == 0) {
        alert("No items add the HTML");
    }
}
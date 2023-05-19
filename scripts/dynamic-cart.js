window.addEventListener("load", priceCalc);

function priceCalc() {
    var allPrices = document.getElementsByClassName('price');
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
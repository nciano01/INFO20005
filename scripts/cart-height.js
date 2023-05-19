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
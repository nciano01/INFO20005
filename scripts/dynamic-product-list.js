window.addEventListener("resize", productListShrink);

function productListShrink() {
    if (window.innerWidth < 970) {
        document.getElementsByClassName("products-cont")[1];
    }
}
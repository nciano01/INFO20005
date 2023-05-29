window.addEventListener("load", productListShrink);
window.addEventListener("resize", productListShrink);

function productListShrink() {
    if (window.innerWidth < 970 && window.innerWidth >= 720) {
        document.getElementsByClassName("product-list")[0].style.maxWidth = '720px';
    } else if (window.innerWidth < 720 && window.innerWidth >= 470) {
        document.getElementsByClassName("product-list")[0].style.maxWidth = '470px';
    } else if (window.innerWidth < 470 && window.innerWidth >= 220){
        document.getElementsByClassName("product-list")[0].style.maxWidth = '220px';
    } else {
        document.getElementsByClassName("product-list")[0].style.maxWidth = '970px';
    }
}
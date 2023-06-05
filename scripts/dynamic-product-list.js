/* function to dynamically resize the product flex based on window size */

window.addEventListener("load", productListShrink);
window.addEventListener("resize", productListShrink);

function productListShrink() {
    if (window.innerWidth < 1020 && window.innerWidth >= 770) {
        document.getElementsByClassName("product-list")[0].style.maxWidth = '720px';
    } else if (window.innerWidth < 770 && window.innerWidth >= 520) {
        document.getElementsByClassName("product-list")[0].style.maxWidth = '470px';
    } else if (window.innerWidth < 520 && window.innerWidth >= 270){
        document.getElementsByClassName("product-list")[0].style.maxWidth = '220px';
    } else {
        document.getElementsByClassName("product-list")[0].style.maxWidth = '970px';
    }
}
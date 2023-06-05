/* function for the footer */

window.addEventListener("load", footerHeight);
window.addEventListener("resize", footerHeight);

function footerHeight() {
    var navHeight = document.getElementsByTagName("header")[0].scrollHeight;
    var footerHeight = document.getElementsByTagName("footer")[0].scrollHeight;
    document.getElementsByClassName("content")[0].style.minHeight = "calc(100vh - " + navHeight + "px - " + footerHeight + "px)";
}
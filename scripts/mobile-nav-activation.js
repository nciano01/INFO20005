document.getElementsByClassName("hamburger-icon")[0].onclick = showNav;

function showNav() {
    document.getElementsByClassName("mobile-nav")[0].style.display = "block";
    document.getElementsByTagName("body")[0].style.position = "fixed";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
}

document.getElementsByClassName("nav-exit")[0].onclick = hideNav;

function hideNav() {
    document.getElementsByClassName("mobile-nav")[0].style.display = "none";
    document.getElementsByTagName("body")[0].style.position = "static";
    document.getElementsByTagName("body")[0].style.overflow = "visible";
}
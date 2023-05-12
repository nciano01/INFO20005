document.getElementsByClassName("hamburger-icon")[0].onclick = showNav;

function showNav() {
    document.getElementsByClassName("mobile-nav")[0].style.display = "block";
}

document.getElementsByClassName("nav-exit")[0].onclick = hideNav;

function hideNav() {
    document.getElementsByClassName("mobile-nav")[0].style.display = "none";
}
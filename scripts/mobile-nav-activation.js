document.getElementsByClassName("hamburger-icon")[0].onclick = showNav;
var navShown = 0;

function showNav() {
    if (navShown == 0) {
        document.getElementsByClassName("mobile-nav")[0].style.display = "block";
        navShown = 1;
    }
    else {
        document.getElementsByClassName("mobile-nav")[0].style.display = "none";
        navShown = 0;
    }
}
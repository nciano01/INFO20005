window.addEventListener("resize", reset);

document.getElementsByClassName("backdrop-image--takeaway")[0].onclick = function takeawayExpand() {
    if (window.innerWidth < 1000) {
        document.getElementsByClassName("backdrop-image--takeaway")[0].style.width = "100%";
        document.getElementsByClassName("button--takeaway")[0].style.display = "block";
    }
    
}

function reset() {
    if (window.innerWidth > 1000) {
        document.getElementsByClassName("backdrop-image--takeaway")[0].removeAttribute("style");
        document.getElementsByClassName("button--takeaway")[0].removeAttribute("style");
    }
}
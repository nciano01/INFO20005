window.addEventListener("load", heightEquivalence);
window.addEventListener("resize", heightEquivalence);

function heightEquivalence() {
    var navHeight = document.getElementsByTagName("header")[0].scrollHeight;
    document.getElementsByClassName("homegrid")[0].style.height = "calc(100vh - " + navHeight + "px)";
    console.log("calc(100vh - " + navHeight + "px)");
    var gridHeight = document.getElementsByClassName("homegrid")[0].scrollHeight;
    var imageHeight = document.getElementsByClassName("backdrop-image")[0].scrollHeight;
    console.log(gridHeight);
    console.log(imageHeight);
    document.getElementsByClassName("backdrop-image")[0].style.height = gridHeight + "px";
    document.getElementsByClassName("backdrop-image")[1].style.height = gridHeight + "px";
}
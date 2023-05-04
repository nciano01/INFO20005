window.addEventListener("load", heightEquivalence);
window.addEventListener("resize", heightEquivalence);

function heightEquivalence() {
    var gridHeight = document.getElementsByClassName("homegrid")[0].scrollHeight;
    var imageHeight = document.getElementsByClassName("backdrop-image")[0].scrollHeight;
    console.log(gridHeight);
    console.log(imageHeight);
    document.getElementsByClassName("backdrop-image")[0].style.height = gridHeight + "px";
    document.getElementsByClassName("backdrop-image")[1].style.height = gridHeight + "px";
}
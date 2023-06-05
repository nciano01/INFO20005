window.addEventListener("load", heightEquivalence);
window.addEventListener("resize", heightEquivalence);

/* function to dynamically resize the homepage images */
function heightEquivalence() {
    var navHeight = document.getElementsByTagName("header")[0].scrollHeight;
    document.getElementsByClassName("homegrid")[0].style.height = "calc(100vh - " + navHeight + "px)";
    var gridHeight = document.getElementsByClassName("homegrid")[0].scrollHeight;
    var imageHeight = document.getElementsByClassName("backdrop-image")[0].scrollHeight;
    
    var gridHeightNoClip = document.getElementsByClassName("homegrid")[0].offsetHeight;
    var gridHeightClip =  gridHeight - gridHeightNoClip;
    console.log(gridHeightClip);
    document.getElementsByClassName("backdrop-image")[0].style.height = gridHeight + "px";
    document.getElementsByClassName("backdrop-image")[1].style.height = gridHeight + "px";
    document.getElementsByTagName("footer")[0].style.transform = "translateY(" + gridHeightClip + "px)";
}
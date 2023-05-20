window.addEventListener("load", addClick);
window.addEventListener("resize", addClick);

window.addEventListener("resize", reset);

var clickedState = 0;

function addClick() {
    if (window.innerWidth <= 1000) {
        document.getElementsByClassName("content")[0].style.pointerEvents = "none";
    }
    else {
        document.getElementsByClassName("content")[0].style.pointerEvents = "auto";
    }
}

document.getElementsByClassName("backdrop-image--takeaway")[0].onclick = function takeawayExpand() {
    if (window.innerWidth <= 1000 && clickedState == 0) {
        /* make background image fill */
        document.getElementsByClassName("backdrop-image")[0].style.display = "none";
        document.getElementsByClassName("backdrop-image--takeaway")[0].style.width = "100%"
        document.getElementsByClassName("backdrop-image--takeaway")[0].style.filter = "brightness(100%)";
        /* hide right arrow */
        document.getElementsByClassName("arrow--right")[0].style.display = "none";
        /* hide dine in and take away options */
        document.getElementsByClassName("option")[0].style.display = "none";
        document.getElementsByClassName("option")[1].style.display = "none";
        /* hide logo */
        document.getElementsByClassName("hero-logo")[0].style.display = "none";
        /* change grid format */
        document.getElementsByClassName("homegrid")[0].style.gridTemplateColumns = "0.5fr 10fr 0.5fr";
        document.getElementsByClassName("homegrid")[0].style.gridTemplateRows = "0.5fr 1fr 3fr 0.5fr 0.5fr 10fr 4fr 1fr 0.5fr";
        /* allow for clicking again */
        document.getElementsByClassName("content")[0].style.pointerEvents = "auto";
        /* move left arrow to top, repurpose as back button */
        document.getElementsByClassName("arrow--left")[0].style.position = "absolute";
        document.getElementsByClassName("arrow--left")[0].style.gridRow = "2";
        document.getElementsByClassName("arrow--left")[0].style.gridColumn = "1";
        document.getElementsByClassName("arrow--left")[0].style.marginLeft = "10px";
        /* move takeaway description to middle of grid */
        document.getElementsByClassName("takeaway")[0].style.gridColumn = "2";
        document.getElementsByClassName("takeaway")[0].style.gridRow = "6";
        document.getElementsByClassName("takeaway")[0].style.margin = "auto";
        /* show takeaway description and change colour to black */
        document.getElementsByClassName("option-description")[2].style.display = "block";
        document.getElementsByClassName("option-description")[3].style.display = "block";
        document.getElementsByClassName("option-description")[2].style.color = "var(--black)";
        document.getElementsByClassName("option-description")[3].style.color = "var(--black)";
        /* reshow order button */
        document.getElementsByClassName("button--takeaway")[0].style.display = "block";
        document.getElementsByClassName("button--takeaway")[0].style.gridColumn = "2";
        document.getElementsByClassName("button--takeaway")[0].style.gridRow = "7";
        /* add option header */
        let mobileOptionTitle = document.createElement("h2");
        mobileOptionTitle.setAttribute("class", "mobile-option-title");
        mobileOptionTitle.innerHTML = "Take away";
        document.getElementsByClassName("homegrid")[0].appendChild(mobileOptionTitle);
        /* add frosted rectangle div */
        let mobileBackdrop = document.createElement("div");
        mobileBackdrop.setAttribute("class", "mobile-backdrop");
        document.getElementsByClassName("homegrid")[0].appendChild(mobileBackdrop);
        /* change clickedState to true */
        clickedState = 1;
    }
}

document.getElementsByClassName("backdrop-image")[0].onclick = function takeawayExpand() {
    if (window.innerWidth <= 1000 && clickedState == 0) {
        /* make background image fill */
        document.getElementsByClassName("backdrop-image--takeaway")[0].style.display = "none";
        document.getElementsByClassName("backdrop-image")[0].style.width = "100%"
        document.getElementsByClassName("backdrop-image")[0].style.filter = "brightness(100%)";
        /* hide right arrow */
        document.getElementsByClassName("arrow--right")[0].style.display = "none";
        /* hide dine in and take away options */
        document.getElementsByClassName("option")[0].style.display = "none";
        document.getElementsByClassName("option")[1].style.display = "none";
        /* hide logo */
        document.getElementsByClassName("hero-logo")[0].style.display = "none";
        /* change grid format */
        document.getElementsByClassName("homegrid")[0].style.gridTemplateColumns = "0.5fr 10fr 0.5fr";
        document.getElementsByClassName("homegrid")[0].style.gridTemplateRows = "0.5fr 1fr 3fr 0.5fr 0.5fr 10fr 4fr 1fr 0.5fr";
        /* allow for clicking again */
        document.getElementsByClassName("content")[0].style.pointerEvents = "auto";
        /* move left arrow to top, repurpose as back button */
        document.getElementsByClassName("arrow--left")[0].style.position = "absolute";
        document.getElementsByClassName("arrow--left")[0].style.gridRow = "2";
        document.getElementsByClassName("arrow--left")[0].style.gridColumn = "1";
        document.getElementsByClassName("arrow--left")[0].style.marginLeft = "10px";
        /* move dine-in description to middle of grid */
        document.getElementsByClassName("dinein")[0].style.gridColumn = "2";
        document.getElementsByClassName("dinein")[0].style.gridRow = "6";
        document.getElementsByClassName("dinein")[0].style.margin = "auto";
        /* show takeaway description and change colour to black */
        document.getElementsByClassName("option-description")[0].style.display = "block";
        document.getElementsByClassName("option-description")[1].style.display = "block";
        document.getElementsByClassName("option-description")[0].style.color = "var(--black)";
        document.getElementsByClassName("option-description")[1].style.color = "var(--black)";
        /* reshow order button */
        document.getElementsByClassName("button--dinein")[0].style.display = "block";
        document.getElementsByClassName("button--dinein")[0].style.gridColumn = "2";
        document.getElementsByClassName("button--dinein")[0].style.gridRow = "7";
        /* add option header */
        let mobileOptionTitle = document.createElement("h2");
        mobileOptionTitle.setAttribute("class", "mobile-option-title");
        mobileOptionTitle.innerHTML = "Dine in";
        document.getElementsByClassName("homegrid")[0].appendChild(mobileOptionTitle);
        /* add frosted rectangle div */
        let mobileBackdrop = document.createElement("div");
        mobileBackdrop.setAttribute("class", "mobile-backdrop");
        document.getElementsByClassName("homegrid")[0].appendChild(mobileBackdrop);
        /* change clickedState to true */
        clickedState = 1;
    }
}


function reset() {
    if (window.innerWidth > 1000 && clickedState == 1) {
        /* remove injected CSS */
        document.getElementsByClassName("backdrop-image--takeaway")[0].removeAttribute("style");
        document.getElementsByClassName("backdrop-image")[0].removeAttribute("style");
        document.getElementsByClassName("arrow--right")[0].removeAttribute("style");
        document.getElementsByClassName("option")[0].removeAttribute("style");
        document.getElementsByClassName("option")[1].removeAttribute("style");
        document.getElementsByClassName("hero-logo")[0].removeAttribute("style");
        document.getElementsByClassName("homegrid")[0].removeAttribute("style");
        document.getElementsByClassName("content")[0].removeAttribute("style");
        document.getElementsByClassName("arrow--left")[0].removeAttribute("style");
        document.getElementsByClassName("takeaway")[0].removeAttribute("style");
        document.getElementsByClassName("dinein")[0].removeAttribute("style");
        document.getElementsByClassName("option-description")[0].removeAttribute("style");
        document.getElementsByClassName("option-description")[1].removeAttribute("style");
        document.getElementsByClassName("option-description")[2].removeAttribute("style");
        document.getElementsByClassName("option-description")[3].removeAttribute("style");
        document.getElementsByClassName("button--takeaway")[0].removeAttribute("style");
        document.getElementsByClassName("button--dinein")[0].removeAttribute("style");
        /* delete injected HTML */
        document.getElementsByClassName("mobile-option-title")[0].remove();
        document.getElementsByClassName("mobile-backdrop")[0].remove();
        /* reset clickedState back to false */
        clickedState = 0;
    }
}

document.getElementsByClassName("arrow--left")[0].onclick = function resetOnClick() {
    if (clickedState == 1) {
        /* remove injected CSS */
        document.getElementsByClassName("backdrop-image--takeaway")[0].removeAttribute("style");
        document.getElementsByClassName("backdrop-image")[0].removeAttribute("style");
        document.getElementsByClassName("arrow--right")[0].removeAttribute("style");
        document.getElementsByClassName("option")[0].removeAttribute("style");
        document.getElementsByClassName("option")[1].removeAttribute("style");
        document.getElementsByClassName("hero-logo")[0].removeAttribute("style");
        document.getElementsByClassName("homegrid")[0].removeAttribute("style");
        document.getElementsByClassName("content")[0].removeAttribute("style");
        document.getElementsByClassName("arrow--left")[0].removeAttribute("style");
        document.getElementsByClassName("takeaway")[0].removeAttribute("style");
        document.getElementsByClassName("dinein")[0].removeAttribute("style");
        document.getElementsByClassName("option-description")[0].removeAttribute("style");
        document.getElementsByClassName("option-description")[1].removeAttribute("style");
        document.getElementsByClassName("option-description")[2].removeAttribute("style");
        document.getElementsByClassName("option-description")[3].removeAttribute("style");
        document.getElementsByClassName("button--takeaway")[0].removeAttribute("style");
        document.getElementsByClassName("button--dinein")[0].removeAttribute("style");
        /* delete injected HTML */
        document.getElementsByClassName("mobile-option-title")[0].remove();
        document.getElementsByClassName("mobile-backdrop")[0].remove();
        /* reset clickedState back to false */
        clickedState = 0;
        /* run heightEquivalence function */
        var navHeight = document.getElementsByTagName("header")[0].scrollHeight;
        document.getElementsByClassName("homegrid")[0].style.height = "calc(100vh - " + navHeight + "px)";
        var gridHeight = document.getElementsByClassName("homegrid")[0].scrollHeight;
        var gridHeightNoClip = document.getElementsByClassName("homegrid")[0].offsetHeight;
        var gridHeightClip =  gridHeight - gridHeightNoClip;
        document.getElementsByClassName("backdrop-image")[0].style.height = gridHeight + "px";
        document.getElementsByClassName("backdrop-image")[1].style.height = gridHeight + "px";
        document.getElementsByTagName("footer")[0].style.transform = "translateY(" + gridHeightClip + "px)";
    }
}
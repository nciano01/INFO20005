window.addEventListener("resize", reset);

document.getElementsByClassName("backdrop-image--takeaway")[0].onclick = function takeawayExpand() {
    if (window.innerWidth < 1000) {
        /* make background image fill */
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
        document.getElementsByClassName("homegrid")[0].style.gridTemplateColumns = "0.5fr 0.5fr 1fr 4fr 1fr 0.5fr 0.5fr"
        document.getElementsByClassName("homegrid")[0].style.gridTemplateRows = "0.5fr 1fr 3fr 0.5fr 0.5fr 10fr 4fr 1fr 0.5fr"
        /* allow for clicking again */
        document.getElementsByClassName("content")[0].style.pointerEvents = "auto";
        /* move left arrow to top, repurpose as back button */
        document.getElementsByClassName("arrow--left")[0].style.gridRow = "2";
        document.getElementsByClassName("arrow--left")[0].style.gridColumn = "1";
        document.getElementsByClassName("arrow--left")[0].style.marginLeft = "10px";
        /* move takeaway description to middle of grid */
        document.getElementsByClassName("takeaway")[0].style.gridColumn = "4";
        document.getElementsByClassName("takeaway")[0].style.gridRow = "6";
        document.getElementsByClassName("takeaway")[0].style.margin = "auto";
        /* show takeaway description and change colour to black */
        document.getElementsByClassName("option-description")[2].style.display = "block";
        document.getElementsByClassName("option-description")[3].style.display = "block";
        document.getElementsByClassName("option-description")[2].style.color = "var(--black)";
        document.getElementsByClassName("option-description")[3].style.color = "var(--black)";
        /* reshow order button */
        document.getElementsByClassName("button--takeaway")[0].style.display = "block";
        document.getElementsByClassName("button--takeaway")[0].style.gridColumn = "4";
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
    }
    
}

function reset() {
    if (window.innerWidth > 1000) {
        document.getElementsByClassName("homegrid")[0].removeAttribute("style");
        document.getElementsByClassName("backdrop-image--takeaway")[0].removeAttribute("style");
        document.getElementsByClassName("button--takeaway")[0].removeAttribute("style");
    }
}
// matching right link container width to the left in header
const rightLinkCont = document.getElementById("right-links");
const leftLinkCont = document.getElementById("left-links");

const rightLinkContWidth = rightLinkCont.offsetWidth;

leftLinkCont.style.width = rightLinkContWidth + 'px';

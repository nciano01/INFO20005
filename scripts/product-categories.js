document.getElementById('mezze').style.display = 'none';
document.getElementById('popular').style.display = 'block';
document.getElementById('main-course').style.display = 'none';
document.getElementById('sides').style.display = 'none';
document.getElementById('dessert').style.display = 'none';

var mezzeClicked = 0;
var mainClicked = 0;
var sidesClicked = 0;
var dessertClicked = 0;

function mezzeProducts() {
    if (mezzeClicked == 0) {
        const clicked = document.getElementsByClassName("mezze-button")[0];
        document.getElementById('mezze').style.display = 'block';
        document.getElementById('popular').style.display = 'none';
        document.getElementById('main-course').style.display = 'none';
        document.getElementById('sides').style.display = 'none';
        document.getElementById('dessert').style.display = 'none';
        var mainElems = document.getElementsByClassName('mezze');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'block';
            }
        var mainElems = document.getElementsByClassName('main');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'none';
            }
        var mainElems = document.getElementsByClassName('sides');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'none';
            }
        var mainElems = document.getElementsByClassName('dessert');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'none';
            }
        mezzeClicked = 1;
        mainClicked = 0;
        sidesClicked = 0;
        dessertClicked = 0;

        clicked.style.backgroundColor = "var(--color-secondary)";
        clicked.style.borderColor = "var(--white)";
    }
    else {
        const clicked = document.getElementsByClassName("mezze-button")[0];
        document.getElementById('mezze').style.display = 'none';
        document.getElementById('popular').style.display = 'block';
        document.getElementById('main-course').style.display = 'none';
        document.getElementById('sides').style.display = 'none';
        document.getElementById('dessert').style.display = 'none';
        var mainElems = document.getElementsByClassName('mezze');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'block';
            }
        var mainElems = document.getElementsByClassName('main');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'block';
            }
        var mainElems = document.getElementsByClassName('sides');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'block';
            }
        var mainElems = document.getElementsByClassName('dessert');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'block';
            }
        mezzeClicked = 0;
        mainClicked = 0;
        sidesClicked = 0;
        dessertClicked = 0;
        
        clicked.style.backgroundColor = "var(--white)";
        clicked.style.borderColor = "var(--color-secondary)";
    }
}

function mainCourseProducts() {
    const clicked = document.getElementsByClassName("main-button")[0];
    if (mainClicked == 0) {
        document.getElementById('main-course').style.display = 'block';
        document.getElementById('popular').style.display = 'none';
        document.getElementById('mezze').style.display = 'none';
        document.getElementById('sides').style.display = 'none';
        document.getElementById('dessert').style.display = 'none';
        var mainElems = document.getElementsByClassName('mezze');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'none';
            }
        var mainElems = document.getElementsByClassName('main');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'block';
            }
        var mainElems = document.getElementsByClassName('sides');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'none';
            }
        var mainElems = document.getElementsByClassName('dessert');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'none';
            }
        mezzeClicked = 0;
        mainClicked = 1;
        sidesClicked = 0;
        dessertClicked = 0;

        clicked.style.backgroundColor = "var(--color-secondary)";
        clicked.style.borderColor = "var(--white)";
    }
    else {
        const clicked = document.getElementsByClassName("main-button")[0];
        document.getElementById('mezze').style.display = 'none';
        document.getElementById('popular').style.display = 'block';
        document.getElementById('main-course').style.display = 'none';
        document.getElementById('sides').style.display = 'none';
        document.getElementById('dessert').style.display = 'none';
        var mainElems = document.getElementsByClassName('mezze');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'block';
            }
        var mainElems = document.getElementsByClassName('main');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'block';
            }
        var mainElems = document.getElementsByClassName('sides');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'block';
            }
        var mainElems = document.getElementsByClassName('dessert');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'block';
            }
        mezzeClicked = 0;
        mainClicked = 0;
        sidesClicked = 0;
        dessertClicked = 0;

        clicked.style.backgroundColor = "var(--white)";
        clicked.style.borderColor = "var(--color-secondary)";
    }
    
}

function sidesProducts() {
    if (sidesClicked == 0) {
        const clicked = document.getElementsByClassName("sides-button")[0];
        document.getElementById('sides').style.display = 'block';
        document.getElementById('popular').style.display = 'none';
        document.getElementById('mezze').style.display = 'none';
        document.getElementById('main-course').style.display = 'none';
        document.getElementById('dessert').style.display = 'none';
        var mainElems = document.getElementsByClassName('mezze');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'none';
            }
        var mainElems = document.getElementsByClassName('main');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'none';
            }
        var mainElems = document.getElementsByClassName('sides');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'block';
            }
        var mainElems = document.getElementsByClassName('dessert');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'none';
            }
        mezzeClicked = 0;
        mainClicked = 0;
        sidesClicked = 1;
        dessertClicked = 0;

        clicked.style.backgroundColor = "var(--color-secondary)";
        clicked.style.borderColor = "var(--white)";
    }
    else {
        const clicked = document.getElementsByClassName("sides-button")[0];
        document.getElementById('mezze').style.display = 'none';
        document.getElementById('popular').style.display = 'block';
        document.getElementById('main-course').style.display = 'none';
        document.getElementById('sides').style.display = 'none';
        document.getElementById('dessert').style.display = 'none';
        var mainElems = document.getElementsByClassName('mezze');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'block';
            }
        var mainElems = document.getElementsByClassName('main');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'block';
            }
        var mainElems = document.getElementsByClassName('sides');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'block';
            }
        var mainElems = document.getElementsByClassName('dessert');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'block';
            }
        mezzeClicked = 0;
        mainClicked = 0;
        sidesClicked = 0;
        dessertClicked = 0;

        clicked.style.backgroundColor = "var(--white)";
        clicked.style.borderColor = "var(--color-secondary)";
    }
}

function dessertProducts() {
    if (dessertClicked == 0) {
        const clicked = document.getElementsByClassName("dessert-button")[0];
        document.getElementById('dessert').style.display = 'block';
        document.getElementById('popular').style.display = 'none';
        document.getElementById('mezze').style.display = 'none';
        document.getElementById('main-course').style.display = 'none';
        document.getElementById('sides').style.display = 'none';
        var mainElems = document.getElementsByClassName('mezze');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'none';
            }
        var mainElems = document.getElementsByClassName('main');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'none';
            }
        var mainElems = document.getElementsByClassName('sides');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'none';
            }
        var mainElems = document.getElementsByClassName('dessert');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'block';
            }
        mezzeClicked = 0;
        mainClicked = 0;
        sidesClicked = 0;
        dessertClicked = 1;

        clicked.style.backgroundColor = "var(--color-secondary)";
        clicked.style.borderColor = "var(--white)";
    }
    else {
        const clicked = document.getElementsByClassName("dessert-button")[0];
        document.getElementById('mezze').style.display = 'none';
        document.getElementById('popular').style.display = 'block';
        document.getElementById('main-course').style.display = 'none';
        document.getElementById('sides').style.display = 'none';
        document.getElementById('dessert').style.display = 'none';
        var mainElems = document.getElementsByClassName('mezze');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'block';
            }
        var mainElems = document.getElementsByClassName('main');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'block';
            }
        var mainElems = document.getElementsByClassName('sides');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'block';
            }
        var mainElems = document.getElementsByClassName('dessert');
            for (var i=0; i<mainElems.length; i++) {
                mainElems[i].style.display = 'block';
            }
        mezzeClicked = 0;
        mainClicked = 0;
        sidesClicked = 0;
        dessertClicked = 0;

        clicked.style.backgroundColor = "var(--white)";
        clicked.style.borderColor = "var(--color-secondary)";
    }
}
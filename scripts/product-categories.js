function mezzeProducts() {
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
}

function mainCourseProducts() {
    document.getElementById('main-course').style.display = 'block';
    document.getElementById('popular').style.display = 'none';
    document.getElementById('mezze').style.display = 'none';
    document.getElementById('sides').style.display = 'none';
    document.getElementById('dessert').style.display = 'none';
}

function sidesProducts() {
    document.getElementById('sides').style.display = 'block';
    document.getElementById('popular').style.display = 'none';
    document.getElementById('mezze').style.display = 'none';
    document.getElementById('main-course').style.display = 'none';
    document.getElementById('dessert').style.display = 'none';
}

function dessertProducts() {
    document.getElementById('dessert').style.display = 'block';
    document.getElementById('popular').style.display = 'none';
    document.getElementById('mezze').style.display = 'none';
    document.getElementById('main-course').style.display = 'none';
    document.getElementById('sides').style.display = 'none';
}
function mezzeProducts() {
    document.getElementById('mezze').style.display = 'block';
    document.getElementById('popular').style.display = 'none';
    document.getElementById('main-course').style.display = 'none';
    document.getElementById('sides').style.display = 'none';
    document.getElementById('dessert').style.display = 'none';
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
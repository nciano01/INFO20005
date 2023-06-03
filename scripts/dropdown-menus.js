document.getElementsByClassName("delivery-t1")[0].style.display = "block";
document.getElementsByClassName("delivery-t2")[0].style.display = "none";

var dropdown = document.getElementById("day-id");
dropdown.addEventListener("change", selectiveDropdown);

function selectiveDropdown() {
    var selection = document.getElementById("day-id").value;
    if (selection == "monday" || selection == "tuesday" || selection == "wednesday" || selection == "thursday" || selection == "friday") {
        document.getElementsByClassName("delivery-t1")[0].style.display = "block";
        document.getElementsByClassName("delivery-t2")[0].style.display = "none";
    } else if (selection == "saturday" || selection == "sunday") {
        document.getElementsByClassName("delivery-t1")[0].style.display = "none";
        document.getElementsByClassName("delivery-t2")[0].style.display = "block";
    } else {
        var date = new Date();
        var day = date.getDay();
        if (day == 1 || day == 2 || day == 3 || day == 4 || day == 5) {
            document.getElementsByClassName("delivery-t1")[0].style.display = "block";
            document.getElementsByClassName("delivery-t2")[0].style.display = "none";
        } else if (day == 0 || day == 6) {
            document.getElementsByClassName("delivery-t1")[0].style.display = "none";
            document.getElementsByClassName("delivery-t2")[0].style.display = "block";
        }
    }
}
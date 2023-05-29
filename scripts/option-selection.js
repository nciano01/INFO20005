var optionButton = document.getElementsByClassName('option-but');

function selection() {
    for (var i=0; i<optionButton.length; i++) {
        if (document.getElementsByClassName('option-but')[i].style.borderColor == 'var(--color-tertiary)') {
            document.getElementsByClassName('option-but')[i].style.borderColor = 'var(--light-grey)';
        }
    }
}
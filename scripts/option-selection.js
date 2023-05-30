function smallSelection() {
    if (document.getElementsByClassName('small')[0].style.borderColor == 'var(--color-tertiary)') {
        document.getElementsByClassName('small')[0].style.borderColor = 'var(--light-grey)';
        document.getElementsByClassName('large')[0].style.borderColor = 'var(--color-tertiary)';
    }
    else {
        document.getElementsByClassName('small')[0].style.borderColor = 'var(--color-tertiary)';
        document.getElementsByClassName('large')[0].style.borderColor = 'var(--light-grey)';
    }
}

function largeSelection() {
    if (document.getElementsByClassName('large')[0].style.borderColor == 'var(--color-tertiary)') {
        document.getElementsByClassName('large')[0].style.borderColor = 'var(--light-grey)';
        document.getElementsByClassName('small')[0].style.borderColor = 'var(--color-tertiary)';
    }
    else {
        document.getElementsByClassName('large')[0].style.borderColor = 'var(--color-tertiary)';
        document.getElementsByClassName('small')[0].style.borderColor = 'var(--light-grey)';
    }
}

function pitaSelection() {
    if (document.getElementsByClassName('pita')[0].style.borderColor == 'var(--color-tertiary)') {
        document.getElementsByClassName('pita')[0].style.borderColor = 'var(--light-grey)';
        document.getElementsByClassName('turkish')[0].style.borderColor = 'var(--color-tertiary)';
    }
    else {
        document.getElementsByClassName('pita')[0].style.borderColor = 'var(--color-tertiary)';
        document.getElementsByClassName('turkish')[0].style.borderColor = 'var(--light-grey)';
    }
}

function turkishSelection() {
    if (document.getElementsByClassName('turkish')[0].style.borderColor == 'var(--color-tertiary)') {
        document.getElementsByClassName('turkish')[0].style.borderColor = 'var(--light-grey)';
        document.getElementsByClassName('pita')[0].style.borderColor = 'var(--color-tertiary)';
    }
    else {
        document.getElementsByClassName('turkish')[0].style.borderColor = 'var(--color-tertiary)';
        document.getElementsByClassName('pita')[0].style.borderColor = 'var(--light-grey)';
    }
}
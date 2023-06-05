var totalPrice = document.querySelectorAll(".total-price h3")[0];

function smallSelection() {
    if (document.getElementsByClassName('small')[0].style.borderColor == 'var(--color-tertiary)') {
        document.getElementsByClassName('small')[0].style.borderColor = 'var(--color-tertiary)';
        document.getElementsByClassName('large')[0].style.borderColor = 'var(--light-grey)';
    } else {
        document.getElementsByClassName('small')[0].style.borderColor = 'var(--color-tertiary)';
        document.getElementsByClassName('small')[0].style.color = 'var(--black)';
        document.getElementsByClassName('large')[0].style.borderColor = 'var(--light-grey)';
        document.getElementsByClassName('large')[0].style.color = 'var(--medium-grey)';
        totalPrice.textContent = "$" + String((Number(totalPrice.textContent.slice(1)) - 5).toFixed(2));
    }
}

function largeSelection() {
    if (document.getElementsByClassName('large')[0].style.borderColor == 'var(--color-tertiary)') {
        document.getElementsByClassName('large')[0].style.borderColor = 'var(--color-tertiary)';
        document.getElementsByClassName('small')[0].style.borderColor = 'var(--light-grey)';
    } else {
        document.getElementsByClassName('large')[0].style.borderColor = 'var(--color-tertiary)';
        document.getElementsByClassName('large')[0].style.color = 'var(--black)';
        document.getElementsByClassName('small')[0].style.borderColor = 'var(--light-grey)';
        document.getElementsByClassName('small')[0].style.color = 'var(--medium-grey)';
        totalPrice.textContent = "$" + String((Number(totalPrice.textContent.slice(1)) + 5).toFixed(2));
    }
}

function pitaSelection() {
    if (document.getElementsByClassName('pita')[0].style.borderColor == 'var(--color-tertiary)') {
        document.getElementsByClassName('pita')[0].style.borderColor = 'var(--color-tertiary)';
        document.getElementsByClassName('turkish')[0].style.borderColor = 'var(--light-grey)';
    } else {
        document.getElementsByClassName('pita')[0].style.borderColor = 'var(--color-tertiary)';
        document.getElementsByClassName('pita')[0].style.color = 'var(--black)';
        document.getElementsByClassName('turkish')[0].style.borderColor = 'var(--light-grey)';
        document.getElementsByClassName('turkish')[0].style.color = 'var(--medium-grey)';
    }
}

function turkishSelection() {
    if (document.getElementsByClassName('turkish')[0].style.borderColor == 'var(--color-tertiary)') {
        document.getElementsByClassName('turkish')[0].style.borderColor = 'var(--color-tertiary)';
        document.getElementsByClassName('pita')[0].style.borderColor = 'var(--light-grey)';
    }
    else {
        document.getElementsByClassName('turkish')[0].style.borderColor = 'var(--color-tertiary)';
        document.getElementsByClassName('turkish')[0].style.color = 'var(--black)';
        document.getElementsByClassName('pita')[0].style.borderColor = 'var(--light-grey)';
        document.getElementsByClassName('pita')[0].style.color = 'var(--medium-grey)';
    }
}
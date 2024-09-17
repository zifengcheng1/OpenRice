var textField = document.getElementById('textField');
//const submitBTN = document.getElementById('submitBTN');
textField.addEventListener('input', checkInput);

function checkInput() {
    if (textField.value && !isNaN(textField.value)){
        submitBTN.disabled = false;
        submitBTN.classList.remove('btn-primary-inactive');
        submitBTN.classList.add('btn-primary');
    } else{
        submitBTN.disabled = true;
        submitBTN.classList.remove('btn-primary');
        submitBTN.classList.add('btn-primary-inactive');
    }
}

function lockerNum() {
    const lockers = [1,2,3,4];
    var emptyLocker = lockers.findIndex(isEmpty);
    if (emptyLocker >= 0) {
        return lockers[emptyLocker];
    } else {
        return 0;
    }
}

function isEmpty(num) {
    if (localStorage.getItem(num.toString()) == null) {
        return true;
    }
    return false;
}
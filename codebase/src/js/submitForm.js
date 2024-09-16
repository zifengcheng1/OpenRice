

const textField = document.getElementById('textField');
const submitBTN = document.getElementById('submitBTN');

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



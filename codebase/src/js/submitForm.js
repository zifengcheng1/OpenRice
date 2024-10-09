const textField = document.getElementById('textField');
const submitBTN = document.getElementById('submit-btn');

textField.addEventListener('input', checkInput);

submitBTN.addEventListener('click', function() {
    window.location.href='./selection.html'
})

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
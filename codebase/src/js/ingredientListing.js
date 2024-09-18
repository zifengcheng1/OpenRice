const btnTags = document.querySelectorAll('.btn-tag');
const tagInput = document.getElementById('selectedTag');
const itemName = document.getElementById('itemName');
const origin = document.getElementById('origin');
const purchaseDate = document.getElementById('purchaseDate');
const expiryDate = document.getElementById('expiryDate');
const submitBTN = document.getElementById('submitBTN');

/* 
    const tagInput: Use to store the selected category, you can return the value by using tagInput.value
    const itemName: Use to store the ingredient name, you can return the value by using itenName.value
    const origin: Use to store purchase origin, you can return the value by using origin.value
    const purchaseDate: Use to store the ingredient name, you can return the value by using purchaseDate.value
    const expiryDate: Use to store the ingredient name, you can return the value by using expiryDate.value
*/

function clearCategory() {
    btnTags.forEach(button => {
        button.classList.remove('btn-tag-clicked');
        button.classList.add('btn-tag');
    })
}

function checkInput() {
    if(tagInput.value && itemName.value && origin.value && purchaseDate.value && expiryDate.value){
        submitBTN.disabled = false;
        submitBTN.classList.remove('btn-primary-inactive');
        submitBTN.classList.add('btn-primary');
    } else{
        submitBTN.disabled = true;
        submitBTN.classList.remove('btn-primary');
        submitBTN.classList.add('btn-primary-inactive');
    }
}

btnTags.forEach(button => {
    button.addEventListener('click', function(){
        if (tagInput.value === this.getAttribute('data-value')){
            clearCategory();
            tagInput.value = '';
        }else{
            clearCategory();
            this.classList.remove('btn-tag');
            this.classList.add('btn-tag-clicked');
            tagInput.value = this.getAttribute('data-value');
            console.log(tagInput.value);
        }
        checkInput();
    });
});

[itemName, origin, purchaseDate, expiryDate].forEach(field => {
    field.addEventListener('change', checkInput);
    field.addEventListener('input', checkInput);
});

submitBTN.addEventListener('click', function(){
    window.location.href='./listing-successful.html';
})
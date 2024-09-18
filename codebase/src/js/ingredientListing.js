if (localStorage.getItem("lockersFilled") == "4") {
    window.location.href="listing-successful.html"
}

const categoryTags = document.querySelectorAll('.btn-tag');
const tagInput = document.getElementById('selectedTag');
const itemName = document.getElementById('itemName');
const origin = document.getElementById('origin');
const purchaseDate = document.getElementById('purchaseDate');
const expiryDate = document.getElementById('expiryDate');
const submitBTN = document.getElementById('submitBTN');

function clearCategory() {
    categoryTags.forEach(button => {
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

categoryTags.forEach(button => {
    button.addEventListener('click', function(){
        // If the button is active while clicked, deselect it
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

submitBTN.addEventListener('click', store_submission, useCapture=true);
submitBTN.addEventListener('click', function(){
    window.location.href='./listing-successful.html';
})


function store_submission() {
    const submission = new Object();
    submission.category = tagInput.value;
    submission.name = itemName.value;
    submission.origin = origin.value;
    submission.purchaseDate = purchaseDate.value;
    submission.expiryDate = expiryDate.value;
    var emptyLocker = lockerNum();
    localStorage.setItem(emptyLocker.toString(), JSON.stringify(submission));
}

function lockerNum() {
    const lockers = [1,2,3,4];
    var emptyLocker = lockers.findIndex(isEmpty);
    console.log(emptyLocker)
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
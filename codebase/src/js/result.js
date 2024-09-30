const categoryTags = document.querySelectorAll('.category-tag');
const clickedTags = document.querySelectorAll('.category-tag-clicked');
const filterValue = document.getElementById('selectedTag');
populateGallery("all");


function clearCategory() {
    categoryTags.forEach(button => {
        button.classList.remove('category-tag-clicked');
        button.classList.add('category-tag');
    })
    clickedTags.forEach(button => {
        button.classList.remove('category-tag-clicked');
        button.classList.add('category-tag');
    })
}

categoryTags.forEach(button => {
    button.addEventListener('click', function(){
        if (filterValue.value === this.getAttribute('data-value')){
            filterValue.value = '';
        }else{
            clearCategory();
            this.classList.remove('category-tag');
            this.classList.add('category-tag-clicked');
            filterValue.value = this.getAttribute('data-value');
            console.log(filterValue.value);
        }
        document.getElementById("gallery-grid").innerHTML = ""
        populateGallery(filterValue.value);
    });
});

clickedTags.forEach(button => {
    button.addEventListener('click', function(){
        if (filterValue.value === this.getAttribute('data-value')){
            filterValue.value = '';
        }else{
            clearCategory();
            this.classList.remove('category-tag');
            this.classList.add('category-tag-clicked');
            filterValue.value = this.getAttribute('data-value');
            console.log(filterValue.value);
        }
        document.getElementById("gallery-grid").innerHTML = ""
        populateGallery(filterValue.value);
    });
});

function populateGallery(filter) {
    for (let i = 1; i < 5; i++) {
        var data = JSON.parse(localStorage.getItem(i.toString()));
        if (data == null) {
            continue;
        }
        var category = data.category;
        var listing = document.querySelector('#ingredient-list-template').content.cloneNode(true);
        listing.querySelector('#gallery-item').setAttribute('data-value', i.toString());
        listing.querySelector('#listing-name').textContent = data.name;
        listing.querySelector('#locker-num').textContent = i.toString();
        listing.querySelector('#purchase-date').textContent = data.purchaseDate;
        listing.querySelector('#expiry-date').textContent = data.expiryDate;
        listing.querySelector('#purchase-origin').textContent = data.origin; 
        listing.querySelector('#listing-graphic').src = "./assests/icons/" + category + ".svg"
        if (filter == "all" || category == filter) {
            document.getElementById('gallery-grid').appendChild(listing);
        }
    }
}
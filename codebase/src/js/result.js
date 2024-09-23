const categoryTags = document.querySelectorAll('.category-tag');
const clickedTags = document.querySelectorAll('.category-tag-clicked');
const filterValue = document.getElementById('selectedTag');

/* 
    const filterValue: Use to store the selected category for filtering result, you can return the value by using filterValue.value.
*/

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
    });
});
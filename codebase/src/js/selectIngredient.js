const galleryItem = document.querySelectorAll('.gallery-item');
const popupScreen = document.querySelector('.popup-screen'); 
const cancelBTN = document.getElementById('cancel-btn');

galleryItem.forEach(div => {
    div.addEventListener('click', function(){ 
        var name = div.querySelector('#listing-name').textContent;
        popupScreen.querySelector('#name').textContent = name;
        popupScreen.style.display="block";
        
    });
})

cancelBTN.addEventListener('click', function() {
    popupScreen.style.display="none";
});
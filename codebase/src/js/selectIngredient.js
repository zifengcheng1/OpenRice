const galleryItem = document.querySelectorAll('.gallery-item');
const popupScreen = document.querySelector('.popup-screen'); 
const cancelBTN = document.getElementById('cancel-btn');

galleryItem.forEach(div => {
    div.addEventListener('click', function(){ 
        popupScreen.style.display="block";
    });
})

cancelBTN.addEventListener('click', function() {
    popupScreen.style.display="none";
});
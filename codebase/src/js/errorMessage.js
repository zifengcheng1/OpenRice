const listingBTN = document.getElementById('listing-btn');
const popupScreen = document.querySelector('.popup-screen'); 
const cancelBTN = document.getElementById('cancel-btn');


listingBTN.addEventListener('click', function() {
    if (localStorage.getItem("lockersFilled") == null) {
        localStorage.setItem("lockersFilled", "0");
        window.location.href='./list-ingredient.html';
    } else if (Number(localStorage.getItem("lockersFilled")) >= 4) {
        popupScreen.style.display = "block";
    } else {
        window.location.href = './list-ingredient.html';
    }
});

cancelBTN.addEventListener('click', function() {
    popupScreen.style.display="none";
});
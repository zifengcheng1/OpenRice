const listingBTN = document.getElementById('listing-btn');
const popupScreen = document.querySelector('.popup-screen'); 
const cancelBTN = document.getElementById('cancel-btn');


listingBTN.addEventListener('click', function() {
    
    /* 
        Set if statement here 
        If there are data, then direct to ./list-ingredient.html
        you can achieve this by calling window.location.href='./listing-ingredient.html';

        If not, set popupScreen.style.display to be "block"
    */
    console.log("Listerner is listening")
    if (localStorage.getItem("lockersFilled") == null) {
        localStorage.setItem("lockersFilled", "0");
        window.location.href='./list-ingredient.html';
    } else if (localStorage.getItem("lockersFilled") == "4") {
        popupScreen.style.display = "block";
    }
    window.location.href='./list-ingredient.html';
   //popupScreen.style.display="block";
});

cancelBTN.addEventListener('click', function() {
    popupScreen.style.display="none";
});
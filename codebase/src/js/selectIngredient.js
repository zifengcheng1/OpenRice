const galleryItem = document.querySelectorAll('.gallery-item');
const popupScreen = document.querySelector('.popup-screen'); 
const cancelBTN = document.getElementById('cancel-btn');
const confirmBTN = document.getElementById('confirm-btn');

galleryItem.forEach(div => {
    div.addEventListener('click', function(){ 
        var name = div.querySelector('#listing-name').textContent;
        var lockerNum = div.querySelector('#locker-num').textContent;
        popupScreen.querySelector('#dest-locker').textContent = lockerNum;
        popupScreen.querySelector('#name').textContent = name;
        popupScreen.style.display="block";
    });
})

cancelBTN.addEventListener('click', function() {
    popupScreen.style.display="none";
});

confirmBTN.addEventListener('click', function(){
    var lockerNum = popupScreen.querySelector('#dest-locker').textContent;
    var lockersFilled = parseInt(localStorage.getItem("lockersFilled"));
    lockersFilled -= 1;
    localStorage.removeItem(lockerNum);
    localStorage.setItem("lockersFilled", lockersFilled.toString())
    var link = "./select-Successful.html?locker=";
    link = link + lockerNum;
    window.location.href= link;
})

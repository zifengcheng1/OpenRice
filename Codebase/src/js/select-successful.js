const Params = new URLSearchParams(window.location.search);
var lockerNum = Params.get('locker');
document.getElementById('locker-num').innerText = lockerNum;

const DoneBTN = document.getElementById("doneBTN");
DoneBTN.addEventListener('click', function () {
    let socket = new WebSocket("ws://localhost:8081")
    socket.onopen = () => socket.send('c');
    setTimeout(function () {
        window.location.href='./selection.html';
      }, 150);
})
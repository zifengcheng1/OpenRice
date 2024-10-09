const Params = new URLSearchParams(window.location.search);
const lockerNum = Params.get('locker');
document.getElementById('locker-num').innerText = lockerNum;

// Close locker when user clicks done
const DoneBTN = document.getElementById("doneBTN");
DoneBTN.addEventListener('click', function () {
    let socket = new WebSocket("ws://localhost:8081")
    socket.onopen = () => socket.send(lockerNum);
    setTimeout(function () {
        window.location.href='./selection.html';
      }, 150);
})
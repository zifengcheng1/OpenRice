var lockerNum = Number(localStorage.getItem("lockersFilled"));
if (lockerNum < 4) {
    lockerNum += 1;
}
document.getElementById("locker").innerText = lockerNum.toString();
localStorage.setItem("lockersFilled", lockerNum.toString());
const DoneBTN = document.getElementById("doneBTN");
DoneBTN.addEventListener('click', function () {
    let socket = new WebSocket("ws://localhost:8081")
    socket.onopen = () => socket.send('c');
    setTimeout(function () {
        window.location.href='./selection.html';
      }, 150);
})
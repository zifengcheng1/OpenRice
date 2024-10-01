var lockerNum = Number(localStorage.getItem("lockersFilled"));
if (lockerNum < 4) {
    lockerNum += 1;
}
document.getElementById("locker").innerText = lockerNum.toString();
localStorage.setItem("lockersFilled", lockerNum.toString());
const DoneBTN = document.getElementById("doneBTN");
DoneBTN.addEventListener('click', async () => {
    let ports = await navigator.serial.getPorts();
    let port = await ports[0]
    await port.open({ baudRate: 9600 });
    setTimeout(function () {
        window.location.href='./selection.html'
      }, 3000);
})
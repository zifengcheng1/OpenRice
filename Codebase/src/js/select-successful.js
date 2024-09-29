const Params = new URLSearchParams(window.location.search);
var lockerNum = Params.get('locker');
document.getElementById('locker-num').innerText = lockerNum;
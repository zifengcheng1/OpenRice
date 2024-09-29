var lockerNum = Number(localStorage.getItem("lockersFilled")) + 1;
document.getElementById("locker").innerText = lockerNum.toString();
localStorage.setItem("lockersFilled", lockerNum.toString());
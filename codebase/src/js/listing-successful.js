const Params = new URLSearchParams(window.location.search);
const DoneBTN = document.getElementById("doneBTN");

// Close locker once user clicks done
DoneBTN.addEventListener('click', function () {
    var lockerNum = Params.get('locker');
    let socket = new WebSocket("ws://localhost:8081")
    socket.onopen = () => socket.send(lockerNum);
    setTimeout(function () {
        window.location.href='./selection.html';
      }, 150);
})

window.addEventListener("load", addListing);

/**
 * Increment the number of lockers filled by one and display the correct locker
 * to the user
 */
function addListing() {
    var lockerNum = Params.get('locker');
    var lockersNum = Number(localStorage.getItem("lockersFilled"));
    if (lockersNum < 4) {
        lockersNum += 1;
    }
    localStorage.setItem("lockersFilled", lockersNum.toString());
    document.getElementById("locker").innerText = lockerNum
}

// Returns an empty locker if available
function lockerNum() {
    const lockers = [1,2,3,4];
    var emptyLocker = lockers.findIndex(isEmpty);
    if (emptyLocker >= 0) { 
        return lockers[emptyLocker];
    } else {
        return 0;
    }
}

// Check if a specific locker index is empty
function isEmpty(num) {
    if (localStorage.getItem(num.toString()) == null) {
        return true;
    }
    return false;
}


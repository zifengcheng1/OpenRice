function lockerNum() {
    const lockers = [1,2,3,4];
    var emptyLocker = lockers.findIndex(isEmpty);
    if (emptyLocker >= 0) {
        return lockers[emptyLocker];
    } 
    return 0;
}

function isEmpty(num) {
    if (localStorage.getItem(num.toString()) == null) {
        return true;
    }
    return false;
}

var emptyLockerNum = lockerNum();
if (emptyLockerNum > 0) {
    emptyLockerNum = emptyLockerNum - 1;
    document.getElementById('locker').innerText = emptyLockerNum.toString();
} else {
    document.getElementById("title").innerText = "Listing failed!";
    document.getElementById("message").innerText = "Sorry, all lockers are full. Please try again later";
}

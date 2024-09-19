function lockerNum() {
    const lockers = [1,2,3,4,5];
    var emptyLocker = lockers.findIndex(isEmpty);
    if (emptyLocker >= 0) {
        if (emptyLocker == 4){
            localStorage.setItem("Full", "true")
            return 4;
        }
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

if (localStorage.getItem("lockersFilled") == null) {
    localStorage.setItem("lockersFilled", "1");
    document.getElementById('locker').innerText = "1";
} else if (localStorage.getItem("lockersFilled") == "4") {
    document.getElementById("title").innerText = "Listing failed!";
    document.getElementById("message").innerText = "Sorry, all lockers are full. Please try again later";
} else {
    var lockerNum = Number(localStorage.getItem("lockersFilled")) + 1;
    document.getElementById('locker').innerText = lockerNum.toString();
    localStorage.setItem("lockersFilled", lockerNum.toString());
}
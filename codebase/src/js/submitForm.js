openPort()
const textField = document.getElementById('textField');
const submitBTN = document.getElementById('submit-btn');
textField.addEventListener('input', checkInput);
//usbProductId: 67
//usbVendorIdL 9025
let usbProductId = 67
let usbVendorId = 9025

submitBTN.addEventListener('click', function() {
    /** 
    port = await navigator.serial.requestPort();
    await port.open({ baudRate: 9600 });
    const textEncoder = new TextEncoderStream()
    const writableStreamClosed = textEncoder.readable.pipeTo(port.writable)
    const writer = textEncoder.writable.getWriter()
    await writer.write('c')
    await writer.close()
    await port.close()
    */
    window.location.href='./selection.html'
})

function checkInput() {
    if (textField.value && !isNaN(textField.value)){
        submitBTN.disabled = false;
        submitBTN.classList.remove('btn-primary-inactive');
        submitBTN.classList.add('btn-primary');
    } else{
        submitBTN.disabled = true;
        submitBTN.classList.remove('btn-primary');
        submitBTN.classList.add('btn-primary-inactive');
    }
}

function lockerNum() {
    const lockers = [1,2,3,4];
    var emptyLocker = lockers.findIndex(isEmpty);
    if (emptyLocker >= 0) {
        return lockers[emptyLocker];
    } else {
        return 0;
    }
}

function isEmpty(num) {
    if (localStorage.getItem(num.toString()) == null) {
        return true;
    }
    return false;
}

async function openPort() {
    try {
        let ports = await navigator.serial.getPorts();
        if (ports.length > 0) {
            let port = ports[0];
            //await closePort(port);
            await port.open({ baudRate: 9600 });
            let writer = port.writable.getWriter()
        } else {
            port = await navigator.serial.requestPort();            
            await port.open({ baudRate: 9600 });
        }
    } catch (error) {
        console.error("Failed to open the port:", error);
    }
}

async function closePort(port) {
    if (port.readable || port.writable) {
        await port.close();
    }
}
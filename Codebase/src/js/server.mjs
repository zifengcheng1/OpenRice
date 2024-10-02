import { SerialPort } from 'serialport'
import { WebSocketServer } from "ws";

const PORT = new SerialPort({ path: 'COM7', baudRate: 19200})
const SERVER_PORT = 8081
let wss = new WebSocketServer({port: SERVER_PORT})
let connections = new Array

function openLocker(lockerNum) {
    PORT.write('o', function (err) {
        if (err) {
            console.log("Error opening")
            console.log(err)
        }
    })
}

function closeLocker(lockerNum) {
    PORT.write('c', function (err) {
        if (err) {
            console.log("Error opening")
            console.log(err)
        }
    })
}

wss.on('connection', handleConnection)

function handleConnection(client) {
    console.log("New Connection")
    connections.push(client)
    client.on('message', handleCommands)
    client.on('close', function () {
        console.log("Connection closed")
        let position = connections.indexOf(client)
        connections.splice(position, 1)
    })
}

function handleCommands(command) {
    command = command.toString()
    console.log("Sending to arduino")
    switch(command) {
        case 'o':
            console.log("Opening")
            openLocker(1)
            break;
        case 'c':
            console.log("Closing")
            closeLocker(1)
            break;
    }
}

console.log("Server started")
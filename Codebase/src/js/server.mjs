import { SerialPort } from 'serialport'
import { WebSocketServer } from "ws";

const PORT = new SerialPort({ path: 'COM7', baudRate: 19200})
const SERVER_PORT = 8081
let wss = new WebSocketServer({port: SERVER_PORT})
let connections = new Array

function openLocker(lockerNum) {
    PORT.write('o' + lockerNum, function (err) {
        if (err) {
            console.log("Error opening")
            console.log(err)
        }
    })
}

function closeLocker(lockerNum) {
    PORT.write('c' + lockerNum, function (err) {
        if (err) {
            console.log("Error closing")
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
    console.log("Sending to arduino")
    PORT.write(command, function (err) {
        if (err) {
            console.log("Error sending")
            console.log(err)
        }
    })
}

console.log("Server started")
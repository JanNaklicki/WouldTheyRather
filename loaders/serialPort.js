const SerialPort = require('serialport')
const Readline = SerialPort.parsers.Readline
const serialport = new SerialPort('COM5')
const parser = new Readline();


exports.serialport = serialport
exports.parser = parser
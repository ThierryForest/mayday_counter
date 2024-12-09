let tour = 0
let PosY = 0
let PosX = 0
radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.Yes)
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    count5()
})
function count5 () {
    tour = 1
    while (tour < 6) {
        basic.showNumber(tour)
        basic.pause(200)
        basic.clearScreen()
        tour += 1
    }
}
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    matrixRun()
})
function matrixRun () {
    PosY = 0
    PosX = 0
    while (PosX < 5) {
        led.toggle(PosX, PosY)
        basic.pause(100)
        led.toggle(PosX, PosY)
        basic.pause(100)
        PosX += 1
        basic.pause(100)
        if (PosX == 5) {
            PosX = 0
            PosY += 1
        }
    }
}
basic.forever(function () {
	
})

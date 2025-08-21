input.onButtonPressed(Button.A, function () {
    if (xSchieber > 0) {
        led.unplot(xSchieber, 4)
        xSchieber = xSchieber - 1
        led.plot(xSchieber, 4)
    }
})
input.onButtonPressed(Button.B, function () {
    if (xSchieber < 4) {
        led.unplot(xSchieber, 4)
        xSchieber = xSchieber + 1
        led.plot(xSchieber, 4)
    }
})
let tfaellt = 0
let tstart = 0
let xWert = 0
let xSchieber = 0
xSchieber = 2
basic.forever(function () {
    led.plot(xSchieber, 4)
    xWert = randint(0, 4)
    tstart = 0
    tfaellt = 0
    while (tfaellt < 5) {
        led.plot(xWert, tfaellt)
        basic.pause(500)
        led.unplot(xWert, tfaellt)
        tfaellt = tfaellt + 1
    }
})

input.onButtonPressed(Button.A, function () {
    if (brillo < 256) {
        brillo += 51
    }
})
input.onButtonPressed(Button.B, function () {
    if (brillo >= 0) {
        brillo += -51
    }
})
let brillo = 0
led.setBrightness(0)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.forever(function () {
    led.setBrightness(brillo)
})

// dht11_dht22.query_data(DHTtype.DHT11, DigitalPin.P0, False, False, True)
// while pins.analog_read_pin(AnalogPin.P0) > 500:
// for index in range(20):
// pass
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 500) {
        basic.showString("AAA")
        pins.analogWritePin(AnalogPin.P1, 500)
        if (input.buttonIsPressed(Button.A)) {
            basic.showLeds(`
                # # . . .
                . # . . .
                . # . . .
                . # # # .
                . # . # .
                `)
        }
    } else {
        basic.showLeds(`
            # # . . .
            . # . . .
            . # . . .
            . # # # .
            . # . # .
            `)
    }
})

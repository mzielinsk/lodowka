// dht11_dht22.query_data(DHTtype.DHT11, DigitalPin.P0, False, False, True)
// while pins.analog_read_pin(AnalogPin.P0) > 500:
// for index in range(20):
// pass
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) > 500) {
        basic.showString("AAA")
        for (let index = 0; index < 20; index++) {
            pins.analogWritePin(AnalogPin.P1, 784)
        }
        pins.analogWritePin(AnalogPin.P1, 0)
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

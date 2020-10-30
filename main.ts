let strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Blue))
strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
basic.forever(function () {
    strip.show()
    strip.rotate(1)
    basic.pause(1000)
})

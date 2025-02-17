basic.showString("" + (modules.GroveSoilMoistureLevel.moisture()))
basic.forever(function () {
    if (modules.GroveSoilMoistureLevel.moisture() < 150) {
        basic.setLedColor(0xff0000)
        basic.showIcon(IconNames.Sad)
    } else {
        basic.setLedColor(0x00ff00)
        basic.showIcon(IconNames.Happy)
    }
})

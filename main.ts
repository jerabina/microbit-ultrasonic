function showLed (num: number) {
    if (num == 1) {
        range.showColor(neopixel.colors(NeoPixelColors.Green))
    } else if (num == 2) {
        range.showColor(neopixel.colors(NeoPixelColors.Red))
    }
}
let range: neopixel.Strip = null
makerbit.connectUltrasonicDistanceSensor(DigitalPin.P15, DigitalPin.P14)
range = robotAtom.rgb().range(0, 4)
let ultrasonic = 50
let speed = 150
let speedBack = -150
showLed(1)
basic.forever(function () {
    ultrasonic = makerbit.getUltrasonicDistance(DistanceUnit.CM)
    if (ultrasonic < 20) {
        music.playTone(523, music.beat(BeatFraction.Eighth))
        showLed(2)
        robotAtom.Servo(robotAtom.Servos.S1, 180)
        robotAtom.MotorRunAtomStyle(speedBack, speedBack)
        basic.pause(1000)
        if (Math.randomBoolean()) {
            robotAtom.MotorRunAtomStyle(0, speed)
        } else {
            robotAtom.MotorRunAtomStyle(speed, 0)
        }
        basic.pause(500)
    } else {
        showLed(1)
        robotAtom.Servo(robotAtom.Servos.S1, 0)
        robotAtom.MotorRunAtomStyle(speed, speed)
    }
})

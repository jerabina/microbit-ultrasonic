function led2 (num: number) {
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
led2(1)
basic.forever(function () {
    ultrasonic = makerbit.getUltrasonicDistance(DistanceUnit.CM)
    if (ultrasonic < 20) {
        music.playTone(523, music.beat(BeatFraction.Eighth))
        led2(2)
        robotAtom.Servo(robotAtom.Servos.S1, 180)
        robotAtom.MotorRunDual(robotAtom.Motors.M1A, speedBack, robotAtom.Motors.M2B, speedBack)
        basic.pause(1000)
        if (Math.randomBoolean()) {
            robotAtom.MotorRunDual(robotAtom.Motors.M1A, 0, robotAtom.Motors.M2B, speed)
        } else {
            robotAtom.MotorRunDual(robotAtom.Motors.M1A, speed, robotAtom.Motors.M2B, 0)
        }
        basic.pause(500)
    } else {
        led2(1)
        robotAtom.Servo(robotAtom.Servos.S1, 0)
        robotAtom.MotorRunDual(robotAtom.Motors.M1A, speed, robotAtom.Motors.M2B, speed)
    }
})

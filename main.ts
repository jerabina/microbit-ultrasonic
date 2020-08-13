serial.redirectToUSB()
makerbit.connectUltrasonicDistanceSensor(DigitalPin.P15, DigitalPin.P14)
let ultrasonic = 50
let speed = 150
let speedBack = -150
basic.forever(function () {
    ultrasonic = makerbit.getUltrasonicDistance(DistanceUnit.CM)
    serial.writeValue("utrasonic", ultrasonic)
    if (ultrasonic < 20) {
        music.playTone(523, music.beat(BeatFraction.Eighth))
        robotAtom.MotorRunDual(
        robotAtom.Motors.M1A,
        speedBack,
        robotAtom.Motors.M2B,
        speedBack
        )
        basic.pause(1000)
        if (Math.randomBoolean()) {
            robotAtom.MotorRunDual(
            robotAtom.Motors.M1A,
            0,
            robotAtom.Motors.M2B,
            speed
            )
        } else {
            robotAtom.MotorRunDual(
            robotAtom.Motors.M1A,
            speed,
            robotAtom.Motors.M2B,
            0
            )
        }
        basic.pause(500)
    } else {
        robotAtom.MotorRunDual(
        robotAtom.Motors.M1A,
        speed,
        robotAtom.Motors.M2B,
        speed
        )
    }
})

serial.redirectToUSB()
makerbit.connectUltrasonicDistanceSensor(DigitalPin.P12, DigitalPin.P8)
let ultrasonic = 50
let speed = 150
let speedBack = -150
basic.forever(function () {
    ultrasonic = makerbit.getUltrasonicDistance(DistanceUnit.CM)
    serial.writeValue("utrasonic", ultrasonic)
    if (ultrasonic < 20) {
        music.playTone(523, music.beat(BeatFraction.Eighth))
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        speedBack,
        robotbit.Motors.M2B,
        speedBack
        )
        basic.pause(1000)
        if (Math.randomBoolean()) {
            robotbit.MotorRunDual(
            robotbit.Motors.M1A,
            0,
            robotbit.Motors.M2B,
            speed
            )
        } else {
            robotbit.MotorRunDual(
            robotbit.Motors.M1A,
            speed,
            robotbit.Motors.M2B,
            0
            )
        }
        basic.pause(500)
    } else {
        robotbit.MotorRunDual(
        robotbit.Motors.M1A,
        speed,
        robotbit.Motors.M2B,
        speed
        )
    }
})

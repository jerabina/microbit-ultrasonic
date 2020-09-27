def led2(num: number):
    if num == 1:
        range2.show_color(neopixel.colors(NeoPixelColors.GREEN))
    elif num == 2:
        range2.show_color(neopixel.colors(NeoPixelColors.RED))
range2: neopixel.Strip = None
makerbit.connect_ultrasonic_distance_sensor(DigitalPin.P15, DigitalPin.P14)
range2 = robotAtom.rgb().range(0, 4)
ultrasonic = 50
speed = 150
speedBack = -150
led2(1)

def on_forever():
    global ultrasonic
    ultrasonic = makerbit.get_ultrasonic_distance(DistanceUnit.CM)
    if ultrasonic < 20:
        music.play_tone(523, music.beat(BeatFraction.EIGHTH))
        led2(2)
        robotAtom.servo(robotAtom.Servos.S1, 180)
        robotAtom.motor_run_dual(robotAtom.Motors.M1A,
            speedBack,
            robotAtom.Motors.M2B,
            speedBack)
        basic.pause(1000)
        if Math.random_boolean():
            robotAtom.motor_run_dual(robotAtom.Motors.M1A, 0, robotAtom.Motors.M2B, speed)
        else:
            robotAtom.motor_run_dual(robotAtom.Motors.M1A, speed, robotAtom.Motors.M2B, 0)
        basic.pause(500)
    else:
        led2(1)
        robotAtom.servo(robotAtom.Servos.S1, 0)
        robotAtom.motor_run_dual(robotAtom.Motors.M1A, speed, robotAtom.Motors.M2B, speed)
basic.forever(on_forever)

function showRoom (image: Image) {
    svroom = image
    x = 2
    y = 2
    basic.pause(100)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 200, 600, 255, 0, 150, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    image.showImage(0)
    if (randint(0, 10) < 4) {
        placeGold()
    }
    if (randint(0, 10) > 4) {
        placeMonster()
    }
}
input.onGesture(Gesture.LogoUp, function () {
    if (255 != led.pointBrightness(x, y + 1)) {
        led.unplot(x, y)
        y = y + 1
    }
    if (y == 4) {
        showRoom(Rooms[randint(0, Rooms.length - 1)])
    }
})
function placeGold () {
    led.plotBrightness(1, 1, 70)
    led.plotBrightness(3, 3, 70)
}
input.onGesture(Gesture.TiltLeft, function () {
    if (255 != led.pointBrightness(x - 1, y)) {
        led.unplot(x, y)
        x = x - 1
    }
    if (x == 0) {
        showRoom(Rooms[randint(0, Rooms.length - 1)])
    }
})
function placeMonster () {
    led.plotBrightness(1, 3, 90)
}
input.onGesture(Gesture.TiltRight, function () {
    if (255 != led.pointBrightness(x + 1, y)) {
        led.unplot(x, y)
        x = x + 1
    }
    if (x == 4) {
        showRoom(Rooms[randint(0, Rooms.length - 1)])
    }
})
function Init () {
    Rooms = [
    images.createImage(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `),
    images.createImage(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `),
    images.createImage(`
        # # # # #
        # . . . .
        # . . . .
        # . . . .
        # # # # #
        `),
    images.createImage(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        `),
    images.createImage(`
        # # # # #
        . . . . #
        . . . . #
        . . . . #
        # # # # #
        `),
    images.createImage(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        `),
    images.createImage(`
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
    ]
}
input.onGesture(Gesture.LogoDown, function () {
    if (255 != led.pointBrightness(x, y - 1)) {
        led.unplot(x, y)
        y = y - 1
    }
    if (y == 0) {
        showRoom(Rooms[randint(0, Rooms.length - 1)])
    }
})
let svroom: Image = null
let Rooms: Image[] = []
let y = 0
let x = 0
images.createBigImage(`
    # # . . . . . . . .
    # . # . . . . . . .
    # # . . # # . . . .
    . . . # . . . . . .
    . . . . # # . . . .
    `).scrollImage(1, 200)
images.createBigImage(`
    . . . . . . . . . .
    . # . . . . . . . .
    # # # . . . . . . .
    . # . . . . . . . .
    # . # . . . . . . .
    `).scrollImage(1, 200)
game.setScore(0)
game.setLife(2)
x = 2
y = 2
Init()
for (let value of Rooms) {
    showRoom(value)
}
showRoom(Rooms[randint(0, Rooms.length - 1)])
basic.forever(function () {
    if (70 == led.pointBrightness(x, y)) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 54, 54, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.UntilDone)
        game.addScore(randint(20, 50))
        showRoom(svroom)
    }
    if (90 == led.pointBrightness(x, y)) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 1600, 1, 255, 0, 300, SoundExpressionEffect.None, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
        game.removeLife(1)
        showRoom(svroom)
    }
    led.plot(x, y)
})

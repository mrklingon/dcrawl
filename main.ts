function showRoom (image: Image) {
    x = 2
    y = 2
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    image.showImage(0)
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
input.onGesture(Gesture.TiltLeft, function () {
    if (255 != led.pointBrightness(x - 1, y)) {
        led.unplot(x, y)
        x = x - 1
    }
    if (x == 0) {
        showRoom(Rooms[randint(0, Rooms.length - 1)])
    }
})
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
let Rooms: Image[] = []
let y = 0
let x = 0
x = 2
y = 2
Init()
for (let value of Rooms) {
    showRoom(value)
}
showRoom(Rooms[randint(0, Rooms.length - 1)])
basic.forever(function () {
    led.plot(x, y)
})

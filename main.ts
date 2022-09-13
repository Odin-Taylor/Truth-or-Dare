input.onButtonPressed(Button.A, function () {
    basic.showString("Truth Or Dare")
    Something = randint(0, 1)
    if (Something == 0) {
        basic.showString("TRUTH")
    } else {
        basic.showString("DARE")
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    IDK = randint(1, 4)
    if (IDK == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
    if (IDK == 2) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . # # # .
            . . # . .
            `)
    }
    if (IDK == 3) {
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    }
    if (IDK == 4) {
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    }
})
let IDK = 0
let Something = 0
basic.showString("Truth Or Dare")

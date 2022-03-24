let 가위바위보 = 0
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.A)) {
            가위바위보 = randint(0, 2)
            if (가위바위보 == 0) {
                basic.showIcon(IconNames.Scissors)
            } else if (가위바위보 == 1) {
                basic.showIcon(IconNames.SmallSquare)
            } else {
                basic.showIcon(IconNames.Square)
            }
        } else if (input.buttonIsPressed(Button.B)) {
            basic.clearScreen()
        }
    }
    basic.pause(100)
})

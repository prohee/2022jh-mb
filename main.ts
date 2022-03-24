basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (!(input.buttonIsPressed(Button.AB))) {
        if (input.buttonIsPressed(Button.A)) {
        	
        } else if (input.buttonIsPressed(Button.B)) {
            basic.clearScreen()
        }
    }
    basic.pause(100)
})

input.onButtonPressed(Button.A, function () {
    j1 = 1
    radio.sendNumber(j1)
    basic.showIcon(IconNames.Diamond)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    j1 = 3
    radio.sendNumber(j1)
    basic.showIcon(IconNames.Scissors)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    j1 = 2
    radio.sendNumber(j1)
    basic.showIcon(IconNames.Square)
    basic.clearScreen()
})
let j1 = 0
radio.setGroup(9)

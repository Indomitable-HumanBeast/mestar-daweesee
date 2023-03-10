input.onGesture(Gesture.Shake, function () {
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.sad), SoundExpressionPlayMode.UntilDone)
    Chess_god = randint(1, 6)
    if (Chess_god < 2) {
        basic.showIcon(IconNames.Asleep)
    } else if (Chess_god < 4) {
        basic.showIcon(IconNames.Angry)
    } else {
        basic.showIcon(IconNames.Skull)
    }
})
let Chess_god = 0
basic.showNumber(0)
basic.forever(function () {
	
})

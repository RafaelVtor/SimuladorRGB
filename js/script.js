window.addEventListener('load', start)

function start() {

    var rangerRed = document.querySelector('#red')
    var rangerGreen = document.querySelector('#green')
    var rangerBlue = document.querySelector('#blue')

    rangerRed.focus()

    rangerRed.addEventListener('input', eventChangeRanger)
    rangerGreen.addEventListener('input', eventChangeRanger)
    rangerBlue.addEventListener('input', eventChangeRanger)

    function eventChangeRanger() {

        var inputRed = document.querySelector('#redText')
        var inputGreen = document.querySelector('#greenText')
        var inputBlue = document.querySelector('#blueText')

        inputRed.value = rangerRed.value
        inputGreen.value = rangerGreen.value
        inputBlue.value = rangerBlue.value

        eventChangeColor(rangerRed.value, rangerGreen.value, rangerBlue.value)
    }
    function eventChangeColor(red, green, blue) {

        var color = document.querySelector('.color')
        color.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

    }

} 

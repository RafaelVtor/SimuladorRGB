window.addEventListener('load', start)

function start() {

    var rangerRed = document.querySelector('#red')
    var rangerGreen = document.querySelector('#green')
    var rangerBlue = document.querySelector('#blue')

    var inputRed = document.querySelector('#redText')
    var inputGreen = document.querySelector('#greenText')
    var inputBlue = document.querySelector('#blueText')

    rangerRed.addEventListener('input', eventChangeColor)
    rangerGreen.addEventListener('input', eventChangeColor)
    rangerBlue.addEventListener('input', eventChangeColor)

    function eventChangeColor() {

        inputRed.value = rangerRed.value
        inputGreen.value = rangerGreen.value
        inputBlue.value = rangerBlue.value

        changeRanger()

    }

    function changeRanger() {

        var color = document.querySelector('.color')
        color.style.backgroundColor = `rgb(${rangerRed.value}, ${rangerGreen.value}, ${rangerBlue.value})`

    }

} 

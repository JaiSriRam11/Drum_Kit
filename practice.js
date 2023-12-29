var w = new Audio('sounds/Hi_Hats.mp3');
var a = new Audio('sounds/High_Tom.mp3');
var s = new Audio('sounds/Medium_Tom.mp3');
var d = new Audio('sounds/Floor_Tom.mp3');
var j = new Audio('sounds/Snare.mp3');
var k = new Audio('sounds/Bass.mp3');
var l = new Audio('sounds/Crash.mp3');


// function mouseClick() 
for (var i = 0; i < (document.querySelectorAll('button').length); i++)
    document.querySelectorAll("button")[i].addEventListener('click', Character);
function Character(character) {
    var currentKey = this.innerHTML;
    console.log(currentKey);
    playSound(currentKey);
    animation(currentKey);
}

// function Keypress()
document.addEventListener('keypress', button);
function button(event) {
    var currentKey = event.key;
    console.log(currentKey);
    playSound(currentKey);
    animation(currentKey);
}

// function PlaySound()
function playSound(audio) {
    switch (audio) {
        case 'w':
            w.play();
            break;
        case 'a':
            a.play();
            break;
        case 's':
            s.play();
            break;
        case 'd':
            d.play();
            break;
        case 'j':
            j.play();
            break;
        case 'k':
            k.play();
            break;
        case 'l':
            l.play();
            break;
    }

}

function animation(animate) {
    var pressedButton = document.querySelector("." + animate);
    pressedButton.classList.add('pressed');
    setTimeout(function () { pressedButton.classList.remove('pressed') }, 100);
}
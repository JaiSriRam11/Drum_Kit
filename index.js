var w = new Audio('sounds/Hi_Hats.mp3');
var a = new Audio('sounds/High_Tom.mp3');
var s = new Audio('sounds/Medium_Tom.mp3');
var d = new Audio('sounds/Floor_Tom.mp3');
var j = new Audio('sounds/Snare.mp3');
var k = new Audio('sounds/Bass.mp3');
var l = new Audio('sounds/Crash.mp3');

// The following function will be used during the mouse click on the buttons

for (var i = 0; i < document.querySelectorAll('button').length; i++) {
    document.querySelectorAll("button")[i].addEventListener('click', function () {

        var ButtonText = this.innerHTML;
        console.log(ButtonText);
        playSound(ButtonText);
    })
}

// The following function will be used on keyboard press of the respective key

document.addEventListener('keypress', action)

function action(event) {
    var button = (event.key)
    playSound(button);
    };

    
// The following function is responsible for playing of the sound
function playSound(key) {
    switch (key) {
        case "w":
            w.play();
            break;
        case "a":
            a.play();
            break;
        case "s":
            s.play();
            break;
        case "d":
            d.play();
            break;
        case "j":
            j.play();
            break;
        case "k":
            k.play();
            break;
        case "l":
            l.play();
            break;
        default:
    }
}
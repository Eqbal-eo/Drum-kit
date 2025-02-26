let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        playSound(buttonInnerHTML);
    });
}

// دالة لتشغيل الصوت بناءً على الزر
function playSound(key) {
    let audioFile = '';

    switch (key) {
        case 'w':
            audioFile = 'sounds/tom-1.mp3';
            break;
        case 'a':
            audioFile = 'sounds/tom-2.mp3';
            break;
        case 's':
            audioFile = 'sounds/tom-3.mp3';
            break;
        case 'd':
            audioFile = 'sounds/tom-4.mp3';
            break;
        case 'j':
            audioFile = 'sounds/snare.mp3';
            break;
        case 'k':
            audioFile = 'sounds/crash.mp3';
            break;
        case 'l':
            audioFile = 'sounds/kick-bass.mp3';
            break;
        default:
            console.log("No sound assigned for this key: " + key);
            return;
    }

    let audio = new Audio(audioFile);
    audio.play(); 
}

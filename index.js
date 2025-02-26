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
        case 'أ':
            audioFile = 'sounds/tom-1.mp3';
            break;
        case 'ب':
            audioFile = 'sounds/tom-2.mp3';
            break;
        case 'ت':
            audioFile = 'sounds/tom-3.mp3';
            break;
        case 'ص':
            audioFile = 'sounds/tom-4.mp3';
            break;
        case 'ض':
            audioFile = 'sounds/snare.mp3';
            break;
        case 'د':
            audioFile = 'sounds/crash.mp3';
            break;
        case 'إدلب':
            audioFile = 'sounds/idleb.mp3';
            break;
        default:
            console.log("No sound assigned for this key: " + key);
            return;
    }

    let audio = new Audio(audioFile);
    audio.play(); 
}

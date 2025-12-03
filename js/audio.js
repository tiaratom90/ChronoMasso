javascript
let audioContext = null;

function getAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    return audioContext;
}

function playAlert() {
    const context = getAudioContext();
    const oscillator = context.createOscillator();
    // ... create sound ...
    oscillator.start(context.currentTime);
}


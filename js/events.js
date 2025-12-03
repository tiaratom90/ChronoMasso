javascript
function handleTimeButtonClick(e) {
    DOM.timeButtons.forEach(b => b.classList.remove('active'));
    e.target.closest('.time-btn').classList.add('active');
    State.selectedTime = parseInt(e.target.closest('.time-btn').dataset.time);
}

function handlePlayPause() {
    State.togglePlayPause();
    if (State.isRunning) startAnimation();
    updatePlayPauseButton();
}

function handleKeyboardShortcuts(e) {
    switch (e.key) {
        case ' ':
            e.preventDefault();
            handlePlayPause();
            break;
        case 'Escape':
            e.preventDefault();
            handleBackButton();
            break;
    }
}

function initializeEventListeners() {
    DOM.timeButtons.forEach(btn => btn.addEventListener('click', handleTimeButtonClick));
    DOM.startBtn.addEventListener('click', handleStartSession);
    DOM.playPauseBtn.addEventListener('click', handlePlayPause);
    document.addEventListener('keydown', handleKeyboardShortcuts);
}

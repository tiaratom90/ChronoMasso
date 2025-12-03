javascript
function updateDisplay() {
    updateTotalTime();
    updateSegmentTime();
    updateSegmentList();
    updatePlayPauseButton();
}

function updateTotalTime() {
    DOM.totalTimeDisplay.textContent = formatTime(Math.max(0, State.totalTimeRemaining));
    updateCircleProgress(DOM.totalProgress, State.totalTimeRemaining, State.selectedTime * 60);
}

function renderSegmentsList() {
    DOM.segmentsList.innerHTML = '';
    State.segments.forEach((segment) => {
        const item = createSegmentItem(segment);
        DOM.segmentsList.appendChild(item);
    });
}


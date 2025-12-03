javascript
function startAnimation() {
    const tick = (currentTime) => {
        if (State.isRunning && State.totalTimeRemaining > 0) {
            State.updateTimes(deltaTime);
            checkSegmentTransition();
            if (State.isSessionComplete()) {
                State.isRunning = false;
                playAlert();
            }
            updateDisplay();
        }
        State.animationFrameId = requestAnimationFrame(tick);
    };
    State.animationFrameId = requestAnimationFrame(tick);
}

function checkSegmentTransition() {
    if (State.segmentTimeRemaining <= 0 && !State.segmentTransitioned) {
        State.segmentTransitioned = true;
        if (State.advanceSegment()) {
            playAlert();
        }
    }
}


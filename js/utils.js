javascript
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs.toString().padStart(2, '0')}`;
}

function updateCircleProgress(circle, remaining, total) {
    const offset = calculateStrokeDashOffset(remaining / total);
    circle.style.strokeDashoffset = offset;
}


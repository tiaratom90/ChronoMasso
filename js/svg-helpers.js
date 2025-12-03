javascript
function createTimerSVG(className = 'timer-svg') {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', CONSTANTS.SVG.VIEWBOX);
    
    const bgCircle = createCircleElement('timer-circle-bg', ...);
    const progressCircle = createCircleElement('timer-circle-progress', ...);
    
    svg.appendChild(bgCircle);
    svg.appendChild(progressCircle);
    return svg;
}


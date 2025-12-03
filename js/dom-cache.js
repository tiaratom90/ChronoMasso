javascript
const DOM = {
    homePage: document.getElementById('homePage'),
    timerPage: document.getElementById('timerPage'),
    timeButtons: document.querySelectorAll('.time-btn'),
    totalProgress: document.getElementById('totalProgress'),
    
    getSegmentItems() {
        return document.querySelectorAll('.segment-item');
    }
};

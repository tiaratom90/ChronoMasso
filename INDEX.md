<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="theme-color" content="#1a1a1a">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <title>Massage Session Timer</title>
    <link rel="manifest" href="manifest.json">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="styles/variables.css">
    <link rel="stylesheet" href="styles/base.css">
    <link rel="stylesheet" href="styles/layout.css">
    <link rel="stylesheet" href="styles/components.css">
    <link rel="stylesheet" href="styles/animations.css">
    <link rel="stylesheet" href="styles/responsive.css">
</head>
<body>
    <div class="app-container">
        <!-- HOME PAGE -->
        <div class="home-page" id="homePage">
            <h1 class="app-title">Minuteur de Massage</h1>

            <div class="timer-selection-wrapper">
                <div class="timer-selection-label">Durée</div>
                <div class="timer-selection">
                    <button class="time-btn active" data-time="60">
                        <span class="time-btn-value">60</span>
                        <span class="time-btn-unit">min</span>
                    </button>
                    <button class="time-btn" data-time="90">
                        <span class="time-btn-value">90</span>
                        <span class="time-btn-unit">min</span>
                    </button>
                </div>
            </div>

            <div class="zones-section">
                <h3 class="zones-title">Zone Prioritaire (Optionnel)</h3>
                <div class="zones-grid" id="zonesGrid"></div>
            </div>

            <button class="start-btn" id="startBtn">Commencer</button>
        </div>

        <!-- TIMER PAGE -->
        <div class="timer-page hidden" id="timerPage">
            <div class="timers-container">
                <!-- Total Time Timer -->
                <div class="timer-circle" id="totalTimer">
                    <div class="timer-label">Temps Total</div>
                    <div class="timer-circle-container">
                        <svg class="timer-svg" viewBox="0 0 200 200">
                            <circle class="timer-circle-bg" cx="100" cy="100" r="92"></circle>
                            <circle class="timer-circle-progress" id="totalProgress" cx="100" cy="100" r="92" stroke-dasharray="578.05" stroke-dashoffset="0"></circle>
                        </svg>
                        <div class="timer-content">
                            <div class="timer-time" id="totalTimeDisplay">60:00</div>
                        </div>
                    </div>
                </div>

                <!-- Segment Timer -->
                <div class="timer-circle timer-circle-large" id="segmentTimer">
                    <div class="timer-label" id="segmentLabel">Dos</div>
                    <div class="timer-circle-container">
                        <svg class="timer-svg" viewBox="0 0 200 200">
                            <circle class="timer-circle-bg" cx="100" cy="100" r="92"></circle>
                            <circle class="timer-circle-progress" id="segmentProgress" cx="100" cy="100" r="92" stroke-dasharray="578.05" stroke-dashoffset="0"></circle>
                            <g id="segmentMidpointMarker" class="timer-midpoint-marker"></g>
                        </svg>
                        <div class="timer-content">
                            <div class="timer-time" id="segmentTimeDisplay">20:00</div>
                            <div class="timer-half-indicator" id="segmentHalfIndicator"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="segment-timer">
                <div class="segment-title">Ordre des zones</div>
                <div class="segment-timers" id="segmentsList"></div>
            </div>

            <div class="controls">
                <button class="control-btn primary" id="playPauseBtn">Pause</button>
                <button class="control-btn" id="resetBtn">Réinitialiser</button>
                <button class="control-btn" id="backBtn">Retour</button>
            </div>
        </div>
    </div>

    <!-- JavaScript Files -->
    <script src="js/constants.js"></script>
    <script src="js/state.js"></script>
    <script src="js/utils.js"></script>
    <script src="js/audio.js"></script>
    <script src="js/dom-cache.js"></script>
    <script src="js/svg-helpers.js"></script>
    <script src="js/ui.js"></script>
    <script src="js/timer.js"></script>
    <script src="js/events.js"></script>
    <script src="js/main.js"></script>
</body>
</html>

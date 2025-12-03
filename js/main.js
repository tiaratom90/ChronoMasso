javascript
document.addEventListener('DOMContentLoaded', () => {
    renderZonesGrid();
    initializeEventListeners();
    console.log('✅ Massage Session Timer initialized');
});

const APP_INFO = {
    name: 'Minuteur de Massage',
    version: '2.0.0'
};


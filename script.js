function updateClock() {
    const timeElement = document.getElementById('time');
    const ampmElement = document.getElementById('ampm');
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Determine AM or PM
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert hours to 12-hour format
    hours = hours % 12 || 12;

    const timeString = `${hours}:${minutes}:${seconds}`;
    const ampmString = ampm;

    timeElement.textContent = timeString;
    ampmElement.textContent = ampmString;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update
updateClock();

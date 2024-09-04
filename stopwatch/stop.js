let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let running = false;

document.getElementById('start-stop').addEventListener('click', () => {
  if (!running) {
    interval = setInterval(() => {
      milliseconds++;
      if (milliseconds === 100) {
        milliseconds = 0;
        seconds++;
      }
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
      updateDisplay();
    }, 10);
    running = true;
  } else {
    clearInterval(interval);
    running = false;
  }
});

document.getElementById('reset').addEventListener('click', () => {
  clearInterval(interval);
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  updateDisplay();
  running = false;
});

function updateDisplay() {
  document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
  document.getElementById('milliseconds').innerText = milliseconds.toString().padStart(2, '0');
}

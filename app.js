// Selecting DOM elements
const buttons = document.querySelectorAll('[data-time]');
const timerDisplay = document.querySelector('.display_time');
const endTime = document.querySelector('.display_time_back');


// Functions
// timer for the current time and displaying it
 function timer(){
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    timerDisplay.textContent = `${hours}:${minutes < 10 ? '0': ''}${minutes}:${seconds < 10 ? '0': ''}${seconds}`;
    
}

setInterval(() => {timer();}, 1000);
// calculate and display text when is the person coming back
function handleTime() {
  // times
  const minutes = parseInt(this.dataset.time) * 60;
  const today = Date.now();
  console.log(minutes);
  // converting
  const ms = minutes * 1000;
  // calculation
  const together = today + ms;
  const newTime = new Date(together);
  //displaying
  const displayUno = newTime.getHours();
  const displayTwo = newTime.getMinutes();
  endTime.textContent = `U should be back at ${displayUno < 10 ? '0': ''}${displayUno}:${displayTwo < 10 ? '0':''}${displayTwo}`
}

// Event Listeners
buttons.forEach(button => button.addEventListener('click', handleTime));

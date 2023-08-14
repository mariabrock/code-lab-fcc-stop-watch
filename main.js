// variables for buttons

const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// time values

let seconds = 0;
let minutes = 0;
let hours = 0;

// variables for leading zeros

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

// variables for set interval & timer status

 let timerInterval = null;
 let timerStatus = "stopped";

// stop watch func

function stopWatch() {
  // on play seconds will increment
  seconds++

  // we must tell it to increment the following values
  // once seconds equal 60 then seconds reset and minutes increment
  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;

  // now we apply the same logic to minutes
      if(minutes / 60 === 1) {
        minutes = 0;
        hours++;
      }
  }

  if(seconds < 10) {
    leadingSeconds = "0" + seconds.toString();
  } else {
    leadingSeconds = seconds;
  }

  if(minutes < 10) {
    leadingMinutes = "0" + minutes.toString();
  } else {
    leadingMinutes = minutes;
  }

  if(hours < 10) {
    leadingHours = "0" + hours.toString();
  } else {
    leadingHours = hours;
  }

  let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" +  leadingSeconds;
}

// window.setInterval(stopWatch, 1)
// this immediately invokes the stopwatch start because it triggers when the window leadingSeconds, that's not what we want, and we need to give the btns more functionality


startStopBtn.addEventListener('click', function() {

  if(timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000)
    // now switch the play btn to pause btn
    document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`
    // now change value of out timer status
    timerStatus = "started";
  } else {
    // if stopwatch is running, we want to pause the timer
    window.clearInterval(timerInterval);
    // switch the icon back to play btn
    document.getElementById('startStopBtn').innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    // set timer status
    timerStatus = "stopped";
  }
})

resetBtn.addEventListener('click', function() {

// grab window object and clear the interval
  window.clearInterval(timerInterval);
  // revert values
  seconds = 0;
  minutes = 0;
  hours = 0;

  // then make sure it's displaying the in the browser
  document.getElementById('timer').innerHTML = "00:00:00";
})
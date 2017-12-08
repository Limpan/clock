function updateClock() {
  var time = new Date();
  hours = time.getHours();
  minutes = time.getMinutes();
  seconds = time.getSeconds();
  
  var hoursBar = document.querySelector('#clock .hours');
  var minutesBar = document.querySelector('#clock .minutes');
  var secondsBar = document.querySelector('#clock .seconds');

  hoursBar.children[0].innerHTML = hours;
  hoursBar.style.width = (hours / 24 * 100) + '%';
  if (hours < 4) {
    hoursBar.children[0].classList.add('outside');
  } else {
    hoursBar.children[0].classList.remove('outside');
  }

  minutesBar.children[0].innerHTML = minutes;
  minutesBar.style.width = (minutes / 60 * 100) + '%';
  if (minutes < 9) {
    minutesBar.children[0].classList.add('outside');
  } else {
    minutesBar.children[0].classList.remove('outside');
  }

  secondsBar.children[0].innerHTML = seconds;
  secondsBar.style.width = (seconds / 60 * 100) + '%';
  if (seconds < 9) {
    secondsBar.children[0].classList.add('outside');
  } else {
    secondsBar.children[0].classList.remove('outside');
  }
}

updateClock();
setInterval(updateClock, 1000);

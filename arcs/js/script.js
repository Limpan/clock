var monthNames = ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'];
var weekdayNames = ['måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag', 'söndag'];


/* Extend Date with monthDays-method. */
Date.prototype.monthDays= function(){
    var d= new Date(this.getFullYear(), this.getMonth()+1, 0);
    return d.getDate();
}


function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}


function describeArc(x, y, radius, startAngle, endAngle){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y,
        "A", radius, radius, 0, arcSweep, 0, end.x, end.y,
    ].join(" ");

    return d;
}


function updateClock() {
  var time = new Date();
  month = time.getMonth();
  day = time.getDate();
  weekday = time.getDay() === 0 ? 6 : time.getDay() - 1;
  hours = time.getHours();
  minutes = time.getMinutes();
  seconds = time.getSeconds();

  var monthArc = document.querySelector('#clock .month');
  var monthText = document.querySelector('#clock #monthText');
  var dayArc = document.querySelector('#clock .day');
  var dayText = document.querySelector('#clock #dayText');
  var weekdayArc = document.querySelector('#clock .weekday');
  var weekdayText = document.querySelector('#clock #weekdayText');
  var hoursArc = document.querySelector('#clock .hours');
  var hoursText = document.querySelector('#clock #hoursText');
  var minutesArc = document.querySelector('#clock .minutes');
  var minutesText = document.querySelector('#clock #minutesText');
  var secondsArc = document.querySelector('#clock .seconds');
  var secondsText = document.querySelector('#clock #secondsText');

  monthArc.setAttribute('d', describeArc(0, 0, 40, 180, 180 + (month + 1) * 270/12));
  dayArc.setAttribute('d', describeArc(0, 0, 60, 180, 180 + (day + 1) * 270 / time.monthDays()));
  weekdayArc.setAttribute('d', describeArc(0, 0, 80, 180, 180 + (weekday + 1) * 270/7));
  hoursArc.setAttribute('d', describeArc(0, 0, 100, 180, 180 + (hours + 1) * 270/24));
  minutesArc.setAttribute('d', describeArc(0, 0, 120, 180, 180 + (minutes + 1) * 270/60));
  secondsArc.setAttribute('d', describeArc(0, 0, 140, 180, 180 + (seconds + 1) * 270/60));
  monthText.textContent = monthNames[month];
  dayText.textContent = day;
  weekdayText.textContent = weekdayNames[weekday];
  hoursText.textContent = hours;
  minutesText.textContent = minutes;
  secondsText.textContent = seconds;
}

updateClock();
setInterval(updateClock, 1000);

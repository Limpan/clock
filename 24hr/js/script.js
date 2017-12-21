function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function updateClock() {
  time = new Date();
  hours = time.getHours();
  minutes = time.getMinutes();
  seconds = time.getSeconds();

  dial = document.querySelector('#clock > #dial');

  time = (hours * 60 * 60 + minutes * 60 + seconds) / (24 * 60 * 60);
  angle = 2 * Math.PI * (time + 1/4);

  x = 80 * Math.cos(angle);
  y = 80 * Math.sin(angle);

  dial.setAttribute('x2', x);
  dial.setAttribute('y2', y);
}

updateClock();
setInterval(updateClock, 1000);

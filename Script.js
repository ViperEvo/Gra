var ball   = document.querySelector('.ball');
var garden = document.querySelector('.garden');
var output = document.querySelector('.output');

var maxX = garden.clientWidth  - ball.clientWidth;
var maxY = garden.clientHeight - ball.clientHeight;

let x = 0;
let y = 0;

function handleOrientation(event) {
  x = event.beta;  // In degree in the range [-180,180]
  y = event.gamma; // In degree in the range [-90,90]

  output.innerHTML  = "beta : " + x + "\n";
  output.innerHTML += "gamma: " + y + "\n";

  // Because we don't want to have the device upside down
  // We constrain the x value to the range [-90,90]
  if (x >  90) { x =  90};
  if (x < -90) { x = -90};

  // To make computation easier we shift the range of 
  // x and y to [0,180]
  x += 90;
  y += 90;

  // 10 is half the size of the ball
  // It center the positioning point to the center of the ball
  
}
var mnoznik = setInterval(mnoznikv, 100);

function mnoznikv()
{
    i = 0.01;
   
    ball.style.top  = (400 + x ) + "px";
    ball.style.left = (400 + y ) + "px";
    console.log(x);
    //console.log(yy);
}

window.addEventListener('deviceorientation', handleOrientation);


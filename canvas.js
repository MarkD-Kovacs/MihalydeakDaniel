//580u

// define Point class
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

// define Line class
class Line {
  constructor(A, B) {
    this.A = A;
    this.B = B;
    this.step = 1;
  }
}

var direction = 0;
var distance = 80;

var canvas = document.querySelector('canvas');

const scale = window.devicePixelRatio;
var pw = canvas.parentElement.clientWidth;
var u = (pw - 40)/ 580;
var w = 580 * u;
var h = 120 * u; // window.innerHeight / 4; //canvas.parentElement.clientHeight;
console.log(scale);
console.log(pw);
console.log(u);

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

canvas.width = w * scale;
canvas.height = h * scale;
//u /= scale;

canvas.style.width = w + "px";
canvas.style.height = h + "px";

var c = canvas.getContext('2d');
c.scale(scale, scale);

var referencePoint = new Point(0, 0);
var targetPoint = new Point(0, 0);
updateTargetFn();

function updateTargetFn() {
  targetPoint.x = referencePoint.x + distance * Math.cos(toRadians(direction));
  targetPoint.y = referencePoint.y + distance * Math.sin(toRadians(direction));
}

var lines = [];
var points = [];
var objects = [];
const baseY = 95 * u;
const baseYHorizontal = 92 * u;

/* M */
referencePoint.x = 8 * u;
referencePoint.y = baseY;
direction = -90;
distance = 71 * u;
updateTargetFn();
points.push({ ...referencePoint });
points.push({ ...targetPoint });
targetPoint.x++;
points.push({ ...targetPoint });

referencePoint = { ...targetPoint };
direction = 60;
distance = 79 * u;
updateTargetFn();
points.push({ ...targetPoint });
targetPoint.x++;
points.push({ ...targetPoint });

referencePoint = { ...targetPoint };
direction = -60;
updateTargetFn();
points.push({ ...targetPoint });
targetPoint.x++;
points.push({ ...targetPoint });

referencePoint = { ...targetPoint };
direction = 90;
distance = 71 * u;
updateTargetFn();
points.push({ ...targetPoint });

objects.push(points.slice());
/**/

/*I*/
referencePoint.x = targetPoint.x + 18 * u;
referencePoint.y = targetPoint.y;
direction = -90;
distance = 74 * u;
updateTargetFn();
points = [];
points.push({ ...referencePoint });
points.push({ ...targetPoint });
objects.push(points.slice());
/**/

/*H*/
referencePoint.x += 17 * u;
referencePoint.y = baseY;
direction = -90;
distance = 74 * u;
updateTargetFn();
points = [];
points.push({ ...referencePoint });
points.push({ ...targetPoint });

referencePoint.y -= 37 * u;
direction = 0;
distance = 25 * u;
updateTargetFn();
points.push({ ...referencePoint });
points.push({ ...targetPoint });

referencePoint = { ...targetPoint };
direction = -90;
distance = 37 * u;
updateTargetFn();
points.push({ ...targetPoint });

direction = 90;
updateTargetFn();
points.push({ ...targetPoint });

objects.push(points.slice());
/**/

/*A*/
points = [];
referencePoint.x += 16 * u;
referencePoint.y = baseYHorizontal;
direction = 0;
distance = 77 * u;
updateTargetFn();
lines.push(new Line({ ...referencePoint }, { ...targetPoint }));
points.push({ ...referencePoint });
points.push({ ...targetPoint });

direction = -60;
updateTargetFn();
lines.push(new Line({ ...referencePoint }, { ...targetPoint }));
points.push({ ...targetPoint });
targetPoint.x -= 1 * u;
points.push({ ...targetPoint });

referencePoint = { ...targetPoint };
direction = 120;
updateTargetFn();
lines.push(new Line({ ...referencePoint }, { ...targetPoint }));
points.push({ ...targetPoint });

referencePoint = { ...targetPoint };
direction = 0;
distance = 78 * u;
updateTargetFn();
points.push({ ...targetPoint });

objects.push(points.slice());

referencePoint.x += 72 * u;
referencePoint.y -= 45 * u;
points = [{...referencePoint}];
direction = -90;
distance = 25 * u;
updateTargetFn();
points.push({...targetPoint});

objects.push(points.slice());
/**/

/*L*/
referencePoint.x = targetPoint.x + 22 * u;
referencePoint.y = baseYHorizontal;
points = [{...referencePoint}];

direction = -90;
distance = 70 * u;
updateTargetFn();
points.push({...targetPoint});

points.push({...referencePoint});

direction = 0;
distance = 25 * u;
updateTargetFn();
points.push({...targetPoint});

objects.push(points.slice());
/**/

/*Y*/
referencePoint.x = targetPoint.x + 18 * u;
referencePoint.y = baseY;
points = [{...referencePoint}];

direction = -90;
distance = 32 * u;
updateTargetFn();
points.push({...targetPoint});

referencePoint = {...targetPoint};
direction = -120;
distance = 44 * u;
updateTargetFn();
points.push({...targetPoint});

points.push({...referencePoint});

direction = -60;
updateTargetFn();
points.push({...targetPoint});

objects.push(points.slice());
/**/

/*D*/
referencePoint.x = referencePoint.x + 37 * u;
referencePoint.y = baseY - 4 * u;
points = [{...referencePoint}];

direction = -90;
distance = 61 * u;
updateTargetFn();
points.push({...targetPoint});

points.push({...referencePoint});

direction = -30;
updateTargetFn();
points.push({...targetPoint});

referencePoint = {...targetPoint};
referencePoint.y -= 1 * u;
points.push({...referencePoint});

direction = -150;
updateTargetFn();
points.push({...targetPoint});

referencePoint = {...targetPoint};
direction = 90;
distance = 10 * u;
updateTargetFn();
points.push({...targetPoint});

objects.push(points.slice());
/**/

/*E*/
referencePoint.x += 67 * u;
referencePoint.y = baseYHorizontal;
points = [{...referencePoint}];

distance = 20 * u;
direction = 0;
updateTargetFn();
points.push({...targetPoint});

points.push({...referencePoint});

distance = 67 * u;
direction = -90;
updateTargetFn();
points.push({...targetPoint});

referencePoint = {...targetPoint};
distance = 20 * u;
direction = 0;
updateTargetFn();
points.push({...targetPoint});

points.push({...referencePoint});

referencePoint.y += 35 * u;
points.push({...referencePoint});

updateTargetFn();
points.push({...targetPoint});

objects.push(points.slice());
/**/

/*A*/
points = [];
referencePoint.x += 35 * u;
referencePoint.y = baseYHorizontal;
direction = 0;
distance = 77 * u;
updateTargetFn();
lines.push(new Line({ ...referencePoint }, { ...targetPoint }));
points.push({ ...referencePoint });
points.push({ ...targetPoint });

direction = -60;
updateTargetFn();
lines.push(new Line({ ...referencePoint }, { ...targetPoint }));
points.push({ ...targetPoint });
targetPoint.x -= 1 * u;
points.push({ ...targetPoint });

referencePoint = { ...targetPoint };
direction = 120;
updateTargetFn();
lines.push(new Line({ ...referencePoint }, { ...targetPoint }));
points.push({ ...targetPoint });

referencePoint = { ...targetPoint };
direction = 0;
distance = 78 * u;
updateTargetFn();
points.push({ ...targetPoint });

objects.push(points.slice());

referencePoint.x += 72 * u;
referencePoint.y -= 45 * u;
points = [{...referencePoint}];
direction = -90;
distance = 25 * u;
updateTargetFn();
points.push({...targetPoint});

objects.push(points.slice());
/**/

/*K*/
referencePoint.x += 24 * u;
referencePoint.y = baseY + 1 * u;
points = [{...referencePoint}];

direction = -90;
distance = 75 * u;
updateTargetFn();
points.push({...targetPoint});

objects.push(points.slice());
points = [];

referencePoint.x -= 0 * u;
referencePoint.y -= 36 * u;
points.push({...referencePoint});

direction = 45;
distance = 50 * u;
updateTargetFn();
points.push({...targetPoint});

//points.push(new Point(targetPoint.x, targetPoint.y - 2));
points.push({...targetPoint});

points.push({...referencePoint});

referencePoint.y -= 1 * u;
points.push({...referencePoint});

direction = -direction;
updateTargetFn();
points.push({...targetPoint});

objects.push(points.slice());
/**/

console.log(objects);

var step = 0;
var delta = 0;
var frames = 45;
function animate() {
  requestAnimationFrame(animate);

  // clear canvas
  c.clearRect(0, 0, innerWidth, innerHeight);

  //objects.forEach(object => {
  for (var i = 0; i < objects.length; i++) {
    object = objects[i];
    c.beginPath();

    if(i == 0 || i == 3 || i == 7 || i == 9) {
      delta = step;
      c.strokeStyle = "#C08000";
    }
    else {
      delta = frames;
      c.strokeStyle = "rgb(240, 240, 240)";
    }

    c.moveTo(objects[0] * delta / frames, object[0].y);
    //c.lineJoin = "bevel";
    c.lineWidth = 6 * u;
    object.forEach(point => {
      c.lineTo(point.x * delta / frames, point.y);
    });
    //c.lineTo(object[0].x, object[0].y);
    //c.lineTo(object[1].x, object[1].y);
    c.stroke();
  }
  if (step < frames) step++;
}


function openMap() {
  var isAppleDevice = /iPhone|iPad|iPod/i.test(navigator.userAgent);
  var location = "40.712776,-74.005974";  // Example coordinates
  if (isAppleDevice) {
    // Open Apple Maps
    window.location.href = "https://beta.maps.apple.com/?address=Bulevardul+General+Vasile+Milea%2C+19%2C+Arad%2C+310131%2C+Romania&auid=1719685390952233535&ll=46.1775786%2C21.3214952&lsp=9902&q=The+Judge+Arad";
  } else {
    // Open Google Maps
    window.location.href = "https://maps.app.goo.gl/1uEgtPspu89H6GJPA";
  }
}

animate();

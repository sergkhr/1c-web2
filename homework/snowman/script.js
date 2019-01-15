let canvas = document.getElementById("workspace");
let context = canvas.getContext("2d");

let circles = new Path2D();
let hat = new Path2D();
let line = new Path2D();
let xr1 = 300, yr1 = 300, xr2 = 450, yr2 = 425, xr3 = xr2, yr3 = 665;
let xyr1TOxyr2 = Math.sqrt( Math.pow(xr2 - xr1, 2) + Math.pow(yr2 - yr1, 2) );
let radius1 = 85, radius2 = xyr1TOxyr2 - radius1, radius3 = (yr3 - yr2) - radius2; 
let hatStartPosX = 100, hatStartPosY = yr2 + 50; 
let y2ruka = yr2 - 20, x2ruka = xr2 - Math.sqrt((radius2) * (radius2) - ((y2ruka - yr2) * (y2ruka - yr2)));
let shoulderX = xr2 - (radius2 / 5), shoulderY =  yr2 - (radius2 / 3), shoulderRadius = 10;

function drawCircles(){
    circles.arc(xr1, yr1, radius1, 0, 2 * Math.PI);
    circles.moveTo(xr2 + radius2, yr2);
    circles.arc(xr2, yr2, radius2, 0, 2 * Math.PI);
    circles.moveTo(xr3 + radius3, yr3);
    circles.arc(xr3, yr3, radius3, 0, 2 * Math.PI);
}
function drawHat(){
    hat.moveTo(hatStartPosX, hatStartPosY);
    hat.lineTo(hatStartPosX + 70, hatStartPosY + 20);
    hat.lineTo(hatStartPosX + 120, hatStartPosY - 70);
    hat.lineTo(hatStartPosX + 70, hatStartPosY - 65);
    hat.lineTo(hatStartPosX, hatStartPosY - 110);
    hat.lineTo(hatStartPosX, hatStartPosY);
}
function drawHands(){
    line.moveTo(shoulderX + 7, shoulderY);
    line.lineTo(540, 300);
    line.lineTo(550, 210);
    
    line.moveTo(hatStartPosX + 75, hatStartPosY + 11);
    line.lineTo(x2ruka, y2ruka);

    line.moveTo(shoulderX + shoulderRadius, shoulderY);
    line.arc(shoulderX, shoulderY, shoulderRadius, 600, 0.7 * Math.PI);
}
drawCircles();
drawHat();
drawHands();
draw();

function draw(){
    context.lineWidth = 2;
    context.stroke(circles);
    context.lineWidth = 3;
    context.stroke(line);
    context.lineWidth = 4;
    context.stroke(hat);
}


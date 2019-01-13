let canvas = document.getElementById("workspace");
let context = canvas.getContext("2d");

let circles = new Path2D();
let hat = new Path2D();
let line = new Path2D();
let xr1 = 300, yr1 = 300, xr2 = 450, yr2 = 425, xr3 = xr2, yr3 = 665;
let xyr1TOxyr2 = Math.sqrt( Math.pow(xr2 - xr1, 2) + Math.pow(yr2 - yr1, 2) );
let radius1 = 85, radius2 = xyr1TOxyr2 - radius1, radius3 = (yr3 - yr2) - radius2; 

circles.arc(xr1, yr1, radius1, 0, 2 * Math.PI);
circles.moveTo(xr2 + radius2, yr2);
circles.arc(xr2, yr2, radius2, 0, 2 * Math.PI);
circles.moveTo(xr3 + radius3, yr3);
circles.arc(xr3, yr3, radius3, 0, 2 * Math.PI);


context.lineWidth = 2;
context.stroke(circles);

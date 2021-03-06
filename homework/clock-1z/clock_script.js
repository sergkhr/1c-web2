let canvas = document.getElementById("workspace");
let secArrows = [];
let minArrows = [];
let hourArrows = [];
let R = 200;
let x = 300, y = 300;
let context = canvas.getContext("2d");
let circle = new Path2D();
let divisionsNorm = new Path2D();
let divisionsImpor = new Path2D();
circle.arc(x, y, R, 0, 2 * Math.PI);
for(let d = 0; d < 60; d++){
    let angle = (d / 60) * 2 * Math.PI;
    let pX = Math.cos(angle) * R;
    let pY = -Math.sin(angle) * R;
    let qX = 0.90 * pX;
    let qY = 0.90 * pY;
    pX += x; pY += y;
    qX += x; qY += y;

    if(d % 5 == 0){
        qX = 0.87 * (pX - x) + x;
        qY = 0.87 * (pY - y) + y;
        divisionsImpor.moveTo(pX, pY);
        divisionsImpor.lineTo(qX, qY);
    }else{
        divisionsNorm.moveTo(pX, pY);
        divisionsNorm.lineTo(qX, qY);
    }
    
}
function makeArrows(){
    
    for(let a = 0; a < 60; a++){
        let secondsArrow = new Path2D();
        let minutesArrow = new Path2D();
        let secondsAngle = (a / 60) * 2 * Math.PI;
        secondsAngle = Math.PI / 2 - secondsAngle;
        let minutesAngle = (a / 60) * 2 * Math.PI;
        minutesAngle = Math.PI / 2 - minutesAngle;
        let secX = 0.93 * (Math.cos(secondsAngle) * R) + x;
        let secY = 0.93 * (-Math.sin(secondsAngle) * R) + y;
        let minX = 0.70 * (Math.cos(minutesAngle) * R) + x;
        let minY = 0.70 * (-Math.sin(minutesAngle) * R) + y;
        secondsArrow.moveTo(x, y);
        secondsArrow.lineTo(secX, secY);
        minutesArrow.moveTo(x, y);
        minutesArrow.lineTo(minX, minY);
        secArrows.push(secondsArrow);
        minArrows.push(minutesArrow);
    }
    for(let h = 0; h < 12; h++){
        let hoursArrow = new Path2D();
        let hoursAngle = ((h % 12) / 12) * 2 * Math.PI;
        hoursAngle = Math.PI / 2 - hoursAngle;
        let hourX = 0.55 * (Math.cos(hoursAngle) * R) + x;
        let hourY = 0.55 * (-Math.sin(hoursAngle) * R) + y;
        hoursArrow.moveTo(x, y);
        hoursArrow.lineTo(hourX, hourY);
        hourArrows.push(hoursArrow);
    }
    
    
}

function drawWatch(){
    let date = new Date();
    let hours = date.getHours();
    hours = hours % 12;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    context.clearRect(0, 0, 600, 600);
    context.lineWidth = 2;
    context.stroke(divisionsImpor);
    context.lineWidth = 1;
    context.stroke(divisionsNorm);
    context.lineWidth = 3;
    context.stroke(circle);
    context.lineWidth = 2;
    context.strokeStyle = "red";
    context.stroke(secArrows[seconds]);
    context.strokeStyle = "black";
    context.lineWidth = 4;
    context.stroke(minArrows[minutes]);
    context.lineWidth = 7;
    context.stroke(hourArrows[hours]);

    setTimeout(drawWatch, 1000);
}

drawWatch();
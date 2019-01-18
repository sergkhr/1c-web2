let canvas = document.getElementById("workspace");
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
function drawWatch(){
    context.clearRect(0, 0, 600, 600);
    context.lineWidth = 2;
    context.stroke(divisionsImpor);
    context.lineWidth = 1;
    context.stroke(divisionsNorm);
    context.lineWidth = 3;
    context.stroke(circle);

    setTimeout(drawWatch, 1000);
}

drawWatch();
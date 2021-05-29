function draw1() {
    let canvas = document.getElementById("triForceCanvas");
    let context = canvas.getContext("2d");

    context.beginPath();
    context.moveTo(150, 200);
    context.lineTo(50, 350);
    context.lineTo(250, 350);
    context.closePath();
    
    context.moveTo(350, 200);
    context.lineTo(450, 350);
    context.lineTo(250, 350);
    context.closePath();
    
    context.moveTo(250, 50);
    context.lineTo(350, 200);
    context.lineTo(150, 200);
    context.closePath();

    context.lineWidth = 10;
    context.strokeStyle = '#666666';
    context.stroke();

    context.fillStyle = "#FFCC00";
    context.fill();
}

function draw2(){
    let canvas = document.getElementById("triForceCanvas");
    let context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(150, 225);
    context.lineTo(75, 335);
    context.lineTo(225, 335);
    context.closePath();
    
    context.moveTo(350, 225);
    context.lineTo(425, 335);
    context.lineTo(275, 335);
    context.closePath();
    
    context.moveTo(250, 75);
    context.lineTo(325, 185);
    context.lineTo(175, 185);
    context.closePath();

    context.fillStyle = "#e0b91d";
    context.fill();
}

draw1();
draw2();
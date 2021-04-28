let c=document.getElementById("myCanvas");
let ctx=c.getContext("2d");

let drawLine=(startX,startY,endX,endY)=>{
    ctx.beginPath();
ctx.moveTo(startX,startY);
ctx.lineTo(endX,endY);
ctx.stroke();
};

let drawCircle=(centerX,centerY,radius,startingAngle,endingAngle,color)=>{
ctx.beginPath();
ctx.arc(centerX, centerY, radius,startingAngle,endingAngle);
ctx.fillStyle = color;
ctx.fill();
ctx.stroke();
};
//head
drawCircle(250, 250, 150, 0, 2 * Math.PI,"transparent");

//eyes
let drawEyes=(radius,color)=>{
    //left eye
drawCircle(300, 200, radius, 0, 2 * Math.PI, color);
    //right eye
    drawCircle(200, 200, radius, 0, 2 * Math.PI, color);
};
//nose
let drawNose=(type)=>{
    //nose type is either "crooked" or "button"
    if (type ==="crooked"){
        drawLine(250,250,200,275);
        drawLine(200,275,250,275);
    }
    else{
     drawCircle(250,250,20,0,Math.PI,"transparent");
     drawLine(230,250,250,225);
     drawLine(270,250,250,225);
    }
};

//Mouth
let drawMouth=(expression)=>{
    //mouth type is either "happy" ,"suprise" or "flat"
    if (expression ==="suprise"){
      drawCircle(250,325,40,0,2*Math.PI),"transparent";
    }
    else if (expression ==="happy"){
        drawCircle(250,300,40,0,Math.PI),"transparent";
      }
    else{
     drawLine(200,325.300,325);
    
    }
};


let getRndInteger=(min, max) =>{
    return Math.floor(Math.random() * (max - min) ) + min;
  };

let drawRandomFace=()=>{
  let eyeRadius=getRndInteger(1,20);
  let eyeColor=["red","green","blue","yellow"] [getRndInteger(0,3)];
  let noseType=["crooked","button"] [getRndInteger(0,1)];
  let expression=["happy","suprise","flat"][getRndInteger(0,2)];

    drawEyes(eyeRadius,eyeColor);
    drawNose(noseType);
    drawMouth(expression);
};
drawRandomFace();
    







/*
ctx.beginPath();
ctx.moveTo(250,150);
ctx.lineTo(250,350);
ctx.stroke();
//right arm
ctx.beginPath();
ctx.moveTo(250,200);
ctx.lineTo(150,150);
ctx.stroke();
//left arm
ctx.beginPath();
ctx.moveTo(250,200);
ctx.lineTo(350,150);
ctx.stroke();
//right leg
ctx.beginPath();
ctx.moveTo(250,350);
ctx.lineTo(225,450);
ctx.stroke();
//left leg
ctx.beginPath();
ctx.moveTo(250,350);
ctx.lineTo(275,450);
ctx.stroke();

drawLine(250,150,250,350);
drawLine(250,200,150,150);
drawLine(250,200,350,150);
drawLine(250,350,225,450);
drawLine(250,350,275,450);*/
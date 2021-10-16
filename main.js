canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
var mouseEvent="Empty";
var last_position_of_x,last_position_of_y;
color="black";
widthofline=1;

canvas.addEventListener("mousedown",My_mousedown);
function My_mousedown(e){
color=document.getElementById("color").value;
widthofline=document.getElementById("line_width").value;
mouseEvent="mouseDown";
}

canvas.addEventListener("mouseup",My_mouseup);
function My_mouseup(e){
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseleave",My_mouseleave);
function My_mouseleave(e){
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mousemove",My_mousemove);
function My_mousemove(e){
    currentposition_of_x=e.clientX-canvas.offsetLeft;
    currentposition_of_y=e.clientY-canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=widthofline;

        ctx.moveTo(last_position_of_x,last_position_of_y);

        ctx.lineTo(currentposition_of_x,currentposition_of_y);

        ctx.stroke();
    }
    last_position_of_x=currentposition_of_x;
    last_position_of_y=currentposition_of_y;
}
function ClearArea(){
    ctx.clearRect(0,0,ctx.canvas.width, ctx.canvas.height);
}
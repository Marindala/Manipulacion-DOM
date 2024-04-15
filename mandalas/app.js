//----------------
// CANVAS SETUP
//----------------
const canvas = document.getElementById('main');

const ctx = canvas.getContext('2d');

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

canvas.width = WIDTH;
canvas.height = HEIGHT;

//----------------
// PARAM FORM
//----------------
const radiusParam = document.getElementById('radius');
const strokeParam = document.getElementById('stroke');

let radius = 20;
let stroke = "black";

radiusParam.addEventListener('change', function(e){
  radius = e.target.value;
})

strokeParam.addEventListener('change', function(e){
  stroke = e.target.value;
  circle.strokeStyle = stroke;
})

//----------------
// HANDLE RESIZE
//----------------
window.addEventListener('onresize', function(){
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    circle.update()
    circle.draw()
})

//----------------
// CIRCLE CLASS
//----------------
let hue = 0;
let number = 0;
let scale = 10;

class Circle{
  constructor(){
    this.strokeStyle = stroke;
  }
 
  draw(){
    ctx.fillStyle = this.fillStyle;
    ctx.strokeStyle = this.strokeStyle;
    ctx.lineWidth = 2;
    ctx.beginPath()
    ctx.arc(this.x, this.y, radius, 0, 2 * Math.PI)
    ctx.fill()
    if(this.strokeStyle != "none")
      ctx.stroke()
    ctx.closePath()

  }
  update(){
    this.angle = number * 1;
    this.r = scale * Math.sqrt(number);
    this.x = this.r * Math.sin(this.angle) + WIDTH / 2;
    this.y = this.r * Math.cos(this.angle) + HEIGHT / 2;
    this.fillStyle = 'hsl('+ hue + ', 100%, 50%)';
    number ++;
    hue ++;
  }
}

let circle = new Circle(WIDTH / 2, HEIGHT / 2)

//----------------
// MAIN LOOP
//----------------
function animate(){
  circle.update();
  circle.draw();
  
  requestAnimationFrame(animate);
}

// RUN
animate();
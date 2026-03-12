var kings = document.querySelectorAll(".drum").length;

for (var i = 0; i < kings; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

  });

}


document.addEventListener("keydown", function(event){

  makeSound(event.key);

});


function makeSound(key){

  switch (key) {

  case "a":
    new Audio("sounds/a.mp3").play();
    break;

  case "b":
    new Audio("sounds/b.mp3").play();
    break;

  case "c":
    new Audio("sounds/c.mp3").play();
    break;

  case "d":
    new Audio("sounds/d.mp3").play();
    break;

  case "e":
    new Audio("sounds/e.mp3").play();
    break;

  case "f":
    new Audio("sounds/f.mp3").play();
    break;

  case "g":
    new Audio("sounds/g.mp3").play();
    break;

  case "h":
    new Audio("sounds/h.mp3").play();
    break;

  case "i":
    new Audio("sounds/i.mp3").play();
    break;

  case "j":
    new Audio("sounds/j.mp3").play();
    break;

  case "k":
    new Audio("sounds/k.mp3").play();
    break;

  case "l":
    new Audio("sounds/l.mp3").play();
    break;

  case "m":
    new Audio("sounds/m.mp3").play();
    break;

  case "n":
    new Audio("sounds/n.mp3").play();
    break;

  case "o":
    new Audio("sounds/o.mp3").play();
    break;

  case "p":
    new Audio("sounds/p.mp3").play();
    break;

  case "q":
    new Audio("sounds/q.mp3").play();
    break;

  case "r":
    new Audio("sounds/r.mp3").play();
    break;

  case "s":
    new Audio("sounds/s.mp3").play();
    break;

  case "t":
    new Audio("sounds/t.mp3").play();
    break;

  case "u":
    new Audio("sounds/u.mp3").play();
    break;

  case "v":
    new Audio("sounds/v.mp3").play();
    break;

  case "w":
    new Audio("sounds/w.mp3").play();
    break;

  case "x":
    new Audio("sounds/x.mp3").play();
    break;

  case "y":
    new Audio("sounds/y.mp3").play();
    break;

  case "z":
    new Audio("sounds/z.mp3").play();
    break;

}
  

}
const canvas = document.getElementById("bubbleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bubbles = [];

class Bubble{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.radius = Math.random()*6+3;
    this.speedY = Math.random()*1+0.5;
    this.speedX = (Math.random()-0.5)*1;
    this.alpha = 1;
    this.color = `hsl(${Math.random()*360},100%,60%)`;
  }

  update(){
    this.x += this.speedX;
    this.y -= this.speedY;
    this.alpha -= 0.01;
  }

  draw(){
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.radius,0,Math.PI*2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }
}

/* floating background bubbles */
function createFloating(){
  if(Math.random()<0.2){
    bubbles.push(new Bubble(Math.random()*canvas.width,canvas.height));
  }
}

/* burst bubbles when drum clicked */
function bubbleBurst(x,y){
  for(let i=0;i<25;i++){
    bubbles.push(new Bubble(x,y));
  }
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);

  createFloating();

  bubbles = bubbles.filter(b=>b.alpha>0);

  bubbles.forEach(b=>{
    b.update();
    b.draw();
  });

  requestAnimationFrame(animate);
}

animate();

/* trigger burst on drum click */
document.querySelectorAll(".drum").forEach(btn=>{
  btn.addEventListener("click",e=>{
    const rect = btn.getBoundingClientRect();
    const x = rect.left + rect.width/2;
    const y = rect.top + rect.height/2;
    bubbleBurst(x,y);
  });
});
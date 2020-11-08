var capture;
var tempo = 0;
var tempoApagar = 0;


function setup() {
 createCanvas(windowWidth, windowHeight);
 capture = createCapture(VIDEO);
 capture.hide();
 background(0);
 
}

function draw(){
  
  if(tempo > 20){
    tint(random(255), random(255), random(255));
    imagens = image(capture, random(0, width - 150), random(0, height - 150), 150, 150);    
    tempo = 0;
  }
  
  if(tempoApagar > 3000){
    filter(BLUR, 3);
    tempoApagar = 0;
  }
  
  tempo++;
  tempoApagar++;
}

function mousePressed(){
 saveCanvas('minhaFoto','jpg'); 
}
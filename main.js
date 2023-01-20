x = 0;
y = 0;
apple="";
screen_width=0;
screen_height=0;
speak_data="";
to_number=0;
draw_apple="";
var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();
function preload(){
  apple=loadImage('apple.jpg');
}

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak"; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var content = event.results[0][0].transcript;

   document.getElementById("status").innerHTML = "The Speech has been recognized as: " + content; 
   to_number=Number(content);
   if(Number.isInteger(to_number)){
     document.getElementById("status").innerHTML="Started Drawing Apple";
     draw_apple="set";
   }
   else{
     document.getElementById("status").innerHTML="The Speech has not been recognized as a number ";
   }
    
}

function setup() {
 
  screen_width=window.innerWidth;
  screen_height=window.innerHeight;
  canvas = createCanvas(screen_width,screen_height-150);
  canvas.position(0,150);
}

function draw() {
  if(draw_apple == "set")
  {
    for(i=1;i<=to_number;i++){
      x=Math.floor(Math.random()*700);
      y=Math.floor(Math.random()*400);
    image(apple,x,y,40,40);
    }
    document.getElementById("status").innerHTML = to_number+" Apples are drawn. ";
    speak_data=to_number+"Apples are drawn";
    speak();
    draw_apple = "";
  }

  

}
function speak(){
  var synth=window.speechSynthesis;
  say_this=new SpeechSynthesisUtterance(speak_data);
  synth.speak(say_this);
  speak_data="";
}








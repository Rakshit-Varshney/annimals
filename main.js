var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
var status1="";
var status2="";
var status3="";
var status4="";
var status5="";

function setup(){
    canvas=createCanvas(700,600);
    canvas.center();
    background("white");
}

function start(){
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    if(content==1){
        status1="set1";
    }
    if(content==2){
    status2="set2";
    }
    if(content==3){
    status3="set3";
    }
    if(content==4){
    status4="set4";
    }
    if(content==5){
    status5="set5";
    }
  }
function draw() {
    if (status1=="set1"){
    image(img1,0,0,100,100);
    
    }
    if (status2=="set2"){
    image(img1,0,0,100,100);
    image(img2,100,0,100,100);
            
            }
    if (status3=="set3"){
    image(img1,0,0,100,100);
    image(img2,100,0,100,100);
    image(img3,200,0,100,100);
                    
                    }
    if (status4=="set4"){
    image(img1,0,0,100,100);
    image(img2,100,0,100,100);
    image(img3,200,0,100,100);
    image(img4,300,0,100,100);
                                        
                    }
    if (status5=="set5"){
    image(img1,0,0,100,100);
    image(img2,100,0,100,100);
    image(img3,200,0,100,100);
    image(img4,300,0,100,100);
    image(img5,400,0,100,100);
                                                            
                                        }
}
function preload() {
    img1=loadImage('bear.jpeg');
    img2=loadImage('tiger.jpeg');
    img3=loadImage('dog.jpeg');
    img4=loadImage('lion.jpeg');
    img5=loadImage('cat.jpeg');
}
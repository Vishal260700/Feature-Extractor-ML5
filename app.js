let mobilenet;
let classifier;
let video;
let name;
let prob;
let setButton;
let askButton;
let trainButton;

function func1(){
	console.log("model is Ready");
}

function func2(error,result){
	if(!error){
		//console.log(result);
    classifier.classify(func2);
    name = result;
    //console.log(name,prob);
	}else{
		console.log("error");
	}
}

function imageReady(){
  video(video, 0, 0, width, height);
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.featureExtractor("MobileNet",func1);
  classifier = mobilenet.classification(video,videoReady);

  setButton = createButton('Set1');
  setButton.mousePressed(function(){
    classifier.addImage('Set1');
  })

  askButton = createButton('Ask1');
  askButton.mousePressed(function(){
    classifier.addImage('Ask1');
  })

  trainButton = createButton('Train');
  trainButton.mousePressed(function(){
    classifier.train(training);;
  })
}


function draw() {
  background(0);
  image(video, 0, 0);
  fill(255);
  textSize(32);
  text(name, 10, height - 20);
}

function videoReady(){
  console.log("Video Ready");
}

function training(loss){
  if(loss == null){
    console.log("Training Completed");
    classifier.classify(func2);
  }else{
    console.log(loss);
  }
}
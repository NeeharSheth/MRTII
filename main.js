console.log("mu5 version:",ml5.version);

function setup() {
  canvas = createCanvas(250, 220);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classfier= ml5.imageClassifier('MobileNet', modelLoaded);
}

function modelLoaded(){
  console.log('Model Loaded :D');
}

function draw(){
image(video,0,0,250,220);
classfier.classify(video, gotResult);
}

function gotResult(error, result){
  if(error){
console.log(error)
  }
  else{
console.log(result);
document.getElementById("object_result").innerHTML= result[0].label;
document.getElementById("accuracy_result").innerHTML= result[0].confidence.toFixed(2)*100+"%";
  }
}




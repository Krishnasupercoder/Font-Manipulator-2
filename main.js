var video;
var canvas;
var posenet_model;
function setup(){
video = createCapture(VIDEO);
video.size(550,500);
canvas = createCanvas(550,550);
canvas.position(560,150);
posenet_model = ml5.poseNet(video,modelLoaded);
posenet_model.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("Model is started");
}
function draw(){
    background("#52BE80");

}
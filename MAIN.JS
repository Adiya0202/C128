song_1="";
song_2="";
leftWrist_x="";
leftWrist_y="";
rightWrist_x="";
rightWrist_y="";

function preload(){
song_1= loadSound("Song_1.mp3");
song_2= loadSound("song_2.mp3");
}

function setup(){
canvas= createCanvas(400,400);
canvas.center();

video= createCapture(VIDEO);
video.hide();

poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotResult);
}

function modelLoaded(){
    console.log('poseNet is initialised');
}

function gotResult(results){

    if(results.length > 0){
        console.log(results);
        leftWrist_x= results[0].pose.leftWrist.x;
        leftWrist_y= results[0].pose.leftWrist.y;
        console.log("leftWrist_x="+leftWrist_x+"leftWrist_y="+leftWrist_y);
        rightWrist_x= results[0].pose.rightWrist.x;
        rightWrist_y= results[0].pose.rightWrist.y;
        console.log("rightWrist_x="+rightWrist_x+"rightWrist_y="+rightWrist_y);
    }
}

function draw(){
image(video, 0,0,400,400);
}
nose_x = 0;
nose_y = 0;
cap_x = 0;
cap_y = 0;
function preload() {
    nose_img = loadImage('https://i.postimg.cc/K80X662L/red-nose.png');
    cap_img = loadImage('https://i.postimg.cc/2jThsGtv/download.png');
}

function setup() {
    var canvas = createCanvas(640, 400);
    canvas.position(400, 150);
    video = createCapture(VIDEO);
    video.size(640, 400);
    video.hide();
    var posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses);
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        nose_x=results[0].pose.nose.x - 25;
        nose_y=results[0].pose.nose.y -25;
        cap_x=results[0].pose.leftEye.x -150;
        cap_y=results[0].pose.leftEye.y - 230;
        console.log('Nose x value:'+ nose_x);
        console.log('Nose y value:'+ nose_y);
        console.log('Cap x value:'+ cap_x);
        console.log('Cap y value:'+ cap_y);
    }
}

function modelLoaded() {
    console.log('PoseNet Loaded!')
}

function snap() {
    var fn = prompt('What file name do you want to save in?');
    save(fn+'.jpg')
}

function draw() {
    image(video, 0, 0, 640, 400);
    // fill("red");
    // stroke("black");
    // strokeWeight(1)
    // circle(nose_x, nose_y, 40);
    image(nose_img, nose_x, nose_y,40, 40);
    image(cap_img, cap_x, cap_y, 200)
}
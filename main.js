function preload()
{
    video = createVideo('video.mp4');
    video.hide();
}
function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();
}
function draw()
{
    image(live, 0, 0, 480, 380);
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded)
    document.getElementById("status").innerHTML = "Status : Detecting Object";


}
function modelLoaded() {
    console.log('Model Loaded!');
    status = true;
}

function draw() {
    image(webcam, 0, 0, 300, 300);
    classifier.classify(webcam,gotResult);
}
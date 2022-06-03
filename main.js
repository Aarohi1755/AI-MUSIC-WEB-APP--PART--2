song = "";

function setup()
{
    canvas = createCanvas(900, 700);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 900, 700);
}

function preload()
{
    song = loadSound("music.mp3.mp3");
}

function play()
{
    song.play();
}

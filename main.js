function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canavas = createCanvas(550, 500);
    canavas.position(560, 150); 

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotPoses);
}

function modelloaded()
{
    console.log('Initialized!');
}

function draw()
{
    background('#969A97')
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}
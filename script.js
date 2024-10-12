function preload ()
{
 mustache = loadImage('https://i.postimg.cc/vT09NRpv/mustache-image.png');
}

function setup()
{
  canvas= createCanvas(400,400);
  canvas.center() ;
  video= createCapture(VIDEO);
  video.size(300,300);
  video.hide();

  poseNet =ml5.poseNet(video,modelLoaded);
  poseNet.on('pose',gotPoses);

}

function draw()
{
  image(video,0,0,400,400);

  image(mustache,noseX,nosey,30,30);
}

function takesnapshot()
{
    save('myFilterImage.png');
}

function modelLoaded()
{
  console.log('PoseNet Is Initialized');

}

function gotPoses()
{
  if(results.length > 0 )
  {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose x = " + results [0].pose.nose.x);
    console.log("nose y = " + results [0].pose.nose.y);
  }
}
noseX=0;
noseY=0;
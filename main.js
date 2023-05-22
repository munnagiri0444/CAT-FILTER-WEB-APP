nose_x=0;
nose_y=0;
function preload() {
    image_1=loadImage("nose.png")

}
function setup(){
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    video.size(400,400)
    pn=ml5.poseNet(video,modelLoaded)
    pn.on("pose",gotResults)
}
function draw(){
    image(video,0,0,500,400);
    // filter(BLUR,10)
    fill("red")
    // circle(nose_x+44,nose_y,40) 
    image(image_1,nose_x-70,nose_y-190,250,320)
   
    
}
function modelLoaded(){
    console.log("succes");

}
function gotResults(results){
    if(results.length>0){
    nose_x=results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
    console.log("nose x value is "+nose_x+" nose y value is "+nose_y)
    

    }


}
function takepicture(){
    save()
}

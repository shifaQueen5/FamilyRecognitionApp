Webcam.set({
    height: 300,
    width: 400,
    image_format: "jpg",
    jpg_quality: 100,
});
camera = document.getElementById("webcam");
Webcam.attach(camera);

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_img" src="'+data_uri+'"/>';
    })
}
console.log(ml5.version);
classifier = ml5.imageClassifier("",modelLoaded);
function modelLoaded(){
    console.log("Model Load!");
}

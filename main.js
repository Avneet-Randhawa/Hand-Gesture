prediction_1="";
prediction_2="";

Webcam.set({
    width:350,
    height:300,
    img_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach("camera");

function take_snapshot(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML='<img id="captured_image" src="' + data_url + '" />';
    })
}

console.log("ml5 Varision : " + ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/T3p1WGPc-/model.json',modelLoaded);

function modelLoaded(){
    console.log("Model is Loaded");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data1 = "The First prediction is "+prediction_1;
    speak_data2 = "and the second prediction is "+ prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1+speak_data2);
    window.speak(utterThis);
}
Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function takeSnapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>'
})};
console.log('ml5 version: ', ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/CSEDM9t-x/model.json', modelloaded)
function modelloaded(){
    console.log("Model Loaded!")
};
function check(){
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult)
};
function gotResult(error, results){
    if(error){
console.log(error)
    }
    else{
        console.log(results);
    document.getElementById("result_emotion_name").innerHTML = results[0].label;
    document.getElementById("result_emotion_name2").innerHTML = results[1].label;
    prediction_1 = results[0].label;
    prediction_2 = results[1].label;
    speak();
    if(results[0].label == "Peace")
    {
        document.getElementById("update_emoji").innerHTML = "&#9996;";
    }
    if(results[0].label == "Thumbs Up")
    {
        document.getElementById("update_emoji").innerHTML = "&#128077;";
    }
    if(results[0].label == "Knarly")
    {
        document.getElementById("update_emoji").innerHTML = "&#129305;";
    }
    if(results[0].label == "Nice")
    {
        document.getElementById("update_emoji").innerHTML = "&#128076;";
    }
    if(results[0].label == "Sick!")
    {
        document.getElementById("update_emoji").innerHTML = "&#129304;";
    }
    if(results[1].label == "Peace")
    {
        document.getElementById("update_emoji2").innerHTML = "&#9996;";
    }
    if(results[1].label == "Thumbs Up")
    {
        document.getElementById("update_emoji2").innerHTML = "&#128077;";
    }
    if(results[1].label == "Knarly")
    {
        document.getElementById("update_emoji2").innerHTML = "&#129305;";
    }
    if(results[1].label == "Nice")
    {
        document.getElementById("update_emoji2").innerHTML = "&#128076;";
    }
    if(results[1].label == "Sick!")
    {
        document.getElementById("update_emoji2").innerHTML = "&#129304;";
    }
}}
function speak() {
    var synth = window.speechSynthesis;
    speak_data1 = "The first prediction is " + prediction_1;
    speak_data2 = "and the second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1 + speak_data2);
    synth.speak(utterThis);
}



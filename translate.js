var input_txt=document.querySelector("#txt-input");
var output_txt=document.querySelector("#txt-output");
var btn_listen=document.querySelector("#btn");

// var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
var serverURL="https://api.funtranslations.com/translate/klingon.json";
// var serverURL="https://api.funtranslations.com/translate/groot.json";
function getTranslationalURL(input_txt){
    return serverURL+"?"+"text="+input_txt;
}

function errorHandler(error){
    console.log("error due to: "+error);
}
function clickHandler(){
    var textinput=input_txt.value;
    // calling server for processing
    fetch(getTranslationalURL(textinput))
    .then(response=>response.json())
    .then(json=>{
        var translated=json.contents.translated;
        output_txt.innerText=translated;
    })
    .catch(errorHandler)

}
btn_listen.addEventListener("click",clickHandler)
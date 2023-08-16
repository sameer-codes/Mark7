var inputText = document.querySelector("#input");
var transButton = document.querySelector("#translate-button");
var outputText = document.querySelector("#output");

var serverURL ="https://api.funtranslations.com/translate/dothraki.json";

function getTranslationUrl(text){
  return serverURL +"?"+"text="+text;
}

function errorHandler(error){
  console.log("error occurred"+ error);
  alert("server error, Please try after some time");
}

function clickEventHandler() {
  var text=inputText.value;

  fetch(getTranslationUrl(text))
  .then(response=> response.json())
  .then(json=>{
    var translatedText=json.contents.translated;
    console.log(translatedText);
    outputText.innerText= translatedText;
  })
    
  .catch(errorHandler);
  
}

transButton.addEventListener("click", clickEventHandler);
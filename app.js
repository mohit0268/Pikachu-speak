const txtInput=document.querySelector("#txt-input");
const btnTranslate=document.querySelector("#btn-translate")
const outputDiv=document.querySelector("#output");

var url="https://translationAPI.mohit0268.repl.co/translate/yoda.json";

function getTranslationUrl(text){
    return url + "?" +"text=" + text;
}

function errorHandler(error){
    console.log("error occured",error);
    alert("this is some error occured")
}

function clickHandler(){
    var inputText=txtInput.value;

    //fetching the data from our json
    fetch(getTranslationUrl(inputText))
    .then(response => response.json())
    .then(json => {var translatedText=json.contents.translated
                    outputDiv.innerText=translatedText} )
    .catch(errorHandler)

}
btnTranslate.addEventListener("click",clickHandler);
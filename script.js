var btnTranslate = document.querySelector('#btn-translate');
var inputText = document.querySelector('#input-text');
var outputText = document.querySelector('#output-text');

console.log(btnTranslate)




var serverURL = "https://api.funtranslations.com/translate/navi.json"

function urlGenerator(text) {
    return serverURL + "?" + "text=" + text
}


function clickHandler() {
    var txtInput = inputText.value
    fetch(urlGenerator(txtInput))
        .then(response => response.json())
        .then(json => {
            var translate = json.contents.translated
            outputText.innerText = translate
        })
}


btnTranslate.addEventListener("click", clickHandler)
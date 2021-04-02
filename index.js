
const personagens = document.getElementById("personagens");
const luas = document.getElementById("luas");
const planetas = document.getElementById("planetas");
const naves = document.getElementById("naves");

function preencherAssets(){
    personagens.innerHTML = swapiGet("people/1/");
    console.log('primeiro')


}

function swapiGet(params){
    const url = `https://swapi.dev/api/${params}`;
    fetch(url)
        .then(response => response.json())
        .then(json => json)

}
preencherAssets();
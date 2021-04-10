
const personagens = document.getElementById("personagens");
const luas = document.getElementById("luas");
const planetas = document.getElementById("planetas");
const naves = document.getElementById("naves");

preencherInfos();

function preencherInfos(){  
    Promise.all([
    swapiGet("people/"), 
    swapiGet("starships/"), 
    swapiGet("planets/") 
])
.then(function (results){
    personagens.innerHTML = results[0].count; 
    naves.innerHTML = results[1].count;
    planetas.innerHTML = results[2].count;
    })
}

function swapiGet(params){
    const url = `https://swapi.dev/api/${params}`;
    return axios.get(url)
            .then(response =>{
            
                return response.data;
            })
            

}



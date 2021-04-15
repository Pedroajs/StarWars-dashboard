
const personagens = document.getElementById("personagens");
const luas = document.getElementById("luas");
const planetas = document.getElementById("planetas");
const naves = document.getElementById("naves");
const tabelaFilmes = document.getElementById("filmsTable")
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

async function preencerTabelas(){
    const response = await swapiGet("films/")
    const tableData = response.results;
    console.log(tableData)
    tableData.forEach(film => {
      $("#filmsTable").append(
            `
                <tr>
                    <td>
                        ${film.title}
                    </td>
                
                    <td>
                        ${moment(film.release_date).format("DD/MM/YYYY")}
                    </td>
                
                    <td>
                        ${film.director}
                    </td>
                
                    <td>
                        ${film.episode_id}
                    </td>
                </tr>
            `
        )
    });

}

preencerTabelas();


export function swapiGet(params){
    const url = `https://swapi.dev/api/${params}`;
    return axios.get(url)
            .then(response =>{
            
                return response.data;
            })
}



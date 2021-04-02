const url = "https://swapi.dev/api/people/1/";

fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
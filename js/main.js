const apiKey = "JQglzZMbMcN0zKIXGlkxcofEuT8w4PuN";
const term = buscar;
const llamada = fetch(`
https://api.giphy.com/v1/gifs/search
?api_key=${apiKey}
&q=${term}
&limit=10
&offset=0
&rating=g
&lang=en
&bundle=messaging_non_clips   
`);
let buscar = document.getElementsByClassName("buscar");

llamada
    .then((response) => {
        return response.json();
    })
    .then((results) => {
        //let url = result.data[0].images.original.url
        //console.log(url);
        results.data.forEach(element => {
            console.log(element.images.original.url);
            let imagen = document.createElement("img");
            imagen.setAttribute("src", element.images.original.url);
            document.body.appendChild(imagen);
        });
    })
    .catch((error) => {
        console.error(error.message);
    })

buscar
    .then((response) => {
        
    })
    .catch((error) => {
        console.error(error.message);
    })

//buscar.onclick()
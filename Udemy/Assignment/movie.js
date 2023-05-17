let movie = JSON.parse(localStorage.getItem("Movie")) || {};

const container = document.getElementById("container");


let div = document.createElement("div");
container.style.margin = "auto"
container.style.width = "600px"
container.style.textAlign = "center";
let img = document.createElement("img");
img.src = movie.imgUrl;
img.style.width = "100%"

let desc = document.createElement("div");
let h1 = document.createElement("h1");
h1.innerText = movie.title;


let p = document.createElement("p");
p.innerText = movie.description

let p2 = document.createElement("p");
p2.innerText = movie.imdb;
div.append(img)
desc.appendChild(h1,p,p2);
container.append(div,desc);
const movies = [
    {
      id: 1,
      imgUrl: "https://media.comicbook.com/2017/10/the-avengers-movie-poster-marvel-cinematic-universe-1038892.jpg",
      title: "Avengers 1",
      description: "This is the description of Movie 1.",
      imdb: 7.5
    },
    {
      id: 2,
      imgUrl: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_FMjpg_UX1000_.jpg",
      title: "Avengers Age of Ultron",
      description: "This is the description of Movie 2.",
      imdb: 8.1
    },
    {
      id: 3,
      imgUrl: "https://resizing.flixster.com/AAL_5Ve7jqMOrjyC-OFOoZr5rkY=/300x300/v2/https://resizing.flixster.com/CXOXbOpLNL1NNkXTQu-4Rgvcszs=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzM0NGRkMDM2LWVjNDQtNGZlMC04NGM3LWZkMzQ2Njg1OTUyNi53ZWJw",
      title: "Avengers Infinity Wars",
      description: "This is the description of Movie 3.",
      imdb: 6.9
    },
    {
      id: 4,
      imgUrl: "https://imageio.forbes.com/blogs-images/markhughes/files/2019/04/AVENGERS-ENDGAME-poster-2-1200x1823.jpg?format=jpg&width=1200",
      title: "Avengers End Game",
      description: "This is the description of Movie 4.",
      imdb: 7.8
    },
    {
      id: 5,
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/02/Iron_Man_%282008_film%29_poster.jpg",
      title: "Iron Mane 1",
      description: "This is the description of Movie 5.",
      imdb: 8.4
    },
    {
      id: 6,
      imgUrl: "https://img1.hotstarext.com/image/upload/f_auto,t_web_vl_2_5x/sources/r1/cms/prod/4571/674571-v",
      title: "Iron Man 2",
      description: "This is the description of Movie 6.",
      imdb: 7.2
    },
    {
      id: 7,
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/1/19/Iron_Man_3_poster.jpg",
      title: "Iron Man 3",
      description: "This is the description of Movie 7.",
      imdb: 6.7
    },
    {
      id: 8,
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/3/37/Captain_America_The_First_Avenger_poster.jpg",
      title: "Captain America: The First Avenger",
      description: "This is the description of Movie 8.",
      imdb: 8.6
    },
    {
      id: 9,
      imgUrl: "https://upload.wikimedia.org/wikipedia/en/9/9e/Captain_America_The_Winter_Soldier_poster.jpg",
      title: "Captain America: The Winter Soldier",
      description: "This is the description of Movie 9.",
      imdb: 7.9
    },
    {
      id: 10,
      imgUrl: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_.jpg",
      title: "Captain America: Civil War",
      description: "This is the description of Movie 10.",
      imdb: 9.0
    }
  ];

// const fecthMovies = async () => {
//   const url =
//     "https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr";
//   const options = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "fa38d88c30msh4a7a241dc6ee35ep16f613jsn465e8a99d3cb",
//       "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     var result = await response.json();
//     console.log(result.d);
  
//   } catch (error) {
//     console.error(error);
//   }
// };

// fecthMovies();

let movie = JSON.parse(localStorage.getItem("Movie")) || [];



const moviesContainer = document.getElementById("Movie-Container");
// // Loop through the movies array
movies.forEach(movie => {
  // Create movie card elements
  const div = document.createElement("div");
  const movieCard = document.createElement("div");
  movieCard.classList.add("movie-card");

  const image = document.createElement("img");
  image.src = movie.imgUrl;

  const title = document.createElement("h2");
  title.innerText = movie.title;

  const descriptionCard = document.createElement("div");
  const description = document.createElement("p");
  description.innerText = movie.description;

  const imdbRating = document.createElement("p");
  imdbRating.innerText = "IMDb Rating: " + movie.imdb;

  // Append elements to the movie card
  movieCard.append(image);
  descriptionCard.append(title,description,imdbRating);
  

  // Append the movie card to the container
  div.append(movieCard,descriptionCard);
  div.addEventListener("click",() =>{
    localStorage.setItem("Movie",JSON.stringify(movie));
    window.location.href ="./movie.html";
  })
  moviesContainer.append(div);
});



// movies.forEach(movie =>{
//     const div = document.createElement("div");

//     const imageDiv = document.createElement("div");

//     const img = document.createElement("img");
//     img.src = movie.imgUrl;
//     imageDiv.append(img)

//     const desc = document.createElement("div");

//     const h1 = document.createElement("h1");
//     h1.innerText = movie.title;

//     const p = document.createElement("p");
//     p.innerText = movie.description

//     desc.append(h1,p);

//     div.append(imageDiv, desc);


// });

// moviesContainer.append(div)
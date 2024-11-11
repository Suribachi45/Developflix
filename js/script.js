import peliculas from './peliculas.js'

const genderContainer = document.querySelectorAll('.genero-container');
const divAction = document.getElementById('genero-28');
const divThriller = document.getElementById('genero-53');
const divAdventure = document.getElementById('genero-12');
const actionId = 28;
const thrillerId = 53;
const adventureID = 12;
const imagePath = 'https://image.tmdb.org/t/p/w500'
let movies = [];
let covers = [];





function movieFilter(ids) {
  return peliculas.filter(movie => movie.genre_ids.includes(ids))
                   .map(movie => ({
                     title: movie.original_title,
                     cover: imagePath + movie.backdrop_path
                   }));
}

function moviesSelection(id, div) {
  const filteredMovies = movieFilter(id);

  for (const { title, cover } of filteredMovies) {
    const movieTitle = document.createElement('p');
    const movieCover = document.createElement('img');
    const movieDiv = document.createElement('div');

    div.appendChild(movieDiv);
    movieDiv.appendChild(movieTitle);
    movieDiv.appendChild(movieCover);

    movieTitle.textContent = title;
    movieCover.src = cover;
    movieCover.alt = `Portada de la película "${title}"`;
  }
}

moviesSelection(actionId, divAction);
moviesSelection(thrillerId, divThriller);
moviesSelection(adventureID, divAdventure);

import { movieList, MovieFactory } from "./movieObject.js"
import { DomElements } from "./domElements.js";
function findMovies(movies) {
    //It's gonna loop through an array with all the results from the search i made and it gonna add all the movies found in an array called movieList
    //This array will later be used to display all movies on the screen
    movies.forEach(moviesFound => {
        const newMovie = MovieFactory //Create an object with the movie data
            (moviesFound.title,
            moviesFound.overview,
            moviesFound.original_language,
            moviesFound.release_date,
            moviesFound.poster_path,
            moviesFound.backdrop_path,
            moviesFound.vote_average);

        
        //Add all new movies in the array
        movieList.push(newMovie);
    })
}

function renderMovies(moviesToBeDisplayed) {
    //It takes an array of movies as argument
    //This function's gonna loop through this array and display all of it
    if (!moviesToBeDisplayed) return;

    const moviesContainer = DomElements().movieContainer();

    moviesToBeDisplayed.forEach(movies => {
        //console.log(movies.getMovieTitle());
        
        //Create DOM VARIABLES
        const movieCard = document.createElement('div');
        const posterContainer = document.createElement('div');
        const posterImg = document.createElement('img');
        const movieTitle = document.createElement('span');
        const movieReleaseDate = document.createElement('span');
        const movieUserScore = document.createElement('span');
        const movieOverview = document.createElement('p');

        //Add clases
        movieCard.classList.add('movie-card');
        posterContainer.classList.add('poster-container');
        posterImg.classList.add('poster-img');
        movieTitle.classList.add('movie-title');
        movieReleaseDate.classList.add('release-date');
        movieUserScore.classList.add('user-score');
        movieOverview.classList.add('overview');


        //Add Content
        posterImg.src = `https://image.tmdb.org/t/p/original/${movies.getMoviePosterImage()}`;
        movieTitle.innerText = movies.getMovieTitle();
        movieReleaseDate.innerText = movies.getMovieReleaseDate();
        movieUserScore.innerText = movies.getMovieUserScore();
        movieOverview.innerText = movies.getMovieOverview();

        //Append
        moviesContainer.append(movieCard);
        movieCard.append(posterContainer);
        posterContainer.append(posterImg);
        movieCard.append(movieTitle);
        movieCard.append(movieReleaseDate);
        movieCard.append(movieUserScore);
        movieCard.append(movieOverview);
        
    });
    clearList();
}


function clearList() {
    movieList.splice(0)
}
function clearScreen() {
    const movieCard = document.querySelectorAll('.movie-card');
    if (movieCard.length > 0) {
        movieCard.forEach(card => card.remove())
        console.log('Were running');
    }
    
}
export {findMovies, renderMovies, clearScreen}
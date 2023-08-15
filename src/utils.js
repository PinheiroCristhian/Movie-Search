import { movieList, MovieFactory } from "./movieObject.js"

function findMovies(movies) {
    //It's gonna loop through an array with all the results from the search i made and it gonna add all the movies found in an array called movieList
    //This array will later be used to display all movies on the screen
    movies.forEach(moviesFound => {
        //console.log(moviesFound)
        const newMovie = MovieFactory //Create an object with the movie data
            (moviesFound.title,
            moviesFound.overview,
            moviesFound.original_language,
            moviesFound.release_date,
            moviesFound.poster_path,
            moviesFound.backdrop_path,
            moviesFound.vote_average);

        //console.log(newMovie.getMovieTitle());
        movieList.push(newMovie);
    })
}

function renderMovies(moviesToBeDisplayed) {
    //It takes an array of movies as argument
    //This function's gonna loop through this array and display all of it
    if (!moviesToBeDisplayed) return;

    moviesToBeDisplayed.forEach(movies => {
        console.log(movies.getMovieTitle());

    });
}

export {findMovies, renderMovies}
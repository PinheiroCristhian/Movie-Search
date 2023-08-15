const movieList = [];

function MovieFactory(title, overview, language, releaseDate, posterImage, backgroundImage, userScore) {

    return {
        getMovieTitle: () => title,
        getMovieOverview: () => overview,
        getMovieLanguage: () => language,
        getMovieReleaseDate: () => releaseDate,
        getMoviePosterImage: () => posterImage,
        getMovieBackgroundImage: () => backgroundImage,
        getMovieUserScore: () => userScore
    }
}

export { movieList, MovieFactory }
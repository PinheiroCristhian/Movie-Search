
export function DomElements() {
    const movieNameInput = document.querySelector('.movie-name-input');
    const searchMovieBtn = document.querySelector('#search-movie-btn');

    return {
        movieNameInput: () => movieNameInput,
        searchBtn: () => searchMovieBtn
    }
}
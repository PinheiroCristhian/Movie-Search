//Factory function that will store the HTML Dom
export function DomElements() {
    const movieNameInput = document.querySelector('.movie-name-input');
    const searchMovieBtn = document.querySelector('#search-movie-btn');
    const movieListContainer = document.querySelector('.movie-list');

    return {
        movieNameInput: () => movieNameInput,
        searchBtn: () => searchMovieBtn,
        movieContainer: () => movieListContainer,
    }
}
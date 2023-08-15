import { searchForMovie } from "./api.js";
import { DomElements } from "./domElements.js";
import { findMovies, renderMovies } from "./utils.js";
import { movieList } from "./movieObject.js";

export function searchMovieListener() {
    //Event listener to the Search Movie Button, whenever it is clicked it's gonna call the API
    const searchBtn = DomElements().searchBtn(); //There's a module DomElements which contains all DOM variables
    
    searchBtn.addEventListener('click', async () => {
        const movieNameValue = DomElements().movieNameInput().value.trim();  //
        
        if (!movieNameValue) return; //If there's no text in the input field, it's gonna return

        //If there's some text, this code will be executed
        const movie = await searchForMovie(movieNameValue); //Loading a promise
        console.log(`We're in the searchMovieListener`)
        findMovies(movie.results);
        console.log(`We've passed the findMOvies`)
        renderMovies(movieList);
        console.log(`We're executing the renderMovies`);
        
    })
    
}

import { searchForMovie } from "./api.js";
import { DomElements } from "./domElements.js";
import { findMovies, renderMovies, clearScreen } from "./utils.js";
import { movieList } from "./movieObject.js";

export function searchMovieListener() {
    //Event listener to the Search Movie Button, whenever it is clicked it's gonna call the API
    const searchBtn = DomElements().searchBtn(); //There's a module DomElements which contains all DOM variables
    
    searchBtn.addEventListener('click', async () => {
        const movieNameValue = DomElements().movieNameInput().value.trim();  //
        
        if (!movieNameValue) return; //If there's no text in the input field, it's gonna return

        //If there's some text, this code will be executed
        const movie = await searchForMovie(movieNameValue); //Loading a promise
 
        findMovies(movie.results);
        clearScreen();
        let i = 1;
        console.log(`Vez ${i}: ${movieList} `);
        i++
        renderMovies(movieList);

        
    })
    
}

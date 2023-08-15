import { searchForMovie } from "./api.js";
import { DomElements } from "./domElements.js";
import { findMovies } from "./utils.js";

export function searchMovieListener() {
    //Event listener to the Search Movie Button, whenever it is clicked it's gonna call the API
    const searchBtn = DomElements().searchBtn(); //SearchBtn Dom is stored in the module domElements
    
    searchBtn.addEventListener('click', async () => {
        const movieNameValue = DomElements().movieNameInput().value.trim();  //
        
        if (!movieNameValue) return; //If there's no text in the input field, it's gonna return

        //If there's some text, this code will be executed
        const movie = await searchForMovie(movieNameValue);
        //console.log(movie)
        findMovies(movie.results);
    })
    
}

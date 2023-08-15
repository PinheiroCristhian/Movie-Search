import { APICALL } from "./api.js";
import { DomElements } from "./domElements.js";

export function searchMovieListener() {

    const search = DomElements().searchBtn();
    
    search.addEventListener('click', () => {
        const movieNameValue = DomElements().movieNameInput().value.trim();  
        
        if (movieNameValue) {
            console.log(movieNameValue)
        }
    })
    
}

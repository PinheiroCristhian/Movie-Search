import { apiKey } from "./apiKey.js";

export async function searchForMovie(movieName) {
    const key = apiKey();
    
    try { //if everything goes ok, it'll be executed here
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${key}`, {mode: 'cors'});

        const data = await response.json();

        return data;
    } catch (error) { //if something goes wrong, it'll run this instead
        console.error(error);
        return;
    }
}


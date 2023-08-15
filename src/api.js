import { apiKey } from "./apiKey.js";

export async function searchForMovie(movieName) {
    console.log('AṔI CALL HERE');
    
    
    try { //if everything goes ok, it'll be executed here
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&api_key=${apiKey}`, {mode: 'cors'});

        const data = await response.json();

        return data;
    } catch (error) { //if something goes wrong, it'll run this instead
        console.error(error);
        return;
    }


    console.log(search);

    //https://api.themoviedb.org/3/movie/11?api_key=ce7b55c66bc8d687c1350826fb6ab64b
}


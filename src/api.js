export async function searchForMovie(movieName) {
    console.log('AṔI CALL HERE');

    const apiKey = 'ce7b55c66bc8d687c1350826fb6ab64b'
    const search = await fetch(`https://api.themoviedb.org/3/movie/11?api_key=${apiKey}`, {mode: 'cors'});

    try { //if everything goes ok, it'll be executed here

    } catch (error) { //if something goes wrong, it'll run this instead
        console.error(error);
        return;
    }


    console.log(search);

    //https://api.themoviedb.org/3/movie/11?api_key=ce7b55c66bc8d687c1350826fb6ab64b
}


import { searchMovieListener } from "./eventListeners.js";

function initApp() {
    searchMovieListener();
}

document.addEventListener('DOMContentLoaded', initApp); //Init app will only initialize once the DOM contents are loaded
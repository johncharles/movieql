import fetch from "node-fetch";

const API_URL = "https://yts.am/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
    let REQUEST_URL = API_URL;
    if (limit > 0) {
        REQUEST_URL += `limit=${limit}`;
    }

    fetch(`${API_URL}`)
        .then(res => res.json())
        .then(json => json.data.movies);
}
    

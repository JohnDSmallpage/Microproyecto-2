import axios from 'axios';


export async function getMoviesList(page){
    return axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=3c1505e6ec0c61a8a4d2da1df8c547ed&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`)
}
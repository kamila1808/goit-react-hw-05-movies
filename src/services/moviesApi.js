import axios from "axios";

const KEY = 'a97041c864f8f3eafd5ecc2c5648e42c';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies () {
  const response = await axios('trending/movie/day',{
      params:
      {
         api_key: KEY,
      }    
  })
  return response.data.results;
}


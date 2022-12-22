import axios from 'axios';

const KEY = 'a97041c864f8f3eafd5ecc2c5648e42c';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function fetchTrendingMovies() {
  const response = await axios('trending/movie/day', {
    params: {
      api_key: KEY,
    },
  });
  return response.data.results;
}

export async function fetchMoviesById(movie_id) {
  const response = await axios(`/movie/${movie_id}`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data;
}

export async function fetchMoviesByName(query) {
  const response = await axios('search/movie', {
    params: {
      api_key: KEY,
      query: `${query}`,
      page: 1,
    },
  });
  return response.data.results;
}

export async function fetchMoviesByCast(movie_id) {
  const response = await axios(`/movie/${movie_id}/credits`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data.cast;
}

export async function fetchMoviesByReviews(movie_id) {
  const response = await axios(`/movie/${movie_id}/reviews`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data.results;
}
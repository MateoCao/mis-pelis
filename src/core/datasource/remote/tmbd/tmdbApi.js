import axios from 'axios';
import { misPelisApi, misPelisPaths } from '../mis-pelis/misPelisApi';

export const tmdbApiMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: import.meta.env.VITE_APP_TMBD_API_KEY,
    language: 'es-ES'
  }
});

export const tmdbApiMovie = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: import.meta.env.VITE_APP_TMBD_API_KEY,
    language: 'es-ES'
  }
});

export const tmdbApiSearch = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: import.meta.env.VITE_APP_TMBD_API_KEY,
    language: 'es-ES'
  }
});

tmdbApiSearch.interceptors.response.use(async (response) => {
  const { results } = response.data.movies;
  console.log(results);
  if (results) {
    const filteredMovies = results.filter(movie => movie.poster_path !== null);
    console.log(filteredMovies);
    return filteredMovies;
  } else {
    console.log('ERROR TMDB');
  }
});

tmdbApiMovies.interceptors.response.use(async (response) => {
  const { results } = response.data;
  if (results) {
    const { data } = await misPelisApi.get(misPelisPaths.movies.favouritesGet);
    if (data) {
      results.map((movie) => {
        const favouriteMovie = data.find((favouriteMovie) => movie.id === favouriteMovie.id);
        if (favouriteMovie) {
          movie.mongoId = favouriteMovie._id;
          movie.favourite = true;
        } else {
          movie.favourite = false;
        }
        return movie;
      });
      return { data: { ...response.data } };
    }
  } else {
    console.log('ERROR TMDB');
  }
});

export const tmdbPaths = {
  movies: {
    popular: '/movie/popular',
    top_rated: '/movie/top_rated',
    upcoming: '/movie/upcoming',
    search: '/search/movie?query=',
    id: '/movie/'
  },
  tv: {
    popular: '/tv/popular',
    top_rated: '/tv/top_rated',
    airing_today: '/tv/airing_today'
  },
  images: {
    poster: {
      sizes: {
        w92: '/w92',
        w154: '/w154',
        w185: '/w185',
        w342: '/w342',
        w500: '/w500',
        w780: '/w780',
        original: '/original'
      },
      url: 'https://image.tmdb.org/t/p'
    },
    backdrop: {
      sizes: {
        w300: '/w300',
        w780: '/w780',
        w1280: '/w1280',
        original: '/original'
      },
      url: 'https://image.tmdb.org/t/p'
    }
  }
};

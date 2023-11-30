import axios from 'axios';

export const misPelisApi = axios.create({
  baseURL: import.meta.env.VITE_APP_MOVIES_URL || 'http://localhost:1235',
  withCredentials: true
});

export const misPelisPaths = {
  movies: {
    favouritesGet: '/favourite-movies',
    favouritesAdd: '/favourite-movies/add',
    favouritesDelete: '/favourite-movies/remove'
  }
};

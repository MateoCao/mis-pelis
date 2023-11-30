import axios from 'axios';

export const misPelisApi = axios.create({
  baseURL: 'https://precious-red-walrus.cyclic.app',
  withCredentials: true
});

export const misPelisPaths = {
  movies: {
    favouritesGet: '/favourite-movies',
    favouritesAdd: '/favourite-movies/add',
    favouritesDelete: '/favourite-movies/remove'
  }
};

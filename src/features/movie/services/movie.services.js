import { tmdbApiMovie } from '../../../core/datasource/remote/tmbd/tmdbApi';
import { tmdbMovieTvAdapter, tmdbMovieTvTrailerAdapter } from './adapters/tmbd.movie.adapter';
import { misPelisApi, misPelisPaths } from '../../../core/datasource/remote/mis-pelis/misPelisApi';

export const getMovie = async (id) => {
  const { data } = await tmdbApiMovie.get(`/movie/${id}`);
  return tmdbMovieTvAdapter(data);
};

export const getTrailer = async (id) => {
  const { data } = await tmdbApiMovie.get(`/movie/${id}/videos`);
  return tmdbMovieTvTrailerAdapter(data.results);
};

export const addToFavorites = async (movie) => {
  const { status, data } = await misPelisApi.post(misPelisPaths.movies.favouritesAdd, movie);
  return {
    status,
    data
  };
};

export const deleteFromFavourites = async (id) => {
  const { status } = await misPelisApi.delete(`${misPelisPaths.movies.favouritesDelete}/${id}`);
  return { status };
};

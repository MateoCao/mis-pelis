import { tmdbApi } from '../../../../core/datasource/remote/tmbd/tmdbApi';
import { tmdbMovieTvAdapter, tmdbMovieTvTrailerAdapter } from './adapters/tmbd.movie.adapter';

export const getMovie = async (id) => {
  const { data } = await tmdbApi.get(`/movie/${id}`);
  console.log(data);
  return tmdbMovieTvAdapter(data);
};

export const getTrailer = async (id) => {
  const { data } = await tmdbApi.get(`/movie/${id}/videos`);
  return tmdbMovieTvTrailerAdapter(data.results);
};

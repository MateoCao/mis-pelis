import { tmdbApi, tmdbPaths } from '../../../core/datasource/remote/tmbd/tmdbApi.js';
import { tmdbMoviesTvAdapter } from './adapters/tmdb.adapters.js';

export const getPopularMovies = async () => {
  const { data } = await tmdbApi.get(tmdbPaths.movies.popular);

  return tmdbMoviesTvAdapter(data);
};

export const getTopRatedMovies = async () => {
  const { data } = await tmdbApi.get(tmdbPaths.movies.top_rated);

  return tmdbMoviesTvAdapter(data);
};

export const getUpcomingMovies = async () => {
  const { data } = await tmdbApi.get(tmdbPaths.movies.upcoming);

  return tmdbMoviesTvAdapter(data);
};

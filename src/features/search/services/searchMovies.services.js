import { tmdbApiMovie, tmdbPaths } from '../../../core/datasource/remote/tmbd/tmdbApi';

export const searchMovie = async (query) => {
  const { data } = await tmdbApiMovie.get(tmdbPaths.movies.search + query);
  return data.results;
};

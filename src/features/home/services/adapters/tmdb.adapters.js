import { tmdbPaths } from '../../../../core/datasource/remote/tmbd/tmdbApi';

export const tmdbMoviesTvAdapter = (response) => {
  const { results } = response;

  return results.map((item) => ({
    id: item.id,
    mongoId: item.mongoId,
    title: item.title || item.name,
    poster: `${tmdbPaths.images.poster.url}${tmdbPaths.images.poster.sizes.original}${item.poster_path}`,
    backdrop: `${tmdbPaths.images.backdrop.url}${tmdbPaths.images.backdrop.sizes.original}${item.backdrop_path}`,
    overview: item.overview,
    favourite: item.favourite,
    rating: item.vote_average
  }));
};

import { tmdbPaths } from '../../../../core/datasource/remote/tmbd/tmdbApi';

export const tmdbMovieTvAdapter = (item) => {
  return {
    id: item.id,
    title: item.title || item.name,
    overview: item.overview,
    backdrop: `${tmdbPaths.images.backdrop.url}${tmdbPaths.images.backdrop.sizes.original}${item.backdrop_path}`,
    genres: item.genres
  };
};

export const tmdbMovieTvTrailerAdapter = (results) => {
  return results
    .filter((result) => result.site === 'YouTube' && result.name.includes('Tráiler'))
    .map((result) => result.key || null);
};

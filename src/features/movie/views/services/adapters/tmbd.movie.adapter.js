import { tmdbPaths } from '../../../../../core/datasource/remote/tmbd/tmdbApi';

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
  return results.map((result) => {
    if (result.site === 'YouTube' & result.name.includes('Trailer')) {
      return result.key;
    } else {
      return null;
    }
  });
};

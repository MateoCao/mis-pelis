import { misPelisApi, misPelisPaths } from '../../../core/datasource/remote/mis-pelis/misPelisApi';

export const getFavouritesMovies = async () => {
  const { data } = await misPelisApi.get(misPelisPaths.movies.favouritesGet);
  return data;
};

import { useState } from 'react';
import CarrouselContext from '../context/CarrouselContext';

export const CarrouselContextProvider = ({ children }) => {
  const [movies, setMovies] = useState();
  const handleFavourites = (id) => {
    const newMovies = movies.map((movie) => {
      if (movie.id === id) {
        return {
          ...movie,
          isFavourite: !movie.isFavourite
        };
      }
      return movie;
    });
    setMovies(newMovies);
  };
  return (
    <CarrouselContext.Provider value={{
      setMovies,
      movies,
      handleFavourites
    }}
    >{children}
    </CarrouselContext.Provider>
  );
};

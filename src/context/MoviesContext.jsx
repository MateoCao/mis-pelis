import { createContext, useContext, useState } from 'react';

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [popularMovies, setPopularMovies] = useState();
  const getMovies = async (url) => {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2QwYzEzMzNmZDQ5ODNmZTc4ODQwNzQyZjc5MjQ1MiIsInN1YiI6IjY1MzdiYzYyOTQ2MzE4MDBjNmI1YzI0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ey1XMgkvfgAEE17LI2nGdtr34zIARRlap9nK85BT7NA'
      }
    });
    const fetchedMovies = await res.json();
    console.log(fetchedMovies.results);
    setPopularMovies(fetchedMovies.results);
    return fetchedMovies.results;
  };
  return (
    <MoviesContext.Provider
      value={{
        getMovies,
        popularMovies,
        setPopularMovies
      }}
    >{children}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = () => {
  const moviesContext = useContext(MoviesContext);
  return moviesContext;
};

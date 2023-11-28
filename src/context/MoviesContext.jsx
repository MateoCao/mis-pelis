import { createContext, useContext, useState } from 'react';
export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [myList, setMyList] = useState([]);

  const searchMovie = async (title) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2QwYzEzMzNmZDQ5ODNmZTc4ODQwNzQyZjc5MjQ1MiIsInN1YiI6IjY1MzdiYzYyOTQ2MzE4MDBjNmI1YzI0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ey1XMgkvfgAEE17LI2nGdtr34zIARRlap9nK85BT7NA'
      }

    });
    const movies = await response.json();
    const filteredMovies = movies.results.filter(movie => movie.poster_path !== null);
    return filteredMovies;
  };

  return (
    <MoviesContext.Provider
      value={{
        searchMovie,
        myList,
        setMyList
      }}
    >{children}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = () => {
  const moviesContext = useContext(MoviesContext);
  return moviesContext;
};

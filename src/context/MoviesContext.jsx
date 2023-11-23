import { createContext, useContext, useState } from 'react';
import { getPopularMovies } from '../features/home/services/movies.services';
export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [myList, setMyList] = useState([]);
  const getMovies = async () => {
    const fetchedMovies = await getPopularMovies();
    return fetchedMovies;
  };

  const getMovie = async (id) => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${id}`, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2QwYzEzMzNmZDQ5ODNmZTc4ODQwNzQyZjc5MjQ1MiIsInN1YiI6IjY1MzdiYzYyOTQ2MzE4MDBjNmI1YzI0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ey1XMgkvfgAEE17LI2nGdtr34zIARRlap9nK85BT7NA'
      }
    });
    const fetchedMovie = await res.json();
    return fetchedMovie;
  };

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
    console.log(filteredMovies);
    return filteredMovies;
  };

  return (
    <MoviesContext.Provider
      value={{
        getMovie,
        getMovies,
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

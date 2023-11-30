import { createContext, useContext, useState } from 'react';
export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [myList, setMyList] = useState([]);

  return (
    <MoviesContext.Provider
      value={{
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

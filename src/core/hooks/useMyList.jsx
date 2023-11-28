import { useState } from 'react';
import { useMoviesContext } from '../../context/MoviesContext';

export function useMyList ({ movie }) {
  const { myList, setMyList } = useMoviesContext();
  const addToMyList = () => {
    setMyList([...myList, movie]);
    console.log(movie);
    console.log(myList);
  };
  return [addToMyList];
}

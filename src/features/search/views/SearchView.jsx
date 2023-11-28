import { useState } from 'react';
import { useMoviesContext } from '../../../context/MoviesContext';
import MoviePoster from '../../../components/MoviePoster';

function SearchView () {
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState([]);
  const { searchMovie } = useMoviesContext();
  const handleChange = async (e) => {
    setInputValue(e.target.value);
    const moviesToShow = await searchMovie(inputValue);
    setMovies(moviesToShow);
  };
  return (
    <section className='flex flex-col items-center gap-10'>
      <input
        className='h-5 p-5 mt-16 w-4/5 text-3xl outline-none duration-200 bg-[#19191b] border-b-[#c4c4cd] focus:border-b-[#007bf7] border-b-2 text-gray-200'
        placeholder='Buscar...'
        value={inputValue}
        onChange={(e) => handleChange(e)}
      />
      <ul className='grid grid-cols-searchedMovies gap-5 w-4/5'>
        {movies.map((movie) => (
          <MoviePoster
            key={movie.id}
            id={movie.id}
            posterPath={movie.poster_path}
            title={movie.title}
          />
        ))}
      </ul>

    </section>
  );
}

export default SearchView;

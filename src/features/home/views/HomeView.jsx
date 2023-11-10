import { useEffect } from 'react';
import { useMoviesContext } from '../../../context/MoviesContext';
import { Hero } from '../../../components/Hero';

function HomeView () {
  const { getMovies, setPopularMovies, popularMovies } = useMoviesContext();
  useEffect(() => {
    const fetchMovies = async () => {
      const fetchedMovies = await getMovies('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1');
      setPopularMovies(fetchedMovies);
    };
    fetchMovies();
  }, []);
  if (!popularMovies) return <>Loading...</>;
  return (
    <>
      <Hero />
      <section>
        xd
      </section>
    </>
  );
}

export default HomeView;

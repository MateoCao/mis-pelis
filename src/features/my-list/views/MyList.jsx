import { getFavouritesMovies } from '../services/movies.services';
import useSWR from 'swr';
import MovieCard from '../../../components/MovieCard';

function MyList () {
  const {
    data: myList,
    error: myListError,
    isLoading: myListIsLoading
  } = useSWR('getFavouritesMovies', getFavouritesMovies);
  if (myListIsLoading) return <p>Cargando...</p>;
  return (
    <main className='mt-16'>
      <h2>Mi lista</h2>
      <section className='grid grid-cols-myListMovies gap-5'>
        {myList.map((movie, i) => (
          <MovieCard key={i} id={movie.id} backdrop={movie.backdrop} title={movie.title} overview={movie.overview} />

        ))}
      </section>
    </main>
  );
}

export default MyList;

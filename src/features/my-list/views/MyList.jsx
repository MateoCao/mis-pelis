import { getFavouritesMovies } from '../services/movies.services';
import useSWR from 'swr';
import MovieCard from '../../../core/components/MovieCard.jsx';
import Loading from '../../../core/components/Loading.jsx';

function MyList () {
  const {
    data: myList,
    error: myListError,
    isLoading: myListIsLoading
  } = useSWR('getFavouritesMovies', getFavouritesMovies);
  if (myListIsLoading) return <Loading />;
  if (myList.length === 0) {
    return (
      <main className='mt-16 text-center'>
        <p className='text-3xl text-gray-300'>Todavia no has agregado ninguna pelicula</p>
      </main>
    );
  }
  return (
    <main className='mt-16'>
      <h2>Mi lista</h2>
      <section className='grid grid-cols-myListMovies gap-5 p-5'>
        {myList.map((movie, i) => (
          <MovieCard key={i} id={movie.id} backdrop={movie.backdrop} title={movie.title} overview={movie.overview} />

        ))}
      </section>
    </main>
  );
}

export default MyList;

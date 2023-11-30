import { getFavouritesMovies } from '../services/movies.services';
import useSWR from 'swr';
import MovieCard from '../../../core/components/MovieCard.jsx';
import Loading from '../../../core/components/Loading.jsx';
import { useMoviesContext } from '../context/MoviesContext.jsx';
import { useEffect } from 'react';

function MyList () {
  const { myList: myListContext, setMyList } = useMoviesContext();

  const {
    data: myList,
    error: myListError,
    isLoading: myListIsLoading
  } = useSWR('getFavouritesMovies', getFavouritesMovies);

  useEffect(() => {
    setMyList(myList);
  }, [myList]);

  if (myListIsLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (!myListContext) {
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
        {myListContext.map((movie, i) => (
          <MovieCard key={i} id={movie.id} mongoId={movie._id} backdrop={movie.backdrop} title={movie.title} overview={movie.overview} />

        ))}
      </section>
    </main>
  );
}

export default MyList;

import { useParams } from 'react-router-dom';
import MovieHero from '../../../components/MovieHero';
import TrailerPlayer from '../../../components/TrailerPlayer';
import MovieInfo from '../../../components/MovieInfo';
import Loading from '../../../components/Loading';
import { getMovie } from '../services/movie.services';
import useSWR from 'swr';

function MovieView () {
  const params = useParams();

  const { movieId } = params;

  const {
    data: movie,
    error: movieError,
    isLoading: movieIsLoading
  } = useSWR('getMovie', () => getMovie(movieId));
  if (movieIsLoading) return <Loading />;
  return (
    <main>
      <MovieHero movieUrl={movie.backdrop} />
      <section className='flex justify-center gap-10 mt-5 text-gray-200 h-[50vh]'>
        <TrailerPlayer id={movieId} />
        <MovieInfo info={{ title: movie.title, overview: movie.overview, genres: movie.genres }} />
      </section>
    </main>
  );
}

export default MovieView;

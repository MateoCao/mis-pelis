import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMoviesContext } from '../../../context/MoviesContext';
import MovieHero from '../../../components/MovieHero';
import TrailerPlayer from '../../../components/TrailerPlayer';
import MovieInfo from '../../../components/MovieInfo';
import Loading from '../../../components/Loading';

function MovieView () {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState();
  const params = useParams();

  const { getMovie } = useMoviesContext();
  const { movieId } = params;

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const selectedMovie = await getMovie(movieId);
        setMovie(selectedMovie);
      } catch (error) {
        console.log('ERROR AL CARGAR LA PELICULA', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovie();
  }, []);
  if (isLoading) return <Loading />;
  return (
    <main>
      <MovieHero movieUrl={movie.backdrop_path} />
      <section className='flex justify-center gap-10 mt-5 text-gray-200 h-[50vh]'>
        <TrailerPlayer id={movieId} />
        <MovieInfo info={{ title: movie.title, overview: movie.overview, genres: movie.genres }} />
      </section>
    </main>
  );
}

export default MovieView;

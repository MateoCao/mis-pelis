import { Hero } from '../components/Hero.jsx';
import CarrouselMovies from '../../../core/components/CarrouselMovies.jsx';
import useSWR from 'swr';
import { getPopularMovies, getUpcomingMovies, getTopRatedMovies } from '../services/movies.services.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

function HomeView () {
  const {
    data: popularMovies,
    error: popularMoviesError,
    isLoading: popularMoviesIsLoading
  } = useSWR('getPopularMovies', getPopularMovies);
  const {
    data: topRatedMovies,
    error: topRatedMoviesError,
    isLoading: topRatedMoviesIsLoading
  } = useSWR('getTopRatedMovies', getTopRatedMovies);
  const {
    data: upcomingMovies,
    error: upcomingMoviesError,
    isLoading: upcomingMoviesIsLoading
  } = useSWR('getUpcomingMovies', getUpcomingMovies);

  if (popularMoviesIsLoading || topRatedMoviesIsLoading || upcomingMoviesIsLoading) {
    return (
      <main className='h-screen w-screen flex items-center justify-center'>
        <FontAwesomeIcon className='animate-spin text-8xl text-blue-700' icon={faSpinner} />
      </main>
    );
  }

  return (
    <main>
      <Hero movies={popularMovies} popularMoviesLoading={popularMoviesIsLoading} />
      <section className='flex flex-col gap-5 justify-around mt-10 ml-3 p-2'>
        <CarrouselMovies carrouselData={{ title: 'Popular series', movies: popularMovies, error: popularMoviesError }} />
        <CarrouselMovies carrouselData={{ title: 'Upcoming movies', movies: topRatedMovies, error: topRatedMoviesError }} />
        <CarrouselMovies carrouselData={{ title: 'New releases', movies: upcomingMovies, error: upcomingMoviesError }} />
      </section>
    </main>
  );
}

export default HomeView;

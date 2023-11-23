import { Hero } from '../../../components/Hero';
import Loading from '../../../components/Loading.jsx';
import CarrouselMovies from '../../../components/CarrouselMovies';
import useSWR from 'swr';
import { getPopularMovies, getUpcomingMovies, getTopRatedMovies } from '../services/movies.services.js';

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

  if (popularMoviesIsLoading || topRatedMoviesIsLoading || upcomingMoviesIsLoading) return <Loading />;

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

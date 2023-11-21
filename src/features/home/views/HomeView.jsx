import { useEffect, useState } from 'react';
import { useMoviesContext } from '../../../context/MoviesContext';
import { Hero } from '../../../components/Hero';
import Loading from '../../../components/Loading.jsx';
import CarrouselMovies from '../../../components/CarrouselMovies';

function HomeView () {
  const [isLoading, setIsLoading] = useState(true);
  const { getMovies, setPopularMovies, setPopularSeries, setUpcomingMovies, setNewReleases, popularSeries, upcomingMovies, newReleases } = useMoviesContext();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        // PASAR STRING COMO PARAMETRO PARA useReducer
        const fetchedPopularMovies = await getMovies('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1');
        setPopularMovies(fetchedPopularMovies);
        const fetchedPopularSeries = await getMovies('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1');
        setPopularSeries(fetchedPopularSeries);
        const fetchedUpcomingMovies = await getMovies('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1');
        setUpcomingMovies(fetchedUpcomingMovies);
        const fetchedNewReleases = await getMovies('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1');
        setNewReleases(fetchedNewReleases);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, []);
  if (isLoading) return <Loading />;
  return (
    <>
      <Hero />
      <section className='flex flex-col gap-5 justify-around mt-10 ml-3'>
        <CarrouselMovies carrouselData={{ title: 'Popular series', movies: popularSeries }} />
        <CarrouselMovies carrouselData={{ title: 'Upcoming movies', movies: upcomingMovies }} />
        <CarrouselMovies carrouselData={{ title: 'New releases', movies: newReleases }} />
      </section>
    </>
  );
}

export default HomeView;

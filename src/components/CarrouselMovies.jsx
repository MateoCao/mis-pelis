import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import '../index.css';

import { Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import MovieBackdrop from './MovieBackdrop';

function CarrouselMovies ({ carrouselData }) {
  const [activeStates, setActiveStates] = useState({});
  const swiperElRef = useRef(null);
  const { title, movies, error } = carrouselData;
  const navigate = useNavigate();
  const handleMouseOver = (movieId) => {
    setActiveStates((prevStates) => ({ ...prevStates, [movieId]: true }));
  };

  const handleMouseLeave = (movieId) => {
    setActiveStates((prevStates) => ({ ...prevStates, [movieId]: false }));
  };
  if (error) return <>Ha ocurrido un error al cargar las peliculas</>;
  return (
    <div className='mt-10'>
      <h3 className='text-white text-4xl mb-6'>{title}</h3>
      <Swiper
        className='flex w-11/12'
        slidesPerView={4}
        spaceBetween={15}
        navigation
        modules={[Navigation]}
        ref={swiperElRef}

      >

        {movies.map((movie) => {
          return (
            <SwiperSlide onMouseOver={() => handleMouseOver(movie.id)} onMouseLeave={() => handleMouseLeave(movie.id)} className='rounded cursor-pointer' key={movie.id}>
              <div
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop})` }}
                className='flex bg-no-repeat bg-cover rounded bg-black h-60'
              >
                {activeStates[movie.id] &&
                  <div onClick={() => navigate(`/movie/${movie.id}`)} className='absolute w-full h-5/6  bg-black/50' />}

                {activeStates[movie.id] && <MovieBackdrop title={movie.title} id={movie.id} mongoId={movie.mongoId} genre={movie.genre} overview={movie.overview} backdrop={movie.backdrop} isFavourite={movie.favourite} />}
              </div>
            </SwiperSlide>
          );
        }
        )}

      </Swiper>
    </div>
  );
}

export default CarrouselMovies;

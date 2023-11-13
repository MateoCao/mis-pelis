import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../index.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

function CarrouselMovies ({ carrouselData }) {
  const [activeStates, setActiveStates] = useState({});
  const swiperElRef = useRef(null);
  const { title, movies } = carrouselData;
  const navigate = useNavigate();
  const handleMouseOver = (movieId) => {
    setActiveStates((prevStates) => ({ ...prevStates, [movieId]: true }));
  };

  const handleMouseLeave = (movieId) => {
    setActiveStates((prevStates) => ({ ...prevStates, [movieId]: false }));
  };
  if (!movies) return <>Loading...</>;
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
            <SwiperSlide onClick={() => navigate(`/movie/${movie.id}`)} onMouseOver={() => handleMouseOver(movie.id)} onMouseLeave={() => handleMouseLeave(movie.id)} className='rounded cursor-pointer' key={movie.id}>
              <div
                style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})` }}
                className='flex bg-no-repeat bg-cover rounded bg-black h-60'
              >
                {activeStates[movie.id] &&
                  <div className='absolute w-full h-full bg-black/50' />}

                {activeStates[movie.id] &&
                  <div className='text-[#fff] w-full p-5 h-full flex flex-col justify-end items-end'>
                    <div className='flex w-full h-full flex-col gap-1 select-none'>
                      <h3 className='font-semibold drop-shadow-lg text-2xl'>{movie.original_title || movie.original_name}</h3>
                      <p className='drop-shadow-xl text-[0.8vw] line-clamp-6'>{movie.overview}</p>
                    </div>
                  </div>}
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

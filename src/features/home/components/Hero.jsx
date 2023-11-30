import { useRef } from 'react';
import { register } from 'swiper/element/bundle';
import { useNavigate } from 'react-router-dom';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

register();

export const Hero = ({ movies, popularMoviesLoading }) => {
  const swiperElRef = useRef(null);
  const navigate = useNavigate();

  if (popularMoviesLoading) {
    return (
      <div className='w-full h-screen flex items-center justify-center'>
        <FontAwesomeIcon className='animate-spin text-6xl text-white' icon={faSpinner} />
      </div>
    );
  }

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view='1'
      navigation='true'
      speed='1800'
      loop='true'
      autoplay='true'
      delay='8000'
      effect='fade'
    >
      {movies?.map((movie) => {
        return (
          <swiper-slide key={movie.id}>
            <div className='absolute w-full h-screen bg-gradient-to-r from-black/25 to-black/0' />
            <div
              style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop})` }}
              className='flex bg-no-repeat bg-cover h-screen transition-opacity from-black/0 to-black/100 duration-1000'
            >
              <div className='text-[#fff] w-2/3 p-5 h-full flex flex-col justify-end ml-8'>
                <div className='flex w-10/12 h-3/5 flex-col gap-5 select-none'>
                  <h3 className=' font-semibold drop-shadow-lg text-6xl'>{movie.title}</h3>
                  <p className='drop-shadow-xl text-[1.1vw] line-clamp-6 w-1/2'>{movie.overview}</p>
                  <button onClick={() => navigate(`/movie/${movie.id}`)} className='bg-blue-700 relative z-50 hover:bg-blue-800 rounded text-white text-lg font-semibold p-2 cursor-pointer duration-200 w-1/6'>Ver más</button>
                </div>
                <div className='w-full' />
              </div>
            </div>
          </swiper-slide>
        );
      }
      )}
    </swiper-container>
  );
};

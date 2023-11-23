import { useRef } from 'react';
import { register } from 'swiper/element/bundle';

register();

export const Hero = ({ movies, popularMoviesLoading }) => {
  const swiperElRef = useRef(null);

  if (popularMoviesLoading) return <>Loading...</>;

  return (
    <swiper-container
      ref={swiperElRef}
      slides-per-view='1'
      navigation='true'
      speed='1800'
      loop='true'
      autoplay='true'
      delay='3000'
      effect='fade'
    >
      {movies.map((movie) => {
        return (
          <swiper-slide key={movie.id}>
            <div className='absolute w-full h-screen bg-gradient-to-r from-black/25 to-black/0' />
            <div
              style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop})` }}
              className='flex bg-no-repeat bg-cover h-screen transition-opacity from-black/0 to-black/100 duration-1000'
            >
              <div className='text-[#fff] w-1/3 p-5 h-full flex flex-col justify-end items-end'>
                <div className='flex w-10/12 h-3/5 flex-col gap-5 select-none'>
                  <h3 className=' font-semibold drop-shadow-lg text-6xl'>{movie.title}</h3>
                  <p className='drop-shadow-xl text-[1.1vw] line-clamp-6'>{movie.overview}</p>
                </div>
              </div>
            </div>
          </swiper-slide>
        );
      }
      )}
    </swiper-container>
  );
};

import { useMoviesContext } from '../context/MoviesContext';
import { useNavigate } from 'react-router-dom';
import { addToFavorites, deleteFromFavourites } from '../features/movie/services/movie.services';
import { useState } from 'react';

function MovieBackdrop ({ id, mongoId, title, overview, backdrop, isFavourite }) {
  const { setMyList, myList } = useMoviesContext();
  const [handleFavourite, setHandleFavourite] = useState(isFavourite);
  const navigate = useNavigate();
  const handleList = async () => {
    if (isFavourite) {
      setHandleFavourite(false);
      await deleteFromFavourites(mongoId);

      const selectedMovie = myList.find((movie) => movie.id === id);
      console.log(selectedMovie);
      const index = myList.indexOf(selectedMovie);
      if (index !== -1) {
        myList.splice(index, 1);
        setMyList([...myList]);
      }
      return;
    }
    try {
      const newMovie = { id, title, overview, backdrop };
      const res = await addToFavorites(newMovie);
      if (res.status === 201) {
        setMyList([...myList, res.data]);
      } else {
        console.log('An error occurred while adding the movie');
      }
    } catch (error) {
      console.error('An error occurred while adding the movie:', error);
    }
  };

  return (
    <div className='h-full'>
      <div onClick={() => navigate(`/movie/${id}`)} className='text-[#fff] w-full h-5/6 p-5  flex flex-col justify-end items-end'>
        <div className='flex w-full h-full flex-col gap-1 select-none'>
          <h3 className='font-semibold drop-shadow-lg text-2xl line-clamp-2'>{title}</h3>
          <p className='drop-shadow-xl text-[0.8vw] line-clamp-3'>{overview}</p>
        </div>
      </div>
      <div className='bg-black/50 h-1/6 flex justify-center items-center'>
        <div className='flex justify-end items-center w-4/5'>
          <div className='bg-[#fff] rounded-full hover:scale-125 duration-100'>
            <button className='text-2xl w-8 h-8 text-gray-800' onClick={handleList}>
              {handleFavourite ? '✓' : '+'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieBackdrop;

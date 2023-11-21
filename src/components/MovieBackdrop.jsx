import { useMoviesContext } from '../context/MoviesContext';
import { useNavigate } from 'react-router-dom';

function MovieBackdrop ({ title, originalName, id, overview, genre }) {
  const { setMyList, myList } = useMoviesContext();
  const navigate = useNavigate();
  const handleList = () => {
    const newMovie = {
      id,
      title,
      overview,
      genre
    };
    console.log(newMovie);
    setMyList([...myList, newMovie]);
    console.log(myList);
  };
  return (
    <div>
      <div onClick={() => navigate(`/movie/${id}`)} className='text-[#fff] w-full p-5 h-5/6  flex flex-col justify-end items-end'>
        <div className='flex w-full h-full flex-col gap-1 select-none'>
          <h3 className='font-semibold drop-shadow-lg text-2xl'>{title || originalName}</h3>
          <p className='drop-shadow-xl text-[0.8vw] line-clamp-4'>{overview}</p>
        </div>
      </div>
      <div className='bg-black/50 h-1/6 flex justify-center items-center'>
        <div className='flex justify-end items-center w-4/5'>
          <div className='bg-[#fff] rounded-full hover:scale-125 duration-100'>
            <button className='text-2xl w-8 h-8 text-gray-800  ' onClick={() => handleList()}>
              +
            </button>

          </div>
        </div>
      </div>
    </div>

  );
}

export default MovieBackdrop;

import { useNavigate } from 'react-router-dom';

function MoviePoster ({ id, posterPath, title }) {
  const navigate = useNavigate();
  return (
    <li onClick={() => navigate(`/movie/${id}`)} className='rounded cursor-pointer opacity-80 hover:opacity-100 hover:scale-105 duration-200 '>
      <div
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${posterPath})` }}
        className='flex bg-no-repeat bg-contain rounded h-72 w-full '
      />
      <p className='text-gray-300'>{title}</p>
    </li>
  );
}

export default MoviePoster;

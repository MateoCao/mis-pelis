import MovieBackdrop from './MovieBackdrop';
import useHover from '../hooks/useHover';
import { useNavigate } from 'react-router-dom';

function MovieCard ({ id, backdrop, title, overview, activeStates }) {
  const navigate = useNavigate();
  const [isHovered, handler] = useHover();
  if (!backdrop) return <>Loading...</>;
  return (
    <div {...handler} className='relative flex flex-col justify-between aspect-video cursor-pointer'>
      <img className='absolute w-full h-full object-cover top-0 left-0 -z-10' alt={title} src={backdrop} />
      {isHovered && <div onClick={() => navigate(`/movie/${id}`)} className='absolute w-full h-5/6  bg-black/50' />}
      {isHovered && <MovieBackdrop title={title} overview={overview} id={id} />}
    </div>
  );
}

export default MovieCard;

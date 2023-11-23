import YouTube from 'react-youtube';
import { getTrailer } from '../features/movie/views/services/movie.services';
import useSWR from 'swr';

function TrailerPlayer ({ id }) {
  const opts = {
    height: '480',
    width: '853'
  };
  const {
    data: trailerId,
    error: trailerError,
    isLoading: trailerIsLoading
  } = useSWR('getTrailer', () => getTrailer(id));

  if (trailerIsLoading) return <h2>Cargando...</h2>;
  return (
    <div className='w-[853px] flex items-center justify-center'>
      {trailerError
        ? <h2 className='text-3xl text-gray-300'>TRAILER NO DISPONIBLE</h2>
        : <YouTube videoId={trailerId} opts={opts} />}
    </div>
  );
}

export default TrailerPlayer;

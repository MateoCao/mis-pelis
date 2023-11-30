import { useMoviesContext } from '../../features/my-list/context/MoviesContext';

function MovieInfo ({ info }) {
  const { myList, setMyList } = useMoviesContext();
  const { title, overview, genres } = info;
  return (
    <div className='w-1/2'>
      <div className='flex gap-3 text-gray-400 text-lg'>
        {genres.map((genre) => (
          <p key={genre.name}>
            {genre.name}
          </p>
        ))}
      </div>
      <div className='flex gap-5 flex-col mt-5'>
        <h2 className='text-4xl'>{title}</h2>
        <p className='text-lg'>{overview}</p>
      </div>
      <button onClick={() => setMyList([...myList, info])}>Add to my list</button>
    </div>
  );
}

export default MovieInfo;

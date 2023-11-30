function MovieInfo ({ info }) {
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
    </div>
  );
}

export default MovieInfo;

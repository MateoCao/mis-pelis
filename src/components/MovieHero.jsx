function MovieHero ({ movieUrl }) {
  return (
    <div className='h-[calc(100vh-30vh)]'>
      <div
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieUrl})` }}
        className='flex bg-no-repeat bg-cover bg-black h-[70vh] '
      />
      <div className='absolute bottom-[275px] w-full h-[40vh] bg-gradient-to-t from-black/95 to-black/0' />
    </div>

  );
}

export default MovieHero;

import { useEffect, useState } from 'react';
import YouTube from 'react-youtube';

function TrailerPlayer ({ id }) {
  const [movieVideoInfo, setMovieInfo] = useState({
    id: ''
  });
  const opts = {
    height: '480',
    width: '853'
  };
  useEffect(() => {
    const fetchVideo = async () => {
      const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos`, {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwN2QwYzEzMzNmZDQ5ODNmZTc4ODQwNzQyZjc5MjQ1MiIsInN1YiI6IjY1MzdiYzYyOTQ2MzE4MDBjNmI1YzI0NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ey1XMgkvfgAEE17LI2nGdtr34zIARRlap9nK85BT7NA'
        }
      });
      const movieVideo = await res.json();
      console.log(movieVideo);
      const { results } = movieVideo;
      console.log(results);
      results.map((result) => {
        if (result.site === 'YouTube' & result.name.includes('Trailer')) {
          setMovieInfo({
            id: result.key
          });
          return result.id;
        } else {
          return null;
        }
      });
    };
    fetchVideo();
  }, []);
  return (
    <div className='w-[853px] flex items-center justify-center'>
      {!movieVideoInfo.id
        ? <h2 className='text-3xl text-gray-300'>TRAILER NO DISPONIBLE</h2>
        : <YouTube videoId={movieVideoInfo.id} opts={opts} />}
    </div>
  );
}

export default TrailerPlayer;

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
      const { results } = movieVideo;
      results.map((result) => {
        console.log(result);
        if (result.site === 'YouTube' & result.name === 'Official Trailer') {
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
    <div>
      <YouTube videoId={movieVideoInfo.id} opts={opts} />
    </div>
  );
}

export default TrailerPlayer;

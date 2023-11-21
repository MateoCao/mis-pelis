import { useMoviesContext } from '../../../context/MoviesContext';

function MyList () {
  const { myList } = useMoviesContext();
  console.log(myList);
  return (
    <main>
      <h2>Mi lista</h2>
      <section>
        {myList.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
          </div>
        ))}
      </section>
    </main>
  );
}

export default MyList;

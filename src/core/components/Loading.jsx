import '../../styles/loader.css';

function Loading () {
  return (
    <section className='flex justify-center items-center h-[calc(100vh-64px)] w-full'>
      <span className='loader' />
    </section>
  );
}

export default Loading;

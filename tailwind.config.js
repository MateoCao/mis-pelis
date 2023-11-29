/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        myListMovies: 'repeat(auto-fit, minmax(250px, 350px));',
        searchedMovies: 'repeat(auto-fit, minmax(150px, 200px));'
      }
    }
  },
  plugins: []
};

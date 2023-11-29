/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        myListMovies: 'repeat(auto-fit, minmax(350px, 500px));',
        searchedMovies: 'repeat(auto-fit, minmax(200px, 1fr));'
      }
    }
  },
  plugins: []
};

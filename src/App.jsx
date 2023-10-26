import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App () {
  return (
    <>
      <h1>REACT</h1>
      <h2>ESTO FALLA</h2>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

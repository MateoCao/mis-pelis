import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App () {
  return (
    <>
      <h1>PAGINA EN CONSTRUCCIÓN</h1>
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

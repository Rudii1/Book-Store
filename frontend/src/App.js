import './App.css';
import { Route,Routes } from 'react-router-dom';
import Signup from './pages/auth/components/signup/Signup';
import Signin from './pages/auth/components/signin/Signin';
import Header from './pages/header/Header';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/register" element={<Signup />} />
      <Route path="/login" element={<Signin />} />
    </Routes>
    </>
  );
}

export default App;

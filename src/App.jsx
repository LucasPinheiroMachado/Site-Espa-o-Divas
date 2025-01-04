import './App.css';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Services from './pages/Services/Services';
import Social from './pages/Social/Social';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <div className="spaceNavBar"></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/social" element={<Social />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

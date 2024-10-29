import './App.css'
import { Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Compare from './components/pages/Compare';
import Home from './components/pages/Home';


function App() {
  return (
    <>
        <Navbar />
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Compare" element={<Compare />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </div>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Works from './pages/Works';

function App() {
  return (
    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/contact" element={<Contact />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/works" element={<Works />} />
    //   </Routes>
    // </BrowserRouter>

    <>
    <Navbar/>
    <Home/>
    <About/>
    <Works/>
    <Contact/>
    </>
  );
}

export default App;
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Cars from './pages/Cars/Cars';
import Contacts from './pages/Contacts/Contacts';
import Blog from './pages/Blog/Blog';
// import CarsParam from './pages/CarsParam/CarsParam';
//import Service from './pages/Service/Service';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footerr';
import Loader from './components/Loader/Loader';
import CarsParam from './pages/CarsParam/CarsParam';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/carsparams/:id" element={<CarsParam />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
        {/* <Route path="/services" element={<CarsParam />} /> */}
        <Route path="/services" element={<Cars/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

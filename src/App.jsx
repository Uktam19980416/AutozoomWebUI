/* eslint-disable no-unused-vars */
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Cars from './pages/Cars/Cars'
import Contacts from './pages/Contacts/Contacts'
import Blog from './pages/Blog/Blog'
import CarsParam from './pages/CarsParam/CarsParam'
import Service from './pages/Service/Service'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footerr'
import { useEffect } from 'react'
import { use } from 'i18next'
import Loader from './components/Loader/Loader'

function App() {
  useEffect(() => {
    setTimeout(() => {
      return <Loader />
    }, 2000)
  }, [])

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<CarsParam/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Cars from './pages/Cars/Cars'
import Contacts from './pages/Contacts/Contacts'
import Blog from './pages/Blog/Blog'
import Service from './pages/Service/Service'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footerr'

function App() {

  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Service />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

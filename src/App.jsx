import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Cars from "./pages/Cars/Cars";
import Contacts from "./pages/Contacts/Contacts";
import Blog from "./pages/Blog/Blog";
// import CarsParam from './pages/CarsParam/CarsParam';
//import Service from './pages/Service/Service';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footerr";
import Loader from "./components/Loader/Loader";
import CarsParam from "./pages/CarsParam/CarsParam";
import Services from "./pages/Service/Service";
import Add from "./components/Add/Add";
import Add2 from "./components/Add2/Add2";
import BlogInfo from "./components/BlogInfo/BlogInfo";
import Faq from './components/Faq/faq';
import Terms from './pages/Terms/terms';

//BlogInfo Images Imported
import blogInfoImg1 from "../src/assets/images/blogImg1.jpg";
import blogInfoImg2 from "../src/assets/images/blogImg2.jpg";
import blogInfoImg3 from "../src/assets/images/blogImg3.jpg";
import CarsAll from "./pages/CarsAll/CarsAll";
import { SearchContextProvider } from "./context/SearchContext";
import { t } from "i18next";

function App() {
  return (
    <SearchContextProvider>
      <AppContent />
    </SearchContextProvider>
  );
}

function AppContent() {
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
        <Route path="/cars/:id" element={<Cars />} />
        {/* <Route path="/cars" element={<Cars />} /> */}
        <Route path="/carsparams/:id" element={<CarsParam />} />
        <Route path="/carsparams/:id" element={<CarsAll/>}/>
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Faq" element={<Faq />} />
        <Route path="/terms_and_conditions" element={<Terms />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/sport_car_rent" element={<Add />} />
        <Route
          path="/services/photoshoot-with-luxury-car-in-dubai"
          element={<Add2 />}
        />
        <Route
          path="/blog/blog_info_1"
          element={
            <BlogInfo
              header={t("blogH1")}
              main_info={t("blogMain1")}
              bHead={t("blogBHead1")}
              src={blogInfoImg1}
              bInfo={t("blogBInfo1")}
            />
          }
        />
        <Route
          path="/blog/blog_info_2"
          element={
            <BlogInfo
              header={t("blogH2")}
              main_info={t("blogMain2")}
              bHead={t("blogBHead2")}
              src={blogInfoImg2}
              bInfo={t("blogBInfo2")}
            />
          }
        />
        <Route
          path="/blog/blog_info_3"
          element={
            <BlogInfo
              header={t("blogH3")}
              main_info={t("blogMain3")}
              bHead={t("blogBHead3")}
              src={blogInfoImg3}
              bInfo={t("blogBInfo3")}
            />
          }
        />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

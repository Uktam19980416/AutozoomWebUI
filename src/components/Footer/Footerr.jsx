import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import './Footer.css';
import Logo from '../../assets/images/logo.svg';

function Footer() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch('https://api.autozoomrental.com/api/categories')
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setCategories(data.data);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer_box">
          <div className="footer_part">
            <Link to="/" className="Link">
              <img width={100} src={Logo} alt="Logo" />
            </Link>
            <h1 className="footer_title">
              LUXURY CAR RENTAL IN DUBAI
            </h1>
            <p className="footer_text1">
              Rent sports and luxury cars directly without intermediaries. Rent a car in Dubai with Auto Zoom Car Rental - safety and driving pleasure
            </p>
          </div>

          <div className="footer_part1">
            <h3 className="footer_cars">CARS</h3>
            {categories.map((category) => (
              <div key={category.id} className="category">
                <p className="text"><Link to={`/category/${category.id}`} className="Link">{category.name_en}</Link></p>
              </div>
            ))}
          </div>

          <div className="footer_part">
            <h3 className="footer_blog"><Link to="/blog" className="Link">BLOG</Link></h3>
            <h3 className="footer_service"><Link to="/services" className="Link">SERVICE</Link></h3>
            <div>
              <h3 className="footer_contact"><Link to="/contacts" className="Link">CONTACTS</Link></h3>
              <p className="footer_text">
                Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates
              </p>
              <p className="footer_text">
                +971 55 8462124
              </p>
              <p className="footer_text">
                Working hours: 24/7
              </p>
            </div>
          </div>

          <div className="footer_part">
            <h3 className="footer_about"><Link to="/about" className="Link">ABOUT US</Link></h3>
            <p className="footer_text2"><Link to="/our-team" className="Link">Our Team</Link></p>
            <p className="footer_text2"><Link to="/Faq" className="Link">FAQ</Link></p>
            <h3 className="footer_follow">Follow Us</h3>
            <div className="follow_icon">
              <Link to="https://www.instagram.com/autozoomrental" target="_blank" className="Link"><FaInstagram size={25} /></Link>
              <Link to="https://www.facebook.com/autozoomrental" target="_blank" className="Link"><FaFacebook size={25} /></Link>
              <Link to="https://www.youtube.com/autozoomrental" target="_blank" className="Link"><FaYoutube size={25} /></Link>
            </div>
          </div>
        </div>

        <div className="footer_bottom">
          <div className="footer_btn">
            <button className="footer_button">
              <a href="tel:+998938386767" className="Link">GET BEST OFFER</a>
            </button>
          </div>

          <div className="footer_line">
            <hr />
            <div className="line_box">
              <p>© 2024 Auto Zoom Car Rental.<br />United Arab Emirates.</p>
              <p><Link to="/terms" className="Link">Terms and Conditions</Link></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

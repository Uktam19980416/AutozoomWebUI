import styles from './Navbar.module.css'
import en from "../../assets/images/en.png"
import ru from "../../assets/images/ru.png"

function Navbar() {
  return (
    <div className="nav">
      <div className="container">
      <div>
        <img width={20} src={en} alt="En" />
        <img width={20} src={ru} alt="Ru" />
      </div>
        <div className="menu">
          <ul>
            <li>
              <a href="/cars">Cars</a>
            </li>
            <li>
              <a>Brand</a>
            </li>
            <li>
              <a href="/service">Service</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contacts">Contacts</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar

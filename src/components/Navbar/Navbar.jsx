import styles from './Navbar.module.css'
import en from '../../assets/images/en.png'
import ru from '../../assets/images/ru.png'
import { CiSearch } from 'react-icons/ci'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="nav">
      <div className={styles.container}>
        <div className={styles.nav__head}>
          <div className={styles.nav__left}>
            <div className={styles.nav__lang}>
              <img
                className={styles.nav__lang__img}
                width={20}
                src={en}
                alt="En"
              />
              <img
                className={styles.nav__lang__img}
                width={20}
                src={ru}
                alt="Ru"
              />
            </div>
            <div className={styles.nav__search}>
              <CiSearch className={styles.nav__search__icon} />
              <input className={styles.nav__search__input} type="text" />
            </div>
            <div>
              <Link to="/">
                <img width={100} src={logo} alt="" />
              </Link>
            </div>
          </div>
          <div className={styles.nav__right}>
            <ul className={styles.nav__right__ul}>
              <li className={styles.nav__right__ul_li}>
                <Link className={styles.nav__right__ul_li_a} to="/cars">
                  Cars
                </Link>
              </li>
              <li className={styles.nav__right__ul_li}>
                <Link className={styles.nav__right__ul_li_a}>Brand</Link>
              </li>
              <li className={styles.nav__right__ul_li}>
                <Link className={styles.nav__right__ul_li_a} to="/service">
                  Service
                </Link>
              </li>
              <li className={styles.nav__right__ul_li}>
                <Link className={styles.nav__right__ul_li_a} to="/about">
                  About Us
                </Link>
              </li>
              <li className={styles.nav__right__ul_li}>
                <Link className={styles.nav__right__ul_li_a} to="/contacts">
                  Contacts
                </Link>
              </li>
              <li className={styles.nav__right__ul_li}>
                <Link className={styles.nav__right__ul_li_a} to="/blog">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

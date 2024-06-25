import styles from './Navbar.module.css'
import en from '../../assets/images/en.png'
import ru from '../../assets/images/ru.png'
import { CiSearch } from 'react-icons/ci'
import { FaBarsStaggered } from 'react-icons/fa6'
import logo from '../../assets/images/logo.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Navbar() {
  const base_URL = 'https://autoapi.dezinfeksiyatashkent.uz/api'
  const base_URL2 =
    'https://autoapi.dezinfeksiyatashkent.uz/api/uploads/images/'
  const [datas, setDatas] = useState([])
  const [isBrandHover, setIsBrandHover] = useState(false)

  const getFetch = async (url) => {
    const response = await fetch(url, {
      method: 'GET',
    })
    return await response.json()
  }

  useEffect(() => {
    getFetch(`${base_URL}/brands`).then((data) => {
      setDatas(data?.data)
      console.log(data?.data)
    })
  }, [])

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
              <input
                className={styles.nav__search__input}
                type="text"
                placeholder="Search..."
              />
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
              <li
                className={styles.nav__right__ul_li}
                onMouseEnter={() => setIsBrandHover(true)}
                onMouseLeave={() => setIsBrandHover(false)}
              >
                <Link className={styles.nav__right__ul_li_a}>Brand</Link>
                {isBrandHover && (
                  <div className={styles.nav__brand_hover}>
                    <div className={styles.nav__brand}>
                      {datas.map((data) => (
                        <Link to={`/brand/${data.id}`} key={data.id}>
                          <div className={styles.nav__brand_inline}>
                            <img
                              className={styles.nav__brand_img}
                              src={`${base_URL2}${data.image_src}`}
                              alt="Brand"
                            />
                            <p className={styles.nav__brand_text}>
                              {data.title}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
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
            <p className={styles.nav__right_number}>+971 (55) 846 21 24</p>
          </div>
        </div>

        <div className={styles.nav__head_mobile}>
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
            <input
              className={styles.nav__search__input}
              type="text"
              placeholder="Search..."
            />
          </div>
          <div>
            <Link to="/">
              <img width={100} src={logo} alt="" />
            </Link>
          </div>
          <div>
            <FaBarsStaggered className={styles.navbar__burger} />
          </div>
        </div>
      </div>

      <div className={styles.navbar__right_bar}>
        <ul className={styles.nav__right__ul_mobile}>
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
  )
}

export default Navbar

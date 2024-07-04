import './Rental.css'
import chevron from '../../assets/images/shevron.svg'
import { Link } from 'react-router-dom'

function Rental() {
  return (
    <div className="container">
      <div className="rental__block">
        <div className="rental__left">
          <img src="https://www.autozoomrental.com/static/media/lambobest.6a1001239e1fdabdd27c.webp" className="rental__left_img" alt="" />
        </div>
        <div className="rental__right">
          <h2 className="rental__right_title">SUPERCAR RENTAL DUBAI</h2>
          <p className="rental__right_text">Hire the latest supercar</p>
          <Link to="/cars" className="link">
            <p className='link__text'>SEE ALL</p>
            <img src={chevron} width={30} height={30} alt="Chevron" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Rental

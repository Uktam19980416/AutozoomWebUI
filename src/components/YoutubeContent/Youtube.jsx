import './Youtube.css'
import {Link} from 'react-router-dom'
import chevron from '../../assets/images/shevron.svg'
const Youtube = () => {
  return (
    <div className="container">
      <div className="youtube__block">
        <div className="youtube__left">
        <iframe className='youtube_left_video' src="https://www.youtube.com/embed/6Bcg46rxqAE?si=fQdBJ4s8XXGNSkzf" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        <div className="youtube__right">
          <h1 className="youtube__right_title">SPORTS CAR RENTAL DUBAI</h1>
          <p className="youtube__right_text">Auto Zoom L L C a Car is a Top Luxury Car Rental Dubai based company, We offer sports car rental, and supercar rental in Dubai. The best luxury car rental process provided by our fleet . We own a diverse range of luxury supercar rental and sports car rental Dubai style , including Rolls Royce, Lamborghini, Maserati, Ferrari, Mercedes Benz, Porsche, and Range Rover, to name a few. Rent a car with the best car rental company in Dubai.</p>
          <Link to="/cars" className="link">
            <p className='link__text'>ALL CARS</p>
            <img src={chevron} width={30} height={30} alt="Chevron" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Youtube
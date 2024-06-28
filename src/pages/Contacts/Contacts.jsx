import './Contacts.css';
import './Contacts_resp.css';

function Contacts() {
  return (
    <div className="Contacts">
        <div className="contacts_head">
            <a href="/" className="contacts_head_link"><span>Luxury Cars for Rent in Dubai</span>  /  <span>Contacts</span></a>
            <h1 className="contacts_header">HAVE ANY QUESTIONS?</h1>
            <div className='contacts_header_text'>
                <div>We would love to help</div>
            <div>Auto Zoom Car Rental Dubai, is the best luxury car rental Dubai based company.</div></div>
        </div>
        <div className="contacts_address">
            <h4 className='contacts_address_header'>Head Office</h4>
            <div className='contacts_address_flexed'>
            <i className="fa-solid fa-location-dot"></i>
            <span className='contacts_address_info'>Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates</span>
            </div>
            <div className='contacts_address_flexed'>
            <i className="fa-solid fa-phone"></i>
            <span className='contacts_address_info'>+971 (55) 846 21 24</span>
            </div>
            <div className='contacts_address_flexed'>
            <i className="fa-solid fa-envelope-open-text"></i>
            <span className='contacts_address_info'>office@autozoomrental.com</span>
            </div>
        </div>
        <hr className='contacts_hr'/>
        <div className='forMap'><a href="https://yandex.uz/maps/11499/dubai/?utm_medium=mapframe&utm_source=maps" style={{color:"#eee", fontSize:"12px", position:"absolute", top:"0px"}}></a><a href="https://yandex.uz/maps/11499/dubai/?ll=55.216868%2C25.043460&utm_medium=mapframe&utm_source=maps&z=16.63" style={{color:"#eee", fontSize:"12px", position:"absolute", top:"14px"}}></a><iframe src="https://yandex.uz/map-widget/v1/?ll=55.216868%2C25.043460&z=16.63"  frameBorder="1" allowfullscreen="true" style={{width:"100%", height:"47vh", borderRadius: "23px"}}></iframe>
        </div>
        </div>
  )
}
export default Contacts

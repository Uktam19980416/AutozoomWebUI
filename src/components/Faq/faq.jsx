import React, { useState } from 'react';
import './faq.css';

function Faq() {
  const [isOpen1, setIsOpen1] = useState(false); 
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false); 
  const [isOpen4, setIsOpen4] = useState(false); 
  const [isOpen5, setIsOpen5] = useState(false); 

  const toggleDropdown1 = () => setIsOpen1(!isOpen1);
  const toggleDropdown2 = () => setIsOpen2(!isOpen2);
  const toggleDropdown3 = () => setIsOpen3(!isOpen3);
  const toggleDropdown4 = () => setIsOpen4(!isOpen4);
  const toggleDropdown5 = () => setIsOpen5(!isOpen5);

  return (
    <div className="faq">
      <div className="container">
        <h3 className="faq_h3">LUXURY CAR RENTAL IN DUBAI / FAQ</h3>
        <h1 className="faq_title">FREQUENTLY ASKED QUESTIONS</h1>

        <div className="dropdown" onClick={toggleDropdown1}>
          <div className={`arrow ${isOpen1 ? 'open' : ''}`}>➤</div>
          <h2 className="heading">What is the minimum age requirement to rent a car in Dubai?</h2>
        </div>
        {isOpen1 ? (
          <div className="content">
            <p>Drivers under 25 must have a license for a minimum of three years. The same applies to the person(s) whose name(s) is/are mentioned as additional driver.</p>
            <hr />
          </div>
        ) : (
          <hr className="faq_hr" />
        )}

        <div className="dropdown" onClick={toggleDropdown2}>
          <div className={`arrow ${isOpen2 ? 'open' : ''}`}>➤</div>
          <h2 className="heading">What do you need for a luxury car rental in Dubai?</h2>
        </div>
        {isOpen2 ? (
          <div className="content">
            <p>Drivers shall be required to have a valid driver’s license and Passport copy.</p>
            <hr />
          </div>
        ) : (
          <hr className="faq_hr" />
        )}

        <div className="dropdown" onClick={toggleDropdown3}>
          <div className={`arrow ${isOpen3 ? 'open' : ''}`}>➤</div>
          <h2 className="heading">How much is the Insurance limit on luxury car rental Dubai?</h2>
        </div>
        {isOpen3 ? (
          <div className="content">
            <p>Includes an overall Motor Vehicle Insurance. 3000-5000 AED for Excess Luxury Cars. 7000-10000 AED for Sports Cars.</p>
            <hr />
          </div>
        ) : (
          <hr className="faq_hr" />
        )}

        <div className="dropdown" onClick={toggleDropdown4}>
          <div className={`arrow ${isOpen4 ? 'open' : ''}`}>➤</div>
          <h2 className="heading">What are the driving licenses that can be used in Arab countries?</h2>
        </div>
        {isOpen4 ? (
          <div className="content">
            <p>Local driving license for UAE citizens. International driving licenses issued by the following countries: 1. Kingdom of Saudi Arabia, 2. Egypt, 3. Bahrain, 4. Jordan, 5. Kuwait, 6. Tunisia, 7. Sultanate of Oman, 8. Algeria, 9. Qatar, 10. Morocco, 11. Sudan, 12. Somalia, 13. Palestine, 14. Lebanon, 15. Libya, 16. Syria, 17. Yemen, 18. Iraq, 19. Djibouti, 20. Comoros, 21. Mauritania.</p>
            <hr />
          </div>
        ) : (
          <hr className="faq_hr" />
        )}

        <div className="dropdown" onClick={toggleDropdown5}>
          <div className={`arrow ${isOpen5 ? 'open' : ''}`}>➤</div>
          <h2 className="heading">Can anyone else drive the car I rent?</h2>
        </div>
        {isOpen5 ? (
          <div className="content">
            <p>The contract prescribes two drivers, but at the time of filling out the contract, you must provide a driver’s license and passport.</p>
            <hr />
          </div>
        ) : (
          <hr className="faq_hr" />
        )}
      </div>
    </div>
  );
}

export default Faq;

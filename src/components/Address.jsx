import React from "react";

const Address = () => {
  return (
    <ul>
      <li>
        <img className="svg" src="img/svg/phone.svg" alt="" />
        <a href="Tel: 916387443107">+91 687 443 107</a>
      </li>
      {/* End li */}

      <li>
  <img className="svg" src="img/svg/mail.svg" alt="Email Icon" />
  <span>
    <a href="mailto:team@vyomadigitalsolutions.com">team@vyomadigitalsolutions.com</a>
  </span>
</li>

      {/* End li */}

      <li>
        <img className="svg" src="img/svg/map.svg" alt="" />
        <span>
        Sector 9, Noida, Uttar Pradesh, India, 201301
          <br /> 
        </span>
      </li>
    </ul>
  );
};

export default Address;

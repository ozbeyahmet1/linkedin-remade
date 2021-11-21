import React,{ useEffect, useState } from "react";

import "./promoCard.css";

function PromoCard() {
  
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 380) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return <div className={` promoCard ${show && "promoCard--sticky"}`}>
    <img className='promoCard__image' src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" alt=""/>
  </div>;
}

export default PromoCard;

import React, { useEffect, useState } from "react";
import AdvicesCard from "../cards/advicesCard";
import BottomNavbar from "../cards/bottomNavbar";
import GroupCard from "../cards/groupCard";
import PagesCard from "../cards/PagesCard";
import ProfileCard from "../cards/profileCard";
import PromoCard from "../cards/promoCard";
import ShareCard from "../cards/shareCard";
import "./body.css";
function Body() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 360) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`body container ${show && "body__margin--sm"}`}>
      <div className="body__column">
        <ProfileCard />
        <PagesCard />
        <GroupCard />
      </div>
      <div className="body__column">
        <ShareCard />
      </div>
      <div className="body__column">
        <AdvicesCard />
        <PromoCard />
      </div>
    </div>
  );
}

export default Body;

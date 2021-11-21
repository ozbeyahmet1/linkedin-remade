import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectTheme } from '../../features/themeSlice';
import SimpleAccordion from '../tools/Accordion';
import './groupCard.css'

function GroupCard() {
    const [show, handleShow] = useState(false);
    const theme = useSelector(selectTheme);

    const transitionNavBar = () => {
      if (window.scrollY > 560) {
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
        <div className={`groupCard ${show && "groupCard--sticky"} ${theme==="light" && "--white"}  ${(theme==="dark") && "--dark"}`}>
            < SimpleAccordion/>
        </div>
    )
}

export default GroupCard

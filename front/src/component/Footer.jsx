import React from 'react'
import "./Footer.css"

const Footer = () => {

    const moveTop = () =>{
        var rootElement=document.documentElement;
        rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    }
  return (
    <div className='footer-container'>
        <div className="footer-body">
            <div className="footer-title">
                VoneShop
            </div>
            <div className="footer-info">
                All rights reserved ©
            </div>
            <div className="move-top">
            <i className="fas fa-arrow-up" onClick={moveTop}></i>
            </div>
        </div>
    </div>
  )
}

export default Footer
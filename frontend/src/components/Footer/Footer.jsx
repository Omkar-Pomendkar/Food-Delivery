import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos magni voluptate aspernatur debitis quam, molestiae veritatis eaque tempore reiciendis eum?</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />

                </div>
            </div>
            <div className='footer-content-centre'>
                <h2>COMPANY</h2>
                <ul>
                    <li>HOME</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className='footer-content-right'>
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 85748565</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright@2024 - All Rights Reserved
        </p>
        
      </div>
    </div>
  )
}

export default Footer

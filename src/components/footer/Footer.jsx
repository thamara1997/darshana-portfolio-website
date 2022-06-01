import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {ImTwitter} from 'react-icons/im'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>DMAX</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>

      <div className="footer__socials">
      
        <a href="https://www.facebook.com/darshana.thamara/" target='_blank'><FaFacebookF/></a>
        <a href="https://www.instagram.com/darshanathamara97/"target='_blank'><FiInstagram/></a>
        <a href="https://twitter.com/Darshana1997"target='_blank'><ImTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Darshana Thamara. All right reserved </small>
      </div>
    </footer>
  )
}

export default Footer
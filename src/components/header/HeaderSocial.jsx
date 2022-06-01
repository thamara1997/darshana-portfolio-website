import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaFacebookSquare} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/darshana-thamara-ba123023b/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/thamara1997" target="_blank"><FaGithub/></a>
        <a href="https://www.facebook.com/darshana.thamara/" target="_blank"><FaFacebookSquare/></a>
    </div>
  )
}

export default HeaderSocial
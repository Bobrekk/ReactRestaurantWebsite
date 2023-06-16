import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <p> &copy; 2022 burger26.com</p>
            <FaInstagram/>
            <FaTwitter/>
            <FaFacebook/>
        </div>
    </div>
  )
}

export default Footer

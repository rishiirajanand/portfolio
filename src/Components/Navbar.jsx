import React from 'react'
import logo from '../assets/kevinRushLogo.png';

import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';


function Navbar() {
  return (
    <nav className='py-6 mb-20 flex items-center justify-between'>
        <div className='flex shrink-0 item-center'>
            <img className='mx-2 w-10' src={logo} alt="logo" />
        </div>
        <div className='flex item-center gap-4 text-2xl'>
            < FaGithub />
            < FaLinkedin />
            < FaSquareXTwitter />
            < FaInstagram />
        </div>
    </nav>
  )
}

export default Navbar
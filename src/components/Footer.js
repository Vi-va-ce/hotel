import React from 'react';

import LogoWhite from '../assets/img/azeman logo.png'

const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className='container mx-auto text-white flex justify-between'>
        {/* logo */}
        <a href='/'>
          <img src={LogoWhite} alt='' />
        </a>

        Copyright &copy; 2024. All rights reserved.
      </div>
    </footer>)
};

export default Footer;

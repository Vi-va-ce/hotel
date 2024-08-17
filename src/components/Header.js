import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import LogoWhite from '../assets/img/azeman logo.png';
import LogoDark from '../assets/img/azeman logo dark.png';
import { Link } from 'react-router-dom';
import '../Header.css'; // Ensure you have this CSS file for custom styles

const Header = () => {
  const [header, setHeader] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHeader(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`${header ? 'bg-white py-6 shadow-lg' : 'bg-transparent py-8'} fixed z-50 w-full transition-all duration-300`}>
      <div className="container mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between lg:gap-y-0">
        {/* logo */}
        <a href="/">
          {header ? <img className="w-[160px]" src={LogoDark} alt="Logo" /> : <img src={LogoWhite} alt="Logo" />}
        </a>
        {/* hamburger icon */}
        <div className="flex items-center lg:hidden">
          <div className="menu-icon" onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        {/* desktop nav */}
        <nav className={`${header ? 'text-primary' : 'text-white'} hidden lg:flex gap-x-4 font-tertiary tracking-[3px] text-[15px] uppercase lg:gap-x-8`}>
          <a href="/" className="hover:text-accent transition">
            Home
          </a>
          <a href="/rooms/1" className="hover:text-accent transition">
            Rooms
          </a>

          <a href="/rooms/1" className="hover:text-accent transition">
            Restaurant
          </a>
          <a href="/rooms/1" className="hover:text-accent transition">
            Spa & Gym
          </a>
          <a href="/rooms/1" className="hover:text-accent transition">
            Meetings and Events
          </a>
          <a href="/rooms/1" className="hover:text-accent transition">
            Contact
          </a>
        </nav>
      </div>
      {/* sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <nav className="flex flex-col gap-y-4 font-tertiary tracking-[3px] text-[15px] uppercase">
          <a href="" className="hover:text-accent transition">
            Home
          </a>
          <a href="" className="hover:text-accent transition">
            Rooms
          </a>
          <a href="" className="hover:text-accent transition">
            Restaurant
          </a>
          <a href="" className="hover:text-accent transition">
            Spa & Gym
          </a>
          <a href="" className="hover:text-accent transition">
            Meetings and Events
          </a>
          <a href="" className="hover:text-accent transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

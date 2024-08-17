import React from 'react';
import { FaParking, FaUtensils, FaBaby, FaTshirt, FaClock, FaCocktail } from 'react-icons/fa';
import '../ServicesSection.css'; // Ensure you have this CSS file for custom styles

const services = [
  { name: 'Travel Plan', icon: <FaParking />, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
  { name: 'Catering Service', icon: <FaUtensils />, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
  { name: 'Babysitting', icon: <FaBaby />, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
  { name: 'Laundry', icon: <FaTshirt />, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
  { name: 'Hire Driver', icon: <FaClock />, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' },
  { name: 'Bar & Drink', icon: <FaCocktail />, description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.' }
];

const ServicesSection = () => {
  return (
    <section className="services-section spad">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="section-title">
              <span>What We Do</span>
              <h2>Discover Our Services</h2>
            </div>
          </div>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-item" key={index}>
              <i className="service-icon">{service.icon}</i>
              <h4>{service.name}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

import React from 'react';
// Import Swiper React components
import { SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';

import ImgAbout from '../assets/img/AboutUs/about.jpg';
import ImgAbout2 from '../assets/img/AboutUs/about2.jpg';

const AboutUs = () => {
  return (
    <SwiperSlide>
      <div className='container mx-auto mt-20'>
        <div className='flex flex-col lg:flex-row h-full py-24'>

          {/* Right */}
          <div className='w-full h-full lg:w-[50%] flex flex-col'>
            <img src={ImgAbout} alt='' className='w-full h-1/2 object-cover mb-4' />

          </div>
          {/* Left */}
          <div className='w-full h-full lg:w-[50%] px-6'>
            <h2 className='h2'>About Us</h2>
            <p>
              Welcome to Azzeman Hotel, where luxury meets sophistication in the heart of the city. Our five-star hotel offers opulent rooms and suites with breathtaking views, world-class dining, a serene spa, and a rooftop pool. Whether for business or leisure, we provide exceptional service and state-of-the-art amenities to ensure an unforgettable stay. Experience the pinnacle of elegance and comfort at Azzeman Hotel.
            </p>
            <div className='mt-12'>
              <h3 className='h3 mb-3'>Room Facilities</h3>
              <p className='mb-12'>
                Experience unparalleled comfort in our Luxury Room, designed for discerning travelers. This elegantly appointed space features a king-sized bed, a modern bathroom with premium toiletries, and state-of-the-art amenities including a flat-screen TV and high-speed Wi-Fi. Enjoy stunning city views and personalized service that ensures a truly luxurious stay in Addis Ababa.
              </p>
              {/* Hotel rules */}

            </div>
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default AboutUs;

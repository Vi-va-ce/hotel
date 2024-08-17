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

          {/* Left */}
          <div className='w-full h-full lg:w-[50%] px-6'>

            <div className='mt-12'>

              {/* Hotel rules */}
              <h3 className='h3 mb-3'>Hotel rules</h3>
              <p className='mb-6'>
                Experience unparalleled comfort in our Luxury Room, designed for discerning travelers. This elegantly appointed space features a king-sized bed, a modern bathroom with premium toiletries, and state-of-the-art amenities including a flat-screen TV and high-speed Wi-Fi. Enjoy stunning city views and personalized service that ensures a truly luxurious stay in Addis Ababa.
              </p>
            </div>
          </div>
          {/* Right */}
          <div className='w-full h-full lg:w-[50%] flex flex-col'>

            <img src={ImgAbout2} alt='' className='w-full h-1/2 object-cover' />
          </div>
        </div>
      </div>
    </SwiperSlide>
  );
};

export default AboutUs;

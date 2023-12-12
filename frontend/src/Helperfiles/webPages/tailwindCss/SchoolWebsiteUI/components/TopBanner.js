import React from 'react'
import AbstractDesign from "../assests/AbstractDesign.svg";
import AbstractCircle from "../assests/AbstractCircle.svg";
import arrow from "../assests/arrow.svg";

const TopBanner = () => {
  return (
    <div className='relative bg-[#FFDECC] m-6 lg:h-auto h-14 flex lg:justify-between justify-center border-2  border-black rounded-xl lg:overflow-hidden select-none pointer-events-none'>
      <img src={AbstractDesign} className='lg:block hidden'/>
      <img src={AbstractCircle} className=' absolute lg:left-[30%] left-[2%] lg:bottom-6 bottom-8 lg:h-12 h-5' />
      <div className='flex items-center  gap-2'><h1 className='lg:font-sm font-["1px"]  text-[#262626] non-italic font-normal '>Admission is Open, Grab your seat now </h1>
      <button><img src={arrow} className='' /></button>
      </div> 
      <img src={AbstractCircle} className='absolute lg:right-[30%] right-[2%] top-8 lg:h-12 h-5 scale-y-[-1]' />
      <img src={AbstractDesign} className='lg:block hidden scale-x-[-1] right-0' />
    </div>
  );
};

export default TopBanner
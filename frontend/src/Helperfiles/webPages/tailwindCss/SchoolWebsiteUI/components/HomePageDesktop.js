import React from "react";
import Img1 from "../assests/Img1.png";
import HomePageShadowBox from "./Layouts/HomePageShadowBox";

const HomePageDesktop = () => {
  return (
    <div className="flex lg:flex-row flex-col p-8 h-[75%] ">
      <div className="lg:w-1/2 w-full  flex items-center justify-center">
        <img
          src={Img1}
          className="lg:h-[550px] h-[350px]  select-none pointer-events-none"
        />
      </div>
      <div className="lg:w-1/2 w-full  pt-[5%] pl-[1%] flex flex-col gap-y-5 lg:items-start items-center">
        <div className="flex lg:items-start items-center">
          <h1 className="lg:text-xl text-xl  text-[#262626] non-italic font-outfit font-light leading-[150%] lg:border-none border-b-2 border-black">
            Welcome to Little Learners Academy
          </h1>
        </div>
        <div className="lg:mr-10 ">
          <h1 className="lg:text-5xl text-5xl  text-[#262626] non-italic font-outfit font-bolder">
            Where Young Minds Blossom and
            <h1 className="text-[#FF8D4D]">Dreams Take Flight. </h1>
          </h1>
        </div>
        <div>
          <h1 className='lg:mr-[30%] lg:font-xl font-["1px"] text-[#262626] non-italic font-outfit font-normal tracking-wide leading-[150%]'>
            Our kinder garden school provides a nurturing and stimulating
            environment, fostering a love for learning that lasts a lifetime.
            Join us as we embark on an exciting educational journey together!
          </h1>
        </div>
        <HomePageShadowBox/>
      </div>
    </div>
  );
};

export default HomePageDesktop;

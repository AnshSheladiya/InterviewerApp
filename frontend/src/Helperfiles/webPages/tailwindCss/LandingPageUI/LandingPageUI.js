import React, { useState, useEffect } from "react";
import landingpageeffect from "../LandingPageUI/Vector28.png";
import stone from "../LandingPageUI/stone.png";
import stoneBig from "../LandingPageUI/stoneBig.png";
import Rectangle18 from "../LandingPageUI/Rectangle18.png";
import chair from "../LandingPageUI/chair.png";
import arrow from "../LandingPageUI/arrow.svg";

const LandingPageUI = () => {
  return (
    <div className="bg-[#1A1A1A] h-screen relative">
      {/* Your content goes here */}
      <div className="lg:z-10 z-20 flex lg:flex-row flex-col justify-between max-lg:justify-normal text-[#fff] ">
        <h1 className="lg:my-10 my-5 ml-10 leading-[140%] text-3xl tracking-widest antialiased not-italic font-bold">
          TITLE.
        </h1>
        <button className="lg:my-10 my-0 mx-10  lg:mr-10 flex flex-row gap-1 bg-[#C1D743] justify-center items-center rounded-full w-auto h-full p-3 text-[#000] text-sm tracking-wide antialiased not-italic font-bold capitalize leading-tight">
          Get in touch
          <img src={arrow} style={{ width: 10, hieght: 10, color: "#000" }} />
        </button>
      </div>

      <div className="flex items-center flex-col justify-center lg:mt-20 mt-10">
        <div className="z-20">
          <h1 className="my-1 lg:ml-10 ml-2 tracking-tighter text-[#FFF] uppercase lg:text-9xl text-6xl font-wildworld antialiased not-italic font-extrabold">
            Turn up
          </h1>
        </div>
        <div className="z-20 flex lg:flex-row flex-col  items-center gap-5">
          <h1 className="my-1 tracking-tighter text-[#FFF] uppercase lg:text-9xl text-6xl  font-wildworld antialiased not-italic font-extrabold">
            the
          </h1>
          <div className="relative lg:my-0 my-1">
            {/* Table Image */}
            <img
              src={Rectangle18}
              className="lg:h-[100px] h-[60px] z-0"
              alt="Table"
            />
            {/* Chair Image */}
            <img
              id="chair"
              src={chair}
              className="lg:h-[180px] h-[120px] z-10 absolute -bottom-2 lg:left-10 left-8"
              alt="Chair"
              style={{ transform: `rotate(325deg)` }}
            />
          </div>
          <h1 className="my-1 tracking-tighter text-[#FFF] uppercase lg:text-9xl text-6xl font-wildworld antialiased not-italic font-extrabold">
            Model
          </h1>
        </div>
        <div className="w-1/3 z-20 lg:block hidden">
          <h4 className="my-5 ml-10 text-[#FFF] text-xl tracking-widest antialiased not-italic ">
            Lorem ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet
            consectetur.
          </h4>
        </div>
        <div className="z-20 lg:block hidden">
          <button className="my-10 mr-10  flex flex-row gap-1 bg-[#C1D743] justify-center items-center rounded-full w-[90%] h-full p-3 text-[#000] text-sm tracking-wide antialiased not-italic font-bold capitalize leading-tight">
            Get in touch
            <img src={arrow} style={{ width: 10, hieght: 10, color: "#000" }} />
          </button>
        </div>
      </div>
      {/* Background image */}
      <img
        src={landingpageeffect}
        className="absolute top-0 left-0 w-full h-full z-10 opacity-60"
        alt="Background"
      />
      <img
        src={stoneBig}
        className="fixed lg:-right-[100px] -right-[50px] lg:top-10 top-30  w-fit lg:h-[750px] h-[300px] -rotate-45 z-0"
        style={{
          color: "#000",
          background:
            "background: url(<path-to-image>), lightgray 50% / cover no-repeat",
        }}
      />
      <img
        src={stone}
        className="fixed bottom-0 lg:h-[400px] h-[300px]"
        style={{ color: "#000" }}
      />
    </div>
  );
};

export default LandingPageUI;

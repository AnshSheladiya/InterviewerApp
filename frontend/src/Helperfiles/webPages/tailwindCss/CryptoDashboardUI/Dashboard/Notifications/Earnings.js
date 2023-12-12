import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";
import prize from "../../../../../../assets/prize.svg";

const Earnings = () => {
  return (
    <div
      className="lg:block hidden  fixed bottom-10 left-5 w-[20%] h-['100%']   text-[#fff] rounded-lg shadow-lg z-20"
      style={{
        background:
          "linear-gradient(241deg, rgba(41, 39, 85, 0.35) 4.4%, rgba(41, 39, 84, 0.78) 61.77%, rgba(27, 24, 66, 0.35) 119.94%)",
        boxShadow: "0px 51px 69px 0px rgba(23, 18, 43, 0.59)",
        backdropFilter: "blur(11.5px)",
      }}>
      <div className="flex flex-col ">
        <div className="flex justify-center ">
          <img src={prize} style={{ height: "100px", width: "100px" }} />
        </div>
        <div className="flex justify-center">
          <h4 className="text-[#8786AB] mt-[1%] ml-2 text-xs leading-normal relative top-1 not-italic tracking-wide font-HelveticaNeue antialiased">
            You just earn
          </h4>
          <h4 className="text-[#50E3C2] mt-[1%] ml-2 text-xs leading-normal relative top-1 not-italic tracking-wide font-HelveticaNeue antialiased">
            0.02343,00
          </h4>
          <h4 className="text-[#8786AB] mt-[1%] ml-2 text-xs leading-normal relative top-1 not-italic tracking-wide font-HelveticaNeue antialiased">
            BTC
          </h4>
        </div>
        <div className="flex justify-center">
          <button>
            <h4 className="text-[#70B2FF] mt-[1%] ml-2 text-xs leading-normal relative top-1 not-italic tracking-wide font-HelveticaNeue antialiased">
              See history
            </h4>
          </button>
        </div>
        <div className="flex justify-center mt-4">
          <button className="p-2 rounded-lg m-3 bg-[#343261] text-[#9796CF] text-xs leading-normal hover:bg-[#70B2FF] hover:text-[#000000] ">
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
};

export default Earnings;

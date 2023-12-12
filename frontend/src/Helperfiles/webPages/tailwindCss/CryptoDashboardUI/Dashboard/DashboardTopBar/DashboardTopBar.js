import React from "react";
import DashboardTitle from "./DashboardTitle";
import DashboardRightContent from "./DashboardRightContent";

const DashboardTopBar = () => {
  return (
    <div className="lg:ml-[16.66%] ml-0  flex lg:flex-row flex-col  justify-between max-lg:justify-normal	  bg-[#201D47] text-[#fff]">
     <DashboardTitle />
     <DashboardRightContent/>
    </div>
  );
};

export default DashboardTopBar;

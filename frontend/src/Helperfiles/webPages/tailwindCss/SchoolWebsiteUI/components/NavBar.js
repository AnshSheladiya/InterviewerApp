import React, { useState } from "react";
import logo from "../assests/logo.svg";
import collapsBtn from "../assests/collapsBtn.svg";

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="relative bg-white mx-6 mt-0 lg:h-auto h-14 flex justify-between lg:border-2 border-2 border-black rounded-xl overflow-hidden">
      <div className="bg-[#FF8D4D] p-4 flex items-center gap-1 border-r-2 border-black">
        <img src={logo} className="" />
        <h1 className='lg:font-sm font-["1px"] text-[#262626] non-italic font-normal '>
          Little Learners
        </h1>
      </div>
      <div
        className={`lg:flex lg:flex-row-reverse ${
          collapsed ? "hidden" : "flex flex-col items-center"
        } lg:items-stretch`}>
        <button className="nav-button bg-[#FFAE80] hover:bg-[#FF9640] p-2 lg:p-4 lg:h-full lg:border-l-2 border-black mb-2 lg:mb-0">
          Contact
        </button>
        <button className="nav-button bg-white hover:bg-[#FFEFE5] p-2 lg:p-4 lg:h-full lg:border-l-2 border-black mb-2 lg:mb-0">
          Student Life
        </button>
        <button className="nav-button bg-white hover:bg-[#FFEFE5] p-2 lg:p-4 lg:h-full lg:border-l-2 border-black mb-2 lg:mb-0">
          Admissions
        </button>
        <button className="nav-button bg-white hover:bg-[#FFEFE5] p-2 lg:p-4 lg:h-full lg:border-l-2 border-black mb-2 lg:mb-0">
          Academics
        </button>
        <button className="nav-button bg-white hover:bg-[#FFEFE5] p-2 lg:p-4 lg:h-full lg:border-l-2 border-black mb-2 lg:mb-0">
          About Us
        </button>
        <button className="nav-button bg-white hover:bg-[#FFEFE5] p-2 lg:p-4 lg:h-full lg:border-l-2 border-black">
          Home
        </button>
      </div>

      <button
        className="lg:hidden block bg-[#FFEFE5] p-4 h-full border-l-2 border-black"
        onClick={toggleCollapse}>
        <img src={collapsBtn} className="" alt="collapse button" />
      </button>
    </div>
  );
};

export default NavBar;

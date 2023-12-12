import React from "react";
import { BiSearch } from "react-icons/bi";
import { FiBell } from "react-icons/fi";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Avatar } from "@mui/material";

const DashboardRightContent = () => {
  return (
    <div className=" flex  items-center	justify-end gap-2">
      <div className="mx-5 lg:block hidden">
        <BiSearch
          className="w-100 h-100 text-[#6F6C99]"
          style={{ height: 30, width: 30 }}
        />
      </div>
      <div className="mx-5 lg:block hidden">
        <MenuIcon
          className="w-100 h-100 text-[#6F6C99]"
          style={{ height: 30, width: 30 }}
        />
      </div>
      <div className="ml-5">
        <div
          className="flex flex-row items-center p-1 w-100 h-100 px-3  rounded-full"
          style={{
            background:
              "linear-gradient(137deg, #FF409A 8.34%, #C438EF 95.26%)",
            boxShadow: "0px 4px 31px 0px #BA1358",
          }}>
          <button className="flex flex-row items-center p-1 w-100 h-100 px-3  rounded-full">
            <FiBell
              className="text-[#FFFFFF]"
              style={{ height: 20, width: 20, marginRight: "7%" }}
            />
            <h2 className="text-[#FFFFFF] font-bold text-lg antialiased">11</h2>
          </button>
        </div>
      </div>
      <div className="">
        <div className="flex flex-row items-center p-1 w-100 h-100 px-3 rounded-full">
          <Avatar
            alt="Remy Sharp"
            variant="rounded"
            className=" mr-3"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww"
          />

          <h2 className="text-[#6F6C99] font-bold mr-2 antialiased ">
            Pixelz Warrios
          </h2>
          <KeyboardArrowDownIcon
            className="text-[#6F6C99]"
            style={{ height: 20, width: 20 }}
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardRightContent;

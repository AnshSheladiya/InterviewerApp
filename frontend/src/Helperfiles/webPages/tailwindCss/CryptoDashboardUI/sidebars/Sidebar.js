import React, { useState } from "react";
import logoSvg from "../../../../../assets/logo.svg";
import animationDot from "../../../../../assets/animationDot.svg";
import { useLocation } from "react-router-dom";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import WalletIcon from "@mui/icons-material/Wallet";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import ImportExportIcon from "@mui/icons-material/ImportExport";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebars = () => {
  const [menuCollapse, setMenuCollapse] = useState(false);
  const location = useLocation(); // Get the current route location

  const menuIconClick = () => {
    setMenuCollapse(!menuCollapse);
  };

  // Helper function to determine if a link is active
  const isLinkActive = (path) => {
    return location.pathname === path;
  };
  const activeIconClass = {
    fill: "#53B9EA", // Define your desired fill color for active icons
  };
  return (
    <div
      className={`lg:w-2/12 w-full lg:h-screen  bg-[#201D47] text-[#fff] lg:fixed  ${
        menuCollapse ? "collapsed" : ""
      }`}>
      <div className=" ml-4 p-2 lg:p-0 text-lg lg:text-[1vw] flex items-center lg:space-x-2 space-x-2">
        <img src={logoSvg} alt="Ansh" className="lg:w-20 w-12 relative top-2" />
        <h2 className="ml-2 text-[#FFFFFF] font-bold">
          Receh <span className="text-[#FFFFFF]/[.4632] font-medium">tok</span>
        </h2>
        <div className="lg:hidden flex-grow text-right pr-4">
          <MenuIcon className="cursor-pointer" onClick={menuIconClick} />
        </div>
      </div>

      <div className={`${menuCollapse ? "hidden" : ""}`}>
        <nav className="lg:mt-[20%]">
          <ul>
            <li
              className={`flex flex-row items-center  ${
                isLinkActive("/") ? "text-[#53B9EA]" : "text-[#6F6C99]"
              }`}>
              <img
                src={animationDot}
                alt="Ansh"
                className={`lg:ml-0 ${isLinkActive("/") ? "" : "hidden"}`}
              />
              <SpaceDashboardIcon className="lg:ml-[10%] ml-[5%]" />
              <a href="/" className="p-5">
                Dashboard
              </a>
            </li>
            <li
              className={`flex flex-row items-center  ${
                isLinkActive("/wallet") ? "text-[#53B9EA]" : "text-[#6F6C99]"
              }`}>
              <img
                src={animationDot}
                alt="Ansh"
                className={`lg:ml-0 ${isLinkActive("/wallet") ? "" : "hidden"}`}
              />
              <WalletIcon className="lg:ml-[10%] ml-[5%]" />
              <a href="/wallet" className="p-5">
                Wallet
              </a>
            </li>
            <li
              className={`flex flex-row items-center  ${
                isLinkActive("/messages") ? "text-[#53B9EA]" : "text-[#6F6C99]"
              }`}>
              <img
                src={animationDot}
                alt="Ansh"
                className={`lg:ml-0 ${
                  isLinkActive("/messages") ? "" : "hidden"
                }`}
              />
              <MarkChatUnreadIcon className="lg:ml-[10%] ml-[5%]" />
              <a href="/messages" className="p-5">
                Messages
              </a>
            </li>
            <li
              className={`flex flex-row items-center  ${
                isLinkActive("/trade") ? "text-[#53B9EA]" : "text-[#6F6C99]"
              }`}>
              <img
                src={animationDot}
                alt="Ansh"
                className={`lg:ml-0 ${isLinkActive("/trade") ? "" : "hidden"}`}
              />
              <ImportExportIcon className="lg:ml-[10%] ml-[5%]" />
              <a href="/trade" className="p-5">
                Trade
              </a>
            </li>
            <li
              className={`flex flex-row items-center  ${
                isLinkActive("/account") ? "text-[#53B9EA]" : "text-[#6F6C99]"
              }`}>
              <img
                src={animationDot}
                alt="Ansh"
                className={`lg:ml-0 ${
                  isLinkActive("/account") ? "" : "hidden"
                }`}
              />
              <ManageAccountsIcon className="lg:ml-[10%] ml-[5%]" />
              <a href="/account" className="p-5">
                Account Setting
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebars;

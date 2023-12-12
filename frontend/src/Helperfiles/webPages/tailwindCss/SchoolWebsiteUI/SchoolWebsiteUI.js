import React from "react";
import TopBanner from "./components/TopBanner";
import NavBar from "./components/NavBar";
import HomePageDesktop from "./components/HomePageDesktop";
import HomeBenefitsPage from "./components/HomeBenefitsPage";
import HomeTestimonialsPage from "./components/HomeTestimonialsPage";
import HomeAboutusPage from "./components/HomeAboutusPage";
import BottomBar from "./components/Layouts/BottomBar";

const SchoolWebsiteUI = () => {
  return (
<div className="bg-[#FFF5F0] h-auto w-[100%] fixed top-0 left-0 right-0 bottom-0 overflow-y-auto">
        <div className="  ">
          <TopBanner />
          <NavBar />
          <HomePageDesktop />
          <HomeBenefitsPage />
          <HomeTestimonialsPage/>
          <HomeAboutusPage/>
          <BottomBar/>
        </div>
    </div>

  );
};

export default SchoolWebsiteUI;

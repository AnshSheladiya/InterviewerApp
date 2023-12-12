import React, { useState } from "react";
import ItemsCard from "./Layouts/ItemsCard";
import educatedCap from "../assests/educatedCap.svg";
import kingCrownIcon from "../assests/kingCrownIcon.svg";
import Nurturingicon from "../assests/Nurturingicon.svg";
import BallIcon from "../assests/BallIcon.svg";
import PeopleIcon from "../assests/PeopleIcon.svg";
import flagIcon from "../assests/flagIcon.svg";
import LeftArrowIcon from "../assests/LeftArrow.svg";
import ItemsCard2 from "./Layouts/ItemsCard2";
import { useMediaQuery, useTheme } from "@mui/material";

const HomeTestimonialsData = [
  {
    gender: "female",
    name: "Jennifer B",
    description:
      "Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!",
  },
  {
    gender: "male",
    name: "David K",
    description:
      "Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment.",
  },
  {
    gender: "female",
    name: "Cary",
    description: " I am grateful for the supportive and dedicated teachers.",
  },
  {
    gender: "male",
    name: "Emily L",
    description:
      "My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers.",
  },
];
const HomeTestimonialsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? HomeTestimonialsData.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === HomeTestimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div className="flex flex-col items-center justify-center  mt-20 gap-y-6 ">
      <div className="p-2 border-2 border-black rounded-lg bg-[#FFF] flex items-center justify-center">
        <h1 className="text-xs font-medium">Their Happy Words 🤗</h1>
      </div>
      <div>
        <h1 className="text-4xl font-bold tracking-wide leading-10">
          Our Testimonials
        </h1>
      </div>
      <div className="lg:w-[45%] w-[90%]">
        <h1 className='lg:font-2xl font-["1px"] text-[#262626] non-italic font-outfit font-normal tracking-wide'>
          Our testimonials are heartfelt reflections of the nurturing
          environment we provide, where children flourish both academically and
          emotionally.
        </h1>
      </div>
      <div className="mx-[10%] mt-5 flex lg:flex-row flex-col items-center gap-10">
        <button
          className="w-[60px] h-[60px] p-3 border-2 border-black rounded-lg bg-[#FFDECC] flex items-center justify-center lg:block hidden "
          onClick={handlePrevClick}>
          <img src={LeftArrowIcon} className="leftBtn" alt="Left Arrow" />
        </button>

        <div className="flex lg:flex-row flex-col gap-10 lg:order-none order-first">
          {isMobile
            ? [currentIndex].map((index) => {
                console.log("Mobile Index:", index);
                return (
                  <ItemsCard2
                    key={index}
                    item={
                      HomeTestimonialsData[
                        (index + HomeTestimonialsData.length) %
                          HomeTestimonialsData.length
                      ]
                    }
                  />
                );
              })
            : [currentIndex - 1, currentIndex, currentIndex + 1].map(
                (index) => {
                  console.log("Desktop Index:", index);
                  return (
                    <ItemsCard2
                      key={index}
                      item={
                        HomeTestimonialsData[
                          (index + HomeTestimonialsData.length) %
                            HomeTestimonialsData.length
                        ]
                      }
                    />
                  );
                }
              )}
        </div>

        <button
          className="w-[60px] h-[60px] p-3 border-2 border-black rounded-lg bg-[#FFDECC] flex items-center justify-center justify-self-end scale-x-[-1]  lg:block hidden"
          onClick={handleNextClick}>
          <img src={LeftArrowIcon} className="RightBtn" alt="Right Arrow" />
        </button>

        <div className="lg:hidden block flex flex-row gap-5">
          <button
            className="w-[60px] h-[60px] p-3 border-2 border-black rounded-lg bg-[#FFDECC] flex items-center justify-center "
            onClick={handlePrevClick}>
            <img src={LeftArrowIcon} className="leftBtn" alt="Left Arrow" />
          </button>

          <button
            className="w-[60px] h-[60px] p-3 border-2 border-black rounded-lg bg-[#FFDECC] flex items-center justify-center justify-self-end scale-x-[-1]"
            onClick={handleNextClick}>
            <img src={LeftArrowIcon} className="RightBtn" alt="Right Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonialsPage;

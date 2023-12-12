import React from "react";
import CountUp from "react-countup";

const HomePageShadowBox = () => {
  return (
    <div className="flex lg:flex-row flex-col items-center  bg-[#FFEFE5] shadow-[8px_8px_0px_1px_#FFBE99] lg:h-[30%] h-full lg:w-[70%] w-full justify-around lg:gap-0 gap-5  border-2 border-black rounded-xl">
      <div className="flex flex-col lg:items-start items-center lg:mt-0 mt-2   gap-y-1 lg:border-none border-b-2 border-black">
        <CountUp start={0} end={7000} duration={2} delay={0} redraw={true} prefix="+">
          {({ countUpRef, start }) => (
              <h1 className="font-extrabold text-3xl" ref={countUpRef}></h1>
          )}
        </CountUp>

        <h4 className="font-medium">Students Passed Out</h4>
      </div>
      <div className="flex flex-col lg:items-start items-center gap-y-1  lg:border-none border-b-2 border-black">
        <CountUp start={0} end={37} duration={2} delay={0} redraw={true} prefix="+">
          {({ countUpRef, start }) => (
            <div>
              <h1 className="font-extrabold text-3xl" ref={countUpRef}></h1>
            </div>
          )}
        </CountUp>
        <h4 className="font-medium">Awards & Recognitions</h4>
      </div>
      <div className="flex flex-col mb-3 lg:items-start items-center gap-y-1 lg:border-none border-b-2 border-black">
        <CountUp start={0} end={15} duration={2} delay={0} redraw={true} prefix="+">
          {({ countUpRef, start }) => (
            <div>
              <h1 className="font-extrabold text-3xl" ref={countUpRef}></h1>
            </div>
          )}
        </CountUp>
        <h4 className="font-medium">Experience Educators</h4>
      </div>
    </div>
  );
};

export default HomePageShadowBox;

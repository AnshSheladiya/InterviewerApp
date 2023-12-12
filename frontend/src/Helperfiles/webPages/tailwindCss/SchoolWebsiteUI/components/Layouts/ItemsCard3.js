import React from "react";
import cardHorizontalLine from "../../assests/cardHorizontalLine.svg";
import arrow from "../../assests/arrow.svg";

const ItemsCard3 = (item) => {
  const { title, description } = item.item;
  return (
    <div className="lg:h-[400px] h-[350px] lg:w-[600px] w-full p-2 border-2 border-black rounded-lg bg-[#FFF] shadow-[6px_6px_0px_2px_#1E1E1E] flex flex-col  items-center gap-y-10 pr-10">
      <div className="ml-5 flex flex-col gap-y-6 items-center justify-center mt-10">
        <h1 className="font-extrabold non-italic antialiased text-3xl tracking-wide text-[#1A1A1A] ">
          {title}
        </h1>
        <img
          src={cardHorizontalLine}
          className="select-none pointer-events-none"
        />
        <h1 className='lg:font-2xl font-["1px"] text-[#4C4C4D] non-italic font-outfit font-normal tracking-wide'>
          {description}
        </h1>
        <button className="flex lg:flex-row flex-col items-center justify-center p-3 mt-7  bg-[#FFDECC] shadow-[4px_4px_0px_2px_#1E1E1E] lg:h-[30%] h-full lg:w-[70%] w-full justify-around lg:gap-0 gap-5  border-2 border-black rounded-xl">
        <h1 className='flex items-center justify-center gap-2 lg:font-2xl font-["1px"] text-[#4C4C4D] non-italic font-outfit font-normal tracking-wide'>
            Learn More <button><img src={arrow} className='h-5' /></button>
        </h1>
        </button>
      </div>
    </div>
  );
};

export default ItemsCard3;

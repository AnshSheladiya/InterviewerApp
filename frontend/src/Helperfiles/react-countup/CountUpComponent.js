import React from "react";
import CountUp from "react-countup";
import CenterScreen from "../styled-components/CenterScreen";
import TitleComponent from "../styled-components/TitleComponent";
import HomePageShadowBox from "../webPages/tailwindCss/SchoolWebsiteUI/components/Layouts/HomePageShadowBox";

const CountUpComponent = () => (
  <CenterScreen>
    <TitleComponent>React CountUp</TitleComponent>
    <CountUp
      start={-875.039}
      end={160527.012}
      duration={2.75}
      separator=" "
      decimals={4}
      decimal=","
      prefix="EUR "
      suffix=" left"
      onEnd={() => console.log("Ended! 👏")}
      onStart={() => console.log("Started! 💨")}
    >
      {({ countUpRef, start }) => (
        <div>
          <span ref={countUpRef} />
          <button
            style={{
              backgroundColor: "#D0A2F7",
              padding: "10px",
              borderRadius: "10px",
              marginLeft: "20px",
              color: "black",
              width: "100px",
              margin: "10px",
            }}
            onClick={start}
          >
            Start
          </button>
        </div>
      )}
    </CountUp>
    <TitleComponent>Example</TitleComponent>
    <div className="flex items-center justify-center w-full">
      <HomePageShadowBox/>
    </div>
  </CenterScreen>
);

export default CountUpComponent;

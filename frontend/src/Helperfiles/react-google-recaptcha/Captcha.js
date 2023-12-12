import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import CenterScreen from "../styled-components/CenterScreen";
import TitleComponent from "../styled-components/TitleComponent";

const Captcha = () => {
  const onChange = (value) => {
    console.log("Captcha value:", value);
  };

  return (
    <CenterScreen>
      <TitleComponent>Captcha Component</TitleComponent>
    <ReCAPTCHA
      sitekey="Your client site key"
    //   size="invisible"
      onChange={onChange}
    />
    </CenterScreen>

  );
};

export default Captcha;

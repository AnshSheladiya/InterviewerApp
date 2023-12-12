import React from "react";
import upLineSelected from "../../../../assets/upLineSelected.svg";
import upArrow from "../../../../assets/upArrow.svg";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";

const WalletCard = () => {
  return (
    <div
      className="w-[240px] h-[120px] m-10	flex   bg-red-700  rounded-2xl	"
      style={{
        background:
          "linear-gradient(135deg, #40DDFF 0%, #14BAE3 19.24%, #13B1E6 68.64%, #11AADF 81.77%, #0B98C5 100%)",
      }}>
      <div className="w-[30%] h-[100%] flex items-center ml-2">
        <CurrencyBitcoinIcon
          className="text-[#FFF]"
          style={{ height: 50, width: 50 }}
        />
      </div>
      <div className="w-[70%] h-[100%] relative right-5">
        <div className=" flex justify-center mt-5">
          <h1 className="text-[#FFF] text-3xl antialiased">1.9678</h1>
          <h3 className="text-[#FFF] font-extrabold not-italic opacity-50	relative top-2 ml-2 antialiased">
            BTC
          </h3>
        </div>
        <div className=" flex flex-row items-center ">
          <img
            src={upLineSelected}
            alt="Ansh"
            style={{ height: 50, width: 50 }}
          />
          <img src={upArrow} alt="Ansh" className="m-4" style={{ height: 13, width: 13 }}  />
          <h1 className="text-[#FFF] font-bold opacity-80 mr-[5%] antialiased">+12,5%</h1>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;

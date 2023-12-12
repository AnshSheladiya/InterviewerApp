import React from "react";
import upLineSelected from "../../../../../../assets/upLineSelected.svg";
import downLineTrande from "../../../../../../assets/downLineTrande.svg";
import unselectedBlueTrendLine from "../../../../../../assets/unselectedBlueTrendLine.svg";
import upArrow from "../../../../../../assets/upArrow.svg";
import downArrow from "../../../../../../assets/downArrow.svg";
import greenUpArrow from "../../../../../../assets/greenUpArrow.svg";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import { FaEthereum } from "react-icons/fa";
import { BiBoltCircle } from "react-icons/bi";

const WalletCard = ({ data }) => {
    console.log(data)
  const { name, value, growth, selected } = data;

  const isPositiveGrowth = parseFloat(growth) > 0;
  const growthIcon = selected && isPositiveGrowth
    ? upLineSelected
    : isPositiveGrowth
    ? unselectedBlueTrendLine
    : downLineTrande;
  const arrowIcon = selected && isPositiveGrowth?upArrow:isPositiveGrowth ? greenUpArrow : downArrow;

  return (
    <div
      className={`w-[240px] h-[120px] m-10 flex rounded-2xl`}
      style={{
        background: selected
          ? "linear-gradient(135deg, #40DDFF 0%, #14BAE3 19.24%, #13B1E6 68.64%, #11AADF 81.77%, #0B98C5 100%)"
          : "#201D47",
        border: selected ? "none" : "1px solid #312F62",
      }}>
      <div className="w-[30%] h-[100%] flex items-center ml-2">
        {name == "BTC" ? (
          <CurrencyBitcoinIcon
            className={`${
                selected
                  ? "text-[#FFF]"
                  : isPositiveGrowth
                  ? "text-[#50E3C2]"
                  : "text-[#E3507A]"
              }`}
            style={{ height: 50, width: 50 }}
          />
        ) : name == "ETH" ? (
          <FaEthereum
          className={`${
            selected
              ? "text-[#FFF]"
              : isPositiveGrowth
              ? "text-[#50E3C2]"
              : "text-[#E3507A]"
          }`}
            style={{ height: 50, width: 50 }}
          />
        ) : (
          <BiBoltCircle
          className={`${
            selected
              ? "text-[#FFF]"
              : isPositiveGrowth
              ? "text-[#50E3C2]"
              : "text-[#E3507A]"
          }`}
            style={{ height: 50, width: 50 }}
          />
        )}
      </div>
      <div className="w-[70%] h-[100%] relative right-5">
        <div className="flex justify-center mt-5">
          <h1
            className={`text-[#FFF] ${
              selected ? "" : "opacity-70"
            } text-3xl antialiased`}>
            {value}
          </h1>
          <h3
            className={`text-[#FFF] font-extrabold not-italic ${
              selected ? "opacity-50" : "opacity-20"
            } relative top-2 ml-2 antialiased`}>
            {name}
          </h3>
        </div>
        <div className="flex flex-row items-center">
          <img
            src={growthIcon}
            alt="Ansh"
            style={{
              position: isPositiveGrowth ? "" : "relative",
              left: isPositiveGrowth ? "" : 20,
            }}
          />
          <img
            src={arrowIcon}
            alt="Ansh"
            className="m-4"
            style={{ height: 13, width: 13 }}
          />
          <h1
            className={`${
              selected
                ? "text-[#FFF]"
                : isPositiveGrowth
                ? "text-[#50E3C2]"
                : "text-[#E3507A]"
            } font-bold opacity-80 mr-[5%] antialiased`}>
            {growth}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;

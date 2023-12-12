import React, { useState, useEffect } from "react";
import WalletCard from "./WalletCard";
import {  useMediaQuery, useTheme } from '@mui/material';

const Wallets = () => {
  // Define an array of dummy data for WalletCards
  const [walletData, setWalletData] = useState([
    {
      name: "BTC",
      value: "1.9678",
      growth: "+12.5%",
      selected: false,
    },
    {
      name: "ETH",
      value: "23.234",
      growth: "-5.23%",
      selected: false,
    },
    {
      name: "LTC",
      value: "10.456",
      growth: "+8.12%",
      selected: false,
    },
  ]);

  const handleCardClick = (index) => {
    const updatedData = walletData.map((wallet, i) => {
      if (i === index) {
        return { ...wallet, selected: true };
      } else {
        return { ...wallet, selected: false };
      }
    });
    setWalletData(updatedData);
  };

  // Function to update wallet data with random values
  const updateRandomData = () => {
    const updatedData = walletData.map((wallet) => ({
      ...wallet,
      value: (Math.random() * 100).toFixed(4), // Generate random value
      growth: `${(Math.random() * 20 - 10).toFixed(2)}%`, // Generate random growth
    }));
    setWalletData(updatedData);
  };

  // Periodically update the data every 1000 milliseconds (1 second)
  useEffect(() => {
    const interval = setInterval(() => {
      updateRandomData();
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className="lg:ml-[16.66%] ml-0 w-[100%] flex flex-col bg-[#201D47] text-[#fff]">
      <div>
        <h2 className="text-[#B1AFCD] ml-[2%] mt-14 font-medium not-italic font-bold text-2xl antialiased">
          Wallets
        </h2>
      </div>
      <div className="flex flex-row  overflow-auto">
        {walletData.map((wallet, index) => (
          <div
            key={index}
            className={`hover:shadow-lg m-2 ${wallet.selected ? "selected" : ""} select-none`}
            onClick={() => handleCardClick(index)}
          >
            <WalletCard data={wallet} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wallets;

import React, { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import CircleIcon from "@mui/icons-material/Circle";
import {  useMediaQuery, useTheme } from '@mui/material';

const CoinInfo = ({ colorHash, coinName }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <div className="ml-[2%] flex flex-row">
      <div className={`ml-[1%]`} style={{color:`${colorHash}`}}>
        <CircleIcon style={{ height: isMobile?10:15, width: isMobile?10:15 }}/>
      </div>
      <h2 className={`text-[#B1AFCD] ml-2 font-bold not-italic font-bold ${isMobile?'text-sm':'text-xl'} antialiased`}>
        {coinName}
      </h2>
    </div>
  );
};

const ApexChart = () => {
  const theme = useTheme();

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

  const updateRandomData = () => {
    const updatedData = [...walletData];
    const coinsToUpdate = ["BTC", "ETH", "LTC"];
  
    coinsToUpdate.forEach((coin) => {
      updatedData.push({
        name: coin,
        value: (Math.random() * 100).toFixed(4),
        growth: `${(Math.random() * 20 - 10).toFixed(2)}%`,
        selected: false,
      });
    });
  
    // You can control the maximum length of the array here
    const maxLength = 100; // Set your desired maximum length
    if (updatedData.length > maxLength) {
      updatedData.splice(0, updatedData.length - maxLength);
    }
    
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

  const chartData = {
    series: [
      {
        name: "Value",
        data: walletData.map((item) => parseFloat(item.value)), // Extract and parse value data
      },
      {
        name: "Growth",
        data: walletData.map((item) => parseFloat(item.growth)), // Extract and parse growth data
      },
    ],
    options: {
      chart: {
        height: 350,
        selection: {
          enabled: true
        },
        toolbar: {
          show: true,
          offsetX: 0,
          offsetY: 0,
          tools: {
            download: true,
            selection: true,
            zoom: true,
            zoomin: true,
            zoomout: true,
            pan: true,
            reset: true | '<img src="/static/icons/reset.png" width="20">',
            customIcons: []
          },
        },
        type: "line",
        autoSelected: 'zoom' ,
      },
      colors: ["#E930FF", "#1BAFE4"],
      legend: { labels: {
        colors: ["#E930FF", "#1BAFE4"],
        useSeriesColors: false
    },},
      stroke: {
        width: 5,
        curve: "smooth",
      },
      xaxis: {
        categories: walletData.map((item) => item.name), // Use cryptocurrency names as categories
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "light",
          gradientToColors: ["#E930FF", "#1BAFE4",'#F5A623'],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      yaxis: {
        min: 0,
        max: Math.max(...walletData.map((item) => parseFloat(item.value))) + 10, // Adjust max value dynamically
      },
      xaxis: {
        labels: {
          style: {
            colors: "#59588D", // Change the X-axis label color here
          },
        },
      },
      yaxis: [{
      axisTicks: {
        show: true
      },
      axisBorder: {
        show: true,
        color: "#59588D"
      },
      labels: {
        style: {
          colors: "#59588D"
        }
      }
    }
  ],
    },
  };
  
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div id="chart" className="lg:ml-[16.66%] ml-0 h-screen	  bg-[#201D47]">
      <div className="flex flex-row">
      <CoinInfo colorHash="#FB49C0" coinName="BTC" />
      <CoinInfo colorHash="#31AFD6" coinName="ETH" />
      <CoinInfo colorHash="#F5A623" coinName="LTC" />
      </div>
      <ReactApexChart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={isMobile?'auto':350}
        width={"100%"}
        className="text-white-700"
      />
    </div>
  );
};

export default ApexChart;

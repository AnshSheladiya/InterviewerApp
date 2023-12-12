import { Avatar } from "@mui/material";
import React, { useState, useEffect } from "react";

const Notifications = () => {
  const [notificationsData, setNotificationsData] = useState([
    {
      name: "Clifford Hale",
      message: "Hallo bro anak wes piro saiki? wes kuliah urung?…",
      time: "2 hours ago",
    },
  ]);
  const [showSeeAllButton, setShowSeeAllButton] = useState(false); // Track whether to show the "See All" button

  useEffect(() => {
    const interval = setInterval(() => {
      // Generate random data and add it to notificationsData
      const randomNotification = {
        name: "Random User",
        message: "This is a random message.",
        time: getRandomTimeAgo(),
      };
      setNotificationsData([...notificationsData, randomNotification]);
    }, 3000);

    return () => clearInterval(interval);
  }, [notificationsData]);

  useEffect(() => {
    // Check if the total height of notifications exceeds 700px
    const totalHeight = notificationsData.length; // Assuming each notification has a height of 24px
    setShowSeeAllButton(totalHeight > 5);
  }, [notificationsData]);

  // Function to generate random time message
  const getRandomTimeAgo = () => {
    const hoursAgo = Math.floor(Math.random() * 24) + 1; // Random hours from 1 to 24
    return `${hoursAgo} ${hoursAgo > 1 ? "hours" : "hour"} ago`;
  };
  console.log(showSeeAllButton);
  return (
    <div
      className="lg:block hidden fixed top-20 w-[32%] h-[600px] overflow-auto right-4 bg-[red] text-[#fff] p-4 rounded-lg shadow-lg z-20"
      style={{
        background:
          "linear-gradient(211deg, rgba(40, 36, 88, 0.61) 0.01%, rgba(38, 35, 83, 0.70) 42.05%, rgba(62, 59, 115, 0.00) 104.81%)",
          boxShadow:'0px 51px 69px 0px rgba(23, 18, 43, 0.59)',
          backdropFilter:'blur(11.5px)'
      }}>
      <div>
        <h2 className="text-[#B1AFCD] ml-[2%] mt-4 font-medium font-bold text-xl antialiased">
          NOTIFICATIONS
        </h2>
        <div className="mt-5 flex flex-col">
          {notificationsData.map((notification, index) => (
            <div
              key={index}
              className="rounded-2xl w-[99%] h-22  p-2 my-1 flex flex-row"
              style={{
                background:
                  "linear-gradient(224deg, rgba(26, 23, 62, 0.45) 0%, rgba(18, 16, 48, 0.49) 98.47%)",
              }}>
              <div className="w-[10%] flex items-center justify-center">
                <Avatar
                  className=""
                  style={{
                    background:
                      "linear-gradient(214deg, #16B4EB 4.85%, #23E73C 119.17%)",
                    width: 40,
                    height: 40,
                    fontSize: "90%",
                  }}>
                  {notification.name.charAt(0)}
                </Avatar>
              </div>
              <div className="w-[90%] h-[100%] ml-3">
                <div className="flex flex-row">
                  <h4 className="text-[#8786AB] mt-[1%] text-md font-bold leading-normal not-italic tracking-wide font-HelveticaNeue antialiased">
                    {notification.name}
                  </h4>
                  <h4 className="text-[#8786AB] mt-[1%] ml-2 text-xs leading-normal relative top-1 not-italic tracking-wide font-HelveticaNeue antialiased">
                    Sent you a message
                  </h4>
                </div>
                <div flex flex-col>
                  <h6 className="text-[#59588D] mt-[1%] text-xs leading-normal not-italic tracking-wide font-HelveticaNeue antialiased">
                    {notification.message}
                  </h6>
                  <h6 className="text-[#59588D] mt-[1%] text-xs leading-normal not-italic tracking-wide font-HelveticaNeue antialiased">
                    {notification.time}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notifications;

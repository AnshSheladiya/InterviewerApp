import React from "react";
import ItemsCard from "./Layouts/ItemsCard";
import educatedCap from "../assests/educatedCap.svg";
import kingCrownIcon from "../assests/kingCrownIcon.svg";
import Nurturingicon from "../assests/Nurturingicon.svg";
import BallIcon from "../assests/BallIcon.svg";
import PeopleIcon from "../assests/PeopleIcon.svg";
import flagIcon from "../assests/flagIcon.svg";
import ItemsCard3 from "./Layouts/ItemsCard3";
const BenefitsData = [
  {
    title: "About Us",
    description:
      "Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. Learn about our passionate educators and our engaging approach to early education.",
  },
  {
    title: "Academics",
    description:
      "Delve into our comprehensive academic programs designed to stimulate young minds, foster creativity, and encourage a love for learning. Explore our well-rounded curriculum that nurtures both intellectual and social development.",
  },
  {
    title: "Student Life",
    description:
      "Peek into the vibrant and enriching world of Student Life at Little Learners Academy. Discover the array of extracurricular activities, arts and crafts, sports, and social events that make our school experience truly memorable.",
  },
  {
    title: "Admissions",
    description:
      "Learn about our Enrollment Process and how to secure your childs place at Little Learners Academy. Find information about our admission requirements, application deadlines, and available spaces.",
  },
];
const HomeAboutusPage = () => {
  return (
    <div className="flex flex-col items-center justify-center  mt-20 gap-y-6 ">
      <div className="p-2 border-2 border-black rounded-lg bg-[#FFF] flex items-center justify-center">
        <h1 className="text-xs font-bold">Explore More</h1>
      </div>
      <div>
        <h1 className="text-4xl font-bold tracking-wide leading-10">
          Navigate through our Pages
        </h1>
      </div>
      <div className="lg:w-[45%] w-[90%]">
        <h1 className='lg:font-2xl font-["1px"] text-[#262626] non-italic font-outfit font-normal tracking-wide'>
          Your gateway to discovering a wealth of valuable information about our
          kindergarten school, Feel free to explore and learn more about the
          enriching experiences that await your child at our kindergarten school
        </h1>
      </div>
      <div className="mx-5 mt-5 grid lg:grid-cols-2 lg:gap-20 gap-10">
        {BenefitsData.map((item, index) => (
          <ItemsCard3 key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default HomeAboutusPage;

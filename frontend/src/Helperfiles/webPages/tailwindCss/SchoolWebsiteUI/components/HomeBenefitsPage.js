import React from 'react'
import ItemsCard from './Layouts/ItemsCard'
import educatedCap from "../assests/educatedCap.svg";
import kingCrownIcon from "../assests/kingCrownIcon.svg";
import Nurturingicon from "../assests/Nurturingicon.svg";
import BallIcon from "../assests/BallIcon.svg";
import PeopleIcon from "../assests/PeopleIcon.svg";
import flagIcon from "../assests/flagIcon.svg";
const BenefitsData=[
    {
        icon:educatedCap,
        title:'Holistic Learning Approach',
        description:'Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education.'
    },
    {
      icon:kingCrownIcon,
      title:'Experienced Educators',
      description:'Our passionate and qualified teachers create a supportive and stimulating learning environment.'
    },
    {
      icon:Nurturingicon,
      title:'Nurturing Environment',
      description:'We prioritize safety and provide a warm and caring atmosphere for every child.'
    },
    {
      icon:flagIcon,
      title:'Play-Based Learning',
      description:'We believe in the power of play to foster creativity, problem-solving skills, and imagination.'
    },
    {
      icon:BallIcon,
      title:'Individualized Attention',
      description:'Our small class sizes enable personalized attention, catering to each childs unique needs'
    },
    {
      icon:PeopleIcon,
      title:'Parent Involvement',
      description:'We foster a strong parent-school partnership to ensure seamless communication and collaboration.'
    },
]
const HomeBenefitsPage = () => {
  return (
    <div className='flex flex-col items-center justify-center  mt-20 gap-y-6 '>
        <div className='p-2 border-2 border-black rounded-lg bg-[#FFF] flex items-center justify-center'>
            <h1 className='text-xs font-bold'>Children Deserve Bright Future</h1>
        </div>
        <div>
        <h1 className='text-4xl font-bold tracking-wide leading-10'>Our Benefits</h1>
        </div>
        <div className='lg:w-[45%] w-[90%]'>
          <h1 className='lg:font-2xl font-["1px"] text-[#262626] non-italic font-outfit font-normal tracking-wide'>
          With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future.
          </h1>
        </div>
        <div className='mx-5 mt-5 grid lg:grid-cols-3 lg:gap-20 gap-10'>
        {
          BenefitsData.map((item, index) => (
            <ItemsCard key={index} item={item} />
          ))
        }
      </div>
    </div>
  )
}

export default HomeBenefitsPage
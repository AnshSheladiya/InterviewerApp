import React from 'react'
import female from "../../assests/female.svg";
import male from "../../assests/male.svg";
import { Rate } from 'antd';

const ItemsCard2 = (item) => {
    const {gender,name,description}=item.item;
  return (
    <div className='h-[500px] lg:w-[390px] w-full p-2 border-2 border-black rounded-lg bg-[#FFF] shadow-[6px_6px_0px_2px_#1E1E1E] flex flex-col  items-center gap-y-10'>
        <div className='h-fit p-3 mt-[20%]  border-[1px] border-black rounded-full bg-[#FFF5F0] flex justify-center items-center'>
        <img
          src={gender==='male'?male:female}
          className="h-[50px]   select-none pointer-events-none"
        />
        </div>
        <div className='ml-5 flex flex-col gap-y-6 flex justify-center items-center'>
          <div>
          <Rate defaultValue={5} style={{color:'#FF8D4D'}}/>
          </div>
            <h1 className='font-bold non-italic antialiased text-xl tracking-wide'>{name}</h1>
            <h1 className='lg:font-2xl font-["1px"] text-[#262626] non-italic font-outfit font-normal tracking-wide'>{description}</h1>
        </div>
    </div>
  )
}

export default ItemsCard2
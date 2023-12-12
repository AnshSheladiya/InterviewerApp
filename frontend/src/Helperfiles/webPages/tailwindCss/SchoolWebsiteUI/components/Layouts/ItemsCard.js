import React from 'react'

const ItemsCard = (item) => {
    const {icon,title,description}=item.item;
    console.log(item)
  return (
    <div className='h-[220px] lg:w-[390px] w-full p-2 border-2 border-black rounded-lg bg-[#FFF] shadow-[6px_6px_0px_2px_#1E1E1E]'>
        <div className='relative bottom-8 left-2  w-[60px] p-3 border-2 border-black rounded-lg bg-[#FFDECC] flex items-center justify-center'>
        <img
          src={icon}
          className="h-[25px]   select-none pointer-events-none"
        />
        </div>
        <div className='ml-5 flex flex-col gap-y-6'>
            <h1 className='font-bold non-italic antialiased text-xl tracking-wide'>{title}</h1>
            <h1 className='lg:font-2xl font-["1px"] text-[#262626] non-italic font-outfit font-normal tracking-wide'>{description}</h1>
        </div>
    </div>
  )
}

export default ItemsCard
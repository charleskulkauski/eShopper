import React from 'react'
import ArrowIcon from '../common/ArrowIcon'


const Card = ({ imagePath, title, description, actionArrow, height,  width})  => {
  return (
    <div className='flex flex-col p-6'>
      <img className={`h-[260px] max-h-[290px] w-[200px] max-w-[250px] bg-cover bg-center border rounded  hover:scale-105 cursor-pointer`} src={imagePath} alt='Jeans' />

      <div className='flex justify-between items-center'>
        <div className='flex flex-col'>
          <p className='text-[16px] hover:scale-105'>{title}</p>
          {description && <p className='text-[12px] px-1 text-gray-600 hover:scale-105 cursor-pointer'>{description}</p>}
        </div>
        {actionArrow && <span className='cursor-pointer pr-2 items-center'><ArrowIcon /></span>}
      </div>
    </div>
  )
}

export default Card

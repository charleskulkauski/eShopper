import React from 'react'

const Categories = ({types}) => {
  return (
    <div>
      {types?.map((type)=>{
        return (
          <div className='flex items-end p-1'>
            <input type='checkbox' name={type?.code} className='border rounded-xl w-4 h-4 accent-black text-black'/>
            <label htmlFor={type?.code} className='p-2 text[14px]'>{type?.type}</label>
          </div>
        )
      })}
      
    </div>
  )
}

export default Categories

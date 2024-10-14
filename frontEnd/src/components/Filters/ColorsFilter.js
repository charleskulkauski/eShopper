import React from 'react'

export const colorSelector = {
    "Purple":"#8434E1",
    "Black":"#252525",
    "White":"#FFFFFF",
    "Gray": "#808080",
    "Blue": "#0000FF",
    "Red": "#FF0000",
    "Orange": "#FFA500",
    "Navy": "#000080",
    "Grey": "#808080",
    "Yellow": "#FFFF00",
    "Pink": "#FFC0CB",
    "Green": "#008000"

}


const ColorsFilter = ({colors}) => {
  return (
    <div className='flex flex-col mb-4'>
        <p className='text-[16px] text-black mt-5 mb-5'>Colors</p>
        <div className='flex flex-wrap px-2'>
            {colors?.map(item=> {
                    return(
                        <div className='flex flex-col mr-2'>
                            <div className='w-8 h-8 border rounded-xl mr-4 courser-pointer hover:scale-110' style={{background:`${colorSelector[item]}`}}></div>
                                <p>{item}</p>
                            </div>
                    )
                }
            )}
        </div>
    </div>
  )
}

export default ColorsFilter
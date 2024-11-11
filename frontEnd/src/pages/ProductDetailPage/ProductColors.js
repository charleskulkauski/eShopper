import React from 'react'
import { colorSelector } from '../../components/Filters/ColorsFilter'

const ProductColors = ({colors}) => {
  return (
    <div className={`flex Tx-2`}>
      {colors?.map((color,index)=>(
        <div className={`bg-${colorSelector?.toLowerCase()} rounded-[50%] w-4 h-4 mx-2`} style={{background:colorSelector[color]}}></div>
      ))}
    </div>
  )
}

export default ProductColors

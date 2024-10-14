import React, { useEffect, useMemo, useState } from 'react'
import FilterIcon from '../../components/common/FilterIcon'
import content from '../../data/content.json'
import Categories from '../../components/Filters/Categories';
import PriceFilter from '../../components/Filters/PriceFilter';
import ColorsFilter from '../../components/Filters/ColorsFilter';

const categories = content?.categories;

 const ProductListPage = ({categoryType}) => {

  const categoryContent = useMemo(()=>{
    return categories?.find((category) => category.code === categoryType);
  },[categoryType]);

  return (
    <div>
      <div className='flex'>
        <div className='w-[20%] p-[10px] border rounded-lg m-[20px]'>
          {/* Filters */}
          <div className='flex justify-between'>
              <p className='text-[16px] text-gray-600'>Filtrar</p>
              <FilterIcon />
          </div>

          <div>
            {/* Products Types*/}
            <p className='text-[16px] text-black mt-5'>Categorias</p>
            <Categories types={categoryContent?.types} />
            <hr></hr>
          </div>
          {/* Price */}
          <PriceFilter />
          <hr></hr>
          {/* Colors */}
          <ColorsFilter colors={categoryContent?.meta_data?.colors}/>

          <hr></hr>
          {/* Sizes */}

        </div>
        <div className='p-[15px]'>
          <p className='text-black text-lg'>{categoryContent?.description}</p>
          {/* Products */}


        </div>
          
        <div>

        </div>

      </div>
    </div>
  )
}

export default ProductListPage

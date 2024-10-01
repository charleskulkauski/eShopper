import React from 'react'
import FilterIcon from '../../components/common/FilterIcon'

export const ProductListPage = () => {
  return (
    <div>
      <div className='flex'>
        <div className='w-[20%] p-[20px] border rounded-lg m-[20px]'>
          {/* Filters */}
          <div className='flex justify-between'>
              <p className='text-sm text-gray-600'>Filtrar</p>
              <FilterIcon />
          </div>

          <div>
            <p className='text-sm text-black mt-5'>Categorias</p>
          </div>

        </div>
        <div classNae='p-[40px]'>
          {/* Products */}


        </div>

      </div>
    </div>
  )
}

export default ProductListPage

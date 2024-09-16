import React from 'react'
import PropTypes from 'prop-types';

function SeactionHeading({title}) {
  return (
    <div className='flex flex-wrap px-10 my-5'>
        <div>

        </div>
        <p className='text-3xl'>{title}</p>
      
    </div>
  )
}

SeactionHeading.defaultProps = {

}

SeactionHeading.prototype = {
    title:String
}

export default SeactionHeading

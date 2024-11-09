import React, { useMemo } from 'react';
import SvgStarIcon from '../common/SvgStarIcon';
import { SvgEmptyStar } from '../common/SvgEmptyStar';

const Rating = ({ rating }) => {
  const validRating = Math.max(0, Math.min(5, Number(rating) || 0)); // garante que o valor está entre 0 e 5

  const filledStars = useMemo(() => Array(Math.floor(validRating)).fill(), [validRating]);
  const emptyStars = 5 - filledStars.length;

  return (
    <div className='flex items-center'>
      {filledStars.map((_, index) => (
        <SvgStarIcon key={index} />
      ))}
      {Array(emptyStars).fill().map((_, index) => (
        <SvgEmptyStar key={'empty-' + index} />
      ))}
      <p className='px-2 text-gray-500'>{rating}</p>
    </div>
  );
};

export default Rating;

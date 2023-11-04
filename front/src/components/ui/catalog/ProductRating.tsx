import { useQuery } from '@tanstack/react-query';
import React, { FC, useState } from 'react';

import { IProduct } from '@/types/product.interface';
import { IReview } from '@/types/review.interface';

import { ReviewService } from '@/services/review/review.service';
import {Rating} from "react-simple-star-rating";


const ProductRating: FC<{ product: IProduct }> = ({
  product,
}) => {

  const rating =Math.round(product.reviews.reduce((acc,review)=>acc+review.rating,0)/product.reviews.length)||0
  return <div className='flex items-center'>
      <Rating
      readonly
      initialValue={rating?rating:0}
      SVGstyle={{display:'inline-block'}}
      size={26}
      allowFraction
      transition
      />
      <span>
          <span className='text-primary'>{rating}</span>
          <span className='ml-2 align-middle text-xs text-gray-300'>({product.reviews.length} отз)</span>
      </span>

  </div>;
};

export default ProductRating;

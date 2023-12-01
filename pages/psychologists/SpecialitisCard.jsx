import Link from 'next/link';
import React from 'react';

const SpecialitisCard = ({ product }) => {
    console.log(product)
  return (
    <Link href={`https://hidoctor.health/online/psikolog/category/${product.name.toLowerCase().replace(/\s/g, '-')}`}>
      <div className='specialitis-card text-[12px] bg-gray-200 rounded-3xl p-1  text-center'>
       {product.name}
      </div>
    </Link>
  );
};

export default SpecialitisCard;

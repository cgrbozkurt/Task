import Link from 'next/link';
import React from 'react';

const SpecialitisCard = ({ product }) => {
  return (
    <Link href={`https://hidoctor.health/online/psikolog/category/${product.speciallink}`}>
      <div className='specialitis-card text-[12px] bg-spescardbg rounded-3xl p-2 mx-1  text-center'>
       {product.name}
      </div>
    </Link>
  );
};

export default SpecialitisCard;

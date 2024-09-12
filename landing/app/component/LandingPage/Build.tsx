import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';

const Build = () => {
  return (
    <div className='py-20'>
      <Wrapper>
      <div className='max-w-3xl mx-auto border-2 border-gold flex flex-col items-center text-center p-8 rounded-xl'>
                <h2 className='mb-2'>
                  All traders and tokens welcome
                </h2>
                <p className='mb-6 text-lg'>Manifest the on-chain world with us</p>
                <a className='bg-gold rounded-lg px-4 py-3 text-black font-semibold' href="https://docs.google.com/forms/d/e/1FAIpQLSf9HhyExwnqnFuWN3FI5YZJ_cjmS-yGUBsmweVs-BVACVw2Zw/viewform" target='_blank' rel="noopener noreferrer">Get in touch</a>
                </div>
      </Wrapper>
    </div>
  );
};



export default Build;

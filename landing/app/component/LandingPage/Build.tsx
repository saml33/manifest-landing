import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import * as Icons from '../../svg/Icons';
import Image from 'next/image';

const Build = () => {
  return (
    <div className='py-12 md:py-20'>
{/* <Icons.manifest className='absolute h-72 w-auto text-white left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-night' /> */}
      <Wrapper>
      <div className='max-w-3xl mx-auto flex flex-col items-center text-center p-8 rounded-xl'>
      <Image className='mb-6' src='/assets/manifest-logo-mark.svg' height={96} width={96} alt="logo" />
      {/* <Icons.manifest className='mb-6 h-20 w-auto text-gold' /> */}
                <h2 className='mb-2'>
                  All traders and tokens welcome
                </h2>
                <p className='mb-6 text-lg'>Manifest the on-chain world with us</p>
                <a className='bg-sienna rounded-lg px-4 py-3 text-black font-semibold' href="https://docs.google.com/forms/d/e/1FAIpQLSf9HhyExwnqnFuWN3FI5YZJ_cjmS-yGUBsmweVs-BVACVw2Zw/viewform" target='_blank' rel="noopener noreferrer">Get in touch</a>
                </div>
      </Wrapper>
    </div>
  );
};



export default Build;

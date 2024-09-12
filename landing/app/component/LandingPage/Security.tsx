import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';
import * as Icons from '../../svg/Icons';

const Security = () => {
  return (
    <div className='py-12 md:py-20 border-b border-brown'>
      <Wrapper>
        <div className='w-full flex flex-col items-center'>
            <h2 className='mb-2'>
              Security
            </h2>
            <p className='text-center'>Manifest is audited and formally verified by Certora.</p>
            <div className='flex justify-center items-center py-8'>
              <a href="https://www.certora.com/" target='_blank' rel="noopener noreferrer">
              <Icons.certora className='h-20 w-auto text-white' />
              </a>
            </div>
          <div
            className='border-2 border-sienna rounded-lg px-4 py-3 text-sienna font-semibold'
          >
            Report coming soon
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Security;

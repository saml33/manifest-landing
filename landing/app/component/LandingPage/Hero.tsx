import React from 'react';
import Wrapper from '../shared/ComponentWrapper/Wrapper';

const Hero: React.FC = () => {
  return (
      <Wrapper style='h-full border-b border-brown'>
          <div className='w-full flex flex-col gap-5 justify-center items-center h-full py-12 md:py-20'>
            <div className='max-w-3xl flex flex-col items-center text-center'>
              <span className='mb-2 text-white font-bold'>MANIFEST</span>
                <h1 className='mb-4'>
                  The Unlimited Orderbook
                </h1>
                <p className='text-lg'>The forever free orderbook exchange that supercharges everyone's trading. A climactic liquidity primitive to push all risk-exchange on-chain.</p>
                </div>
                <div className='mt-6 flex space-x-12 py-4 px-6 border-2 border-gold rounded-xl'>
                  <div className='flex justify-center items-center flex-col'>
                    <p className='mb-0.5 text-3xl text-gold font-display font-semibold leading-none'>
                      0.00%
                    </p>
                    <p className='text-sm'>
                      Trading fees
                    </p>
                  </div>
                  <div className='flex justify-center items-center flex-col'>
                    <p className='mb-0.5 text-3xl text-gold font-display font-semibold leading-none'>
                      0.002 SOL
                    </p>
                    <p className='text-sm'>
                      Listing fee
                    </p>
                  </div>
                  </div>
          </div>
      </Wrapper>
  );
};

export default Hero;
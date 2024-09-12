'use client';

import React from 'react';
import Wrapper from '../ComponentWrapper/Wrapper';
import * as Icons from '../../../svg/Icons';
import Link from 'next/link';

const Footer = () => {

  return (
    <div className='border-t border-night pt-10 pb-4'
    >
      <Wrapper>
        <div className='w-full flex justify-center items-center flex-col gap-10 2xl:gap-14'>
            {/* <div className='flex flex-col justify-center items-center gap-2 2xl:gap-4'>
            <a
              href='https://cks.systems/'
              className='text-[16px] 2xl:text-[26px] 3xl:text-[40px] font-normal text-[#bca378]/60'
              target='_blank'
              rel='noopener noreferrer'
            >
              Built by CKS Systems
            </a>
            </div> */}
            <div className='flex flex-col justify-center items-center gap-2 2xl:gap-4 3xl:gap-6'>
              <div className='mb-4 flex gap-6 justify-center items-center'>
                {socialIcons.map((item, index) => {
                  return (
                    <Link key={index} href={item.path}>
                      {item.name}
                    </Link>
                  );
                })}
              </div>
              <p className='text-center'>
                Manifest is Open Source, Public Good, Blockchain Software. Licensed under GNU GPL-3.0
              </p>
              <p className='text-xs opacity-60'>
                © 2024 Manifest. All Rights Reserved.
              </p>
            </div>
        </div>
      </Wrapper>
    </div>
  );
};

const socialIcons = [
  {
    path: 'https://x.com/ManifestTrade',
    name: (
      <Icons.twiter className='h-6 w-auto' />
    ),
  },
  {
    path: 'https://github.com/CKS-Systems/manifest',
    name: (
      <Icons.githHub className='h-6 w-auto' />
    ),
  },
  {
    path: 'https://github.com/CKS-Systems/manifest/tree/main/docs',
    name: (
      <Icons.gitBook className='h-8 w-auto cursor-not-allowed opacity-60' />
    ),
  },
];

export default Footer;

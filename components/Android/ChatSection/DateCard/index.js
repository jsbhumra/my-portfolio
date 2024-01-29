import React from 'react'

export default function DateCard({ date }) {
  return (
    <div className='px-[7%] mb-[12px] flex flex-row justify-center'>
        <div className='mb-0 px-[12px] pt-[5px] pb-[6px] text-center bg-[hsla(0,0%,100%,0.95)] dark:bg-[#182229] rounded-[7.5px] inline-block max-w-full text-[12.5px] leading-[21px] text-[#54656f] dark:text-[#8696a0] relative min-h-0 capitalize ' style={{ boxShadow: '0 1px 0.5px rgba(11,20,26,.13)' }}>
            {date}
        </div>
    </div>
  )
}

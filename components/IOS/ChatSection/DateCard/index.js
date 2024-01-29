import React from 'react'

export default function DateCard({ date }) {
  return (
    <div className='px-[7%] mb-[12px] flex flex-row justify-center'>
        <div className='mb-0 px-[27px] text-center bg-[hsla(0,0%,100%,0.95)] dark:bg-[#182229] rounded-full inline-block max-w-full text-[12.5px] leading-[21px] text-[#54656f] dark:text-[#8696a0] relative min-h-0 capitalize '>
            {date}
        </div>
    </div>
  )
}

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Channel({ followed, name, image, theme }) {

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={`rounded-[16px] px-[8px] border border-solid ${followed ? "hover:bg-[rgba(52,183,241,0.1)] dark:hover:bg-[rgba(52,183,241,0.2)]" : "hover:bg-[rgba(0,0,0,.1)] dark:hover:bg-[#1f2c33]"} border-[#e9edef] dark:border-[rgba(52,183,241,0.1)] flex grow-0 pb-[8px] shrink items-center justify-start flex-col w-[112px] pt-[12px]`}>
      <div role='button' className='cursor-pointer flex grow-0 shrink basis-auto min-h-[92px] min-w-0 w-[72px] items-center justify-start flex-col flex-nowrap'>
        <div className='relative'>
          <div className='absolute p-[1px] rounded-full -right-[3px] -bottom-[3px] pointer-events-none w-[20px] h-[20px] z-[250] bg-white dark:bg-black'>
            <span><svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" className="dh5rsm73 hpdpob1j" version="1.1" x="0px" y="0px" enableBackground="new 0 0 18 18"><title>psa-verified</title><polygon id="Star-2" fill="#00DA60" points="9,16 7.1,16.9 5.8,15.2 3.7,15.1 3.4,13 1.5,12 2.2,9.9 1.1,8.2 2.6,6.7 2.4,4.6 4.5,4 5.3,2 7.4,2.4 9,1.1 10.7,2.4 12.7,2 13.6,4 15.6,4.6 15.5,6.7 17,8.2 15.9,9.9 16.5,12 14.7,13 14.3,15.1 12.2,15.2 10.9,16.9 "></polygon><polygon id="Check-Icon" fill="#FFFFFF" points="13.1,7.3 12.2,6.5 8.1,10.6 5.9,8.5 5,9.4 8,12.4 "></polygon></svg></span>
          </div>
          <div className='h-[64px] w-[64px] rounded-full border border-solid border-[rgba(134,150,160,0.15)] relative'>
            <Image src={image} width={64} height={64} className='rounded-full overflow-hidden h-full w-full object-center object-cover relative block bg-white' />
          </div>
        </div>
        <div className='text-center w-[72px] text-nowrap overflow-hidden min-h-[20px] mt-[8px]'>
          <div className='overflow-hidden text-[#111b21] dark:text-[#e9edef] text-[0.8125rem] text-ellipsis leading-[1.5385] font-normal'>
            {name}
          </div>
        </div>
      </div>
      <button className='p-[6px] border-0 bg-transparent text-[100%] cursor-pointer'>
        <div className={`flex flex-row min-h-0 min-w-0 grow-0 shrink basis-auto items-center justify-start flex-nworap rounded-full py-[2px] px-[20px] ${!followed && "bg-[rgba(52,183,241,0.15)]" }`}>
          <div className='leading-[1.2]text-[0.875rem] font-normal' style={{ color: followed ? '#667781' : '#34B7F1' }}>
            {followed ? 'Following' : 'Follow'}
          </div>
        </div>
      </button>
    </div>
  )
}

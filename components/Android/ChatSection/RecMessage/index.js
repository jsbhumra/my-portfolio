import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const useWindowSize = () => {

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  return [height, width]
}

export default function RecMessage({ text, time, from, nameColor, first, last, theme }) {

  const [mounted, setMounted] = useState(false)

      const [currentWidth, setCurrentWidth] = useState(0);

    const [screenHeight, screenWidth] = useWindowSize();
    const screenSize = global?.window && window.innerWidth;
    let currWidth;
    useEffect(()=>{
        console.log("now")
        switch (true) {
        case screenSize > 1300:
          currWidth = "65";
          break;
        case screenSize < 1300 && screenSize > 1024:
          currWidth = "75";
          break;
        case screenSize < 1024 && screenSize > 900:
          currWidth = "85";
          break;
        case screenSize < 900:
          currWidth = "90";
          break;
    
        default:
          currWidth = "90"
          break;
      }
      setCurrentWidth(currWidth)
      },[screenSize])

      useEffect(() => {
        setMounted(true)
      }, [])
    
      if (!mounted) {
        return null
      }

    console.log("Theme is" + theme)

  return (
    <div role='row' className='group/row'>
        <div className={`relative ${last ? "mb-[12px]" : "mb-[2px]"}`}>
            <div className={`flex flex-col items-start group/message ${screenWidth>968 ? "pr-[57px] pl-[71px]" : "pr-[20px] pl-[45px]"} `}>
              <div className='relative rounded-[13.5px] grow-0 shrink-0 basis-auto text-[14.2px] leading-[19px] text-[#111b21] dark:text-[#e9edef] w-auto' style={{ maxWidth: `${currentWidth}%` }}>
                {first && <div className='absolute -left-[6px] text-[#fff] dark:text-[#202c33] top-0 block w-[8px] h-[13px]'><svg viewBox="0 0 8 13" height="13" width="8" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 8 13"><title>tail-in</title><path opacity="0.13" fill="#0000000" d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"></path><path fill="currentColor" d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"></path></svg></div>}
                {first && <div className='absolute cursor-pointer rounded-full -left-[38px] h-[28px] w-[28px] '>
                  <Image src='/jagjit.png' width={28} height={28} className='rounded-full overflow-hidden h-full w-full object-center relative' />
                </div>}
                <div className='relative rounded-[13.5px] bg-white dark:bg-[#202c33]' style={{ borderTopLeftRadius: first ? '0' : '13.5px', boxShadow: '0 1px 0.5px rgba(11,20,26,.13)' }}>
                  <div className='pl-[9px] pr-[8px] pt-[6px] pb-[8px]'>
                    {first && <div className='inline-flex max-w-full text-[12.8px] leading-[22px] font-medium' style={{ color: nameColor }}>
                      <span className='min-h-0 pl-[2px] -ml-[2px] grow-0 shrink basis-auto overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer hover:underline'>
                        {from}
                      </span>
                    </div>}
                    <div>
                      <div className='relative break-word whitespace-pre-wrap'>
                        <span className='min-h-0'>{text}</span>
                        <span className='px-[4px] py-0 text-[0.6875rem] align-middle invisible inline-flex leading-[15px] h-0'>
                          <span className='grow-0 shrink-0'>{time}</span>
                        </span>
                      </div>
                    </div>
                    <div className='ml-[4px] mr-0 relative float-right -mb-[5px] -mt-[10px]'>
                      <div className='flex text-[0.6875rem] whitespace-nowrap items-center h-[15px] leading-[15px] text-[#667781] dark:text-[hsla(0,0%,100%,0.6)]'>
                        <span className='inline-block align-top'>{time}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='right-[5px] absolute top-[5px] w-[42px] h-[27px] overflow-hidden opacity-0 dark:opacity-0 group-hover/message:opacity-100 dark:group-hover/message:opacity-100 z-30' style={{ background: theme=="dark" ? 'radial-gradient(at top right,rgba(32,44,51,1) 60%,rgba(32,44,51,0) 80%' : 'radial-gradient(at top right,rgba(255,255,255,1) 60%,rgba(255,255,255,0) 80%)'}}>
                    <div className='right-2 px-[3px] cursor-pointer absolute top-[2px] w-[18px] h-[18px] text-[#8696a0] dark:text-[hsla(0,0%,100%,0.5)] opacity-80'>
                        <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 18 18"><title>down-context</title><path fill="currentColor" d="M3.3,4.6L9,10.3l5.7-5.7l1.6,1.6L9,13.4L1.7,6.2L3.3,4.6z"></path></svg>
                    </div>
                </div>
                <div className='-right-[108px] py-0 px-[4px] -mt-[13px] absolute top-1/2 w-[101px] flex flex-row min-h-0 min-w-0 items-center justify-start flex-nowrap invisible group-hover/row:visible'>
                  <div className='px-[3px] py-0 grow-0 h-[25px] shrink basis-auto self-auto min-w-0 min-h-0'>
                    <div role='button' className='p-0 rounded-full h-[25px] w-[25px] flex uppercase text-[#fff] dark:text-[#e9edef] bg-[rgba(11,20,26,0.2)] dark:bg-[rgba(0,0,0,0.7)] font-medium align-center text-[0.875rem] justify-center shadow-none'>
                      <span className='text-white dark:text-[rgba(233,237,239,0.5)] my-auto'><svg viewBox="0 0 15 15" width="15" preserveAspectRatio="xMidYMid meet" className="" fill="none"><title>react</title><path fillRule="evenodd" clipRule="evenodd" d="M0 7.5C0 11.6305 3.36946 15 7.5 15C11.6527 15 15 11.6305 15 7.5C15 3.36946 11.6305 0 7.5 0C3.36946 0 0 3.36946 0 7.5ZM10.995 8.69333C11.1128 8.67863 11.2219 8.66503 11.3211 8.65309C11.61 8.63028 11.8076 8.91918 11.6784 9.13965C10.8573 10.6374 9.29116 11.793 7.50455 11.793C5.71794 11.793 4.15181 10.6602 3.33072 9.16246C3.18628 8.91918 3.37634 8.63028 3.66524 8.65309C3.79123 8.66749 3.93521 8.68511 4.09426 8.70457C4.94292 8.80842 6.22074 8.96479 7.48174 8.96479C8.81855 8.96479 10.1378 8.80025 10.995 8.69333ZM5.41405 7.37207C6.05761 7.37207 6.60923 6.72851 6.60923 6.02978C6.60923 5.30348 6.05761 4.6875 5.41405 4.6875C4.77048 4.6875 4.21886 5.33106 4.21886 6.02978C4.20967 6.75609 4.77048 7.37207 5.41405 7.37207ZM10.7807 6.05619C10.7807 6.74114 10.24 7.37201 9.60912 7.37201C8.97825 7.37201 8.4375 6.76818 8.4375 6.05619C8.4375 5.37124 8.97825 4.74037 9.60912 4.74037C10.24 4.74037 10.7807 5.34421 10.7807 6.05619Z" fill="currentColor"></path></svg></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

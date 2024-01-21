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
    <div role='row'>
        <div className={`relative ${last ? "mb-[12px]" : "mb-[2px]"}`}>
            <div className={`flex flex-col items-start ${screenWidth>968 ? "pr-[57px] pl-[71px]" : "pr-[20px] pl-[45px]"} `}>
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
              </div>
            </div>
        </div>
    </div>
  )
}

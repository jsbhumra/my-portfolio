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
              {last && <div className='absolute -left-[14px] text-[#ffffff] dark:text-[#37393c] -bottom-[7.5px] block rotate-[0deg] w-[40px] h-[50px]' /*style={{ textShadow: '0 1px 0.5px rgba(11,20,26,.13)' }}*/><svg viewBox="0 0 512 512" height="50" width="40" fill='currentColor' xmlns="http://www.w3.org/2000/svg"><path d="M 464 440 L 435.88 407.89 C 413.4 382.24 392.55 362.44 363.8 349.19 C 337.19 336.93 303.8 330.54 259.53 329.35 L 259.366 285.676 L 259.496 251.187 L 259.479 205.898 L 259.53 175.21 C 332.41 178.21 386.71 202.29 421.09 246.96 C 449.56 284 464 335.19 464 399.26 L 464 440 Z" style={{ transform:"matrix(0, 1, -1, 0, 512, 0.000004000000444648322)", filter: 'drop-shadow(10px -10px 5px rgba(11,20,26,.13))'}}/></svg></div>}
                {last && <div className='absolute cursor-pointer rounded-full bottom-[3px] -left-[35px] h-[28px] w-[28px] '>
                  <Image src='/jagjit.png' width={28} height={28} className='rounded-full overflow-hidden h-full w-full object-center relative' />
                </div>}
                <div className='relative rounded-[10px] bg-white dark:bg-[#37393c]' style={{ boxShadow: '1px 1px 0.5px rgba(11,20,26,.13)' }}>
                  <div className='pl-[9px] pr-[8px] pt-[6px] pb-[8px]'>
                    {first && <div className='inline-flex max-w-full text-[12.8px] leading-[22px] font-medium' style={{ color: nameColor }}>
                      <span className='min-h-0 pl-[2px] -ml-[2px] grow-0 shrink basis-auto overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer hover:underline'>
                        {from}
                      </span>
                    </div>}
                    <div>
                      <div className='relative break-word whitespace-pre-wrap'>
                        <span className='min-h-0' dangerouslySetInnerHTML={{ __html: text }}></span>
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

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

export default function SentMessage({ text, time, read, first, last, theme }) {

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

  return (
    <div role='row'>
        <div className={`relative ${last ? "mb-[12px]" : "mb-[2px]"}`}>
            <div className={`flex flex-col items-end ${screenWidth>968 ? "px-[63px]" : "pr-[10px] pl-[25px]"} `}>
                <div className='relative rounded-[13.5px] grow-0 shrink-0 basis-auto text-[14.2px] leading-[19px] text-[#111b21] dark:text-[#e9edef] w-auto' style={{ maxWidth: `${currentWidth}%` }}>
                    {last && <div className='absolute -right-[14px] text-[#d9fdd3] dark:text-[#005c4b] -bottom-[7.5px] block -rotate-[0deg] w-[40px] h-[50px]' /*style={{ textShadow: '0 1px 0.5px rgba(11,20,26,.13)' }}*/><svg viewBox="0 0 512 512" height="50" width="40" fill='currentColor' xmlns="http://www.w3.org/2000/svg"><path d="M 464 72 L 435.88 104.11 C 413.4 129.76 392.55 149.56 363.8 162.81 C 337.19 175.07 303.8 181.46 259.53 182.65 L 259.366 226.324 L 259.496 260.813 L 259.479 306.102 L 259.53 336.79 C 332.41 333.79 386.71 309.71 421.09 265.04 C 449.56 228 464 176.81 464 112.74 L 464 72 Z" style={{transformOrigin: '256px 256px', transform:"matrix(0, 1, -1, 0, 0, 0)", filter: 'drop-shadow(12.5px 20px 5px rgba(11,20,26,.13))'}}/></svg></div>}
                    <div className='relative rounded-[10px] bg-[#d9fdd3] dark:bg-[#005c4b] ' style={{ boxShadow: '-1px 1px 0.5px rgba(11,20,26,.13)' }}>
                        <div className='pl-[9px] pr-[7px] pt-[6px] pb-[8px]'>
                            <div>
                                <div className='relative break-word whitespace-pre-wrap'>
                                    <span className='min-h-0' dangerouslySetInnerHTML={{ __html: text }}></span>
                                    <span className='px-[4px] py-0 text-[0.6875rem] align-middle invisible inline-flex leading-[15px] h-0'>
                                        <span className='grow-0 w-[19px] shrink-0 '></span>
                                        <span className='grow-0 shrink-0'>{time}</span>
                                    </span>
                                </div>
                            </div>
                            <div className='ml-[4px] mr-0 relative float-right -mb-[5px] -mt-[10px]'>
                                <div className='flex text-[0.6875rem] whitespace-nowrap items-center h-[15px] leading-[15px] text-[#667781] dark:text-[hsla(0,0%,100%,0.6)]'>
                                    <span className='inline-block align-top'>{time}</span>
                                    <div className='ml-[3px] inline-block h-[11px]' style={{ color: read ? '#53bdeb' : theme=="dark" ? 'hsla(0,0%,100%,0.5)' : '#8696a0' }}>
                                        <svg viewBox="0 0 16 11" height="11" width="16" preserveAspectRatio="xMidYMid meet" className="" fill="none"><title>msg-dblcheck</title><path d="M11.0714 0.652832C10.991 0.585124 10.8894 0.55127 10.7667 0.55127C10.6186 0.55127 10.4916 0.610514 10.3858 0.729004L4.19688 8.36523L1.79112 6.09277C1.7488 6.04622 1.69802 6.01025 1.63877 5.98486C1.57953 5.95947 1.51817 5.94678 1.45469 5.94678C1.32351 5.94678 1.20925 5.99544 1.11192 6.09277L0.800883 6.40381C0.707784 6.49268 0.661235 6.60482 0.661235 6.74023C0.661235 6.87565 0.707784 6.98991 0.800883 7.08301L3.79698 10.0791C3.94509 10.2145 4.11224 10.2822 4.29844 10.2822C4.40424 10.2822 4.5058 10.259 4.60313 10.2124C4.70046 10.1659 4.78086 10.1003 4.84434 10.0156L11.4903 1.59863C11.5623 1.5013 11.5982 1.40186 11.5982 1.30029C11.5982 1.14372 11.5348 1.01888 11.4078 0.925781L11.0714 0.652832ZM8.6212 8.32715C8.43077 8.20866 8.2488 8.09017 8.0753 7.97168C7.99489 7.89128 7.8891 7.85107 7.75791 7.85107C7.6098 7.85107 7.4892 7.90397 7.3961 8.00977L7.10411 8.33984C7.01947 8.43717 6.97715 8.54508 6.97715 8.66357C6.97715 8.79476 7.0237 8.90902 7.1168 9.00635L8.1959 10.0791C8.33132 10.2145 8.49636 10.2822 8.69102 10.2822C8.79681 10.2822 8.89838 10.259 8.99571 10.2124C9.09304 10.1659 9.17556 10.1003 9.24327 10.0156L15.8639 1.62402C15.9358 1.53939 15.9718 1.43994 15.9718 1.32568C15.9718 1.1818 15.9125 1.05697 15.794 0.951172L15.4386 0.678223C15.3582 0.610514 15.2587 0.57666 15.1402 0.57666C14.9964 0.57666 14.8715 0.635905 14.7657 0.754395L8.6212 8.32715Z" fill="currentColor"></path></svg>
                                    </div>
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

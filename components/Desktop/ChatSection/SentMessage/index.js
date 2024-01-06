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
          currWidth = "95";
          break;
    
        default:
          currWidth = "95"
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
    <div role='row' className='group/row'>
        <div className={`relative ${last ? "mb-[12px]" : "mb-[2px]"}`}>
            <div className={`flex flex-col items-end group/message ${screenWidth>968 ? "px-[63px]" : "pr-[19px] pl-[25px]"} `}>
                <div className='relative rounded-[7.5px] grow-0 shrink-0 basis-auto text-[14.2px] leading-[19px] text-[#111b21] dark:text-[#e9edef] w-auto' style={{ maxWidth: `${currentWidth}%` }}>
                    {first && <div className='absolute -right-[8px] text-[#d9fdd3] dark:text-[#005c4b] top-0 block w-[8px] h-[13px]'><svg viewBox="0 0 8 13" height="13" width="8" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 8 13"><title>tail-out</title><path opacity="0.13" d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"></path><path fill="currentColor" d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"></path></svg></div>}
                    <div className='relative rounded-[7.5px] bg-[#d9fdd3] dark:bg-[#005c4b] ' style={{ borderTopRightRadius: first ? '0' : '7.5px', boxShadow: '0 1px 0.5px rgba(11,20,26,.13)' }}>
                        <div className='pl-[9px] pr-[7px] pt-[6px] pb-[8px]'>
                            <div>
                                <div className='relative break-word whitespace-pre-wrap'>
                                    <span className='min-h-0'>{text}</span>
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
                    <div className='right-[5px] absolute top-[5px] w-[42px] h-[27px] overflow-hidden opacity-0 group-hover/message:opacity-100 z-30' style={{ background: theme=="dark" ? 'radial-gradient(at top right,rgba(0,92,75,1) 60%,rgba(0,92,75,0) 80%' : 'radial-gradient(at top right,rgba(217,253,211,1) 60%,rgba(217,253,211,0) 80%)' }}>
                        <div className='right-2 px-[3px] cursor-pointer absolute top-[2px] w-[18px] h-[18px] text-[#8696a0] dark:text-[hsla(0,0%,100%,0.5)] opacity-80'>
                            <svg viewBox="0 0 18 18" height="18" width="18" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 18 18"><title>down-context</title><path fill="currentColor" d="M3.3,4.6L9,10.3l5.7-5.7l1.6,1.6L9,13.4L1.7,6.2L3.3,4.6z"></path></svg>
                        </div>
                    </div>
                    <div className='py-0 px-[4px] absolute top-1/2 w-[101px] flex flex-row min-h-0 min-w-0 items-center justify-end flex-nowrap -mt-[13px] -left-[108px] invisible group-hover/row:visible'>
                        <div className='px-[3px] py-0 grow-0 h-[25px] shrink basis-auto self-auto min-w-0 min-h-0'>
                            <div role='button' className='p-0 rounded-full h-[25px] w-[25px] flex uppercase bg-[rgba(11,20,26,0.2)] dark:bg-[rgba(0,0,0,0.7)] font-medium align-center text-[0.875rem] justify-center shadow-none'>
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

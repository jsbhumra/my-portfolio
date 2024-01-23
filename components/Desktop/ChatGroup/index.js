"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

export default function ChatGroup({ name, datetime, text, img, mute, onClick, selected, theme }) {

    const [hover, setHover] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
      }, [])
    
      if (!mounted) {
        return null
      }


  return (
    <div className="group h-[72px] w-full cursor-pointer" style={{ background: theme=="dark" ? selected ? '#293942' : hover ? '#1f2c33' : 'transparent' : selected ? '#f0f2f5' : hover ? '#f5f6f6' : 'transparent' }} onClick={onClick} onMouseEnter={()=>{setHover(true)}} onMouseLeave={()=>{setHover(false)}}>
        <div className="flex flex-row w-full h-full items-center">
            <div className="px-[13px]">
                <div className="relative h-[49px] w-[49px] rounded-full m-0 bg-[#008069] dark:bg-[#6b7175]">
                    {/* <Image src='https://picsum.photos/200' width={49} height={49} className="object-cover rounded-full" /> */}
                    <Image src={`/group-icons/${img}`} width={30} height={30} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ filter: theme!="dark" && 'brightness(0) invert(1)' }} />
                </div>
            </div>
            <div className="flex flex-col justify-center overflow-hidden h-full w-full border-b border-solid border-[#e9edef] dark:border-[#222d34] pr-[15px]">
                <div className="w-full flex items-center text-left justify-between overflow-hidden whitespace-nowrap">
                    <div className="text-left overflow-hidden leading-[21px] text-[16px] font-normal overflow-hidden whitespace-nowrap text-ellipsis text-[#111b21] dark:text-[#e9edef]">
                    {name}
                    </div>
                    <div className="mt-[3px] ml-[3px] leading-[14px] text-[12px] max-w-full overflow-hidden whitespace-nowrap text-ellipsis text-[#667781] dark:text-[#8696a0]">
                        {datetime}
                    </div>
                </div>
                <div className="w-full mt-[2px] overflow-hidden flex justify-between items-center min-h-[20px] text-[13px] leading-[20px] text-[#667781] dark:text-[#8696a0]">
                    <div className="flex text-left overflow-hidden leading-[20px] text-[14px] whitespace-nowrap font-normal text-[#8596a1] dark:text-[#8696a0]">
                    <div className="overflow-hidden text-ellipsis whitespace-nowrap" dangerouslySetInnerHTML={{ __html: text }}></div>
                    </div>
                    <div className="flex flex-row ml-[6px] max-w-full text-[12px] leading-[20px] text-[#8596a1] dark:text-[#8696a0]">
                        {mute && <span><svg viewBox="0 0 16 18" height="18" width="16" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 16 18"><title>muted</title><path fill="currentColor" d="M11.52,9.206c0-1.4-0.778-2.567-1.944-3.111v1.711L11.52,9.75 C11.52,9.517,11.52,9.362,11.52,9.206z M13.465,9.206c0,0.7-0.156,1.4-0.389,2.022l1.167,1.167c0.544-0.933,0.778-2.1,0.778-3.267 c0-3.344-2.333-6.144-5.444-6.844v1.633C11.832,4.695,13.465,6.717,13.465,9.206z M2.032,2.206L1.02,3.217l3.656,3.656H1.02v4.667 h3.111l3.889,3.889v-5.211l3.344,3.344c-0.544,0.389-1.089,0.7-1.789,0.933v1.633c1.089-0.233,2.022-0.7,2.878-1.4l1.556,1.556 l1.011-1.011l-7-7L2.032,2.206z M8.02,2.984L6.387,4.617L8.02,6.25V2.984z"></path></svg></span>}
                        <span className="hidden group-hover:inline-block">
                            <button className="w-[20px] ml-[4px] h-[20px] align-top inline-block text-[#8596a1] dark:text-[#8696a0]">
                                <span><svg viewBox="0 0 19 20" height="20" width="19" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px"><title>down</title><path fill="currentColor" d="M3.8,6.7l5.7,5.7l5.7-5.7l1.6,1.6l-7.3,7.2L2.2,8.3L3.8,6.7z"></path></svg></span>
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

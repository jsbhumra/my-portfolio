import React from 'react'
import { motion } from "framer-motion"

export default function Section({ title, text }) {
  return (
    <motion.div animate={{ opacity: [0,0,1], translateY: [-50,-50,0] }} transition={{ times: [0, 0.35, 1], duration: 0.8, ease: "easeInOut" }} className='px-[30px] grow-0 shrink-0 bg-white dark:bg-[#111b21] basis-auto pt-[14px] pb-[15px] mb-[10px] relative z-[220]' style={{ boxShadow: '0 1px 3px rgba(11,20,26,0.08)' }}>
        <div className='p-0 mb-[5px]'>
            <div className='flex items-center overflow-hidden text-ellipsis whitespace-nowrap relative grow shrink basis-auto'>
                <span className='leading-[1.2] text-[#008069] text-[0.875rem] font-normal'>{title}</span>
            </div>
        </div>
        <div className='relative break-words text-[rgba(0,0,0,.8)] dark:text-[#d1d7db]'>
            <div className='flex relative items-start'>
                <div className='pr-[5px] pt-[8px] grow shrink basis-0 overflow-hidden leading-[20px] break-words'>
                    <span className='min-h-0 overflow-hidden text-ellipsis whitespace-pre-line relative'>
                        <span className='w-full block'>{text}</span>
                    </span>
                </div>
                <div className='pt-[8px] relative grow-0 shrink-0 basis-auto w-[24px] h-[24px]'>
                    <button className='p-0 bg-transparent border-0 cursor-pointer outline-0 m-0'>
                        <span className='text-[#8696a0]'><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>pencil</title><path fill="currentColor" d="M3.95,16.7v3.4h3.4l9.8-9.9l-3.4-3.4L3.95,16.7z M19.75,7.6c0.4-0.4,0.4-0.9,0-1.3 l-2.1-2.1c-0.4-0.4-0.9-0.4-1.3,0l-1.6,1.6l3.4,3.4L19.75,7.6z"></path></svg></span>
                    </button>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from "framer-motion"
import Constants from '@/components/Constants/page'
import Section from './Section/page';

export default function Profile({ onHide, anim }) {

    const sections = Constants.ProfileSections;
    console.log(sections)

  return (
    <div className='absolute h-full w-full left-0 right-0 top-0 bottom-0 pointer-events-auto bg-[#f0f2f5] dark:bg-[#111b21]'>
        <div className='pl-[23px] pr-[20px] flex justify-end bg-[#008069] dark:bg-[#202c33] h-[108px] flex-col text-white dark:text-[#d9dee0] grow-0 shrink-0 basis-auto'>
            <div className='p-0 bg-transparent flex h-[59px] w-full items-center grow-0 shrink-0 basis-auto'>
                <div className='w-[60px] grow-0 shrink-0 basis-auto'>
                    <div className='ml-0 rounded-full flex relative grow-0 shrink-0 basis-auto h-[40px] w-[40px] cursor-pointer hover:bg-[rgba(255,255,255,.2)] dark:hover:bg-[#384147]' onClick={onHide}>
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer align-top text-[#d9dee0]'>
                            <span><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>back</title><path fill="currentColor" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path></svg></span>
                        </div>
                    </div>
                </div>
                <div className='overflow-hidden leading-[23px] -mt-[1px] text-[1.1875rem] font-medium grow break-words max-h-[46px] '>
                    <h1>Profile</h1>
                </div>
            </div>
        </div>
        <div className='flex basis-0 grow overflow-x-hidden overflow-y-auto relative flex-col h-max'>
            {anim && <motion.div animate={{ scale: [0, 0, 1] }} transition={{ times: [0, 0.2, 1], duration: 0.5, ease: "easeInOut" }} className='grow-0 shrink-0 origin-center flex basis-auto my-[28px] justify-center z-[250]'>
                <div className='relative mx-auto w-[200px] h-[200px] cursor-pointer'>
                    <div className='mx-auto relative cursor-pointer h-full w-full overflow-hidden bg-no-repeat bg-center bg-contain rounded-full'>
                        <div className='absolute left-0 top-0 w-full h-full rounded-full'>
                            <Image src='/jagjit.png' width={200} height={200} className='rounded-full w-full h-full' />
                        </div>
                    </div>
                </div>
            </motion.div>}
            {sections.map((sect,i)=>{
                i++;
                return(
                    anim && <Section key={"sect"+i.toString()} title={sect.title} text={sect.text} />
                )
            })}
            {/* {anim && <motion.div animate={{ opacity: [0,0,1], translateY: [-50,-50,0] }} transition={{ times: [0, 0.35, 1], duration: 0.8, ease: "easeInOut" }} className='px-[30px] grow-0 shrink-0 bg-[#111b21] basis-auto pt-[14px] pb-[10px] mb-[10px] relative z-[220]'>
                <div className='p-0 mb-[14px]'>
                    <div className='flex items-center overflow-hidden text-ellipsis whitespace-nowrap relative grow shrink basis-auto'>
                        <span className='leading-[1.2] text-[#008069] text-[0.875rem] font-normal'>Your name</span>
                    </div>
                </div>
                <div className='relative break-words text-[#d1d7db]'>
                    <div className='flex relative items-start'>
                        <div className='pr-[5px] pt-[8px] grow shrink basis-0 overflow-hidden leading-[20px] break-words'>
                            <span className='min-h-0 overflow-hidden text-ellipsis whitespace-pre-line relative'>
                                <span className='w-full block'>Jagjit Singh Bhumra</span>
                            </span>
                        </div>
                        <div className='pt-[8px] relative grow-0 shrink-0 basis-auto w-[24px] h-[24px]'>
                            <button className='p-0 bg-transparent border-0 cursor-pointer outline-0 m-0'>
                                <span className='text-[#8696a0]'><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>pencil</title><path fill="currentColor" d="M3.95,16.7v3.4h3.4l9.8-9.9l-3.4-3.4L3.95,16.7z M19.75,7.6c0.4-0.4,0.4-0.9,0-1.3 l-2.1-2.1c-0.4-0.4-0.9-0.4-1.3,0l-1.6,1.6l3.4,3.4L19.75,7.6z"></path></svg></span>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>}
            {anim && <motion.div animate={{ opacity: [0,0,1], translateY: [-50,-50,0] }} transition={{ times: [0, 0.35, 1], duration: 0.8, ease: "easeInOut" }} className='px-[30px] grow-0 shrink-0 bg-[#111b21] basis-auto pt-[14px] pb-[10px] mb-[10px] relative z-[220]'>
                <div className='p-0 mb-[14px]'>
                    <div className='flex items-center overflow-hidden text-ellipsis whitespace-nowrap relative grow shrink basis-auto'>
                        <span className='leading-[1.2] text-[#008069] text-[0.875rem] font-normal'>About</span>
                    </div>
                </div>
                <div className='relative break-words text-[#d1d7db]'>
                    <div className='flex relative items-start'>
                        <div className='pr-[5px] pt-[8px] grow shrink basis-0 overflow-hidden leading-[20px] break-words'>
                            <span className='min-h-0 overflow-hidden text-ellipsis whitespace-pre-line relative'>
                                <span className='w-full block'>Geek. Techie. Gamer. Tinkerer.</span>
                            </span>
                        </div>
                        <div className='pt-[8px] relative grow-0 shrink-0 basis-auto w-[24px] h-[24px]'>
                            <button className='p-0 bg-transparent border-0 cursor-pointer outline-0 m-0'>
                                <span className='text-[#8696a0]'><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>pencil</title><path fill="currentColor" d="M3.95,16.7v3.4h3.4l9.8-9.9l-3.4-3.4L3.95,16.7z M19.75,7.6c0.4-0.4,0.4-0.9,0-1.3 l-2.1-2.1c-0.4-0.4-0.9-0.4-1.3,0l-1.6,1.6l3.4,3.4L19.75,7.6z"></path></svg></span>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>}
            {anim && <motion.div animate={{ opacity: [0,0,1], translateY: [-50,-50,0] }} transition={{ times: [0, 0.35, 1], duration: 0.8, ease: "easeInOut" }} className='px-[30px] grow-0 shrink-0 bg-[#111b21] basis-auto pt-[14px] pb-[10px] mb-[10px] relative z-[220]'>
                <div className='p-0 mb-[14px]'>
                    <div className='flex items-center overflow-hidden text-ellipsis whitespace-nowrap relative grow shrink basis-auto'>
                        <span className='leading-[1.2] text-[#008069] text-[0.875rem] font-normal'>Bio</span>
                    </div>
                </div>
                <div className='relative break-words text-[#d1d7db]'>
                    <div className='flex relative items-start'>
                        <div className='pr-[5px] pt-[8px] grow shrink basis-0 overflow-hidden leading-[20px] break-words'>
                            <span className='min-h-0 overflow-hidden text-ellipsis whitespace-pre-line relative'>
                                <span className='w-full block'>Words are, in my not-so-humble opinion, our most inexhaustible source of magic. Capable of both inflicting injury, and remedying it.</span>
                            </span>
                        </div>
                        <div className='pt-[8px] relative grow-0 shrink-0 basis-auto w-[24px] h-[24px]'>
                            <button className='p-0 bg-transparent border-0 cursor-pointer outline-0 m-0'>
                                <span className='text-[#8696a0]'><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>pencil</title><path fill="currentColor" d="M3.95,16.7v3.4h3.4l9.8-9.9l-3.4-3.4L3.95,16.7z M19.75,7.6c0.4-0.4,0.4-0.9,0-1.3 l-2.1-2.1c-0.4-0.4-0.9-0.4-1.3,0l-1.6,1.6l3.4,3.4L19.75,7.6z"></path></svg></span>
                            </button>
                        </div>
                    </div>
                </div>
            </motion.div>} */}
        </div>
    </div>
  )
}

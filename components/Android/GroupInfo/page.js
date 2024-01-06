"use client"
import React, { useState } from 'react'
import { MotionConfig, motion } from "framer-motion"
import Image from 'next/image'
import Constants from "../../Constants/page"

export default function GroupInfo({ onHide, anim, curr, theme }) {

    const [collapsed, setCollapsed] = useState(true)

    const Chat = Constants.Chats.find(Chat => Chat.id === curr)
    const muted = Chat.muted

  return (
    <div className='absolute left-0 top-0 w-full h-full bg-[#f0f2f5] dark:bg-[#0c1317] flex flex-col overflow-hidden'>
        <div className='pr-[20px] pl-[25px] text-[#d1d7db] flex items-center bg-[#00a683] dark:bg-[#202c33] h-[59px] grow-0 shrink-0 basis-auto'>
            <div className='p-0 text-[#ffffff] dark:text-[#e9edef] flex font-normal w-full items-center grow-0 shrink-0 basis-auto'>
                <div className='w-[54px] grow-0 shrink-0 basis-auto'>
                    <div role='button' className='cursor-pointer text-[#ffffff] dark:text-[#8696a0] w-fit align-top' onClick={onHide}>
                        <span><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" fill="currentColor" enableBackground="new 0 0 24 24"><title>x</title><path d="M19.6004 17.2L14.3004 11.9L19.6004 6.60005L17.8004 4.80005L12.5004 10.2L7.20039 4.90005L5.40039 6.60005L10.7004 11.9L5.40039 17.2L7.20039 19L12.5004 13.7L17.8004 19L19.6004 17.2Z"></path></svg></span>
                    </div>
                </div>
                <div className='leading-normal overflow-hidden font-medium -mt-[1px] grow break-words text-[1.2rem] max-h-[46px] '>
                    <h1>Group Info</h1>
                </div>
            </div>
        </div>
        <div className={`grow basis-0 relative flex overflow-x-hidden overflow-y-auto flex-col ${theme}`}>
            <div className='grow-0 shrink-0 basis-auto block pb-[32px] '>
                {anim && <MotionConfig animate={{ opacity: [0,0,1], translateY: [-50,-50,0] }} transition={{ times: [0, 0.35, 1], duration: 0.8, ease: "easeInOut" }}>
                    <motion.div className='px-[30px] pb-[19px] bg-white dark:bg-[#111b21] relative mb-[10px] pt-[28px]' style={{ boxShadow: theme=="dark" ? '0 2px 4px rgba(11,20,26,.16)' : '0 1px 3px rgba(11,20,26,0.08)' }}>
                        <div className='flex min-h-0 min-w-0 items-center justify-start flex-col flex-nowrap'>
                            <div className='mb-[7px]'>
                                <div className='mx-auto relative cursor-pointer w-[200px] h-[200px]'>
                                    <div className='cursor-pointer mx-auto bg-no-repeat bg-contain rounded-full relative w-full h-full bg-center overflow-hidden bg-[#00a683] dark:bg-[#2d383f]'>
                                        <Image src={`/group-icons${Chat.img}`} width={120} height={120} className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' style={{ filter: 'brightness(0) invert(1)' }} />
                                    </div>
                                </div>
                            </div>
                            <div className='mr-[24px] text-center max-w-full'>
                                <div className='text-[24px] relative break-words'>
                                    <div className='-mr-[24px] relative flex items-start'>
                                        <div className='px-[10px] py-[6px] grow shrink basis-0 min-w-0 text-center text-[rgba(0,0,0,0.85)] dark:text-[rgba(255,255,255,0.85)]'>
                                            {Chat.name}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='text-center -mt-[2px] leading-[1.5]'>
                                <div className='text-[#667781] text-[1rem] font-normal'>
                                    Group ·&nbsp;
                                    <button className='p-0 border-0 bg-transparent cursor-pointer'>{Chat.members.length} members</button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div className='px-[30px] py-[20px] mb-0 bg-white dark:bg-[#111b21] relative' style={{ boxShadow: theme=="dark" ? '0 2px 4px rgba(11,20,26,.16)' : '0 1px 3px rgba(11,20,26,0.08)' }}>
                        <div className='mx-0 whitespace-pre-wrap'>
                            <div className='min-h-[32px] text-[16px] leading-[24px] relative flex items-start break-words pt-0'>
                                <div className='pt-0 pr-0 pb-[6px] text-[16px] leading-[24px] overflow-hidden grow shrink basis-auto whitespace-pre-wrap'>
                                    <div className='min-h-0 overflow-y-hidden text-ellipsis overflow-x-hidden relative whitespace-pre-line'>
                                        <span className={`w-full block text-[#3b4b54] dark:text-[#d2d7dc] text-ellipsis overflow-hidden whitespace-pre-line ${collapsed ? 'line-clamp-3' : 'line-clamp-none'}`} style={{ display: '-webkit-box' }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum officia unde accusamus dolorum in, quis, quibusdam asperiores fugiat ipsa, nihil id fuga assumenda quidem repellendus autem beatae laborum tempore debitis.</span>
                                    </div>
                                    {collapsed &&<button className='p-0 border-0 bg-transparent cursor-pointer outline-0'>
                                        <span className='text-[#00a884]' onClick={()=>{setCollapsed(false)}}>Read More</span>
                                    </button>}
                                </div>
                            </div>
                        </div>
                        <div className='text-[#8696a0] text-[0.875rem] leading-[1.4286] font-normal text-center'>
                            Group created in June 2017
                        </div>
                    </motion.div>
                    {/* MEDIA, LINKS AND DOCS SECTION */}
                    <motion.div className='px-[30px] bg-white dark:bg-[#111b21] relative pt-[17px] pb-[10px] mb-[10px]' style={{ boxShadow: theme=="dark" ? '0 2px 4px rgba(11,20,26,.16)' : '0 1px 3px rgba(11,20,26,0.08)' }}></motion.div>
                    {/* STARRED MESSAGES SECTION */}
                    <motion.div className='p-0 mb-0 bg-white dark:bg-[#111b21] relative' style={{ boxShadow: theme=="dark" ? '0 2px 4px rgba(11,20,26,.16)' : '0 1px 3px rgba(11,20,26,0.08)' }}></motion.div>
                    <motion.div className='p-0 mb-[10px] bg-white dark:bg-[#111b21] relative' style={{ boxShadow: theme=="dark" ? '0 2px 4px rgba(11,20,26,.16)' : '0 1px 3px rgba(11,20,26,0.08)' }}>
                        <div role="button" className='pl-0 cursor-pointer'>
                            <div className='pr-0 flex items-center h-auto border-0'>
                                <div className='py-[19px] overflow-hidden grow shrink basis-auto text-ellipsis whitespace-normal'>
                                    <div className='mx-[30px]'>
                                        <div className='flex min-h-0 min-w-0 items-center justify-start flex-nowrap'>
                                            <div className='mr-[8px] grow-0 flex shrink-0 basis-auto w-[40px] min-h-0 min-w-0 items-center self-auto flex-nowrap justify-center h-[24px]'>
                                                <span className=' text-[#667781] dark:text-[#8596a1]'><svg viewBox="0 0 24 24" height="20" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>settings-notifications</title><path fill="currentColor" d="M12,21.7c0.9,0,1.7-0.8,1.7-1.7h-3.4C10.3,20.9,11.1,21.7,12,21.7z M17.6,16.5v-4.7 c0-2.7-1.8-4.8-4.3-5.4V5.8c0-0.7-0.6-1.3-1.3-1.3s-1.3,0.6-1.3,1.3v0.6C8.2,7,6.4,9.1,6.4,11.8v4.7l-1.7,1.7v0.9h14.6v-0.9 L17.6,16.5z"></path></svg></span>
                                            </div>
                                            <div className='grow shrink break-words min-w-0 leading-[1.2]'>
                                                <span className='text-[#111b21] dark:text-[#e9edef] leading-[1.375] font-normal text-[1rem]'>{muted ? 'Muted' : 'Mute notifications'}</span>
                                            </div>
                                            <div className='grow-0 shrink-0 basis-auto flex min-h-0 min-w-0 justify-end items-center self-auto flex-nowrap w-[36px]'>
                                                <div className='m-[3px] w-[32px] h-[20px] inline-flex items-center relative cursor-pointer justify-center'>
                                                    <div className={`rounded-[10px] w-[20px] h-[20px] absolute ${theme=="dark" ? muted ? 'right-0 bg-[#01a581]' : 'left-0 bg-[#e9edef]' : muted ? 'right-0 bg-[#018579]' : 'left-0 bg-[#ececec]'}`} style={{ boxShadow: '0 1px 1px rgba(11,20,26,.14),0 2px 1px rgba(11,20,26,.12),0 1px 3px rgba(11,20,26,.2)' }}></div>
                                                    <div className={`rounded-[7px] w-[32px] h-[14px] ${theme=="dark" ? muted ? 'bg-[#0b463f]' : 'bg-[#334046]' : muted ? 'bg-[#b2dbd7]' : 'bg-[#b2b2b2]'}`}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div role='button' className='pl-0 cursor-pointer'>
                            <div className='pr-0 flex items-center h-auto border-0'>
                                <div className='py-[19px] overflow-hidden grow shrink basis-auto text-ellipsis whitespace-normal'>
                                    <div className='mx-[30px]'>
                                        <div className='flex min-h-0 min-w-0 items-center justify-start flex-nowrap'>
                                            <div className='mr-[8px] grow-0 flex shrink-0 basis-auto w-[40px] min-h-0 min-w-0 items-center self-auto flex-nowrap justify-center h-[24px]'>
                                                <span className='text-[#667781] dark:text-[#8596a1]'><svg viewBox="0 0 24 24" height="20" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>lock</title><path fill="currentColor" d="M17.3,7.6h-0.9V5.8c0-2.5-1.9-4.4-4.4-4.4S7.6,3.3,7.6,5.8v1.8H6.7c-1,0-1.8,0.8-1.8,1.8v8.9 c0,1,0.8,1.8,1.8,1.8h10.6c1,0,1.8-0.8,1.8-1.8V9.4C19.1,8.4,18.3,7.6,17.3,7.6z M12,15.8c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S13.1,15.8,12,15.8z M14.7,7.6H9.2V5.8c0-1.5,1.2-2.7,2.7-2.7s2.7,1.2,2.7,2.7v1.8C14.6,7.6,14.7,7.6,14.7,7.6z"></path></svg></span>
                                            </div>
                                            <div className='grow shrink break-words min-w-0 leading-[1.2]'>
                                                <span className='text-[#111b21] dark:text-[#e9edef] leading-[1.375] font-normal text-[1rem]'>All information provided is accurate</span>
                                            </div>
                                        </div>
                                        <div className="ml-[48px] mr-[30px]">
                                            <div className='text-[#667781] dark:text-[#8696a0] text-[0.875rem] leading-[1.4286] font-normal'>(to the extent of my knowledge)</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div></motion.div>
                    <motion.div></motion.div>
                    <motion.div></motion.div>
                </MotionConfig>}
            </div>
        </div>
    </div>
  )
}

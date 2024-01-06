"use client"

import Image from "next/image"
import DateCard from "./DateCard"
import SentMessage from "./SentMessage"
import RecMessage from "./RecMessage"
import Constants from "../../Constants/page"
import { useEffect, useState } from "react"

export default function ChatSection({ curr, onShow, theme, onHide }) {

    const [mounted, setMounted] = useState(false)

    const Chat = Constants.Chats.find(Chat => Chat.id === curr)

    useEffect(() => {
        setMounted(true)
      }, [])
    
      if (!mounted) {
        return null
      }

  return (
    <div className="flex flex-col w-full h-[100dvh] bg-[#efeae2] dark:bg-[#0b141a]">
        <div className="absolute w-full h-full top-0 left-0 bg-repeat opacity-40 dark:opacity-[.06] z-10" style={{ backgroundImage: theme=="dark" ? "url('/chat-bg-dark.png')" : "url('/chat-bg-light.png')" }}></div>
        <div id="rightTop" className="relative flex items-center h-[59px] w-full py-[10px] px-[16px] bg-[#f0f2f5] dark:bg-[#202c33] z-20 border-l border-solid border-[#d1d7db] dark:border-[rgba(134,150,160,0.15)]" style={{ boxShadow:  theme=="dark" ? "0 1px 3px rgba(11,20,26,.4)" : "" }}>
            <div className="pr-[15px] -mt-[1px] flex text-[#54656f] dark:text-[#aebac1]" onClick={onHide}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="-mr-[7.5px] pr-0 my-auto -ml-[10px]" viewBox="0 0 16 16"><path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/></svg>
                <div className="w-[40px] h-[40px] rounded-full relative cursor-pointer bg-[#008069] dark:bg-[#6b7175] border-2 border-solid border-[#f0f2f5] dark:border-[#202c33]">
                    <Image src={`/group-icons${Chat.img}`} width={24} height={24} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ filter: theme!="dark" && 'brightness(0) invert(1)' }} />
                </div>
            </div>
            <div className="flex flex-col grow min-w-0 justify-center cursor-pointer" onClick={onShow}>
                <div className="text-left -mt-[1px] flex align-start leading-[21px] font-normal dark:font-medium overflow-hidden whitespace-nowrap text-[16px] text-[#111b21] dark:text-[#e9edef]">
                    <div className="overflow-hidden whitespace-nowrap text-ellipsis">{Chat.name}</div>
                </div>
                <div className="items-start text-[#667781] dark:text-[#8696a0] flex text-[0.8125rem] leading-[1.5385] min-h-[20px] overflow-hidden whitespace-nowrap">
                    <div className="overflow-hidden whitespace-nowrap text-ellipsis">{Chat.membersText}</div>
                </div>
            </div>
            <div className="block ml-[20px]">
                <div className="flex items-center text-[#54656f] dark:text-[#aebac1]">
                    <div className="ml-0 rounded-full relative h-full flex items-center p-[8px] cursor-pointer hover:bg-[rgba(0,0,0,.1)] dark:hover:bg-[#384147]">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>search-alt</title><path fill="currentColor" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path></svg>
                    </div>
                    <div className="ml-[10px] relative block">
                        <div className="ml-0 mt-[2px] rounded-full relative h-full flex items-center p-[8px] cursor-pointer hover:bg-[rgba(0,0,0,.1)] dark:hover:bg-[#384147]">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>menu</title><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <span className="w-full border-b border-solid border-[#e9edef] dark:border-[rgba(134,150,160,0.15)]"></span>
        <div id="rightMid" className="relative grow shrink basis-0 z-20">
            <div className={`absolute top-0 left-0 border-l border-solid border-[rgba(233,237,239,0.12)] w-full h-full flex flex-col-reverse overflow-x-hidden overflow-y-scroll ${theme}`}>
                <div className="grow shrink basis-auto min-h-[12px]"></div>
                <div className="pl-0 pt-[16px] -mb-[8px] grow shrink basis-0">
                    {Chat.messages.map((message,i,array,count=0)=>{
                        count++;
                        if(count!=1) i++;
                        console.log(count,i,array[i].type)
                        return(
                            {
                                empty: <></>,
                                Dates: <DateCard key={"message"+i.toString()} date={message.date} />,
                                Sent: <SentMessage key={"message"+i.toString()} text={message.text} time={message.time} read={message.read} first={array[i-1] ? array[i-1].type!="Sent" : true} last={array[i+1] ? array[i+1].type!="Sent" : true} theme={theme} />,
                                Rec: <RecMessage key={"message"+i.toString()} text={message.text} time={message.time} from={message.from} nameColor={message.nameColor} first={array[i-1] ? array[i-1].type!="Rec" || array[i-1].from!=array[i].from : true} last={array[i+1] ? array[i+1].type!="Rec" || array[i+1].from!=array[i].from : true} theme={theme} />
                            }[message.type]
                        )
                    })}
                    {/* <DateCard />
                    <RecMessage />
                    <SentMessage /> */}
                </div>
            </div>
        </div>
        <div id="rightBottom" className="relative w-full h-[62px] block z-20 flex">
            <div className="h-[48px] w-[calc(100%-70px)] flex flex-row align-end rounded-full relative my-[7px] mx-[4px] px-[8px] py-[2px] bg-[#f0f2f5] dark:bg-[#202c33] border-l border-solid border-[#e9edef] dark:border-[rgba(134,150,160,0.15)]">
                <div className="relative flex align-end grow shrink basis-0 w-full h-[45px]">
                    <div className="py-[2px] flex items-center justify-center text-[#54656f] dark:text-[#8696a0] rounded-full">
                        <div role="button" className="mx-[1px] my-[1px] relative flex items-center justify-center w-[40px] h-[40px] rounded-full hover:bg-[rgba(0,0,0,.1)] dark:hover:bg-[#384147]">
                            <div className="absolute top-[6px] left-[2.5px] w-[26px]"><svg viewBox="0 0 24 24" height="26" width="26" preserveAspectRatio="xMidYMid meet" className="ekdr8vow dhq51u3o" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>smiley</title><path fill="currentColor" d="M9.153,11.603c0.795,0,1.439-0.879,1.439-1.962S9.948,7.679,9.153,7.679 S7.714,8.558,7.714,9.641S8.358,11.603,9.153,11.603z M5.949,12.965c-0.026-0.307-0.131,5.218,6.063,5.551 c6.066-0.25,6.066-5.551,6.066-5.551C12,14.381,5.949,12.965,5.949,12.965z M17.312,14.073c0,0-0.669,1.959-5.051,1.959 c-3.505,0-5.388-1.164-5.607-1.959C6.654,14.073,12.566,15.128,17.312,14.073z M11.804,1.011c-6.195,0-10.826,5.022-10.826,11.217 s4.826,10.761,11.021,10.761S23.02,18.423,23.02,12.228C23.021,6.033,17.999,1.011,11.804,1.011z M12,21.354 c-5.273,0-9.381-3.886-9.381-9.159s3.942-9.548,9.215-9.548s9.548,4.275,9.548,9.548C21.381,17.467,17.273,21.354,12,21.354z  M15.108,11.603c0.795,0,1.439-0.879,1.439-1.962s-0.644-1.962-1.439-1.962s-1.439,0.879-1.439,1.962S14.313,11.603,15.108,11.603z"></path></svg></div>
                        </div>
                    </div>
                    <div className="flex grow shrink basis-0 flex-end min-w-0">
                        <div className="flex grow shrink basis-auto px-[12px] py-[9px] m-[8px] rounded-[8px] min-h-[20px] text-[15px] font-normal leading-[20px] outline-0">
                            <div className="relative w-full">
                                <div role="textbox" contentEditable="false" spellCheck="true" className=" cursor-text relative max-h-[7.35em] min-h-[1.47em] text-[#667781] dark:text-[#8696a0] whitespace-prewrap break-word leading-[1.47em] overflow-x-hidden overflow-y-auto text-[0.9375rem] focus:bg-white dark:focus:bg-[#2a3942] focus:outline-0 z-30">
                                    {/* */}
                                </div>
                                <div className="absolute -top-[7.5px] -ml-[10px] text-[#667781] dark:text-[#8696a0] leading-[1.47em] text-[1.1rem] z-10">Message</div>
                            </div>
                        </div>
                    </div>
                    <div className="py-[2px] flex items-center justify-center text-[#54656f] dark:text-[#8696a0] rounded-full">
                        <div role="button" className="-mr-[0.5px] flex items-center rounded-full relative w-[40px] h-[40px] hover:bg-[rgba(0,0,0,.1)] dark:hover:bg-[#384147]">
                            <div className="p-[9px] flex items-center"><svg viewBox="0 0 24 24" height="26" width="26" preserveAspectRatio="xMidYMid meet" className="" fill="none"><title>attach-menu-plus</title><path fillRule="evenodd" clipRule="evenodd" d="M20.5 13.2501L20.5 10.7501L13.25 10.7501L13.25 3.5L10.75 3.5L10.75 10.7501L3.5 10.7501L3.5 13.2501L10.75 13.2501L10.75 20.5L13.25 20.5L13.25 13.2501L20.5 13.2501Z" fill="currentColor"></path></svg></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-[4px] w-[48px] flex items-center justify-center h-[48px] my-[7px] rounded-full cursor-pointer bg-[#028069]">
                <div role="button" className="w-[45px] h-[45px] flex items-center justify-center text-[#ffffff] cursor-pointer rounded-full">
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>ptt</title><path fill="currentColor" d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z"></path></svg>
                </div>
            </div>
        </div>
    </div>
  )
}

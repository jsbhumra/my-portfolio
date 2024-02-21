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
        <div id="rightTop" className="relative flex items-center h-[49px] w-full py-[10px] px-[16px] z-[120] backdrop-filter backdrop-blur-md bg-[rgba(247,247,247,0.4)] dark:bg-[rgba(26,23,23,0.6)]" style={{ boxShadow:  theme=="dark" ? "0 1px 3px rgba(11,20,26,.4)" : "" }}>
            <div onClick={onHide} className="text-[#34B7F1]">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" className="mr-[15px] pr-0 my-auto -ml-[10px] text-[#34B7F1]" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="48" d="M328 112L184 256l144 144"/></svg>
            </div>
            <div className="pr-[15px] -mt-[1px] flex text-[#34B7F1]">
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="-mr-[9.5px] pr-0 my-auto -ml-[10px]" viewBox="0 0 16 16"><path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"/></svg> */}
                <div className="w-[40px] h-[40px] rounded-full relative cursor-pointer bg-[#34B7F1] bg-opacity-60">
                    <Image src={`/group-icons${Chat.img}`} width={30} height={30} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ filter: theme!="dark" && 'brightness(0) invert(1)' }} />
                </div>
            </div>
            <div className="flex flex-col grow min-w-0 justify-center cursor-pointer" onClick={onShow}>
                <div className="text-left mt-[2px] flex align-start leading-[21px] font-bold overflow-hidden whitespace-nowrap text-[16px] text-[#000000] dark:text-[#e9edef]">
                    <div className="overflow-hidden whitespace-nowrap text-ellipsis">{Chat.name}</div>
                </div>
                <div className="items-start dark:text-[rgba(255,255,255,0.6)] text-[#8696a0] flex text-[0.7125rem] leading-[1.5385] min-h-[20px] overflow-hidden whitespace-nowrap">
                    <div className="overflow-hidden whitespace-nowrap text-ellipsis">{Chat.membersText}</div>
                </div>
            </div>
            <div className="block ml-[5px] -mr-[10px]">
                <div className="flex items-center text-[#34B7F1]">
                    <div className="ml-0 mr-[2.5px] rounded-full relative h-full flex items-center p-[8px] cursor-pointer hover:bg-[rgba(255,255,255,.1)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" height="28" width="28" viewBox="0 0 512 512"><path d="M374.79 308.78L457.5 367a16 16 0 0022.5-14.62V159.62A16 16 0 00457.5 145l-82.71 58.22A16 16 0 00368 216.3v79.4a16 16 0 006.79 13.08z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M268 384H84a52.15 52.15 0 01-52-52V180a52.15 52.15 0 0152-52h184.48A51.68 51.68 0 01320 179.52V332a52.15 52.15 0 01-52 52z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="24" width="24" className="ionicon" viewBox="0 0 512 512"><path d="M464 384.39a32 32 0 01-13-2.77 15.77 15.77 0 01-2.71-1.54l-82.71-58.22A32 32 0 01352 295.7v-79.4a32 32 0 0113.58-26.16l82.71-58.22a15.77 15.77 0 012.71-1.54 32 32 0 0145 29.24v192.76a32 32 0 01-32 32zM268 400H84a68.07 68.07 0 01-68-68V180a68.07 68.07 0 0168-68h184.48A67.6 67.6 0 01336 179.52V332a68.07 68.07 0 01-68 68z"/></svg> */}
                    </div>
                    <div className="ml-[2.5px] mr-[5px] rounded-full relative h-full flex items-center p-[8px] cursor-pointer hover:bg-[rgba(255,255,255,.1)]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="ionicon" height="24" width="24" viewBox="0 0 512 512"><path d="M451 374c-15.88-16-54.34-39.35-73-48.76-24.3-12.24-26.3-13.24-45.4.95-12.74 9.47-21.21 17.93-36.12 14.75s-47.31-21.11-75.68-49.39-47.34-61.62-50.53-76.48 5.41-23.23 14.79-36c13.22-18 12.22-21 .92-45.3-8.81-18.9-32.84-57-48.9-72.8C119.9 44 119.9 47 108.83 51.6A160.15 160.15 0 0083 65.37C67 76 58.12 84.83 51.91 98.1s-9 44.38 23.07 102.64 54.57 88.05 101.14 134.49S258.5 406.64 310.85 436c64.76 36.27 89.6 29.2 102.91 23s22.18-15 32.83-31a159.09 159.09 0 0013.8-25.8C465 391.17 468 391.17 451 374z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/></svg>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" height="20" width="20" className="ionicon" viewBox="0 0 512 512"><path d="M391 480c-19.52 0-46.94-7.06-88-30-49.93-28-88.55-53.85-138.21-103.38C116.91 298.77 93.61 267.79 61 208.45c-36.84-67-30.56-102.12-23.54-117.13C45.82 73.38 58.16 62.65 74.11 52a176.3 176.3 0 0128.64-15.2c1-.43 1.93-.84 2.76-1.21 4.95-2.23 12.45-5.6 21.95-2 6.34 2.38 12 7.25 20.86 16 18.17 17.92 43 57.83 52.16 77.43 6.15 13.21 10.22 21.93 10.23 31.71 0 11.45-5.76 20.28-12.75 29.81-1.31 1.79-2.61 3.5-3.87 5.16-7.61 10-9.28 12.89-8.18 18.05 2.23 10.37 18.86 41.24 46.19 68.51s57.31 42.85 67.72 45.07c5.38 1.15 8.33-.59 18.65-8.47 1.48-1.13 3-2.3 4.59-3.47 10.66-7.93 19.08-13.54 30.26-13.54h.06c9.73 0 18.06 4.22 31.86 11.18 18 9.08 59.11 33.59 77.14 51.78 8.77 8.84 13.66 14.48 16.05 20.81 3.6 9.53.21 17-2 22-.37.83-.78 1.74-1.21 2.75a176.49 176.49 0 01-15.29 28.58c-10.63 15.9-21.4 28.21-39.38 36.58A67.42 67.42 0 01391 480z"/></svg> */}
                    </div>
                    {/* <div className="ml-[5px] mt-[2px] rounded-full relative h-full flex items-center p-[8px] cursor-pointer hover:bg-[rgba(0,0,0,.1)] dark:hover:bg-[#384147]">
                        <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>menu</title><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg>
                    </div> */}
                </div>
            </div>
        </div>
        <span className="w-full border-b border-solid border-[#e9edef] dark:border-[rgba(134,150,160,0.15)]"></span>
        <div id="rightMid" className="relative grow shrink basis-0 z-20 -mt-[49px]">
            <div className={`absolute top-0 left-0 w-full h-full flex flex-col-reverse overflow-x-hidden overflow-y-scroll ${theme}`}>
                <div className="grow shrink basis-auto min-h-[12px]"></div>
                <div className="pl-0 pt-[65px] -mb-[8px] grow shrink basis-0">
                    {Chat.messages.map((message,i,array,count=0)=>{
                        count++;
                        if(count!=1) i++;
                        // console.log(count,i,array[i].type)
                        return(
                            {
                                empty: <></>,
                                Dates: <DateCard key={"message"+i.toString()} date={message.date} />,
                                Sent: <SentMessage key={"message"+i.toString()} text={message.text} time={message.time} read={message.read} first={array[i-1] ? array[i-1].type!="Sent" : true} last={array[i+1] ? array[i+1].type!="Sent" : true} theme={theme} />,
                                Rec: <RecMessage key={"message"+i.toString()} text={message.text} time={message.time} from={message.from} nameColor={message.nameColor} first={array[i-1] ? array[i-1].type!="Rec" || array[i-1].from!=array[i].from : true} last={array[i+1] ? array[i+1].type!="Rec" || array[i+1].from!=array[i].from : true} theme={theme} />
                            }[message.type]
                        )
                    })}
                </div>
            </div>
        </div>
        <div id="rightBottom" className="relative w-full h-[49px] block z-20 flex bg-[#f7f7f7] dark:bg-[#1b1d1f]">
            <div className="w-[11%]">
                    <div className="py-[2px] h-full flex items-center justify-center text-[#34B7F1] rounded-full">
                        <div role="button" className="-mr-[0.5px] flex items-center rounded-full relative w-[40px] h-[40px] hover:bg-[rgba(0,0,0,.1)] dark:hover:bg-[#384147]">
                            <div className="absolute top-[7px] left-[7px] flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" class="ionicon" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M256 112v288M400 256H112"/></svg></div>
                        </div>
                    </div>
            </div>
            <div className="h-[34px] w-[56%] flex flex-row align-end rounded-full relative my-[7.5px] mx-[4px] px-[8px] py-[2px] bg-[#ffffff] dark:bg-[#37393c]">
                    <div className="absolute right-0 flex items-center justify-center text-[#34B7F1] rounded-full">
                        <div role="button" className="mr-[5px] -ml-[2px] my-[1px] relative flex items-center justify-center w-[30px] h-[30px] rounded-full hover:bg-[rgba(0,0,0,.1)] dark:hover:bg-[#384147]">
                            <div className="absolute top-[2px] left-[2px] w-[26px]"><svg viewBox="0 0 24 24" height="26" width="26" preserveAspectRatio="xMidYMid meet" class="ekdr8vow dhq51u3o" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>sticker</title><path fill="currentColor" d="M21.799,10.183c-0.002-0.184-0.003-0.373-0.008-0.548c-0.02-0.768-0.065-1.348-0.173-1.939 c-0.124-0.682-0.328-1.296-0.624-1.87c-0.301-0.587-0.695-1.124-1.171-1.594c-0.473-0.469-1.016-0.859-1.614-1.159 c-0.576-0.291-1.196-0.493-1.887-0.615c-0.59-0.106-1.174-0.15-1.961-0.171c-0.318-0.008-3.607-0.012-4.631,0 c-0.798,0.02-1.383,0.064-1.975,0.17C7.066,2.58,6.446,2.781,5.867,3.073c-0.596,0.299-1.139,0.69-1.614,1.16 C3.78,4.7,3.386,5.236,3.082,5.826C2.788,6.398,2.584,7.012,2.459,7.694C2.352,8.285,2.307,8.88,2.286,9.635 C2.278,9.912,2.27,12.517,2.27,12.517c0,0.52,0.008,1.647,0.016,1.925c0.02,0.755,0.066,1.349,0.172,1.938 c0.126,0.687,0.33,1.3,0.624,1.871c0.303,0.59,0.698,1.126,1.173,1.595c0.473,0.469,1.017,0.859,1.614,1.159 c0.578,0.291,1.197,0.492,1.887,0.615c0.085,0.015,0.171,0.029,0.259,0.041c0.479,0.068,0.833,0.087,1.633,0.108 c0.035,0.001,2.118-0.024,2.578-0.035c1.667-0.04,3.261-0.684,4.487-1.811c1.128-1.038,2.129-1.972,2.928-2.737 c1.242-1.19,1.99-2.806,2.097-4.528l0.066-1.052c0.001-0.296,0.001-0.499,0.001-0.668C21.806,10.915,21.8,10.2,21.799,10.183z  M18.604,16.103c-0.79,0.757-1.784,1.684-2.906,2.716c-0.588,0.541-1.292,0.919-2.044,1.154c0.051-0.143,0.116-0.276,0.145-0.433 c0.042-0.234,0.06-0.461,0.067-0.74c0.003-0.105,0.009-0.789,0.009-0.789c0.013-0.483,0.042-0.865,0.107-1.22 c0.069-0.379,0.179-0.709,0.336-1.016c0.16-0.311,0.369-0.595,0.621-0.844c0.254-0.252,0.542-0.458,0.859-0.617 c0.314-0.158,0.65-0.268,1.037-0.337c0.359-0.064,0.733-0.093,1.253-0.106c0,0,0.383,0.001,0.701-0.003 c0.301-0.008,0.523-0.025,0.755-0.066c0.186-0.034,0.348-0.105,0.515-0.169C19.806,14.568,19.311,15.425,18.604,16.103z  M20.267,11.346c-0.028,0.15-0.063,0.263-0.111,0.356c-0.06,0.116-0.128,0.211-0.208,0.29c-0.088,0.087-0.187,0.158-0.296,0.213 s-0.228,0.094-0.371,0.119c-0.141,0.025-0.298,0.037-0.52,0.043c-0.309,0.004-0.687,0.004-0.687,0.004 c-0.613,0.016-1.053,0.049-1.502,0.129c-0.527,0.094-1.002,0.249-1.447,0.473c-0.457,0.229-0.875,0.529-1.241,0.891 c-0.363,0.358-0.667,0.771-0.9,1.224C12.757,15.53,12.6,16,12.505,16.522c-0.081,0.447-0.116,0.895-0.131,1.461 c0,0-0.006,0.684-0.008,0.777c-0.006,0.208-0.018,0.37-0.043,0.511c-0.025,0.136-0.063,0.251-0.117,0.356 c-0.056,0.108-0.127,0.206-0.213,0.291c-0.088,0.087-0.187,0.158-0.296,0.213c-0.072,0.036-0.168,0.063-0.37,0.098 c-0.027,0.005-0.25,0.027-0.448,0.031c-0.021,0-1.157,0.01-1.192,0.009c-0.742-0.019-1.263-0.046-1.668-0.126 c-0.551-0.098-1.031-0.254-1.477-0.479c-0.457-0.229-0.871-0.527-1.233-0.885c-0.363-0.358-0.663-0.766-0.894-1.215 c-0.225-0.436-0.382-0.909-0.482-1.453c-0.09-0.495-0.13-1.025-0.149-1.71c-0.007-0.266-0.011-0.543-0.012-0.847 C3.769,13.262,3.777,9.94,3.784,9.675c0.02-0.685,0.061-1.214,0.151-1.712c0.098-0.54,0.256-1.012,0.481-1.45 C4.647,6.064,4.946,5.657,5.308,5.3c0.363-0.36,0.777-0.657,1.233-0.886c0.447-0.225,0.927-0.382,1.477-0.479 c0.503-0.09,1.022-0.129,1.74-0.149c1.008-0.012,4.26-0.008,4.561,0c0.717,0.019,1.236,0.058,1.737,0.148 c0.552,0.098,1.032,0.254,1.476,0.478c0.458,0.23,0.872,0.527,1.234,0.885c0.364,0.359,0.663,0.766,0.892,1.213 c0.228,0.441,0.385,0.913,0.482,1.453c0.091,0.499,0.131,1.013,0.15,1.712c0.008,0.271,0.014,1.098,0.014,1.235 C20.299,11.085,20.289,11.226,20.267,11.346z"></path></svg></div>
                        </div>
                    </div>
            </div>
            <div className="w-[33%] flex justify-around px-[3px]">
                    <div className="py-[2px] h-full flex items-center justify-center text-[#34B7F1] rounded-full">
                        <div role="button" className="-mr-[0.5px] flex items-center rounded-full relative w-[40px] h-[40px] hover:bg-[rgba(0,0,0,.1)] dark:hover:bg-[#384147]">
                            <div className="absolute top-[10px] left-[10px] flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="ionicon" viewBox="0 0 64 64"><path fill="currentColor" xmlns="http://www.w3.org/2000/svg" id="path2" d="m31.19 0c-17.283.438-31.19 14.612-31.19 32 0 17.664 14.336 32 32 32 17.664 0 32-14.336 32-32 0-17.664-14.336-32-32-32-.276 0-.538-.007-.813 0m-.031 5.5c.284-.009.558 0 .844 0 14.628 0 26.5 11.872 26.5 26.5 0 14.628-11.872 26.5-26.5 26.5-14.628 0-26.5-11.872-26.5-26.5 0-14.342 11.423-26.05 25.656-26.5"/><path fill="currentColor" xmlns="http://www.w3.org/2000/svg" strokeWidth="0.14132079" d="m 36.465106,19.627119 h 5.798534 l 2.220715,-3.337856 H 22.715017 l -2.220715,3.337856 h 3.778776 c 3.827815,0 7.360553,0.295644 8.773337,3.4967 H 22.715017 l -2.220715,3.337998 H 33.46317 c -2.82e-4,0.0075 -2.82e-4,0.01442 -2.82e-4,0.02191 0,2.398779 -1.993472,6.078208 -8.576054,6.078208 l -3.184947,-0.0037 0.0036,3.118667 12.755475,15.942538 H 40.14135 L 26.939096,35.126054 c 5.434632,-0.293099 10.531649,-3.329942 11.266376,-8.664237 h 4.058168 l 2.220715,-3.337998 H 38.14753 c -0.25579,-1.28616 -0.811464,-2.530207 -1.682424,-3.4967 z" id="path877"/></svg></div>
                        </div>
                    </div>
                    <div className="py-[2px] h-full flex items-center justify-center text-[#34B7F1] rounded-full">
                        <div role="button" className="-mr-[0.5px] flex items-center rounded-full relative w-[40px] h-[40px] hover:bg-[rgba(0,0,0,.1)] dark:hover:bg-[#384147]">
                            <div className="absolute top-[7px] left-[7px] flex items-center"><svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 512 512"><path d="M350.54 148.68l-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 00-32 32v192a32 32 0 0032 32h352a32 32 0 0032-32V192a32 32 0 00-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><circle cx="256" cy="272" r="80" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M124 158v-22h-24v22"/></svg></div>
                        </div>
                    </div>
                    <div className="py-[2px] h-full flex items-center justify-center text-[#34B7F1] rounded-full">
                        <div role="button" className="-mr-[0.5px] flex items-center rounded-full relative w-[40px] h-[40px] hover:bg-[rgba(0,0,0,.1)] dark:hover:bg-[#384147]">
                            <div className="absolute top-[7px] left-[7px] flex items-center"><svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 512 512"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M192 448h128M384 208v32c0 70.4-57.6 128-128 128h0c-70.4 0-128-57.6-128-128v-32M256 368v80"/><path d="M256 64a63.68 63.68 0 00-64 64v111c0 35.2 29 65 64 65s64-29 64-65V128c0-36-28-64-64-64z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg></div>
                        </div>
                    </div>
            </div>
            {/* <div className="mx-[4px] w-[30%] flex items-center justify-center h-[48px] my-[7px] rounded-full cursor-pointer bg-[#00a683]">
                <div role="button" className="w-[45px] h-[45px] flex items-center justify-center text-[#ffffff] cursor-pointer rounded-full">
                    <svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>ptt</title><path fill="currentColor" d="M11.999,14.942c2.001,0,3.531-1.53,3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531 S8.469,2.35,8.469,4.35v7.061C8.469,13.412,9.999,14.942,11.999,14.942z M18.237,11.412c0,3.531-2.942,6.002-6.237,6.002 s-6.237-2.471-6.237-6.002H3.761c0,4.001,3.178,7.297,7.061,7.885v3.884h2.354v-3.884c3.884-0.588,7.061-3.884,7.061-7.885 L18.237,11.412z"></path></svg>
                </div>
            </div> */}
        </div>
    </div>
  )
}

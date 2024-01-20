import React, { useEffect, useState } from 'react'
import Channel from './Channel/page'
import Constants from '@/components/Constants/page'

export default function Tech({ onHide }) {

    const [mounted, setMounted] = useState(false)

    const channels = Constants.Channels
    console.log(channels)
    var newChannels = [], i, k;

    for (i = 0, k = -1; i < channels.length; i++) {
        if (i % 3 === 0) {
            k++;
            newChannels[k] = [];
        }

        newChannels[k].push(channels[i]);
    }

    useEffect(() => {
        setMounted(true)
      }, [])
    
      if (!mounted) {
        return null
      }

  return (
    <div className='absolute h-full w-full left-0 right-0 top-5 bottom-0 pointer-events-auto'>
        {/* <div className='pl-[23px] pr-[20px] flex justify-end bg-[#008069] dark:bg-[#202c33] h-[108px] flex-col text-white dark:text-[#d9dee0] grow-0 shrink-0 basis-auto'>
            <div className='p-0 bg-transparent flex h-[59px] w-full items-center grow-0 shrink-0 basis-auto'>
                <div className='w-[60px] grow-0 shrink-0 basis-auto'>
                    <div className='ml-0 rounded-full flex relative grow-0 shrink-0 basis-auto h-[40px] w-[40px] hover:bg-[rgba(255,255,255,.2)] dark:hover:bg-[#384147] cursor-pointer ' onClick={onHide}>
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer align-top text-[#d9dee0]'>
                            <span><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>back</title><path fill="currentColor" d="M12,4l1.4,1.4L7.8,11H20v2H7.8l5.6,5.6L12,20l-8-8L12,4z"></path></svg></span>
                        </div>
                    </div>
                </div>
                <div className='overflow-hidden leading-[23px] -mt-[1px] text-[1.1875rem] font-medium grow break-words max-h-[46px] '>
                    <h1>Tech Updates</h1>
                </div>
                <div className='ml-[4px] flex items-center grow-0 shrink-0 basis-auto'>
                    <div className='ml-0 rounded-full relative grow-0 shrink-0 basis-auto h-full hover:bg-[rgba(255,255,255,.2)] dark:hover:bg-[#384147]'>
                        <div className='flex items-center cursor-pointer p-[8px]'>
                            <span><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24" shapeRendering="crispEdges"><title>plus-large</title><path fill="currentColor" d="M19,13h-6v6h-2v-6H5v-2h6V5h2v6h6V13z"></path></svg></span>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        <div className='flex basis-0 pb-[24px] grow overflow-x-hidden overflow-y-auto relative flex-col h-max'>
            <div className='mx-[32px] mt-[24px] mb-[20px] text-center'>
                <div className='text-[#111b21] dark:text-[#e9edef] text-[1.1875rem] leading-[1.4737] font-normal'>
                    I follow the latest updates on these technologies:
                </div>
            </div>
            <div className='flex flex-row items-start grow-0 min-h-0 min-w-0 shrink basis-auto flex-nowrap justify-center'>
                <div className='max-w-full relative'>
                    <div className='flex flex-col grow-0 shrink basis-auto gap-y-[8px] items-center justify-start flex-nowrap'>
                        {newChannels.map((channelRow,i)=>{
                            i++;
                            return(
                                <div key={"channelRow"+i.toString()} className='mx-[13px] grow-0 flex flex-row items-start gap-x-[8px] min-h-0 min-w-0 shrink basis-auto justify-start flex-nowrap'>
                                    {channelRow.map((channel,t)=>{
                                        return(
                                            <Channel key={"channel"+t.toString()+i.toString()} followed={channel.followed} name={channel.name} image={channel.image} />
                                        )
                                    })}
                                </div>
                            )
                        })}
                        {/* {channels.map((channel,i)=>{
                            if(channel.id%3==1){
                                return(<div className='mx-[13px] grow-0 flex flex-row items-start gap-x-[8px] min-h-0 min-w-0 shrink basis-auto justify-start flex-nowrap'>
                                    <Channel followed={channel.followed} name={channel.name} />)
                            } else if(channel.id%3==0){
                                return(<Channel followed={channel.followed} name={channel.name} /></div>)
                            } else {
                                return(<Channel followed={channel.followed} name={channel.name} />)
                            }
                        })} */}
                        {/* <div className='mx-[13px] grow-0 flex flex-row items-start gap-x-[8px] min-h-0 min-w-0 shrink basis-auto justify-start flex-nowrap'>
                            <Channel />
                            <Channel />
                            <Channel />
                        </div>
                        <div className='mx-[13px] grow-0 flex flex-row items-start gap-x-[8px] min-h-0 min-w-0 shrink basis-auto justify-start flex-nowrap'>
                            <Channel />
                            <Channel />
                            <Channel />
                        </div>
                        <div className='mx-[13px] grow-0 flex flex-row items-start gap-x-[8px] min-h-0 min-w-0 shrink basis-auto justify-start flex-nowrap'>
                            <Channel />
                            <Channel />
                            <Channel />
                        </div> */}
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
  )
}

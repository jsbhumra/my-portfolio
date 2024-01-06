"use client"
import React, { useEffect, useState } from 'react'
import { useTheme } from "next-themes";
import Constants from '@/components/Constants/page';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Image from 'next/image';
import ChatGroup from '@/components/Android/ChatGroup/page';
import Tech from '@/components/Android/Tech/page';
import Profile from '@/components/Android/Profile/page';
import LandingSection from '@/components/Android/LandingSection';
import { useRouter } from 'next/navigation';
import ChatSection from '@/components/Android/ChatSection';
import GroupInfo from '@/components/Android/GroupInfo/page';

const Chats = Constants.Chats

export default function Android() {

  const router = useRouter()

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [mounted, setMounted] = useState(false)

  const [value, setValue] = useState(0);
  const [currChat, setCurrChat] = useState()
  const [infoOpen, setInfoOpen] = useState(false)

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <div className='w-full h-full relative'>{children}</div>
        )}
      </div>
    );
  }

  console.log(currentTheme)
  console.log(theme)
  console.log(currChat)

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }



  return (
    <div className='w-full h-[100dvh] overflow-hidden bg-[#f0f2f5] dark:bg-[#111b20]'>
      {currChat ? 
      infoOpen ? 
        <GroupInfo onHide={()=>{setInfoOpen(false)}} anim={infoOpen} curr={currChat} theme={currentTheme} />
      :
      <div id='right' className='relative w-full h-full overflow-hidden grow origin-top-left'>
        <ChatSection curr={currChat} onHide={()=>{setCurrChat()}} onShow={()=>{setInfoOpen(true)}} theme={currentTheme} />
      </div> :
      <div className='w-full h-[100dvh] bg-transparent flex flex-col'>
        <div className='grow-0'>
          <div id="topHeader" className='w-full h-[59px] bg-[#00a683] dark:bg-[#1f2c33] flex justify-between items-center pl-[20px] py-0 mt-0 -mb-[15px] text-white dark:text-[#dadee0]'>
          {value!=0 ? <div className='min-w-1/4 text-left text-[25px] tracking-wider pl-[5px]'>WhatsUp!</div> : <Image src='/jagjit.png' className="rounded-full mt-[2.5px]" width={50} height={50} />}
          {/* {value!=0 ? <div className='min-w-1/4 text-left text-[25px] text-[#dadee0] tracking-wider pl-[5px]'>WhatsUp!</div> : <svg xmlns="http://www.w3.org/2000/svg" fill="#d0d4d6" className="h-[30px] w-[30px] -ml-[1.5px]" viewBox="0 0 512 512"><path d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z" fill-rule="evenodd"/></svg>} */}
              <div className='flex justify-end gap-x-[10px] items-center pr-[15px]'>
                  <span className='rounded-full h-[40px] w-[40px] relative' onClick={() => currentTheme == "dark"? setTheme('light'): setTheme("dark")} ><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" fill="none"><title>status-unread-outline</title><path fillRule="evenodd" clipRule="evenodd" d="M3.71672 8.34119C3.23926 8.06362 3.07722 7.45154 3.35479 6.97407C4.33646 5.28548 5.79114 3.92134 7.53925 3.05006C9.28736 2.17878 11.2524 1.83851 13.1916 2.07126C13.74 2.13707 14.1312 2.63494 14.0654 3.18329C13.9995 3.73164 13.5017 4.12282 12.9533 4.05701C11.4019 3.87081 9.82989 4.14303 8.43141 4.84005C7.03292 5.53708 5.86917 6.62839 5.08384 7.97926C4.80626 8.45672 4.19419 8.61876 3.71672 8.34119Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M20.8569 10.115C21.4065 10.0604 21.8963 10.4616 21.9509 11.0112C22.144 12.9548 21.7638 14.9125 20.857 16.6424C19.9503 18.3724 18.5567 19.799 16.8485 20.746C16.3655 21.0138 15.7568 20.8393 15.489 20.3563C15.2213 19.8732 15.3957 19.2646 15.8788 18.9968C17.2454 18.2392 18.3602 17.0979 19.0856 15.714C19.811 14.33 20.1152 12.7639 19.9607 11.209C19.9061 10.6594 20.3073 10.1696 20.8569 10.115Z" fill="currentColor"></path><path d="M6.34315 17.6568C7.89977 19.2135 9.93829 19.9945 11.9785 20C12.4928 20.0013 12.9654 20.3306 13.0791 20.8322C13.2105 21.4123 12.8147 21.9846 12.22 21.9976C9.58797 22.0552 6.93751 21.0796 4.92893 19.0711C2.90126 17.0434 1.92639 14.3616 2.00433 11.7049C2.02177 11.1104 2.59704 10.7188 3.17612 10.8546C3.67682 10.9721 4.00256 11.4471 4.00009 11.9614C3.99021 14.0216 4.77123 16.0849 6.34315 17.6568Z" fill="currentColor"></path><circle cx="19.95" cy="4.05005" r="3" fill={currentTheme=="dark" ? "#009588" : "#00db5f"}></circle><path fillRule="evenodd" clipRule="evenodd" d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" fill="currentColor"></path></svg></span>
                  <span className='rounded-full h-[40px] w-[40px] relative'><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>search-alt</title><path fill="currentColor" d="M15.9,14.3H15L14.7,14c1-1.1,1.6-2.7,1.6-4.3c0-3.7-3-6.7-6.7-6.7S3,6,3,9.7 s3,6.7,6.7,6.7c1.6,0,3.2-0.6,4.3-1.6l0.3,0.3v0.8l5.1,5.1l1.5-1.5L15.9,14.3z M9.7,14.3c-2.6,0-4.6-2.1-4.6-4.6s2.1-4.6,4.6-4.6 s4.6,2.1,4.6,4.6S12.3,14.3,9.7,14.3z"></path></svg></span>
                  <span className='rounded-full h-[40px] w-[40px] relative'><svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2" version="1.1" x="0px" y="0px" enableBackground="new 0 0 24 24"><title>menu</title><path fill="currentColor" d="M12,7c1.104,0,2-0.896,2-2c0-1.105-0.895-2-2-2c-1.104,0-2,0.894-2,2 C10,6.105,10.895,7,12,7z M12,9c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,9.895,13.104,9,12,9z M12,15 c-1.104,0-2,0.894-2,2c0,1.104,0.895,2,2,2c1.104,0,2-0.896,2-2C13.999,15.894,13.104,15,12,15z"></path></svg></span>
              </div>
          </div>
          <Tabs id="sliderTabs"
            value={value}
            onChange={handleChange}
          //   indicatorColor="secondary"
            textColor="secondary"
            TabIndicatorProps={{
              style: {
                backgroundColor: currentTheme=="dark" ? "#0ea783" : "#ffffff",
                height: '4px'
              },
            }}
            variant="fullWidth"
            aria-label="full width tabs example"
            sx={{ backgroundColor: currentTheme=="dark" ? '#1f2c33' : "#00a683", height: '59px', alignItems: 'flex-end', padding: 0, border: 0, "& button.Mui-selected": { color: currentTheme=="dark" ? "#0ea783" : "#ffffff" } }}
          >
            <Tab icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="m-auto" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
    <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
  </svg>} value={0} sx={{ maxWidth: '16%', minWidth: '16%', color: currentTheme=="dark" ? '#6b7175' : "rgba(255,255,255,0.4)", fontWeight: 900 }} />
            <Tab value={1} label="Chats" sx={{maxWidth: '28%', minWidth: '28%', textTransform: 'capitalize', color: currentTheme=="dark" ? '#6b7175' : "rgba(255,255,255,0.4)", letterSpacing: '0.06em', fontWeight: 500, fontSize: '1rem' }} />
            <Tab value={2} label="Tech" sx={{maxWidth: '28%', minWidth: '28%', textTransform: 'capitalize', color: currentTheme=="dark" ? '#6b7175' : "rgba(255,255,255,0.4)", letterSpacing: '0.06em', fontWeight: 500, fontSize: '1rem' }} />
            <Tab value={3} label="Profile" sx={{maxWidth: '28%', minWidth: '28%', textTransform: 'capitalize', color: currentTheme=="dark" ? '#6b7175' : "rgba(255,255,255,0.4)", letterSpacing: '0.06em', fontWeight: 500, fontSize: '1rem' }} />
          </Tabs>
        </div>
        <SwipeableViews
          id='mainBody'
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
          className='w-full grow'
        >
          <TabPanel className='w-full h-[calc(100dvh-93px)] relative' value={value} index={0} dir={theme.direction}>
            <LandingSection theme={currentTheme} />
          </TabPanel>
          <TabPanel className='w-full h-[calc(100dvh-93px)]' value={value} index={1} dir={theme.direction}>
            {Chats.map((el)=>{
              var lastMess, messFrom;
              if(el.messages.length!=0) {
                lastMess = el.messages.at(-1).text
                if(el.messages.at(-1).type=="Rec") messFrom = el.messages.at(-1).from + ': '
                else messFrom = ''
              }
              else {
                lastMess = ''
                messFrom = ''
              }
              return <ChatGroup key={el.id} name={el.name} datetime={el.datetime} text={ messFrom+lastMess } /*text={el.text}*/ img={el.img} mute={el.muted} onClick={()=>{setCurrChat(el.id);}} selected={currChat==el.id} theme={currentTheme} />
            })}
          </TabPanel>
          <TabPanel className='w-full h-[calc(100dvh-93px)] relative' value={value} index={2} dir={theme.direction}>
          <Tech />
          </TabPanel>
          <TabPanel className='w-full h-[calc(100dvh-93px)]' value={value} index={3} dir={theme.direction}>
            <Profile />
          </TabPanel>
        </SwipeableViews>
      </div>}
    </div>
  )
}

"use client"
import React, { useEffect, useState, useRef } from 'react'
import { useTheme } from "next-themes";
import Constants from '@/components/Constants/page';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Image from 'next/image';
import ChatGroup from '@/components/IOS/ChatGroup/page';
import Tech from '@/components/IOS/Tech/page';
import Profile from '@/components/IOS/Profile/page';
import LandingSection from '@/components/IOS/LandingSection';
import { useRouter } from 'next/navigation';
import ChatSection from '@/components/Android/ChatSection';
import GroupInfo from '@/components/Android/GroupInfo/page';
import { flushSync } from 'react-dom';

const Chats = Constants.Chats

export default function IOS() {

    const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [mounted, setMounted] = useState(false)

  const [isDarkMode, setIsDarkMode] = useState();
  const ref = useRef(null);

  const [value, setValue] = useState(2);
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
  console.log(currChat)

  const toggleDarkMode = async () => {
    /**
     * Return early if View Transition API is not supported
     * or user prefers reduced motion
     */
    if (
        !ref.current ||
        !document.startViewTransition ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      console.log("first")
      currentTheme=="dark" ? setIsDarkMode(false) : setIsDarkMode(true);
      return;
    }

    console.log("second")

    await document.startViewTransition(() => {
      flushSync(() => {
        currentTheme=="dark" ? setIsDarkMode(false) : setIsDarkMode(true);
      });
    }).ready;

    const { top, left, width, height } = ref.current.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRadius = Math.hypot(
      Math.max(left, right),
      Math.max(top, bottom),
    );

    console.log("third")

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 1000,
        easing: 'ease-in',
        pseudoElement: '::view-transition-new(root)',
      }
    );
  };


  const handleChange = (event, newValue) => {
    newValue!=-1 ? setValue(newValue) : toggleDarkMode();
  };

  const handleChangeIndex = (index) => {
    index!=-1 && setValue(index);
  };

  useEffect(() => {
    if(mounted){
      if (currentTheme=="dark") {
        console.log('nowlight')
        setTheme("light")
      } else {
        console.log('nowdark')
        setTheme("dark")
      }
    }
  }, [isDarkMode]);

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className='w-full h-[100dvh] overflow-hidden bg-[#ffffff] dark:bg-[#000000]'>
        <div id="topHeader" className='-mb-[15px] w-full h-[59px] bg-[#ffffff] dark:bg-[#000000] flex justify-end items-center pl-[20px] py-0 mt-0 text-[#34B7F1]'>
          {value==1 && <Image src='/jagjit.png' className="absolute left-[20px] rounded-full mt-[2.5px]" width={50} height={50} />}
            <div className='flex justify-end gap-x-[10px] items-center pr-[15px]'>
                <span className='rounded-full h-[40px] w-[40px] relative'><svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" className="absolute top-[5px] left-[5px]" viewBox="0 0 512 512"><path d="M350.54 148.68l-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 00-32 32v192a32 32 0 0032 32h352a32 32 0 0032-32V192a32 32 0 00-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLineJoin="round" strokeWidth="32"/><circle cx="256" cy="272" r="80" fill="none" stroke="currentColor" strokeMiterLimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLineJoin="round" strokeWidth="32" d="M124 158v-22h-24v22"/></svg></span>
                <span className='rounded-full h-[40px] w-[40px] relative'><svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" className="absolute top-[5px] left-[5px]" viewBox="0 0 512 512"><circle fill='currentColor' cx="256" cy="256" r="26"/><circle fill='currentColor' cx="346" cy="256" r="26"/><circle fill='currentColor' cx="166" cy="256" r="26"/><path d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z" fill="none" stroke="currentColor" strokeMiterLimit="10" strokeWidth="32"/></svg></span>
                <span className='rounded-full h-[40px] w-[40px] relative'><svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" className="absolute top-[5px] left-[5px]" viewBox="0 0 512 512" fill='currentColor'><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm80 224h-64v64a16 16 0 01-32 0v-64h-64a16 16 0 010-32h64v-64a16 16 0 0132 0v64h64a16 16 0 010 32z"/></svg></span>
            </div>
        </div>
        {value!=1 ? <div className='pl-[17.5px] h-[45px] min-w-1/4 text-left text-[32.5px] text-black dark:text-white tracking-wide font-[550]'>{{0: "Updates", 2: "Chats", 3: "Profile"}[value]}</div> : null}
          {/* {value!=0 ? <div className='min-w-1/4 text-left text-[25px] text-[#dadee0] tracking-wider pl-[5px]'>WhatsUp!</div> : <svg xmlns="http://www.w3.org/2000/svg" fill="#d0d4d6" className="h-[30px] w-[30px] -ml-[1.5px]" viewBox="0 0 512 512"><path d="M414.73 97.1A222.14 222.14 0 00256.94 32C134 32 33.92 131.58 33.87 254a220.61 220.61 0 0029.78 111L32 480l118.25-30.87a223.63 223.63 0 00106.6 27h.09c122.93 0 223-99.59 223.06-222A220.18 220.18 0 00414.73 97.1zM256.94 438.66h-.08a185.75 185.75 0 01-94.36-25.72l-6.77-4-70.17 18.32 18.73-68.09-4.41-7A183.46 183.46 0 0171.53 254c0-101.73 83.21-184.5 185.48-184.5a185 185 0 01185.33 184.64c-.04 101.74-83.21 184.52-185.4 184.52zm101.69-138.19c-5.57-2.78-33-16.2-38.08-18.05s-8.83-2.78-12.54 2.78-14.4 18-17.65 21.75-6.5 4.16-12.07 1.38-23.54-8.63-44.83-27.53c-16.57-14.71-27.75-32.87-31-38.42s-.35-8.56 2.44-11.32c2.51-2.49 5.57-6.48 8.36-9.72s3.72-5.56 5.57-9.26.93-6.94-.46-9.71-12.54-30.08-17.18-41.19c-4.53-10.82-9.12-9.35-12.54-9.52-3.25-.16-7-.2-10.69-.2a20.53 20.53 0 00-14.86 6.94c-5.11 5.56-19.51 19-19.51 46.28s20 53.68 22.76 57.38 39.3 59.73 95.21 83.76a323.11 323.11 0 0031.78 11.68c13.35 4.22 25.5 3.63 35.1 2.2 10.71-1.59 33-13.42 37.63-26.38s4.64-24.06 3.25-26.37-5.11-3.71-10.69-6.48z" fill-rule="evenodd"/></svg>} */}
        <SwipeableViews
          id='mainBody'
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={handleChangeIndex}
          className='w-full'
        >
            {/* <TabPanel value={value} index={0} dir={theme.direction} ></TabPanel> */}
          <TabPanel className='w-full h-[calc(100dvh-147px)] relative' value={value} index={0} dir={theme.direction}>
          <Tech />
          </TabPanel>
          <TabPanel className='w-full h-[calc(100dvh-147px)] relative' value={value} index={1} dir={theme.direction}>
            <LandingSection theme={currentTheme} />
          </TabPanel>
          <TabPanel className='w-full h-[calc(100dvh-147px)]' value={value} index={2} dir={theme.direction}>
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
          <TabPanel className='w-full h-[calc(100dvh-147px)]' value={value} index={3} dir={theme.direction}>
            <Profile />
          </TabPanel>
        </SwipeableViews>
        <Tabs id="sliderTabs"
            value={value}
            onChange={handleChange}
          //   indicatorColor="secondary"
            textColor="secondary"
            TabIndicatorProps={{
              style: {
                backgroundColor: currentTheme=="dark" ? "#34B7F1" : "#34B7F1",
                height: '95%',
                opacity: 0.3,
                borderRadius: '8px'
              },
            }}
            variant="fullWidth"
            aria-label="full width tabs example"
            sx={{ display: 'flex', position: 'absolute', bottom: '-5px', width: '100%', alignItems: 'flex-start', justifyContent: 'start', backgroundColor: currentTheme=="dark" ? '#000000' : "#ffffff", height: '59px', padding: 0, paddingLeft: '3px', paddingRight: '3px', border: 0, "& button.Mui-selected": { color: currentTheme=="dark" ? "#34B7F1" : "#34B7F1" } }}
          >
            <Tab icon={<svg viewBox="0 0 24 24" height="24" width="24" preserveAspectRatio="xMidYMid meet" fill="none"><title>status-unread-outline</title><path fillRule="evenodd" clipRule="evenodd" d="M3.71672 8.34119C3.23926 8.06362 3.07722 7.45154 3.35479 6.97407C4.33646 5.28548 5.79114 3.92134 7.53925 3.05006C9.28736 2.17878 11.2524 1.83851 13.1916 2.07126C13.74 2.13707 14.1312 2.63494 14.0654 3.18329C13.9995 3.73164 13.5017 4.12282 12.9533 4.05701C11.4019 3.87081 9.82989 4.14303 8.43141 4.84005C7.03292 5.53708 5.86917 6.62839 5.08384 7.97926C4.80626 8.45672 4.19419 8.61876 3.71672 8.34119Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M20.8569 10.115C21.4065 10.0604 21.8963 10.4616 21.9509 11.0112C22.144 12.9548 21.7638 14.9125 20.857 16.6424C19.9503 18.3724 18.5567 19.799 16.8485 20.746C16.3655 21.0138 15.7568 20.8393 15.489 20.3563C15.2213 19.8732 15.3957 19.2646 15.8788 18.9968C17.2454 18.2392 18.3602 17.0979 19.0856 15.714C19.811 14.33 20.1152 12.7639 19.9607 11.209C19.9061 10.6594 20.3073 10.1696 20.8569 10.115Z" fill="currentColor"></path><path d="M6.34315 17.6568C7.89977 19.2135 9.93829 19.9945 11.9785 20C12.4928 20.0013 12.9654 20.3306 13.0791 20.8322C13.2105 21.4123 12.8147 21.9846 12.22 21.9976C9.58797 22.0552 6.93751 21.0796 4.92893 19.0711C2.90126 17.0434 1.92639 14.3616 2.00433 11.7049C2.02177 11.1104 2.59704 10.7188 3.17612 10.8546C3.67682 10.9721 4.00256 11.4471 4.00009 11.9614C3.99021 14.0216 4.77123 16.0849 6.34315 17.6568Z" fill="currentColor"></path><circle cx="19.95" cy="4.05005" r="3" fill="#34B7F1"></circle><path fillRule="evenodd" clipRule="evenodd" d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" fill="currentColor"></path></svg>}
            label={currentTheme=="dark" ? " Dark Mode" : " Light Mode"} ref={ref} value={-1} sx={{ padding: 0, margin: 0, minHeight: '50px', maxHeight: '50px', minWidth: '20%', maxWidth: '20%', color: currentTheme=="dark" ? '#6b7175' : "#6b7175", fontWeight: 500, fontSize: '10px', textTransform: 'capitalize', lineHeight: '5px', letterSpacing: '0.5px' }} />
            <Tab icon={value!=0 ? <svg width="40" height="24" xmlns="http://www.w3.org/2000/svg" className="ionicon m-0 p-0" viewBox="0 0 450 450"><path d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-3-42.31 26.37-72 66-72s69 30.46 66 72z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M336 304c-65.17 0-127.84 32.37-143.54 95.41-2.08 8.34 3.15 16.59 11.72 16.59h263.65c8.57 0 13.77-8.25 11.72-16.59C463.85 335.36 401.18 304 336 304z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path d="M200 185.94c-2.34 32.48-26.72 58.06-53 58.06s-50.7-25.57-53-58.06C91.61 152.15 115.34 128 147 128s55.39 24.77 53 57.94z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/><path d="M206 306c-18.05-8.27-37.93-11.45-59-11.45-52 0-102.1 25.85-114.65 76.2-1.65 6.66 2.53 13.25 9.37 13.25H154" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/></svg>
            : <svg fill='currentColor' width="40" height="24" xmlns="http://www.w3.org/2000/svg" className="ionicon m-0 p-0" viewBox="0 0 450 450"><path d="M336 256c-20.56 0-40.44-9.18-56-25.84-15.13-16.25-24.37-37.92-26-61-1.74-24.62 5.77-47.26 21.14-63.76S312 80 336 80c23.83 0 45.38 9.06 60.7 25.52 15.47 16.62 23 39.22 21.26 63.63-1.67 23.11-10.9 44.77-26 61C376.44 246.82 356.57 256 336 256zm66-88zM467.83 432H204.18a27.71 27.71 0 01-22-10.67 30.22 30.22 0 01-5.26-25.79c8.42-33.81 29.28-61.85 60.32-81.08C264.79 297.4 299.86 288 336 288c36.85 0 71 9 98.71 26.05 31.11 19.13 52 47.33 60.38 81.55a30.27 30.27 0 01-5.32 25.78A27.68 27.68 0 01467.83 432zM147 260c-35.19 0-66.13-32.72-69-72.93-1.42-20.6 5-39.65 18-53.62 12.86-13.83 31-21.45 51-21.45s38 7.66 50.93 21.57c13.1 14.08 19.5 33.09 18 53.52-2.87 40.2-33.8 72.91-68.93 72.91zM212.66 291.45c-17.59-8.6-40.42-12.9-65.65-12.9-29.46 0-58.07 7.68-80.57 21.62-25.51 15.83-42.67 38.88-49.6 66.71a27.39 27.39 0 004.79 23.36A25.32 25.32 0 0041.72 400h111a8 8 0 007.87-6.57c.11-.63.25-1.26.41-1.88 8.48-34.06 28.35-62.84 57.71-83.82a8 8 0 00-.63-13.39c-1.57-.92-3.37-1.89-5.42-2.89z"/></svg> }
            label="&nbsp;Updates" value={0} sx={{ padding: 0, margin: 0, minHeight: '50px', maxHeight: '50px', minWidth: '20%', maxWidth: '20%', color: currentTheme=="dark" ? '#6b7175' : "#6b7175", fontWeight: 500, fontSize: '10px', textTransform: 'capitalize', lineHeight: '5px', letterSpacing: '0.5px' }} />
            <Tab icon={value!=1 ? <svg width="40" height="24" xmlns="http://www.w3.org/2000/svg" className="ionicon m-0 p-0" viewBox="0 0 450 450"><path d="M248 64C146.39 64 64 146.39 64 248s82.39 184 184 184 184-82.39 184-184S349.61 64 248 64z" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M220 220h32v116"/><path fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32" d="M208 340h88"/><path fill="currentColor" d="M248 130a26 26 0 1026 26 26 26 0 00-26-26z"/></svg>
            : <svg fill='currentColor' width="40" height="24" xmlns="http://www.w3.org/2000/svg" className="ionicon m-0 p-0" viewBox="0 0 450 450"><path d="M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200 200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 11-26 26 26 26 0 0126-26zm48 226h-88a16 16 0 010-32h28v-88h-16a16 16 0 010-32h32a16 16 0 0116 16v104h28a16 16 0 010 32z"/></svg> }
            label="&nbsp;Info" value={1} sx={{ padding: 0, margin: 0, minHeight: '50px', maxHeight: '50px', minWidth: '20%', maxWidth: '20%', color: currentTheme=="dark" ? '#6b7175' : "#6b7175", fontWeight: 500, fontSize: '10px', textTransform: 'capitalize', lineHeight: '5px', letterSpacing: '0.5px' }} />
            <Tab icon={value!=2 ? <svg width="40" height="24" xmlns="http://www.w3.org/2000/svg" className="ionicon m-0 p-0" viewBox="0 0 450 450"><path d="M431 320.6c-1-3.6 1.2-8.6 3.3-12.2a33.68 33.68 0 012.1-3.1A162 162 0 00464 215c.3-92.2-77.5-167-173.7-167-83.9 0-153.9 57.1-170.3 132.9a160.7 160.7 0 00-3.7 34.2c0 92.3 74.8 169.1 171 169.1 15.3 0 35.9-4.6 47.2-7.7s22.5-7.2 25.4-8.3a26.44 26.44 0 019.3-1.7 26 26 0 0110.1 2l56.7 20.1a13.52 13.52 0 003.9 1 8 8 0 008-8 12.85 12.85 0 00-.5-2.7z" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/><path d="M66.46 232a146.23 146.23 0 006.39 152.67c2.31 3.49 3.61 6.19 3.21 8s-11.93 61.87-11.93 61.87a8 8 0 002.71 7.68A8.17 8.17 0 0072 464a7.26 7.26 0 002.91-.6l56.21-22a15.7 15.7 0 0112 .2c18.94 7.38 39.88 12 60.83 12A159.21 159.21 0 00284 432.11" fill="none" stroke="currentColor" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="32"/></svg>
            : <svg fill='currentColor' width="40" height="24" xmlns="http://www.w3.org/2000/svg" className="ionicon m-0 p-0" viewBox="0 0 450 450"><path d="M60.44 389.17c0 .07 0 .2-.08.38.03-.12.05-.25.08-.38zM439.9 405.6a26.77 26.77 0 01-9.59-2l-56.78-20.13-.42-.17a9.88 9.88 0 00-3.91-.76 10.32 10.32 0 00-3.62.66c-1.38.52-13.81 5.19-26.85 8.77-7.07 1.94-31.68 8.27-51.43 8.27-50.48 0-97.68-19.4-132.89-54.63A183.38 183.38 0 01100.3 215.1a175.9 175.9 0 014.06-37.58c8.79-40.62 32.07-77.57 65.55-104A194.76 194.76 0 01290.3 32c52.21 0 100.86 20 137 56.18 34.16 34.27 52.88 79.33 52.73 126.87a177.86 177.86 0 01-30.3 99.15l-.19.28-.74 1c-.17.23-.34.45-.5.68l-.15.27a21.63 21.63 0 00-1.08 2.09l15.74 55.94a26.42 26.42 0 011.12 7.11 24 24 0 01-24.03 24.03z"/><path d="M299.87 425.39a15.74 15.74 0 00-10.29-8.1c-5.78-1.53-12.52-1.27-17.67-1.65a201.78 201.78 0 01-128.82-58.75A199.21 199.21 0 0186.4 244.16C85 234.42 85 232 85 232a16 16 0 00-28-10.58s-7.88 8.58-11.6 17.19a162.09 162.09 0 0011 150.06C59 393 59 395 58.42 399.5c-2.73 14.11-7.51 39-10 51.91a24 24 0 008 22.92l.46.39A24.34 24.34 0 0072 480a23.42 23.42 0 009-1.79l53.51-20.65a8.05 8.05 0 015.72 0c21.07 7.84 43 12 63.78 12a176 176 0 0074.91-16.66c5.46-2.56 14-5.34 19-11.12a15 15 0 001.95-16.39z"/></svg>}
            label="&nbsp;Chats" value={2} sx={{ padding: 0, margin: 0, minHeight: '50px', maxHeight: '50px', minWidth: '20%', maxWidth: '20%', color: currentTheme=="dark" ? '#6b7175' : "#6b7175", fontWeight: 500, fontSize: '10px', textTransform: 'capitalize', lineHeight: '5px', letterSpacing: '0.5px' }} />
            <Tab icon={value!=3 ? <svg width="40" height="24" xmlns="http://www.w3.org/2000/svg" className="ionicon m-0 p-0" viewBox="0 0 450 450"><path fill='currentColor' d="M258.9 48C141.92 46.42 46.42 141.92 48 258.9c1.56 112.19 92.91 203.54 205.1 205.1 117 1.6 212.48-93.9 210.88-210.88C462.44 140.91 371.09 49.56 258.9 48zm126.42 327.25a4 4 0 01-6.14-.32 124.27 124.27 0 00-32.35-29.59C321.37 329 289.11 320 256 320s-65.37 9-90.83 25.34a124.24 124.24 0 00-32.35 29.58 4 4 0 01-6.14.32A175.32 175.32 0 0180 259c-1.63-97.31 78.22-178.76 175.57-179S432 158.81 432 256a175.32 175.32 0 01-46.68 119.25z"/><path fill='currentColor' d="M256 144c-19.72 0-37.55 7.39-50.22 20.82s-19 32-17.57 51.93C191.11 256 221.52 288 256 288s64.83-32 67.79-71.24c1.48-19.74-4.8-38.14-17.68-51.82C293.39 151.44 275.59 144 256 144z"/></svg>
            : <svg fill='currentColor' width="40" height="24" xmlns="http://www.w3.org/2000/svg" className="ionicon m-0 p-0" viewBox="0 0 450 450"><path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-50.22 116.82C218.45 151.39 236.28 144 256 144s37.39 7.44 50.11 20.94c12.89 13.68 19.16 32.06 17.68 51.82C320.83 256 290.43 288 256 288s-64.89-32-67.79-71.25c-1.47-19.92 4.79-38.36 17.57-51.93zM256 432a175.49 175.49 0 01-126-53.22 122.91 122.91 0 0135.14-33.44C190.63 329 222.89 320 256 320s65.37 9 90.83 25.34A122.87 122.87 0 01382 378.78 175.45 175.45 0 01256 432z"/></svg> }
            label="&nbsp;Profile" value={3} sx={{ padding: 0, margin: 0, minHeight: '50px', maxHeight: '50px', minWidth: '20%', maxWidth: '20%', color: currentTheme=="dark" ? '#6b7175' : "#6b7175", fontWeight: 500, fontSize: '10px', textTransform: 'capitalize', lineHeight: '5px', letterSpacing: '0.5px' }} />
        </Tabs>
    </div>
  )
}

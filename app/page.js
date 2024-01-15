"use client"
import Android from './@Android/page';
import IOS from './@IOS/page';
import Desktop from './@Desktop/page'
import { useEffect, useState } from 'react'
import { isMobile, osName } from 'react-device-detect';

export default function Home() {
  
  const [mobile, setMobile] = useState()
  const [os, setOs] = useState("iOS")

  useEffect(() => {
    setMobile(isMobile);
  }, [isMobile]);

  useEffect(() => {
    setOs(osName);
  }, []);

  // console.log(currWidth,currLayout,currentWidth)

  console.log(os)


  if(!mobile) return (
    <Desktop />
  )
  else if(os=="Android") return(
    // <p>Hey there Android!</p>
    <Android />
  )
  else if(os=="iOS") return(
    <IOS />
    // <p>Hey there iPhone!</p>
  )
}

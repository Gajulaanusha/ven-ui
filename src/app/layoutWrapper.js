"use client"
import { useSelector } from "react-redux";
import { Inter } from "next/font/google";
import "./globals.css";
import {Provider} from "react-redux";
import {store} from "@/statemanagement/appStore"
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import { Menu } from "@/components/Menu";
import { Toaster } from "@/components/shared/Toaster";
import { Loader } from "@/components/shared/Loader";
const inter = Inter({ subsets: ["latin"] });



export default function RootLayoutWrapper({children}){
  const isLoggedIn=useSelector((state)=>state?.appReducer?.isLoggedIn)
  const isShowLoader=useSelector((state)=>state?.appReducer?.isShowLoader)
  const isShowToaster=useSelector((state)=>state?.appReducer?.toaster?.isShowToaster)
  return (
    <>
      
        <Header/>
       {isLoggedIn && <Menu/>}
      {children}
      {isShowLoader && <Loader/>}
     {isShowToaster && <Toaster/>}
      <Footer/>
      
    </>
  );
}

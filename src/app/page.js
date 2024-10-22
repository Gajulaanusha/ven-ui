"use client"
import Image from "next/image";
import styles from "./page.module.css";
import {Home} from "@/components/Home";
import {Login} from "@/components/Login";
import { useSelector } from "react-redux";
export default function Homepage() {
  const isLoggedIn=useSelector((state)=>state?.appReducer?.isLoggedIn)
 return(
  <div>
      {isLoggedIn? <Home/> : <Login/>}
  </div>
 );
}

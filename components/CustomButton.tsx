"use client";
import { CustomButton } from '@/types'
import Image from 'next/image';
import React from 'react'

const CustomButton = ({title, cantainerStyles ,handleClick ,textStyle ,rightIcon}:CustomButton) => {
  return (
<button onClick={handleClick}
className={`custom-btn ${cantainerStyles}`}>
  <span className ={`flex ${textStyle} justify-between`}>{title}
   </span>
   {rightIcon?(
   <div className='relative w-6 h-6'>
    <Image src={rightIcon} alt='rightIcone' h-12 w-12 fill className=' object-contain'/>

   </div>
  ):''}
</button>
  )
}

export default CustomButton
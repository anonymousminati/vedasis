'use client';
// pages/index.js
import resumeFile from '@/assets/images/resume.jpg'
import Image from 'next/image';
import React, { useEffect ,useRef} from "react";

export default function() {
  //view image in a div
    return(
        <div className='shadow-lg border bg-white p-3 flex justify-center items-center'>
            <Image className='h-auto  shadow-lg border rounded w-min' src={resumeFile} alt="resume" width={500} height={500} />
        </div>
    )

}
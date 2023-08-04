"use client";

import axios from "axios";
import profileImage from '@/assets/images/01.jpg'
import Image from 'next/image'
import Link from "next/link";
//create Navbar export function
// import resumeFile from '@/assets/images/resumePdf.pdf';
import React, { useEffect, useRef } from 'react';
export default function Navbar() {




    return (
        <nav className="bg-white border-gray-200 ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
                <a href="#" className="flex items-center">
                    <img src="https://vhub.ai/wp-content/uploads/2023/03/logo_png.png" className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap ">vHub</span>
                </a>
                <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white ">
                        <li>
                            <Link href="/" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 " aria-current="page">Home</Link>
                        </li>
                        <li>
                            <Link href="/resume" target="_blank" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 ">Resume</Link>
                        </li>

                    </ul>
                </div>
                <Link href="/resume" ><div className="hidden md:block bg-slate-100 border hover:bg-slate-300 p-4 rounded">
                    <div className="flex items-center  space-x-3">
                        <div className="relative">
                            <button type="button" className="flex items-center max-w-xs text-sm text-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500" id="user-menu" aria-expanded="false" aria-haspopup="true">
                                <span className="sr-only">Open user menu</span>
                                <Image className="h-8 w-8 rounded-full" src={profileImage} alt="" width={40} height={40} />
                            </button>
                        </div>
                        <div className="relative flex flex-col ">
                            <h3 className="text-gray-700  font-medium">Prathamesh M</h3>
                            <p className="text-gray-500 text-xs font-medium">Web dev</p>
                        </div>
                        <svg className="w-7 h-7  text-black" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.293 6.707a1 1 0 0 1 1.414 0L10 9.586l2.293-2.88a1 1 0 1 1 1.414 1.545l-3 3.75a1 1 0 0 1-1.414 0l-3-3.75a1 1 0 0 1 0-1.545z" />
                        </svg>
                    </div>
                </div></Link>
            </div>
        </nav>
    )
}
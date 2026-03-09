

import React from 'react'
import Image from 'next/image'
import { Header } from "@/components/Header"

export const Navbar = ({
    children,
}: {children: React.ReactNode}) => {
    return (
        <>
            <div className='flex flex-row w-full h-screen'>
                <div className='flex flex-col bg-white w-[20%] h-full'>
                    <div className='flex flex-row justify-center items-center'>
                        <div className='h-20 content-center mx-5 border-b-2 border-gray-200'>
                            <Image src="/img/nomiweb-logo.png" alt="logo" width={300} height={300} />
                        </div>
                    </div>
                    <div className='flex flex-row justify-center items-center'>
                        <div>
                            <h1 className='text-black text-3xl'>Menu</h1>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col h-full w-full '>
                    <div className='flex flex-row items-center w-full'>
                        <Header />
                    </div>
                    <div className='flex-1 overflow-hidden'>
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}

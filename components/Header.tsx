

import React from 'react'

export const Header = () => {
    return (
        <>
            <nav className='flex flex-row w-full '>
                <div className='flex flex-row items-center justify-between bg-linear-to-r h-20 from-blue-800 to-blue-950 w-full'>
                    <div className='flex mx-5 justify-start flex-col'>
                        {/* <span>Empresa:</span> */}
                        <h1 className='text-lg font-semibold'>Municipio de la ciudad de Monterrey</h1>
                    </div>
                    <div className='flex flex-col mx-5 justify-start '>
                        <div className='flex flex-row space-x-5'>
                            <div className='flex flex-col'>
                                <span className=''>Usuario:</span>
                                <span className='font-semibold'>MCM0101001PTA2</span>
                            </div>
                            <div className='h-14 w-14 rounded-full bg-white'>

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

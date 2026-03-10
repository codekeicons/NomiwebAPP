


import React from 'react'

type ContainerProps = {
    title: string,
    children?: React.ReactNode
}

export const Container = ({ title, children }: ContainerProps) => {
    return (
        <>
            <div className='w-full'>
                <div className='h-14 rounded m-2 border-2 border-gray-200 bg-white content-center'>
                    <h1 className='text-2xl mx-5 font-semibold text-blue-950'>{title}</h1>
                </div>

                <div className='h-full m-2 rounded border-2 border-gray-200 content-center bg-white'>
                    <div className='m-5'>
                        {children}
                    </div>

                </div>
            </div>
        </>
    )
}




import React from 'react'

type ContainerProps = {
    title: string,
    children?: React.ReactNode
}

export const Container = ({ title, children }: ContainerProps) => {
    return (
        <>
            <div className='w-full'>
                <div className='h-14 rounded m-2 bg-white content-center'>
                    <h1 className='text-2xl mx-5 text-black'>{title}</h1>
                </div>

                <div className='h-full m-2 rounded content-center bg-white'>
                    <div className='m-5'>
                        {children}
                    </div>

                </div>
            </div>
        </>
    )
}

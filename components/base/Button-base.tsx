
type ButtonBaseProps = {
    Icon: React.ReactNode,
    Text: string
}


export const ButtonBase = ({Icon, Text}: ButtonBaseProps) => {
    return (
        <>

            <div className='w-full flex pt-10'>

                <button type='submit' className='px-5 cursor-pointer  h-12  rounded-full bg-linear-to-r from-blue-800 to-blue-950 text-white flex space-x-2 items-center' >
                    {Icon}

                    <span>{Text}</span></button>

            </div>
        </>
    )
}

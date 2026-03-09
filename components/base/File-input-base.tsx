type FileInputBaseProps = {
    Title: string,
    OnInput:  (e: React.ChangeEvent<HTMLInputElement>)=>void
}

export const FileInputBase = ({Title, OnInput}: FileInputBaseProps) => {
    return (
        <>
            <div className='flex flex-col space-y-3 pt-5  items-center '>
                <span className='text-left w-full'>{Title}</span>

                <input type="file" onChange={OnInput} className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-blue-950 hover:file:bg-blue-900 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white  focus:outline-none  disabled:opacity-60" />
            </div>
        </>
    )
}
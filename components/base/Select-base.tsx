

type SelectBaseProps = {
    Title: string,
    Name: string,
    Value: string | number,
    children: React.ReactNode,
    OnInput: (e: React.ChangeEvent<HTMLSelectElement>) => void

}



export const SelectBase = ({ Title,Name ,Value, children, OnInput }: SelectBaseProps) => {
    return (
        <>
            <div className='flex flex-col space-y-3 pt-5  items-center '>
                <span className='text-left w-full font-semibold text-blue-950'>{Title}</span>

                <select className='h-12 bg-gray-100 p-3  w-full rounded-md focus:outline-blue-950 border border-gray-300'
                    value={Value}
                    name={Name}
                    onChange={OnInput}>

                    {children}
                </select>
            </div>
        </>
    )
}


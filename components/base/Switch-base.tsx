

import type React from "react"

type SwitchBaseProps = {
    Title: string,
    Value: boolean,
    Name: string,
    OnInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const SwitchBase = ({ Title, Value, Name, OnInput }: SwitchBaseProps) => {
    return (
        <>
            <div className='flex flex-row justify-between pt-5  items-center '>
                <span className='text-left w-full font-semibold text-blue-950'>{Title}</span>

                <input type="checkbox"
                    checked={Value}
                    onChange={OnInput}
                    className="peer sr-only opacity-0" id={Name} />
                <label htmlFor={Name} className="relative flex h-6 w-16 cursor-pointer items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-blue-950 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500" >
                    <span className="sr-only">Enable</span>
                </label>
            </div>
        </>
    )
}
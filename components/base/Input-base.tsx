type InputBaseProps = {
  Title: string,
  Name: string,
  Value: string | number,
  Placeholder: string,
  OnInput: (e: React.ChangeEvent<HTMLInputElement>) => void,

}


export const InputBase = ({Title, Name, Value, Placeholder, OnInput}: InputBaseProps) => {
  return (
    <>
      <div className='flex flex-col space-y-3 pt-5 items-center '>
        <span className='text-left w-full font-semibold text-blue-950'>{Title}</span>

        <input type="text"
          name={Name}
          value={Value}
          onChange={OnInput}
          placeholder={Placeholder}
          className='h-10 bg-gray-50 p-3  w-full rounded focus:outline-blue-800 border border-gray-300 ' />
      </div>
    </>
  )
}

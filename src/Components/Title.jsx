import React from 'react'

const Title = ({text1,text2}) => {
  return (
    <div className='flex justify-center items-center gap-2 mt-20  mb-3'>
        <p className=' text-4xl '>{text1}<span className='font-medium text-4xl'>{text2}</span></p>
        <p className='w-8 h-[1px] bg-black items-center '></p>
    </div>
  )
}

export default Title
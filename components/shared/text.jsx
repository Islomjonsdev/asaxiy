import React from 'react'

const Text = ({title, ...props}) => {
  return (
    <div {...props}>
        <h1 className='text-[#5C596D] font-bold text-[24px] leading-[28px] mb-6'>{title}</h1>
    </div>
  )
}

export default Text
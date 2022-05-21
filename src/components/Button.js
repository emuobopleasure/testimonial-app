import React from 'react'

const Button = ({text, styling, onClick}) => {
  return (
    <button onClick={onClick} className={`ahare-button bg-[#FF5C00] w-[253px] h-[70px] rounded-[8px] text-[#ffffff] shadow-[2px_8px_30px_rgba(230,_83, 0,_0.18)] font-semibold${styling}`}>
        {text}
    </button>
  )
}

export default Button
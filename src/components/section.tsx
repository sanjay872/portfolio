import React from 'react'

type Props = {
    title:string;
    icon:React.ReactNode;
    children:React.ReactNode;
}

export default function Section({title,icon,children}: Props) {
  return (
    <div className='max-w-xl bg-secondary w-full h-full flex flex-col justify-center items-start rounded-lg'>
        <span className='flex justify-center items-center gap-1 p-4 text-lg font-semibold'>
            {icon}
            <h2>{title}</h2>
        </span>
        <div className='w-full h-full flex flex-col justify-start items-start gap-2'>
            {children}
        </div>
    </div>
  )
}
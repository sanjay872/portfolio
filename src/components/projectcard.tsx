import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button';

type Props = {
    //children:React.ReactNode;
    image:string;
    title:string;
    description:string;
    tags:string[];
    href:string;
}

export default function ProjectCard({title,description,image,tags,href}: Props) {
  return (
    <div className='w-full flex border-b-2 justify-center items-center'>
        <div className='m-0 p-2'>
            <Image src={image} alt={title} width={200} height={200} />
        </div>
        <div className=' flex h-full w-full flex-col gap-4 items-start justify-start'>
            <div className='flex-row items-center'>
                <div className='font-semibold'>{title}</div>
                <span>{description}</span>
            </div>
            <div>
                {tags.map(tag => (
                    <span className='bg-primary text-sm text-secondary p-1 mr-1 rounded-md' key={tag}>{tag}</span>
                ))}
            </div>
        </div>
    </div>
  )
}
"use client";
import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

type Props = {
    //children:React.ReactNode;
    image:string;
    title:string;
    description:string;
    tags:string[];
    href:string;
}

export default function ProjectCard({title,description,image,tags,href}: Props) {
    const router = useRouter();
    function redirect(){
        router.push(href);
    }
    return (
    <div className='w-96 flex flex-col border-b-2 bg-primary text-primary-foreground rounded-lg p-5 drop-shadow-lg'>
        <div>
            <div className='m-0 pt-2 pb-2 flex items-center justify-center'>
                <Image src={image} alt={title} width={200} height={200} />
            </div>
            <div className=' flex h-full w-full flex-col gap-4 items-start justify-start'>
                <div className='flex-row items-center'>
                    <div className='font-semibold text-lg'>{title}</div>
                    <span>{description}</span>
                </div>
                <div>
                    {tags.map(tag => (
                        <span className='bg-primary-foreground text-sm text-primary p-2 mr-1 rounded-full' key={tag}>{tag}</span>
                    ))}
                </div>
            </div>
        </div>
        <div className='flex items-center justify-end mt-4'>
            <Button className='w-full text-primary bg-primary-foreground' variant="outline" onClick={()=>{redirect()}}>
                View
            </Button>
        </div>
    </div>
  )
}
"use client"

import { Briefcase, DiamondPlus, Folder, GraduationCap, House, Link, Mail } from 'lucide-react'
import React from 'react'
import { ModeToggle } from '../ui/ModeToogle'
import { Button } from '../ui/button'
import  {useRouter} from "next/navigation"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


type Props = {}

function Navbar({}: Props) {
  const router = useRouter();
  const iconSize:number = 25;

  function redirect(path:string){
    router.push(path);
  }

  return (
    <div className='w-full rounded-xl h-full max-w-xl bg-primary gap-4 flex justify-around items-center'>
        <div className='w-1/12'></div>
        <div className='flex justify-center items-center gap-4 p-2'>
        <TooltipProvider delayDuration={300}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className='text-primary-foreground' variant="ghost" onClick={() => redirect("/")}>
                {/* Home */} <House size={iconSize} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Home</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className='text-primary-foreground' variant="ghost" onClick={() => redirect("/projects")}>
                {/* Projects */} <Folder size={iconSize} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Project</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className='text-primary-foreground' variant="ghost" onClick={()=>redirect("/experiences")}>
                {/* Experience */} <Briefcase  size={iconSize} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Experience</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className='text-primary-foreground' variant="ghost" onClick={()=>redirect("/education")}>
                {/* Education */} <GraduationCap size={iconSize} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Education</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button className='text-primary-foreground' variant="ghost" onClick={()=>redirect("/contact")}>
                {/* Contact */} <Mail size={iconSize} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Contact</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        </div>
        {/* Toogle Theme */}
        <div className='flex p-2 justify-center items-center gap-2'>
          <ModeToggle />
           {/* Hire Me */}
           {/* <Button className='flex justify-center items-center gap-2' variant='secondary'>
            <DiamondPlus size={iconSize} />
            Hire Me
           </Button> */}
        </div>
    </div>
  )
}

export default Navbar

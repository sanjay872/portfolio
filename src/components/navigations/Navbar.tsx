 import { Briefcase, DiamondPlus, Folder, GraduationCap, House, Mail } from 'lucide-react'
import React from 'react'
import { ModeToggle } from '../ui/ModeToogle'
import { Button } from '../ui/button'

type Props = {}

function Navbar({}: Props) {
  
  const iconSize:number = 25;

  return (
    <div className='w-full rounded-xl h-full max-w-xl bg-primary gap-4 flex justify-between items-center'>
        <div className='flex justify-center items-center gap-4 p-2'>
          <Button className='text-primary-foreground' variant="ghost">
            {/* Home */} <House size={iconSize} />
          </Button>
          <Button className='text-primary-foreground' variant="ghost">
            {/* Projects */} <Folder size={iconSize} />
          </Button>
          <Button className='text-primary-foreground' variant="ghost">
            {/* Experience */} <Briefcase  size={iconSize} />
          </Button>
          <Button className='text-primary-foreground' variant="ghost">
            {/* Education */} <GraduationCap size={iconSize} />
          </Button>
          <Button className='text-primary-foreground' variant="ghost">
            {/* Contact */} <Mail size={iconSize} />
          </Button>
        </div>
        {/* Toogle Theme */}
        <div className='flex p-2 justify-center items-center gap-2'>
          <ModeToggle />
           {/* Hire Me */}
           <Button className='flex justify-center items-center gap-2' variant='secondary'>
            <DiamondPlus size={iconSize} />
            Hire Me
           </Button>
        </div>
    </div>
  )
}

export default Navbar

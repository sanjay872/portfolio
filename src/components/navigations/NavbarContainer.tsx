import React from 'react'
import Navbar from './Navbar'

type Props = {}

export default function NavbarContainer({}: Props) {
  return (
    <div className='h-full flex justify-center items-center m-4 sticky top-8'>
        <Navbar />
    </div>
  )
}
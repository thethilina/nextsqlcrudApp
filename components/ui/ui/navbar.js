import Link from 'next/link'
import React from 'react'
import { Button } from '../button'
import { HomeIcon, Sprout } from 'lucide-react'
import { ModeToggle } from '../ModeToggle'



function Navbar() {
  return (
    <nav className='sticky top-0 w-full border-b bg-black/50 backdrop-blur-2xl'>
   
   <div className='max-w-7xl mx-auto px-4'>
   
   <div className='flex items-center h-16 justify-between'>

   {/* logo  */}

    <div className='flex items-center'>
    
    <Link href='/' className='text-xl font-mono font-bold tracking-wider text-primary'>CinderChest 🧿</Link>

    </div>

   {/* nav components  */}

   <div className='hidden md:flex items-center space-x-4'>
    
<Button variant='ghost' asChild>
  <Link href='/plants' className='flex items-center gap-2'>
    <Sprout className='w-4 h-4'/>
    <span className='hidden lg:inline'>Plants</span>
  </Link>
</Button>

<Button variant='ghost' asChild>
  <Link href='/' className='flex items-center gap-2'>
    <HomeIcon className='w-4 h-4'/>
    <span className='hidden lg:inline'>Home</span>
  </Link>
</Button>

 <ModeToggle/>

   </div>

   </div>
   </div>


    </nav>
  )
}

export default Navbar;

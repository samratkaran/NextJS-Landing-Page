import Link from 'next/link'
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { Button } from "./ui/moving-border";
const HeroSection = () => {
  return (
    
    <div className='h-auto md:-h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-8'>
        <Spotlight
        className="-top-20 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className='p-4 relative z-10 w-full text-center'>
    
        <h1 className='mt-40 md:mt-20 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400'>Master the art of Music</h1>
        
        <p className='mt-4 font-normal text-base md:text-lg text-neutral-300  mx-auto max-w-7xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate harum quibusdam nulla odit dolorem voluptatum excepturi quis, ab molestiae tempore ipsa perspiciatis dolor, magni omnis, voluptate corrupti dolore itaque ad!
        Minus facere eaque deleniti rem aut necessitatibus ducimus ex sit impedit enim libero nulla nihil eligendi ipsa animi eos officiis, ab reiciendis, magni atque corporis repellat odio nemo? Voluptatum, accusantium?</p>
        <div className='mt-5 '>
          <Button borderRadius="4rem"  className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
          <Link href={'/courses'}>
            Explore Courses
          </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

"use client"
import React from 'react'
import {motion} from "framer-motion"
import { Button } from './ui/moving-border'
import Link from 'next/link'
import Image from 'next/image'
import { AuroraBackground } from './ui/aurora-background'
import { TextGenerateEffect } from './ui/text-generate-effect'

 

 

function Hero() {
   const words=`                I am a recent B.Tech graduate in Computer Science with experience in full-stack development.  My playground is the world of code, where I relish crafting innovative solutions and solving those pesky bugs that lurk in the shadows.  Always eager to learn and experiment.
`
  return (
     <AuroraBackground>
       <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
   
      <div className='flex items-center justify-center p-4 lg:flex-row ' id="about">
           <div >
             <Image 
                      src={"https://media.licdn.com/dms/image/D5603AQGqj5MjVfSEEw/profile-displayphoto-shrink_400_400/0/1709320655582?e=1729123200&v=beta&t=vd1tMu_OYRSJ80-fiMnXukGuHnXkg_sbpRHEq003jIU"}
                      alt=''
                      width={200}
                      height={150}
                      className=' m-5 rounded-3xl  shadow-transparent-m '
                      />
           </div>
          <h1 className="md:text-5xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20 ">
            Hi, I am <span className=' text-blue-300 lg:text-7xl md:text-6xl'> Albin Sabu</span>
          </h1>
      </div>
      
      <div className='flex  flex-col items-center '>
           <TextGenerateEffect words={words} />
          

          <Link href={"https://drive.google.com/file/d/1RghZ1xC6psI6nai4qM0PiakndzjpZVRR/view?usp=drive_link"}>
           <Button
            borderRadius="1.75rem"
            className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800  "
            >
            Resume
          </Button>
          </Link>
      </div>
     
    </motion.div>
    </AuroraBackground>
  )
}

export default Hero
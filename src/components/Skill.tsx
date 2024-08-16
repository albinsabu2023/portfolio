"use client"
import React from 'react'
import html  from "/src/assets/html.svg"
import css from "/src/assets/css.svg"
import js from "/src/assets/js.png"
import express from "/src/assets/expres.png"
import spring from "/src/assets/download.png"
import maven from "/src/assets/maven.svg"
import node from "/src/assets/node.png"
import postgress from "/src/assets/postgress.png"
import react from "/src/assets/react.svg"
import sql from "/src/assets/sql.svg"
import tailwind from "/src/assets/tailwind.png" 
import Image from 'next/image'
import java from "/src/assets/java.webp"
import { Vortex } from './ui/vortex'
const skills= [
    html,
    css,
    js,
   express,
   spring,
   maven,
   node,
   postgress,
   react,
   sql,
   tailwind,
   java
]
function Skill() {
  return (
    <div className='min-h-screen flex items-center justify-center  bg-slate-900 sm:p-6' id='skill'>
         <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <p className='text-3xl text-blue-300'>SKILLS</p>
       <div className=' grid sm:grid-cols-4 gap-5  grid-cols-3 shadow-md'>
            {skills.map((skill)=>(
            <div className='bg-gray-800 p-4 rounded  hover:translate-x-3  ' key="id" >
                <Image
                    src={skill}
                    alt=''
                    width={100}
                    height={100}
                    
                />
            </div>
        ))}
       </div>
       </Vortex>
        
    </div>
  )
}

export default Skill
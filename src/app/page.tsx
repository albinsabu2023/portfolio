"use client"
import Contact from "@/components/Contact";

import Hero from "@/components/Hero";
import { Project } from "@/components/Project";

import Skill from "@/components/Skill";



export default function Home() {
  return (
      <main>
        <Hero/>
        <Project/>
        <Skill/>
        <Contact/>
      
      </main>
  );
}
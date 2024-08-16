
"use client"
import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

import { FloatingDock } from "@/components/ui/floating-dock";
import {
    IconBrandFacebook,
  IconBrandGithub,
  IconBrandLeetcode,
  IconBrandLinkedin,
  IconBrandX,
  
  IconHome,
 
} from "@tabler/icons-react";
import Image from "next/image";

function Contact() {
     const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },
    
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/albin-sabu-377798230/",
    },
    
    {
      title: "Facebook",
      icon: (
        <IconBrandFacebook className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.facebook.com/albin.albin.144/",
    },
    {
      title: "Leetcode",
      icon: (
        <IconBrandLeetcode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://leetcode.com/albinsullas13/",
    },

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/AlbinSabu7262",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/albinsabu2023",
    },
  ];
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    window.location.href=`mailto:albinsullas13@gmail.com?`;
    
  };
  return (
    <div id="contact" className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black min-h-screen flex flex-col justify-center align-center">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 text-center">
        Lets Connect
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
       Keep in touch for any queries
      </p>
 
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Tyler" type="text" name="name"/>
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Durden" type="text" />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" placeholder="your mail@fc.com" type="email" />
        </LabelInputContainer>
        
        <LabelInputContainer className="mb-8">
          <Label htmlFor="twitterpassword">Message</Label>
          <Input
            id="msg"
            placeholder="enter you message"
            type="text"
          />
        </LabelInputContainer>
 
        <button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
         
        >
          Contact &rarr;
          <BottomGradient />
        </button>
 
        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
 
       
      </form>
        <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
       
      <p className="text-cyan-400  text-.3xl text-sm p-3">2024 India kerala,All Right Reserved  &#169;  Albin Sabu</p>
      </div>

  )
}

 
const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
 
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
export default Contact
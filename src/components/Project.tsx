"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import bot from "/src/assets/bot.jpg"

import Link from "next/link";
export function Project() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center " id="projects">
        <p className="text-2xl text-blue-400 font-bold">PROJECTS</p>
      <AnimatePresence>
        
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
                
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <Image
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "WebSite for music courses",
    title: "Music-Courses",
    src: "https://asaphmusic.com/wp-content/uploads/2017/01/11.jpg",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
            A website created using nextjs and assertinity ui for 
            music courses.Well desinged interfaces using assertinity 
            ui. <br/>
            <span><Link href={"https://github.com/albinsabu2023/music-course/"} className="text-2xl text-blue-300">Open</Link></span>
        </p>
      );
    },
  },
  {
    description: "Network Intrusion Detection",
    title: "NID's using ML&DL",
    src: "https://cyberfuture.com.au/wp-content/uploads/2019/09/nids-nips.jpg",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>A Network Intrusion Detection System (NIDS) using K-Nearest Neighbors (KNN) with the NSL-KDD dataset aims to detect unauthorized access or anomalies in network traffic. KNN, a simple yet effective machine learning algorithm, classifies network activity by comparing it to known patterns in the dataset. The NSL-KDD dataset, a refined version of the kdd99 dataset, provides labeled network traffic data, helping the NIDS distinguish between normal and malicious activities. By leveraging KNN on this dataset, the system can effectively identify intrusions, enhancing network security.
        </p>
      );
    },
  },

  {
    description: "A Chatroom Web app",
    title: "ChatRoom",
    src: "https://i.pinimg.com/236x/0f/ff/0d/0fff0d70a82d1b88985c4a52e75494c5.jpg",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p> A webApp for connecting people from differnt location under single room.
            Developed using react as frontend and firebase as backend.Enhanced the ui 
            support of material UI.
             <br/>
            <span><Link href={"https://chatroom-9fc21.web.app//"} className="text-2xl text-blue-300">Open</Link></span>
        </p>
      );
    },
  },
  {
    description: "bot for finding petnames",
    title: "Telegram bot",
    src: "https://cdn5.cdn-telegram.org/file/UDPcpAVKBO8Nv9_-34CABMh3lyciXTr_JaxhfxAcWB8RH7Bm1Pk0s5ct7oEEuL1DuBdlxvnVY-aw1PgDt0IFlqM9ZJd_oWOHhqMbAn-Ncsjzkq-zXMOLQkU9mlIYoFXYXCZZvemc3sgcOYeGj_FfHjwcRUaInFDHtyBiGQBhZny7dCdNLvBDtAabHanRKXHlEMdZxNsIl4qY12kPDQrPRmPVeoV_usGxK5KpwUBXTpTbELgHYh2_jiymjLuv9XwBS3kKPISIyRvZcAeScIYUPZx3d8xIBcLG8PIYo3PvX7GIXhsM-1aMCS-2WSsOSK7Z108YIPP26zkJ_h1jJ2dnzw.jpg",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
          A nodejs powered telegram bot for suggesting
          pet names of you suggestion.currently under development
           <br/>
            <span><Link href={"https://github.com/albinsabu2023/telegram-bot/"} className="text-2xl text-blue-300">Open</Link></span>
        </p>
      );
    },
  },
  {
    description: "Text-based LM",
    title: "Chatgpt-Next",
    src: "https://d1lss44hh2trtw.cloudfront.net/resize?type=webp&url=https%3A%2F%2Fshacknews-www.s3.amazonaws.com%2Fassets%2Farticle%2F2023%2F03%2F14%2Fopenai-chatgpt_feature.jpg&width=2064&sign=e0YeSGDroUEv6ZfWleUeUMcd2-xAH5iz_700ywpsyL0",
    ctaText: "View",
    ctaLink: "https://ui.aceternity.com/templates",
    content: () => {
      return (
        <p>
           NextJs web application that accepts text input and generate
           text-based responses from OpenAi API. Firebase is used as backend 
           <br/>
            <span><Link href={"https://github.com/albinsabu2023/ChatGpt-Next1.0/"} className="text-2xl text-blue-300">Open</Link></span>
          
        </p>
      );
    },
  },
];

"use client";
import { FaSpotify,FaApple, FaYoutube, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import React from "react";
import Particles from "./components/particles";


import Link from "next/link";
import { Navigation } from "./components/nav";
import { Card } from "./components/card";



const socials = [
	{ 
		icon: <FaSpotify size={25 }/>,
		href: "https://open.spotify.com/artist/5KgEsZFmxbGioxdJuWc4fV?si=7eUE2_e1RoORT2xrtnX3Lw",
		label: "Spotify",
		handle: "GREECH",
	},
	{
		icon: <FaApple size={25} />,
		href: "https://music.apple.com/de/artist/greech/1819254709?l=en-GB",
		label: "Apple Music",
		handle: "GREECH",
	},
	{
		icon: <FaYoutube size={25} />, 
		href: "https://www.youtube.com/channel/UChnGY8UsMmwqDCsscXt75gA",
		label: "Youtube Music",
		handle: "GREECH",
	},
  
  
];

const socials_media = [
	{ 
		icon: <FaTwitter size={20 }/>,
		href: "dd",
		
	},
	{
		icon: <FaInstagram size={20} />,
		href: "ff",
		
	},
	{
		icon: <FaTiktok size={20} />, 
		href: "gg",
		
	},
  
  
];


export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">

      
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="mt-16 py-10 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        GREECH
      </h1>

      <div className="w-full max-w-5xl mt-12 px-4 ">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-16">
          {socials.map((s) => (
            <Card key={s.label}>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
              >
                <span
                  className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>
                <div className="z-10 flex flex-col items-center">
                  <span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
                    {s.handle}
                  </span>
                  <span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
                    {s.label}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <div className="text-sm text-zinc-400 ">
            <p>Welcome to my digital space. I'm Greech - music producer, creative mind, and tech enthusiast.
            This site is a collection of my current music projects. You can explore my latest releases. 
            I'm glad you're here</p>
        </div>

        <div className="flex justify-center gap-7 mt-8">
          {socials_media.map((s2, index) => (
            <Link 
              key={index}
              href={s2.href}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 text-sm duration-300 border rounded-full text-zinc-200 hover:text-white hover:bg-zinc-900 border-zinc-500 hover:border-zinc-200"
            >
              {s2.icon}
            </Link>
          ))}
      </div>
      </div>
          
      
    
    </div>
    

    
  );

}


import React from "react";
import Image from "next/image";
import doctor from "@/Assets/doctor.png";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import Button from "@/components/custom/Button";

function HeroSection() {
  const words = [
    // {
    //   text: "Book",
    // },
    // {
    //   text: "Expert",
    // },
    // {
    //   text: "Doctor",
    // },
    // {
    //   text: "Consultation",
    // },
    // {
    //   text: "With",
    // },
    {
      text: "MediQure.",
      className: "text-blue-500 dark:text-blue-500 text-3xl md:text-5xl lg:text-6xl",
    },
  ];
  return (
    <div className="w-screen h-fit flex flex-col-reverse gap-4 md:gap-0 flex-1 justify-start items-center md:justify-between px-5 py-20 md:flex-row md:py-30 md:px-10 bg-gradient-to-r from-slate-50 to-zinc-100">
      <div>
        <h1 className="font-sans leading-13 text-3xl md:w-4xl font-semibold tracking-tighter lg:leading-20 md:text-5xl lg:text-6xl">
          Book Expert Doctor Consultation With
          <TypewriterEffectSmooth words={words} cursorClassName="block rounded-sm w-[4px] h-10 sm:h-12 xl:h-15 bg-blue-500" />
        </h1>
        <Button>Book Now</Button>
      </div>
      <Image src={doctor} alt="Doctor" className="w-60 md:w-100 md:mr-10" />
    </div>
  );
}

export default HeroSection;



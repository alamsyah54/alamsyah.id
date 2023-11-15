"use client";

import { useEffect, useState } from "react";
import Spline from "@splinetool/react-spline";
import { Variants, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleSplineLoad = () => {
      setIsLoaded(true);
    };

    // Simulating an asynchronous operation (e.g., loading data) with setTimeout
    const simulateLoading = () => {
      setTimeout(() => {
        handleSplineLoad();
      }, 4000); // Adjust the delay as needed
    };

    // Trigger the simulated loading when the component mounts
    simulateLoading();

    // Clean up any resources or subscriptions when the component unmounts
    return () => {
      // Cleanup logic if needed
    };
  }, []);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 1, // Adjust the stagger duration as needed
      },
    },
  };

  const comeFromLeft: Variants = {
    hidden: { opacity: 0, y: 0, x: -100 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <AnimatePresence mode="wait">
      <section
        id="home"
        className="flex max-lg:justify-between flex-col-reverse items-center w-full max-h-screen"
      >
        <div className="flex max-lg:basis-1/4 w-full h-full p-5 -mt-20 z-10">
          <div>
            <h1 className="font-black text-2xl">
              Unlock Premium Digital Experiences
              <br /> with{" "}
              <span className="font-conthrax dark:text-transparent dark:bg-gradient-to-tl dark:from-cyan-300 dark:to-fuchsia-400 bg-clip-text">
                ALAMSYAH.ID
              </span>
            </h1>
            <h2 className="font-light">
              Your Trusted Choice for Premium Netflix Accounts and High Quality Solutions
            </h2>
            <div className="flex pt-5">
                <Link href='/products' className="relative group w-fit h-fit">
            <div className="absolute -inset-1 bg-gradient-to-br from-cyan-600 to-fuchsia-600 rounded-lg blur transition duration-700"></div>
            <div className="relative rounded-lg flex items-center justify-center py-2 px-4 font-black border-gray-100 bg-gradient-to-bl from-light-850 from-15% via-light-850 to-gray-100 border-2 dark:border-[#171c23]/80 dark:from-[#171c23] dark:from-15% dark:via-[#171c23] via-30% dark:to-[#0c0d0f] to-90%  shadow-light-100 dark:shadow-dark-100">
              Buy Now
            </div>
          </Link>
            </div>
          </div>
          
        </div>
        <div className="flex max-lg:basis-3/4 w-full">
          <div className="relative w-full h-[700px] max-md:-mt-12 -mt-7">
            {isLoaded ? (
              <Spline
                scene="https://prod.spline.design/HpJGf1t7hbGw6xJL/scene.splinecode"
                className="w-fit "
              />
            ) : (
              <div className="flex flex-col justify-center items-center text-center duration-700 w-full h-full">
                <div className="relative items-center justify-center bg-dark-700 rounded-full -z-20 p-2 shadow-lg">
                  <Image
                    src="/icons/globe.webp"
                    alt="circle"
                    width={200}
                    height={200}
                    className="absolute animate-spin-slow -z-10"
                  />
                  <Image
                    src="/icons/AInCircle.webp"
                    alt="Aircle"
                    width={200}
                    height={200}
                  />
                </div>
                <p className="font-conthrax drop-shadow-lg p-3">Loading...</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
};

export default HeroSection;

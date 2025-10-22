
"use client";
import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
import { motion} from "framer-motion";
function Hero() {
  return (
    <section className="relative  h-screen flex items-center justify-center overflow-hidden pt-16 " id="hero">
      <div className="absolute inset-0 bg-black/40 z-10">
        <Image
          src="/Images/pexels-leonmart-1552242.jpg"
          alt="Hero Image"
          //   width={1920}
          //   height={1080}
          fill
          priority
          className="object-cover object-center"
        />

        <div className="absolute  inset-0 bg-black/40 z-10 "></div>
      </div>
      <div className="relative z-10 text-white text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          >
            Transform Your Body{" "}
            <span className="text-primary">Transform Your Life</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.11, delay: 0.3, ease: "easeInOut" }}
            className="text-lg md:text-xl mb-8 font-light leading-relaxed max-w-3xl mx-auto"
          >
            join our fitness programs and achieve your goals with expert
            trainers and personalized plans plans.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeInOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button size="lg"> Start Free Trial</Button>
            <Button
              size="lg"
              className="bg-transparent text-lg font-semibold transition-transform duration-300 hover:scale-105 px-8"
            >
              {" "}
              View Plans
            </Button>
          </motion.div>
        </motion.div>
      </div>
      {/* scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10  border-2 border-primary  flex items-start justify-center  p-1 rounded-full">
          <div className="w-1 h-3 border-2 bg-primary rounded-full mt-2 animate-pulse "></div>
        </div>
      </div>
      ;
    </section>
  );
};

export default Hero;

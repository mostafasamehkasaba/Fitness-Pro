"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { programs } from "@/lib/consteent";
import { Card, CardContent } from "./card";
import { Button } from "./button";

const Programes = () => {
  return (
    <section className="py-20 bg-background"id="Programes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* العنوان والوصف */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
            className="text-4xl md:text-5xl font-heading text-foreground mb-4"
          >
            Our Programs
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}
            className="text-lg md:text-xl max-w-3xl leading-relaxed text-muted-foreground mx-auto"
          >
            Choose from our comprehensive fitness programs designed to help you
            achieve your health and wellness goals. Whether looking to build
            strength, improve flexibility, or enhance your cardiovascular
            health, we have a program tailored for you.
          </motion.p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            >
              <Card className="group relative overflow-hidden rounded-2xl shadow-lg p-0">
                <motion.div 
                className="group cursor-pointer relative h-64 ">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    p-0
                  />
                </motion.div>

                <CardContent className="p-6 pt-0">
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.3,
                    }}
                    className="text-xl font-bold font-heading mb-3 text-foreground group-hover:text-primary transition-colors"
                  >
                    {program.title}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.4,
                    }}
                    className="text-muted-foreground mb-4 leading-relaxed"
                  >
                    {program.description}
                  </motion.p>

                  <Button variant="outline" className="w-full transition-colors duration-300 group-hover:text-primary-foreground group-hover:bg-primary">Learn More</Button>



                </CardContent>

              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programes;

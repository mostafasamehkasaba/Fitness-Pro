"use client";
import React from "react";
import { motion } from "framer-motion";
const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => <div className={className}>{children}</div>;
const CardContent: React.FC<React.PropsWithChildren<{ className?: string }>> = ({
  children,
  className,
}) => <div className={className}>{children}</div>;

import Image from "next/image";
import { testimonials } from "@/lib/consteent";
import { Star } from "lucide-react";
const MAX_STARS = 5;
const Testimonials = () => {
  return (
    <section className="py-20 bg-background" id="Testimonials">
      <div className="text-center mb-16 mt-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
          className="text-4xl md:text-5xl font-heading text-foreground mb-4"
        >
          Success Stories
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}
          className="text-lg md:text-xl max-w-3xl leading-relaxed text-muted-foreground mx-auto"
        >
          Real transformations from real people who chose to change their lives
          with our programs.
        </motion.p>
      </div>

      {/* Testimonials Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.03 }}
            className="group"
          >
            <Card className="overflow-hidden rounded-2xl shadow-lg">
              <CardContent className="p-8 relative text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                  className="relative mb-6 h-30 w-24 mx-auto "
                >
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="rounded-full object-cover border-4 border-primary/20 group-hover:border-primary transition-colors duration-300"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    ease: "easeOut",
                    delay: index * 0.2,
                  }}
                  className="flex justify-center mb-4 gap-1"
                >
                  {Array.from({ length: MAX_STARS }).map((_, i) => {
                    const filled = i < t.rating;
                    return (
                      <Star
                        key={i}
                        className={
                          filled
                            ? "w-5 h-5 text-yellow-300"
                            : "w-5 h-5 text-neutral-300"
                        }
                        fill={filled ? "currentcolor" : "none"}
                      />
                    );
                  })}
                </motion.div>
                <motion.blockquote className="text-lg font-semibold font-heading text-foreground  text-center ">
                  <p>{t.story}</p>
                </motion.blockquote>
                <div className="p-6 text-center">
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.3,
                    }}
                    className="text-muted-foreground"
                  >
                    {t.details}
                  </motion.p>
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: index * 0.4,
                    }}
                    className="text-xl font-semibold  mb-2 text-primary mt-4"
                  >
                    {t.name}
                  </motion.h3>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

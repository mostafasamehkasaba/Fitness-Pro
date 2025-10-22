  "use client";
  import React from "react";
  import { motion } from "framer-motion";
  import { CheckCircle, TrendingUp, Calendar, Users } from "lucide-react";
  const WhyChoose = () => {
    const features = [
      {
        icon: CheckCircle,
        title: "Certified Professional Trainers",
        description:
          "Work with certified fitness professionals who have years of experience and expertise.",
      },
      {
        icon: TrendingUp,
        title: "Personalized Workout & Diet Plans",
        description:
          "Get customized plans tailored to your specific goals, fitness level, and preferences.",
      },
      {
        icon: Calendar,
        title: "Flexible Schedules",
        description:
          "Choose from online and offline sessions that fit your busy lifestyle and schedule.",
      },
      {
        icon: Users,
        title: "Community Support & Progress Tracking",
        description:
          "Join a supportive community and track your progress with our advanced monitoring tools.",
      },
    ];
    return (
      <div>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeInOut" }}
            className="text-4xl md:text-5xl font-heading text-foreground mb-4"
          >
            Why Choose <span className="text-primary">FitPro</span> Fitness?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeInOut" }}
            className="text-lg md:text-xl max-w-3xl leading-relaxed text-muted-foreground mx-auto"
          >
            Why Provide everything you need to succeed on your fitness journey
            with porven methods and expert support
          </motion.p>
        </div>
        {/* features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              className="text-center mb-6 group" 
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.12,
              }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full bg-primary/20 inline-flex 
                text-primary
                items-center justify-center
                group-hover:bg-primary
                group-hover:text-primary-foreground
                transition-colors duration-300 mb-6"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.18,
                }}
              >
                <feature.icon className="w-8 h-8" />
              </motion.div>

              <motion.h3
                className="text-xl font-bold font-heading mb-4 text-foreground"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
              >
                {feature.title}
              </motion.h3>
              <motion.p
                className="text-muted-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
              >
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  export default WhyChoose;

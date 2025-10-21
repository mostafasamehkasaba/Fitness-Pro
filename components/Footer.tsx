"use client"
import React from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary  text-white py-3 mt-12 duration-300 "id='Contact'>
      <div className=" max-w-9xl mx-auto px-2 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand  */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-black font-heading text-primary mb-4">
              Fitness Pro{" "}
            </h3>
            <p className="mb-6 leading-relaxed max-w-md">
              Transform your life with our comprehensive fitness programs,
              expert trainers, and supportive community.
            </p>
            {/* Links  */}
            <div className="flex space-x-4 ">
              <Link
                href="/about"
                className="w-10 h-10 bg-secondary/40 rounded-full flex items-center justify-center hover:bg-primary/80 duration-300"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="w-10 h-10 bg-secondary/40 rounded-full flex items-center justify-center hover:bg-primary/80 duration-300"
              >
                <Youtube className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="w-10 h-10 bg-secondary/40 rounded-full flex items-center justify-center hover:bg-primary/80 duration-300"
              >
                <Facebook className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links  */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Programes", "pricing", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                      className="hover:text-primary duration-300 transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
          {/* Contact Info  */}
          <div>
            <h4 className="text-lg font-bold font-heading mb-4">
              Contact Info
            </h4>
            <div className="pt-4">
              <p>
                <strong>Phone</strong>
                <br />
                01026860904
              </p>
              <p>
                <strong>Email</strong>
                <br />
                info@fitProFitness.eng
              </p>

              <p>
                <strong>Location</strong>
                <br />
                123 Fitness St, Muscle City, CA 12345
                <br />
                Healthy Country
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-secondary/40 pt-20 text-center text-neutral-400">
          <p>
            © 2025 FitPro Fitness. All rights reserved. Transform your body,
            transform your life.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer

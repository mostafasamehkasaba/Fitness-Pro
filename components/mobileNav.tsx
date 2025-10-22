"use client";
import React, { useState } from "react";
import ThemeToogle from "./ThemeToogle";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
const MobileNav = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="md:hidden flex items-center gap-2">
      {/* زرار تغيير الثيم */}
      <ThemeToogle />

      {/* زرار القائمة */}
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

    
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-background shadow-lg border-t border-border p-6 flex flex-col gap-4 z-50">
          <Link href="#" className="text-lg font-medium hover:text-primary">
            Home
          </Link>
          <Link href="#" className="text-lg font-medium hover:text-primary">
            Programs
          </Link>
          <Link href="#" className="text-lg font-medium hover:text-primary">
            Pricing
          </ Link>
          <Link href="#" className="text-lg font-medium hover:text-primary">
            Testimonials
          </Link>
          <Button className="mt-4">Join Now</Button>
        </div>
      )}
    </div>
  );
};

export default MobileNav;

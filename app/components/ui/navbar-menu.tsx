"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";
import { Logo } from "./logo";
import { cn } from "../../lib/utils";

const transition = {
  type: "spring",
  mass: 0.2,
  damping: 15,
  stiffness: 120,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!menuRef.current || !contentRef.current) return;
      
      if (active === item) {
        const menuRect = menuRef.current.getBoundingClientRect();
        const contentRect = contentRef.current.getBoundingClientRect();
        
        // Wider buffer for horizontal movement
        const horizontalBuffer = 300; // Increased buffer for sides
        const verticalBuffer = 100;   // Keep original buffer for vertical
        
        // Check if mouse is in the main content area (including buffer)
        const isInMainArea = 
          e.clientX >= Math.min(menuRect.left, contentRect.left) - horizontalBuffer &&
          e.clientX <= Math.max(menuRect.right, contentRect.right) + horizontalBuffer &&
          e.clientY >= menuRect.top - verticalBuffer &&
          e.clientY <= contentRect.bottom + verticalBuffer;
        
        // Close menu if mouse moves too far horizontally or below content
        if (!isInMainArea) {
          setActive(null);
        }
      }
    };

    if (active === item) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [active, item, setActive]);

  return (
    <div ref={menuRef} onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.15 }}
        className="cursor-pointer text-gray-200 hover:text-white transition-colors"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        >
          {active === item && (
            <div className="fixed inset-0 z-40">
              <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
              <div ref={contentRef} className="relative z-50 w-full">
                <div className="container mx-auto px-4">
                  <div className="mt-16 grid grid-cols-2 gap-8">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export function Menu({ setActive, children }: { setActive: (item: string | null) => void; children: React.ReactNode }) {
  return (
    <div className="relative z-50 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Logo />
          <nav className="flex items-center space-x-8">
            {children}
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              to="?lang=de"
              className="text-sm text-gray-200 hover:text-white transition-colors"
            >
              DE
            </Link>
            <span className="text-gray-500">|</span>
            <Link
              to="?lang=en"
              className="text-sm text-gray-200 hover:text-white transition-colors"
            >
              EN
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-9 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black transition-colors hover:bg-white/90"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link to={href} className="group block p-4 hover:bg-white/5 rounded-lg transition-colors">
      <div className="flex space-x-4">
        <img
          src={src}
          width={140}
          height={70}
          alt={title}
          className="flex-shrink-0 rounded-md"
        />
        <div>
          <h4 className="text-lg font-medium text-white mb-1 group-hover:text-white/90">
            {title}
          </h4>
          <p className="text-sm text-gray-200 group-hover:text-white">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="block p-2 text-gray-200 hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
};

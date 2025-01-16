"use client";
import React from "react";
import { motion } from "framer-motion";
import { Link } from "@remix-run/react";
import type { LinkProps } from "@remix-run/react";
import { Logo } from "./logo";
import { cn } from "../../lib/utils";
import { useTranslations } from "../../utils/translations";

interface MenuProps extends React.HTMLAttributes<HTMLElement> {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4 z-[60]">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div layout className="w-max h-full p-4">
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export function Menu({ children, className, setActive, ...props }: MenuProps) {
  const { t, currentLanguage } = useTranslations();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md py-4">
      <div className="container">
        <nav
          onMouseLeave={() => setActive(null)}
          className={cn(
            "relative flex items-center justify-between",
            className
          )}
          {...props}
        >
          <div className="flex-shrink-0">
            <Logo />
          </div>

          <div className="flex-grow flex justify-center">
            <ul className="flex items-center gap-6">
              {children}
            </ul>
          </div>

          <div className="flex-shrink-0 flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm">
              <Link
                to="?lang=de"
                className={cn(
                  "text-gray-400 hover:text-white transition-colors",
                  currentLanguage === "de" && "text-white font-medium"
                )}
              >
                DE
              </Link>
              <span className="text-gray-400">|</span>
              <Link
                to="?lang=en"
                className={cn(
                  "text-gray-400 hover:text-white transition-colors",
                  currentLanguage === "en" && "text-white font-medium"
                )}
              >
                EN
              </Link>
            </div>

            <Link
              to="/contact"
              className="inline-flex h-9 items-center justify-center rounded-full bg-white px-6 text-sm font-medium text-black transition-colors hover:bg-white/90"
            >
              {t("navigation.contact")}
            </Link>
          </div>
        </nav>
      </div>
    </header>
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
    <Link to={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

interface HoveredLinkProps extends Omit<LinkProps, "className"> {
  children: React.ReactNode;
}

export const HoveredLink = ({ children, ...rest }: HoveredLinkProps) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black"
    >
      {children}
    </Link>
  );
};

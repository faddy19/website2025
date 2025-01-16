"use client";

import { Link } from "@remix-run/react";

export function Logo() {
  return (
    <Link 
      to="/" 
      className="flex items-center transition-opacity duration-200 hover:opacity-80"
    >
      <img
        src="/Logo-Capsula-V2.0-High-Res-transparent-backg.png"
        alt="Capsula"
        className="h-7 w-auto block dark:hidden"
        draggable="false"
      />
      <img
        src="/Logo-Capsula-white-transp.png"
        alt="Capsula"
        className="h-7 w-auto hidden dark:block"
        draggable="false"
      />
    </Link>
  );
} 
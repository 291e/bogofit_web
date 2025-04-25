"use client";

import Image from "next/image";
import Link from "next/link";

interface HeaderProps {
  onNavigate: (section: 1 | 2 | 3) => void;
}

export function Header({ onNavigate }: HeaderProps) {
  return (
    <header className="fixed top-0 w-full h-16 bg-transparent z-10 flex items-center justify-center">
      <div className="container mx-auto px-4 flex justify-between items-center w-full">
        <Link href="/">
          <Image
            src="/header/BOGOFIT.svg"
            alt="Bogofit"
            width={100}
            height={100}
          />
        </Link>
        <nav>
          <div className="flex gap-10">
            <button
              onClick={() => onNavigate(1)}
              className="text-white hover:text-gray-300 transition-colors cursor-pointer"
            >
              ABOUT
            </button>

            <button
              onClick={() => onNavigate(2)}
              className="text-white hover:text-gray-300 transition-colors cursor-pointer"
            >
              CONTACT
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

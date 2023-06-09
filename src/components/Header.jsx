import Image from "next/image";
import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

export default function Header() {
  return (
    <div>
      {/* left */}
      <div className="flex items-center justify-between max-w-6xl">
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid">
          <Image
            src="https://th.bing.com/th/id/R.825e4d7b40faa8f9c51da0c73d6254d8?rik=RVfV80ATb%2boUhg&pid=ImgRaw&r=0"
            layout="fill"
            alt="Logo"
            className="object-contain"
          />
        </div>
        <div className="cursor-pointer h-24 w-10 relative  lg:hidden">
          <Image
            src="https://maltaineu.gov.mt/en/PublishingImages/Pages/Welcome/INSTA%20LOGO.jpeg"
            layout="fill"
            alt="Logo"
            className="object-contain"
          />
        </div>
      </div>

      {/* middle */}
      <div className="relative">
        <div className="absolute">
          <SearchIcon className="h-5 text-gray-500" />
        </div>
        <input type="text" placeholder="Search" className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black  focus:border-black" />
      </div>
      {/* right */}
      <h1>Right side</h1>
    </div>
  );
}

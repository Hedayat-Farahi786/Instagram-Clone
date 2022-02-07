import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon
} from "@heroicons/react/outline";

import { HomeIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 left-0 ">
      <div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto">
        {/* Left */}
        <div className="relative w-24 hidden lg:inline-grid cursor-pointer">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
            alt="Instagram"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://allfacebook.de/wp-content/uploads/2020/08/glyph-logo_May2016.png"
            alt="Instagram"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Middle */}

       <div className="max-w-xs">
       <div className="relative mt-1 p-3 rounded-md">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500" />
          </div>
            <input className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black" type="text" placeholder="Search" />
        </div>
       </div>

        {/* Right */}

       <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-10 w-10 md:hidden cursor-pointer" />
          <div className="relative navBtn">
          <PaperAirplaneIcon className="navBtn rotate-45" />
          <div className="absolute -top-2 -right-1 text-xs w-4 h-4 bg-red-600 rounded-full text-white flex items-center justify-center animate-pulse">3</div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />

          <img className="h-10 rounded-full cursor-pointer" src="https://miro.medium.com/max/375/1*PiHoomzwh9Plr9_GA26JcA.png" alt="profile pic" />

       </div>

      </div>
    </div>
  );
};

export default Header;

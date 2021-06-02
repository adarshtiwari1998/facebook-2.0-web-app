import {useState, useEffect} from "react";
import Image from "next/image";
import { useSession, signOut} from "next-auth/client";
import { SearchIcon, FlagIcon, PlayIcon, ShoppingCartIcon, SunIcon } from "@heroicons/react/outline";
import {  HomeIcon, BellIcon, ChatIcon, UserGroupIcon, ViewGridIcon, ChevronDownIcon, MoonIcon} from "@heroicons/react/solid";
import HeaderIcon from "../Icons/HeaderIcon";
function Header() {
// to define the user session
const [session] = useSession();
//dark mode initialize
const [darkMode, setDarkMode] = useState(false);

//use hooks for defining dark mode
useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}, [darkMode]);

    return (
     <div className="sticky top-0 z-50 bg-white flex items-center shadow-md p-2 lg:px-5 dark:bg-gray-800 dark:text-white">
      {/* left */}
        <div className="flex items-center">
        <Image src="https://bit.ly/2RNJUyk" 
          width={40}
          height={40}
          layout="fixed" />
          
          <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
            <SearchIcon className="h-6 text-gray-600" />
            <input className="hidden md:inline-flex flex-shrink ml-2 items-center bg-transparent outline-none placeholder-gray-500 " type="text" placeholder="Search Facebook" /> 
          </div>
       </div>

        {/* center */}
        <div className="flex justify-center flex-grow">
         {/* mobile first css classname */}
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
         </div>
        </div>

        {/* Right */}
         <div className="flex items-center sm:space-x-2 justify-end">
          {/* {profile picture in avatar} */}
          <Image 
          onClick={signOut}
          className="rounded-full cursor-pointer"
          // to dynamically render the user image
          src={session.user.image}
          width="40"
          height="40"
          layout="fixed"
          />
          <p className="whitespace-nowrap font-semibold pr-3">{session.user.name}</p>
          <ViewGridIcon className="icon" />
          <ChatIcon className="icon" />
          <BellIcon className="icon" />
          <ChevronDownIcon className="icon" />
          <button onClick={() => setDarkMode(!darkMode)} className="focus:outline-none">
    {darkMode ? (
      <div className="flex space-x-2 text-center place-items-center">
      <SunIcon className="icontogglemode" />
      <p className="hidden md:inline-flex md:text-gray-400 lg:text-gray-400">DarkMode</p>
      </div>
    ) : (
      <div className="flex space-x-2 text-center place-items-center">
      <MoonIcon className="icontogglemode" />
      <p className="hidden md:inline-flex md:text-gray-400 lg:text-gray-400">LightMode</p>
      </div>
    )}
  </button>
         </div>
       </div>

    )
}

export default Header

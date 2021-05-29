import Image from "next/image";
import { SearchIcon, FlagIcon, PlayIcon, ShoppingCartIcon } from "@heroicons/react/outline";
import {  HomeIcon, BellIcon, ChatIcon, UserGroupIcon, ViewGridIcon, ChevronDownIcon} from "@heroicons/react/solid";
import HeaderIcon from "./Icons/HeaderIcon";
function Header() {
    return (
     <div className="sticky top-0 z-50 bg-white flex items-center shadow-md p-2 lg:px-5 ">
      {/* left */}
        <div className="flex items-center">
        <Image src="https://bit.ly/2RNJUyk" 
          width={40}
          height={40}
          layout="fixed" />
          
          <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
            <SearchIcon className="h-6 text-gray-600" />
            <input className="hidden md:inline-flex ml-2 flex items-center bg-transparent outline-none placeholder-gray-500 flex-shrink" type="text" placeholder="Search Facebook" /> 
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
          <p className="whitespace-nowrap font-semibold pr-3">Adarsh Tripathi</p>
          <ViewGridIcon className="icon" />
          <ChatIcon className="icon" />
          <BellIcon className="icon" />
          <ChevronDownIcon className="icon" />
         </div>
      
       </div>

    )
}

export default Header

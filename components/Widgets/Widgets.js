
import {widgetscontacts} from "./Data";
import {SearchIcon} from "@heroicons/react/outline";
import {DotsHorizontalIcon, VideoCameraIcon} from "@heroicons/react/solid"
import Contact from "./Contact";

function Widgets() {

    return (
        <div className="hidden lg:flex flex-col w-60 h-screen pb-44 p-2 mt-5 overflow-y-auto scrollbar-hide">
          <div className="flex justify-between mb-5 items-center text-gray-500">
            <h2 className="text-xl">Contacts</h2>
            <div className="flex space-x-2">
             <VideoCameraIcon className="h-6" />
             <SearchIcon className="h-6" />
             <DotsHorizontalIcon className="h-6" />
            </div>
          </div>
          {/*  initialize the widgetscontacts array data in a component contact */}
           {widgetscontacts.map((contact) => (
            <Contact key={contact.src} src={contact.src}  name={contact.name}/>
           ))}
        </div>
    )
}

export default Widgets

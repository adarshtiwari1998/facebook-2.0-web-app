import {widgetscontacts} from "./Data";
import {SearchIcon} from "@heroicons/react/outline";
import {DotsHorizontalIcon, VideoCameraIcon} from "@heroicons/react/solid"


function Widgets() {
    return (
        <div>
          <div>
            <h2 className="text-xl">Contacts</h2>
            <div className="flex space-x-2">
             <VideoCameraIcon className="h-6" />
             <SearchIcon className="h-6" />
             <DotsHorizontalIcon className="h-6" />
            </div>
          </div>
        </div>
    )
}

export default Widgets

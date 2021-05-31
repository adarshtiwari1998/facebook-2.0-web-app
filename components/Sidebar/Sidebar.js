import {useSession} from "next-auth/client";
import {ChevronDownIcon, ShoppingBagIcon, UserGroupIcon, FlagIcon } from "@heroicons/react/outline";
import {CalendarIcon, ClockIcon, DesktopComputerIcon, UsersIcon, BookmarkIcon, BriefcaseIcon} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";
function Sidebar() {
const [session, loading] = useSession();

    return (
        <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
         <SidebarRow src={session.user.image} title={session.user.name} /> 
          <SidebarRow Icon={UsersIcon} title="Friends" /> 
          <SidebarRow Icon={UserGroupIcon} title="Groups" /> 
          <SidebarRow Icon={ShoppingBagIcon} title="MarketPlace" /> 
          <SidebarRow Icon={DesktopComputerIcon} title="Watch" /> 
          <SidebarRow Icon={CalendarIcon} title="Events" /> 
          <SidebarRow Icon={ClockIcon} title="Memories" /> 
          <SidebarRow Icon={BookmarkIcon} title="Saved" /> 
          <SidebarRow Icon={FlagIcon} title="Pages" /> 
          <SidebarRow Icon={BriefcaseIcon} title="Jobs" /> 
          <SidebarRow Icon={ChevronDownIcon} title="See More" /> 
        </div>
    )
}

export default Sidebar;

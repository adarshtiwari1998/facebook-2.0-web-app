import Image from "next/image";
function SidebarRow({src, Icon, title}) {
    return (
        <div className="flex items-center space-x-2 p-2 hover:bg-gray-200 rounded-xl cursor-pointer">
            {/* this is called conditional rendering */}
            {/* if they parsing the image then import next image and render image source */}
            {src && (
           <Image
            className="rounded-full"
            src={src}
            width={30}
            height={30}
            layout="fixed"
           />
            )}
          {/* if they parsing the icon then render Icon */}
          {Icon && (
           <Icon
            className="h-8 w-8 text-blue-500"
           />
            )}
          {/* if they parsing the paragraph then render title inside paragraph */}
         <h1 className="hidden sm:inline-flex font-medium">{title}</h1>
        </div>
    )
}

export default SidebarRow;


import Image from "next/image";
// props the widgets contact data here
function Contact({src, name}) {
    return (
        <div className="relative flex items-center cursor-pointer space-x-3 mb-2 p-2 hover:bg-gray-200 rounded-xl  ">
           <Image
            className="rounded-full"
            object="cover"
            src={src}
            width={50}
            height={50}
            layout="fixed"
           />
           <p>{name}</p>
           <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full animate-pulse"></div>
        </div>
    )
}

export default Contact;

import Image from "next/image";
import { useSession} from "next-auth/client";
function InputBox() {
// to define the user session
const [session] = useSession();
    return (
        <div>
          <div className="flex space-x-4 p-4 items-center">
          <Image 
            className="rounded-full"
            src={session.user.image}
            width={40}
            height={40}
            layout="fixed"
             />
            <form className="flex flex-1" >
              {/* jsx use in placeholder with asterisk */}
             <input 
             className="rounded-full h-12 bg-gray-100  flex-grow px-5 focus:outline-none"
             type="text" 
             placeholder={`What's on your mind, ${session.user.name}`} />
            </form>
          </div>
        </div>
    )
}

export default InputBox

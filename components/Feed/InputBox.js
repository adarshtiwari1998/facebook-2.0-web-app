import Image from "next/image";
import { useSession } from "next-auth/client";
import { useRef } from "react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import {CameraIcon, VideoCameraIcon} from "@heroicons/react/solid"
import { db } from "../../firebase";
import firebase from "firebase";
function InputBox() {
// to define and initialize the user session
const [session] = useSession();
// initialize the input reference
const inputRef = useRef(null);
// to initialize the sendpost button
const sendPost = (e) => {
    e.preventDefault();

  //allow someone to send the post if value of entry folder is empty
  if (!inputRef.current.value) return;

  //and if the value is already here then continue this

  db.collection("posts").add({
    // first pushing the message to the
    message: inputRef.current.value,
    // username are dynamic push
    name: session.user.name,
    // useremail are dynamic push
    email: session.user.email,
    // userimage are dynamic pushing
    image: session.user.image,
    // timestamp when user are pushing message and add post to firestore database
    // this gives the server timestamp of firebase firestore
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),

  });

  //close the input field after message are sendPost
  inputRef.current.value = "";
};
    return (
        <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
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
             ref={inputRef}
             placeholder={`What's on your mind, ${session.user.name}?`} />
             <button hidden type="submit" onClick={sendPost}>Submit</button>
            </form>
          </div>
          <div className="flex justify-evenly p-3 border-t">
            <div className="inputIcon">
            <VideoCameraIcon className="h-7 text-red-500" />
            <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
            </div>
              <div className="inputIcon">
            <CameraIcon className="h-7 text-green-400" />
            <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
            </div>
              <div className="inputIcon">
              <EmojiHappyIcon className="h-7 text-yellow-300" />
            <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
              </div>
          </div>
        </div>
    )
}

export default InputBox

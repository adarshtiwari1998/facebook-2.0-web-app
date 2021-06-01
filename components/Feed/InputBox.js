import Image from "next/image";
import { useSession } from "next-auth/client";
import { useRef, useState } from "react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import {CameraIcon, VideoCameraIcon} from "@heroicons/react/solid"
import { db, storage } from "../../firebase";
import firebase from "firebase";
function InputBox() {
// to define and initialize the user session
const [session] = useSession();
// initialize the input reference
const inputRef = useRef(null);
// initialize the file picker reference

// need peace of state to hold the add image to post image from local on frontend

const [imageToPost, setImageToPost] = useState(null); 

const filepickerRef = useRef(null);
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
   // after state to save the data on database
  }).then(doc => {
    if (imageToPost) {
    // upload stuff for image to firebase storage bucket 
    // create a folder post with post id and push the string as imageToPost to firebese storage
    // image is basically base 64 encodeded image is actually a bunch of layer will actually build the image
     const uploadTask = storage
     .ref(`posts/${doc.id}`)
     // including data url
     .putString(imageToPost, "data_url");
    
     // call remove the image 
     removeImage();

     // upload task is basically comes back from api 
     // state null before uploading image
     uploadTask
     .on("state_change", 
     // progress state as null
     null,
     //if any error come is showing on console
      (error) => console.error(error),
      // when upload completes
      () => {
      // there is two ways to save post on database one is showing before and second ways is this
      storage
      .ref("posts")
      // create a unique doc id
      .child(doc.id)
      // get the url of post
      .getDownloadURL()
      // and store the url in div tag as the img src which is the part of the frontend
      .then((url) => {
        //save to firebasestorage that we have just uploaded
        db.collection("posts").doc(doc.id)
        // pass in a object
        .set({
        postImage: url,
        },
        // have to include additional option that is merge true
        // if we dont do that it will literally replace all this stuff like message, name,
        // email, image , timestamp that we have  save on db collection earlier
        // and save this postImage only without name, message, timestamp, email etc
        {merge: true}
        );
      });
     }
     );
    }
  });
  

  //close the input field after message are sendPost
  inputRef.current.value = "";
   };

 // initialize the addImageToPost 
  const addImageToPost = (e) => {
    const reader = new FileReader();
  // initialize the api called file reader to read that file
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    // read that file on onlaod and when readerevent comes back
    reader.onload = (readerEvent) => {
      // in this case update the state of the
      setImageToPost(readerEvent.target.result);
    }
  };

  // hook function to remove image
   const removeImage = () => {
    // set the image state to null or none
     setImageToPost(null);
  }

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
            {/* when image selected, we show the preview here */}
            {/* if image is added, se render this image here */}
            {imageToPost && (
              // when we click on div image will be remove on a state
              <div onClick={removeImage} className="flex flex-col filter cursor:pointer transition duration-150 hover:brightness-110 transform hover:scale-105">
                {/* render image on div as img tag */}
                <img className="h-10 object-contain" src={imageToPost}  alt=""/>
                <p className="text-xs text-red-500 text-center">Remove</p>
              </div>
            )}

          </div>
          <div className="flex justify-evenly p-3 border-t">
            <div className="inputIcon">
            <VideoCameraIcon className="h-7 text-red-500" />
            <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
            </div>
            <div onClick={() => filepickerRef.current.click()} className="inputIcon">
            <CameraIcon className="h-7 text-green-400" />
            <p className="text-xs sm:text-sm xl:text-base">Photo/Video</p>
            {/* hidden input field to for add image to post button  */}
            <input ref={filepickerRef} hidden type="file" onChange={addImageToPost} />
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

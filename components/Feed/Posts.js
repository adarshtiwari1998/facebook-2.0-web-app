import { useCollection } from "react-firebase-hooks/firestore";
import {db} from "../../firebase";
import Post from "./Post";
function Posts({posts}) {
    //initialize before render this
    //initialize three things realtimeposts state, loading state, error state as usecollections hooks
    const [realtimePosts] = useCollection(
   // put the directory location here
    db.collection("posts")
   // order post from new to old 
   .orderBy("timestamp", "desc")
    );
    return (
        <div>
        {/* if we have real time post so basically map to firebase if you have them*/}
        { realtimePosts ?
        //render real time post
        realtimePosts
        //give the list of docs 
        ?.docs
        //then map through the every single post we want to render out
        .map((post) => (
        // post components
        <Post
        //in this post components pass all the following key values here
        // this is the key values parents need to be considered
        // this will come from firebase firestore
        key={post.id}
        name={post.data().name}
        message={post.data().message}
        email={post.data().email}
        timestamp={post.data().timestamp}
        image={post.data().image}
        postImage={post.data().postImage}
        />
        )) 
        //otherwise show the prefatch post that is rendered out from server side  
        :
      // render out post that is called server side rendered post
      posts.map((post) => (
      // this will come from server side rendered
        <Post 
        key={post.id}
        name={post.name}
        message={post.message}
        email={post.email}
        timestamp={post.timestamp}
        image={post.image}
        postImage={post.postImage}
        />
        
         ))}
        </div>
    );
}

export default Posts;

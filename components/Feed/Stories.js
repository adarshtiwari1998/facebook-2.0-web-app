
import StoriesCard from "./StoriesCard";
import {stories} from "./Data";

function Stories() {
    return (
        <div className="flex justify-center space-x-3 mx-auto ">
         {stories.map((story) => (
            <StoriesCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
         ))}
        </div>
    )
}

export default Stories

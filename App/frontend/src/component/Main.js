import StoryContent from "./StoryContent"
import FeedContent from "./FeedContent"

import '../CSS/Main.css'

export default function Main() {
    return <main>
        <div className="mainContainers">
            <FeedContent/>
            <StoryContent/>
        </div>
    </main>
}
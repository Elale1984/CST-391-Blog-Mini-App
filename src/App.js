import Post from './Post';
import {useState} from "react";
import post from "./Post";
import AddPost from "./AddPost";

function App() {

    const [postList, setPostList] = useState([
        {
            postNumber: 0,
            text: "Sandwich making is an art form that has been practiced since the late 300. It was started by the " +
                "Erl Duke of Sandwich and he was killed for his breadfillery due to the rising of witchcraft and the " +
                "connection with the infestation of ergot mold proliferating upon the head of the wheat",
        },
        {
            postNumber: 1,
            text: "Our recent blog post delves into the alleged controversies surrounding the Biden family," +
                " examining the various claims and controversies that have emerged. Explore the intricacies" +
                " of these allegations and gain a deeper understanding of the discussions surrounding the topic",
        },
        {
            postNumber: 2,
            text: "In our heartwarming blog post, we shed light on the profound need for affection in dogs" +
                " and the positive impact it has on their well-being. Discover how simple acts of love and attention" +
                " can transform the lives of our furry companions, fostering a deep bond and promoting their overall" +
                " happiness and contentment.",
        },
    ]);
    const handleDeletePost = (id) => {
        let updatedPostList = postList.filter(post => post.postNumber !== id);
        setPostList(updatedPostList);
    };

    const posts = postList.map((post) => (
        <Post key={post.postNumber} text={post.text} id={post.postNumber} onDelete={handleDeletePost}/>
    ));

    const [postId, setPostId] = useState(3);
    const handleAddPost = (newText) => {
        let newPost = {
            postNumber: postId,
            text: newText
        };
        setPostList(post => [...postList, newPost]);
        setPostId(postId + 1);
    }
    return (
        <div>
            {posts}
            <AddPost onAdd={handleAddPost} />
        </div>
    );
}

export default App;

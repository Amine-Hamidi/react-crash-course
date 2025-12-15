
import { useState } from 'react';
import Classes from './ListPosts.module.css';
import Modal from './Modal';
import NewPost from './NewPost';
import Post from './post';




function ListPosts({ isPosting, onStopPosting }) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        setPosts((existingPosts) => {
            return [postData, ...existingPosts];
        });
    }

    return (
        <>
          {isPosting && (
            <Modal onClose={onStopPosting} onAddPost={addPostHandler}>  
              <NewPost 
                onCancel={onStopPosting} 
              />
            </Modal>
          )}
            <ul className={Classes.posts}>
                <Post author="HAMIDI" body="check out the full course!" />
            </ul>
        </>
    );
}   

export default ListPosts;
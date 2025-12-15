
import Classes from './ListPosts.module.css';
import Modal from './Modal';
import NewPost from './NewPost';
import Post from './post';
import { useState } from "react";



function ListPosts({ isPosting, onStopPosting }) {
    const [enteredBody, setEnteredBody] = useState('');  
    const [enteredAuthor, setEnteredAuthor] = useState('');
    
      
      function handleChange(event) { 
        setEnteredBody(event.target.value);
      }
      
      function handleChangeAuthor(event) { 
        setEnteredAuthor(event.target.value);
      }
    return (
        <>
          {isPosting && (
            <Modal onClose={onStopPosting} >  
              <NewPost 
                onChangeBody={handleChange} 
                onChangeAuthor={handleChangeAuthor}
                onCancel={onStopPosting} 
              />
            </Modal>
          )}
            <ul className={Classes.posts}>
                <Post author={enteredAuthor} body={enteredBody} />
                <Post author="HAMIDI" body="check out the full course!" />
            </ul>
        </>
    );
}   

export default ListPosts;
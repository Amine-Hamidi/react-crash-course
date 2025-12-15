import Post from "./post";
import Classes from './ListPosts.module.css';
import NewPost from "./NewPost";
import { useState } from "react";
import Modal from "./Modal";
import { use } from "react";


function ListPosts() {
    const [enteredBody, setEnteredBody] = useState('');  
    const [enteredAuthor, setEnteredAuthor] = useState('');
    const [modalIsVisible, setModalIsVisible] = useState(true)
      function hideModalHandler() {
        setModalIsVisible(false);
      }
      function handleChange(event) { 
        setEnteredBody(event.target.value);
      }
      
      function handleChangeAuthor(event) { 
        setEnteredAuthor(event.target.value);
      }
    return (
        <>
          {modalIsVisible && (
            <Modal onClose={hideModalHandler} >  
              <NewPost 
                onChangeBody={handleChange} 
                onChangeAuthor={handleChangeAuthor} 
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
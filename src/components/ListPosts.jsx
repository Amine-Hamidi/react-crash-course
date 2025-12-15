
import Classes from './ListPosts.module.css';
import Modal from './Modal';
import NewPost from './NewPost';
import Post from './post';




function ListPosts({ isPosting, onStopPosting }) {
   
    return (
        <>
          {isPosting && (
            <Modal onClose={onStopPosting} >  
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
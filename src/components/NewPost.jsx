import classes from './NewPost.module.css';
import { useState } from 'react';

function NewPost({onCancel}) {
   const [enteredBody, setEnteredBody] = useState('');  
    const [enteredAuthor, setEnteredAuthor] = useState('');
    
      
      function handleChangeBody(event) { 
        setEnteredBody(event.target.value);
      }
      
      function handleChangeAuthor(event) { 
        setEnteredAuthor(event.target.value);
      }
      function handleSubmit(event) {
        event.preventDefault();
        const postData = {
          body: enteredBody,
          author: enteredAuthor
        };
        console.log(postData);
        onCancel();
      }
      
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={handleChangeBody} />
      </p>
     
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={handleChangeAuthor} />
      </p>
      <p className={classes.actions}>
        <button type="button" onClick={onCancel}>Cancel</button>
        <button >Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
import Post from "./post";
import Classes from './ListPosts.module.css';
import NewPost from "./NewPost";


function ListPosts() {
    return (
        <>
            <NewPost/>
            <ul className={Classes.posts}>
                <Post author="Amine" body="React is awesome!" />
                <Post author="HAMIDI" body="check out the full course!" />
            </ul>
        </>
    );
}

export default ListPosts;
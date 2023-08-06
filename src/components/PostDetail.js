import { useState, useEffect } from "react";
import { firestore } from "../firebase";
import { useParams } from "react-router-dom";


function PostDetail() {
    const [post, setPost] = useState({});
    console.log('params', useParams());
    //here var name shold be same as in link
    const {postId} = useParams(); // this will be called as page loads anf fetch id from url

    useEffect(()=>{
        firestore
            .collection('posts')
            .doc(postId)
            .get()
            .then((snapshot)=>{
                console.log('snapshot',snapshot.data());
                setPost(snapshot.data());
            });
    },[postId]);
 
    
    return (
        
      <div className="post-detail">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
      </div>
    );
  }
  
export default PostDetail;
  
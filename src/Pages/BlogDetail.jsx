import { useParams } from "react-router-dom";
import React, {useState,useEffect} from "react";
import firebase from '../firebase/FirebaseConfig'; 
import { getDatabase, ref, onValue, off } from 'firebase/database';
const BlogDetail = () => {
    const params = useParams();
    const [blog, setBlogs] = useState(null);
  
    useEffect(() => {
      // Fetch data from Firebase when the component mounts
      const db = getDatabase();
      const dbRef = ref(db, 'blogs');
  
      const unsubscribe = onValue(dbRef, (snapshot) => {
        // Convert the snapshot to an array of blogs
        const blogsData = snapshot.val();
        if (blogsData) {
          const blog = blogsData[params.blogId];
        setBlogs(blog);
        }else{
          setBlogs(null);
        }
      });
  
      // Unsubscribe from the Firebase database when the component unmounts
      return () => {
        // Clean up the database reference
        off(dbRef, 'value', unsubscribe);
      };
    }, [params.blogId]);
  
    return (
      <>
      {blog ? (
        <>
        <h1>{blog.author}</h1>
        <p>{blog.content}</p>
  
        </>
      ) : (
        <p>Loading...</p>
      )}
      </>
    )

}

export default BlogDetail;
import { useParams } from "react-router-dom";
import React, {useState,useEffect} from "react";
import firebase from '../firebase/FirebaseConfig'; 
import { getDatabase, ref, onValue, off,remove } from 'firebase/database';
import BlogDesc from "../Components/UI/BlogDesc";
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
  
    const handleDelete = async () => {
      try {
        // Delete the blog from Firebase using the blogId
        const db = getDatabase();
        const blogRef = ref(db, `blogs/${params.blogId}`);
        await remove(blogRef);
        setBlogs(null); // Clear the blog state after deletion
      } catch (error) {
        console.error('Error deleting blog:', error);
      }
    };

    return (
      <>
      {blog ? (
        <>
        <BlogDesc 
        heading={blog.heading}
        image={blog.imageUrl}
        author={blog.author}
        content={blog.paragraph}
        onDelete={handleDelete}
        ></BlogDesc>
        </>
      ) : (
        <p>Loading...</p>
      )}
      </>
    )

}

export default BlogDetail;
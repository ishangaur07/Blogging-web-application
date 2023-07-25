import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import firebase from '../firebase/FirebaseConfig';
// import Card from "./UI/Card";
import classes from "./HomeBlogs.module.css";
import BlogItem from "./BlogItem/BlogItem";

const HomeBlogPosts = () => {
    const [blogs, setBlogs] = useState({});
    useEffect(() => {
        // Fetch data from Firebase when the component mounts
        const db = getDatabase();
        const dbRef = ref(db, 'blogs');
    
        const unsubscribe = onValue(dbRef, (snapshot) => {
          // Convert the snapshot to an array of blogs
          const blogsData = snapshot.val();
          const limitedBlogs = Object.entries(blogsData).slice(0, 4).reduce((obj, [key, value]) => {
            obj[key] = value;
            return obj;
          }, {});
    
          setBlogs(limitedBlogs);
        });
    
        // Unsubscribe from the Firebase database when the component unmounts
        return () => {
          // Clean up the database reference
          off(dbRef, 'value', unsubscribe);
        };
      }, []);
    
      const extractFirst44Words = (paragraph) => {
        const words = paragraph.split(' ');
        return words.slice(0, 44).join(' ');
      };


    return <div className={classes.container}>
    {Object.keys(blogs).map((blogId) => (

      <BlogItem 
      key={blogId} 
      image={blogs[blogId].imageUrl}
      heading={blogs[blogId].heading} 
      author={blogs[blogId].author}
      content={extractFirst44Words(blogs[blogId].paragraph)} />
    ))}
  </div>
}

export default HomeBlogPosts;
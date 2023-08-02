import React, { useEffect, useState } from 'react';
import { getDatabase, ref, onValue, off } from 'firebase/database';
import firebase from '../firebase/FirebaseConfig'; // Import your Firebase configuration file
import SepCard from '../Components/UI/SepCard';
import classes from './Blogs.module.css'

const Blogs = () => {
  const [blogs, setBlogs] = useState({});

  useEffect(() => {
    // Fetch data from Firebase when the component mounts
    const db = getDatabase();
    const dbRef = ref(db, 'blogs');

    const unsubscribe = onValue(dbRef, (snapshot) => {
      // Convert the snapshot to an array of blogs
      const blogsData = snapshot.val();
      setBlogs(blogsData);
      console.log(blogsData);
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
 
  return (
    <div className={classes.container}>
      {Object.keys(blogs).map((blogId) => (
        <SepCard
        key={blogId} 
        id={blogId} 
        image={blogs[blogId].imageUrl}
        heading={blogs[blogId].heading} 
        author={blogs[blogId].author}
        content={extractFirst44Words(blogs[blogId].paragraph)} />
      ))}
    </div>
  );
  
};

export default Blogs;

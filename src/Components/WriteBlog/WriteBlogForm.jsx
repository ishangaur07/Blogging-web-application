import { useState } from 'react';
import classes from './WriteBlogForm.module.css';


const WriteBlogForm = () => {
    const [heading, setHeading] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [author, setAuthor] = useState('');
    const [paragraph, setParagraph] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        // Create an object with the user input
        const formData = {
          heading,
          imageUrl,
          author,
          paragraph,
        };
    
        try {
          // Save the data to Firebase Firestore
          const response = await fetch("https://blog-post-1a3d5-default-rtdb.firebaseio.com/blogs.json",{
            method:'POST',
            body:JSON.stringify(formData),
            headers:{
                'Content-Type':'application/json'
            }
          });
          const data = await response.json();
          console.log(data);
        
          console.log('Document written with ID: ', response.id);
    
          // Clear the form after submission
          setHeading('');
          setImageUrl('');
          setAuthor('');
          setParagraph('');
        } catch (error) {
          console.error('Error adding document: ', error);
        }
      };



    return (
        <div className={classes.container}>
            <h1>Write Your Blog</h1>
            <form className={classes.writeBlog} onSubmit={handleSubmit}>
                <button type='submit'>Submit</button>
                <input type="text" id="heading" placeholder='Heading' value={heading} onChange={(e) => setHeading(e.target.value)} required /><br />
                <input type="text" id="image-url" placeholder='Image URL' value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required /><br />
                {imageUrl && <img src={imageUrl} className={classes.imgPreview} alt='blog'></img>}
                <input type="text" id="author" placeholder='Author' value={author} onChange={(e) => setAuthor(e.target.value)} required /><br />
                <textarea id="paragraph" placeholder='Write...' value={paragraph} onChange={(e) => setParagraph(e.target.value)} required></textarea><br />
            </form>

        </div>
    )
}

export default WriteBlogForm;
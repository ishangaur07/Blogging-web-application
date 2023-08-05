import { Link } from "react-router-dom";
import classes from "./BlogDesc.module.css";
const BlogDesc = ({ heading, author, image, content, id,onDelete }) => {

    const handleDeleteClick = async ()=>{
        try{
            await onDelete(id);
        }
        catch(error){
            console.error('Error deleting blog:', error);
        }
    }
    return (
        <section>
            <div className={classes.container}>
                <Link to='/blogs'><button onClick={handleDeleteClick}>Delete</button></Link>
                <h1>{heading}</h1>
                <img src={image} alt="blog image" srcset="" />
                <p>By {author}</p>
                <div className="blogInfo">
                    <p>{content}</p>
                </div>
            </div>
        </section>

    )
}


export default BlogDesc;
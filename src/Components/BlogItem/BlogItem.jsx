import classes from './BlogItem.module.css';
import { Link } from 'react-router-dom';

const BlogItem = ({ heading, author, image, content,id }) => {
    
    return (
    <li className={classes.blog}>
        <div className={classes.blogInfo}>
            <h2>{heading}</h2>
            <div className={classes.author}>By {author}</div>
            <div>{content}</div>
            <Link to={`/readmore/${id}`}><button className={classes.btn} >Read More</button></Link>
        </div>
        <div className={classes.image}>
            <img src={image} alt="blog" srcset="" />
        </div>
    </li>
    )

}

export default BlogItem;
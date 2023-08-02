import classes from './BlogItem.module.css';
import { Link } from 'react-router-dom';

const BlogItem = (props) => {
    
    return (
    <li className={classes.blog}>
        <div className={classes.blogInfo}>
            <h2>{props.heading}</h2>
            <div className={classes.author}>By {props.author}</div>
            <div>{props.content}</div>
            <Link to="/read-more"><button className={classes.btn} >Read More</button></Link>
        </div>
        <div className={classes.image}>
            <img src={props.image} alt="blog" srcset="" />
        </div>
    </li>
    )

}

export default BlogItem;
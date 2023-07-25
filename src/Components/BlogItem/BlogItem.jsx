import classes from './BlogItem.module.css';
const BlogItem = (props) => {

    return <li className={classes.blog}>
        <div className={classes.blogInfo}>
            <h2>{props.heading}</h2>
            <div className={classes.author}>By {props.author}</div>
            <div>{props.content}</div>
            <button className={classes.btn}>Read More</button>
        </div>
        <div className={classes.image}>
            <img src={props.image} alt="blog" srcset="" />
        </div>
       
    </li>

}

export default BlogItem;
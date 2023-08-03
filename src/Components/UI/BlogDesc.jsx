import classes from "./BlogDesc.module.css";
const BlogDesc = ({ heading, author, image, content, id }) => {
    return (
        <section>
            <div className={classes.container}>
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
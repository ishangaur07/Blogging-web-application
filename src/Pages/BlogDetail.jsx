import { useParams } from "react-router-dom";

const BlogDetail = () => {
    
    const params = useParams();
    return (
      <>
      <h1>Product Details!</h1>
      <p>{params.blogId}</p>
      </>
    )

}

export default BlogDetail;
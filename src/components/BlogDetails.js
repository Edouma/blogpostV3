import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id} = useParams()
    const {data:blogs} = useFetch('http://localhost:4000/blogs/' +id);

    return ( 
        <div className="details">
           
            {blogs && (
                <article>
                    <h3>{blogs.title}</h3>
                    <p> Done by: {blogs.author}</p>
                    <div>{blogs.body}</div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;
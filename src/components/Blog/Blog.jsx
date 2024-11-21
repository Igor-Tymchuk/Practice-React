import { useEffect, useState } from "react";
import axios from "axios";
const Blog = () => {
    const [post, setPost] = useState(null)
    
  useEffect(() => {
    const fetch = async () => {
        const response = await axios("
        https://jsonplaceholder.typicode.com/posts");

    };
      
      
  }, []);

  return <div></div>;
};

export default Blog;

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Landing = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const category = useLocation().search;

  const getPosts = async () => {
    try {
      const res = await axios.get(`http://localhost:5001/api/v1/blogs${category}`);
      setPosts(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching posts:", error);
      setError(error.message || "Error fetching posts");
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, [category]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  const getText=(html)=>{
    const doc=new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  return (
    <div className="w-[60%] ml-[20%] my-12">
      <div className="flex flex-col gap-3">
        {posts.map((post) => (
            <div className="flex gap-16" key={post.id}>
              <div className="">
                <img src={"../uploads/"+ post.image} alt="poster" className="w-[100%] max-h-[85%] object-cover" />
              </div>
              <div>
                <Link to={`/blog/${post._id}`}>
                  <h1 className="font-bold text-2xl">{post.title}</h1>
                </Link>
                <p className="text-xl mt-3">{getText(post.desc)}</p>
                <button className="bg-black text-white rounded-lg px-2 py-1 mt-4 hover:bg-white hover:text-black hover:border hover:border-black">
                  <Link to={`/blog/${post._id}`}>
                    Read More
                  </Link>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Landing;

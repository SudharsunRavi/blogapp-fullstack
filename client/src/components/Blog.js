import { Link, useLocation, useNavigate } from "react-router-dom"
import { EDIT_IMG } from "../utils/constants"
import { DELETE_IMG } from "../utils/constants"
import Menu from "./Menu"
import { useContext, useEffect, useState } from "react"
import axios from "axios"
import moment from "moment"
import { AuthContext } from "../utils/context/authContext"

const Blog = () => {
  const [post, setPost] = useState([]);
  const navigate=useNavigate();
  const {currentUser}=useContext(AuthContext);

  const location=useLocation()
  const blogID=location.pathname.split("/")[2];

  const getPosts=async()=>{
    try{
      const res=await axios.get(`/blogs/${blogID}`);
      setPost(res.data);
    }catch(error){
      console.log(error);
    }
  }

  const deleteBlog = async () => {
    try {
      console.log("Deleting blog with ID:", blogID);
      await axios.delete(`/blog/${blogID}`);
      navigate("/");
    } catch (error) {
      console.error("Delete error:", error);
    }
  };
  

  useEffect(()=>{
    getPosts();
  },[blogID])

  const getText=(html)=>{
    const doc=new DOMParser().parseFromString(html, "text/html")
    return doc.body.textContent
  }

  console.log(post)
  console.log(currentUser)

  return (
    <div className="mx-[5%] mb-20 flex">
      <div className="w-[75%]">
        <img src={"../uploads/" + post?.image}
            alt="poster" 
            className="w-[100%] h-[250px] object-cover"
        />
        <div className="flex items-center mt-6">
          {post?.uid?.image && <img src= {"../uploads/" + post?.uid?.image}
              alt="poster" 
              className="w-[50px] h-[50px] object-cover rounded-full"
          />}
          <div className="ml-3">
            <span className="font-bold">{post?.username}</span>
            <p>Posted {moment(post.date).fromNow()}</p>
          </div>

          {currentUser?._id === post?.uid?._id && <div className="flex gap-5 ml-7 mt-5">
            <Link to={`/write?edit=${post._id}`} state={post}>
              <img src={EDIT_IMG} alt="edit" className="w-[20px]"/>
            </Link>
            <img src={DELETE_IMG} alt="delete" className="w-[20px] cursor-pointer" onClick={deleteBlog}/>
          </div>}
        </div>
        <h1 className="text-4xl font-bold my-10">{post.title}</h1>
        <div>
          {getText(post.desc)}
        </div>
      </div>
      <Menu category={post.category}/>
    </div>
  )
}

export default Blog
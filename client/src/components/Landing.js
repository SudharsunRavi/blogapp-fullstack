import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Landing = () => {
  // const posts = [
  //     {
  //       id: 1,
  //       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //       img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     },
  //     {
  //       id: 2,
  //       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //       img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     },
  //     {
  //       id: 3,
  //       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //       img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     },
  //     {
  //       id: 4,
  //       title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
  //       desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
  //       img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //     },
  //   ];

  const [posts, setPosts] = useState([]);

  const category=useLocation().search;

  const getPosts=async()=>{
    try{
      const res=await axios.get(`/blogs${category}`);
      setPosts(res.data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(()=>{
    getPosts();
  },[category])


  return (
    <div className="w-[60%] ml-[20%] my-12">
      <div className="flex flex-col gap-3">
        {posts.map((post)=>(
          <div className="flex gap-16" key={post.id}>
            <div className="">
              <img src={post.img} alt="poster" className="w-[100%] max-h-[85%] object-cover"/>
            </div>
            <div>
              <Link to={`/post/${post.id}`}> 
                <h1 className="font-bold text-2xl">{post.title}</h1>
              </Link>
              <p className="text-xl mt-3">{post.desc}</p>
              <button className="bg-black text-white rounded-lg px-2 py-1 mt-4 hover:bg-white hover:text-black hover:border hover:border-black">Read More</button>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Landing
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Menu = ({category}) => {
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
    // ];

    const [posts, setPosts] = useState([]);
  
    const getPosts=async()=>{
      try{
        const res=await axios.get(`/blogs?category=${category}`);
        setPosts(res.data);
      }catch(error){
        console.log(error);
      }
    }
  
    useEffect(()=>{
      getPosts();
    },[category])

  return (
    <div className="flex flex-col gap-6 ml-12 w-[20%]">
        <h1 className="text-3xl font-bold">Similar posts you may like</h1>

        {posts.map((post)=>(
            <div className="flex flex-col gap-2 border-b-2 pb-10" key={post.id}>
                <img src={post.img} alt="poster" className="w-[200px] h-[200px]"/>
                <h1 className="font-bold text-xl">{post.title}</h1>
                <button className="bg-black text-white rounded-lg py-1 mt-1 hover:bg-white hover:text-black hover:border hover:border-black w-28">Read More</button>
            </div>
        ))}
          
    </div>
  )
}

export default Menu
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import moment from "moment";
import { useLocation } from "react-router-dom";

const Write = () => {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.title || "");
  const [title, setTitle] = useState(state?.desc || "");
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState(state?.category || "");

  const upload = async () => {
    try {
      console.log("Uploading image...");
      const formData = new FormData();
      formData.append("file", file);
  
      const response = await fetch("http://localhost:5001/api/v1/upload", {
        method: "POST",
        credentials: "include",
        body: formData,
      });
  
      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await response.json();
          return data;
        } else {
          const textData = await response.text();
          return textData;
        }
      } else {
        throw new Error("Image upload failed");
      }
    } catch (error) {
      console.error("Image upload error:", error);
      throw error;
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const ImageURL = await upload();
  
      if (state) {
        const response = await axios.put(`http://localhost:5001/api/v1/blogs/${state.id}`, {
          title,
          desc: value,
          category,
          image: file ? ImageURL : "",
        }, { withCredentials: true });
      } else {
        const response = await axios.post("http://localhost:5001/api/v1/blogs/", {
          title,
          desc: value,
          category,
          image: file ? ImageURL : "",
          date: moment(Date.now()).format("YYYY-MM-DD, HH:mm:ss"),
        }, { withCredentials: true });
      }
    } catch (error) {  
        console.error("Error:", error);
    }
  };
  
  return (
    <div className=" ml-20 mt-16 flex">
      <div className='w-3/4'>
        <input type="text" placeholder="Title" value={title} className="w-[400px] h-10 text-2xl pl-2 border mb-10" onChange={(e)=>setTitle(e.target.value)}/>
        <div>
          <ReactQuill theme="snow" value={value} onChange={setValue} className='h-64' />
        </div>
        <div>
          <div className='mt-20'>
          <input
              type="file"
              id="file"
              className="hidden"
              onChange={(e) => {
                  setFile(e.target.files[0]);
                }
              }
            />
            <label htmlFor="file" className="bg-black text-white rounded-lg py-1 w-36 text-center ml-1 hover:bg-white hover:text-black hover:border hover:border-black">Upload Image</label>
            <div>
              <button className="bg-black text-white rounded-lg py-1 w-28 text-center mt-5 mr-5 hover:bg-white hover:text-black hover:border hover:border-black" onClick={handleSubmit}>Publish</button>
              <button className="bg-black text-white rounded-lg py-1 w-28 text-center hover:bg-white hover:text-black hover:border hover:border-black">Save Draft</button>
            </div>
          </div>
        </div>
      </div>

      <div className='w-1/4 mx-20 mb-28 border'>
        <h1 className='text-xl font-bold pb-5 ml-3 mt-4'>Category</h1>
        <div className='ml-3'>
          <input type="radio" name="category" checked={category==="tech"} value="tech" className='mb-3' onChange={(e)=>setCategory(e.target.value)}/>
          <label htmlFor="tech">Tech</label><br/>

          <input type="radio" name="category" checked={category==="science"} value="science" className='mb-3' onChange={(e)=>setCategory(e.target.value)}/>
          <label htmlFor="science">Science</label><br/>

          <input type="radio" name="category" checked={category==="business"} value="business" className='mb-3'onChange={(e)=>setCategory(e.target.value)}/>
          <label htmlFor="business">Business</label><br/>

          <input type="radio" name="category" checked={category==="sports"} value="sports" className='mb-3' onChange={(e)=>setCategory(e.target.value)}/>
          <label htmlFor="sports">Sports</label><br/>

          <input type="radio" name="category" checked={category==="culinary"} value="culinary" className='mb-3' onChange={(e)=>setCategory(e.target.value)}/>
          <label htmlFor="culinary">Culinary</label><br/>

          <input type="radio" name="category" checked={category==="art"} value="art" className='mb-3' onChange={(e)=>setCategory(e.target.value)}/>
          <label htmlFor="art">Art</label><br/>
        </div>
      </div>
    </div>
  );
};

export default Write;
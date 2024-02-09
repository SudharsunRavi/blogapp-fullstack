import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

  const [input, setInput]=useState({
                              name: '',
                              email: '',
                              password: ''
                            });

  const [error, setError]=useState('');

  const navigate=useNavigate();
  
  const handleInputChange=(e)=>{
    setInput((prev)=>({...prev, [e.target.name]: e.target.value}));
  }

  // const handleSubmit=async(e)=>{
  //   e.preventDefault();
  //   try {
  //     const response=await fetch("/api/v1/auth/register", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json"
  //       },
  //       body: JSON.stringify(input)
  //     });
  //     console.log("Request Body:", JSON.stringify(input));
  //     console.log("Response Status:", response.status);

  //   } catch (error) {
  //     setError(error.code+error.message);
  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", input);
      navigate("/login");
    } catch (err) {
      setError(err.response.data);
    }
  };


  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>
      <div>
        <h1 className='font-bold text-2xl mb-10'>Register</h1>
        <form>
          <input type="text" 
                  placeholder="Name" 
                  required autoComplete='off' 
                  className='border rounded-lg h-10 px-2 w-60 mb-5' 
                  name="name" 
                  onChange={handleInputChange}
          /><br/>

          <input type="email" 
                  placeholder="Email" 
                  required autoComplete='off' 
                  className='border rounded-lg h-10 px-2 w-60 mb-5' 
                  name="email" 
                  onChange={handleInputChange}
          /><br/>

          <input type="password" 
                  placeholder="Password" 
                  required autoComplete='off' 
                  className='border rounded-lg h-10 px-2 w-60 mb-5' 
                  name="password" 
                  onChange={handleInputChange} 
          /><br/>

          <button type="submit" 
                  className='bg-black text-white px-2 py-1 rounded-lg hover:bg-white hover:text-black hover:border-2'
                  onClick={handleSubmit}
          >Sign up</button>
        </form>
        {error && <p className='text-red-600'>{error}</p>}
        <p className='mt-3'>Already have an account? <Link to="/login" className='underline'>Login</Link></p>
      </div>
    </div>
  )
}

export default Register
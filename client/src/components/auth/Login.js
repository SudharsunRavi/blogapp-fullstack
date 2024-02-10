import axios from 'axios';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../utils/context/authContext';

const Login = () => {

  const [input, setInput]=useState({
    email: '',
    password: ''
  });

  const [error, setError]=useState('');

  const {login}=useContext(AuthContext);

  const navigate=useNavigate();

  const handleInputChange=(e)=>{
  setInput((prev)=>({...prev, [e.target.name]: e.target.value}));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(input);
      navigate("/");
    } catch (err) {
      setError(err.response.data);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>
      <div>
        <h1 className='font-bold text-2xl mb-10'>Login</h1>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" required autoComplete='off' className='border rounded-lg h-10 px-2 w-60 mb-5' name='email' onChange={handleInputChange}/><br/>
          <input type="password" placeholder="Password" required autoComplete='off' className='border rounded-lg h-10 px-2 w-60 mb-5' name='password' onChange={handleInputChange}/><br/>
          <button type="submit" className='bg-black text-white px-2 py-1 rounded-lg hover:bg-white hover:text-black hover:border-2'>Login</button>
        </form>
        <p className='mt-3'>Don't have an account? <Link to="/register" className='underline'>Register</Link></p>
      </div>
    </div>
  )
}

export default Login
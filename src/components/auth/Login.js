import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col justify-center items-center h-[100vh]'>
      <div>
        <h1 className='font-bold text-2xl mb-10'>Login</h1>
        <form>
          <input type="email" placeholder="Email" required autoComplete='off' className='border rounded-lg h-10 px-2 w-60 mb-5' /><br/>
          <input type="password" placeholder="Password" required autoComplete='off' className='border rounded-lg h-10 px-2 w-60 mb-5' /><br/>
          <button type="submit" className='bg-black text-white px-2 py-1 rounded-lg hover:bg-white hover:text-black hover:border-2'>Login</button>
        </form>
        <p className='mt-3'>Don't have an account? <Link to="/register" className='underline'>Register</Link></p>
      </div>
    </div>
  )
}

export default Login
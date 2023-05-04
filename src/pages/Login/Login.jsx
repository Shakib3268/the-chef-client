import React from 'react';
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
  const {signIn} = useContext(AuthContext)

  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  const handleLogin = event =>{
    event.preventDefault()
    const form = event.target 
    const email = form.email.value 
    const password = form.password.value 
    console.log(email,password)
    signIn(email,password)
    .then(result =>{
      const loggedUser = result.user 
      console.log(loggedUser)
      navigate(from,{replace: true})
    })
    .catch(error => {
      console.log(error.message)
    })
  }

    return (
        <div className="max-w-md mx-auto my-10 bg-white p-5 rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-5">Login</h2>
  <form onSubmit={handleLogin}>
    <div className="mb-5">
      <label className="block text-gray-700 font-bold mb-2">Email</label>
      <input type="email" id="email" name="email" placeholder="you@example.com" className="border-gray-400 border-2 p-2 w-full rounded-md focus:outline-none focus:border-blue-400"required/>
    </div>
    <div className="mb-5">
      <label className="block text-gray-700 font-bold mb-2">Password</label>
      <input type="password" id="password" name="password" placeholder="********" className="border-gray-400 border-2 p-2 w-full rounded-md focus:outline-none focus:border-blue-400" required/>
    </div>
    <div className="mb-5">
      <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-blue-600">Login</button>
    </div>
    <p>Don't have an account? <Link to='/register' className='text-red-400 underline'>Register</Link> </p>
  </form>
        </div>
    );
};

export default Login;
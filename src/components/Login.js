import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";

const Login = () => {

  const[isSignIn,setIsSignIn]=useState(true);
const [errorMessage,setErrorMessage]=useState(null);


  const email=useRef();
  const password=useRef();
  
  // function for Sign In Sign Up button
 const handleSignButton=()=>{
console.log(email.current.value);
console.log(password.current.value);

const message=checkValidData(email.current.value,password.current.value);
console.log(message);
setErrorMessage(message)


}
// funtion for New to Netflix?
  const handleSignIn=()=>{
    setIsSignIn(!isSignIn);

  }
  return (
    <div className="relative h-screen w-screen">
      {/* Background image */}
      <img
        className="absolute h-full w-full object-cover"
        src="https://user-images.githubusercontent.com/33485020/108069438-5ee79d80-7089-11eb-8264-08fdda7e0d11.jpg"
        alt="background"
      />

      {/* Black overlay on image */}
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      {/* Header */}
      <Header />

      {/* Login form */}
      <div className="relative flex justify-center items-center h-screen w-screen px-4">
  <form onSubmit={(e)=>{e.preventDefault()}}  className="flex flex-col gap-4 bg-black bg-opacity-70 p-4 md:p-6 rounded-lg max-w-xs sm:max-w-sm w-full">

  <h2 className="text-2xl font-medium  text-white mb-2">
  {isSignIn ? "Sign In":"Sign Up"}
</h2>
{/* conditional sign up Full Name */}
     {!isSignIn && <input
      type="text"
      placeholder="Full Name"
      className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm sm:text-base"
    />}
{/* input field for Email */}
    <input
    
    type="text"
    ref={email}
      placeholder="Email Address"
      className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm sm:text-base"
    />
    {/* imput field for Password */}
    <input
      type="password"
      ref={password}
      placeholder="Password"
      className="w-full p-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 text-sm sm:text-base"
    />
    
    <p className="text-red-500 text-xs">{errorMessage}</p>

    {/* SignIn SignUp button */}
    <button
  type="button" // IMPORTANT!
  className="w-full bg-red-600 hover:bg-red-900 text-white font-bold py-3 rounded-md transition duration-300 text-sm sm:text-base mt-8"
  onClick={handleSignButton}>
  {isSignIn ? "Sign In" : "Sign Up"}
</button>

    <label className=" flex text-white text-xs font-light opacity-50" htmlFor="rememberMe">
  <input type="checkbox" id="rememberMe" name="rememberMe"/>
  Remember Me
</label>

<p className="text-white text-sm cursor-pointer" onClick={handleSignIn}>{isSignIn ? "New to Netflix ? Sign Up Now":"Already Registered Sign In Now!"}</p>

  </form>
</div>


    </div>
  );
};

export default Login;

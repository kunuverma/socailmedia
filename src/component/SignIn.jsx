// src/components/SignIn.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { SiGoogle } from "react-icons/si";
import { PiTwitterLogoBold } from "react-icons/pi";

const SignIn = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    // Redirect to the profile page
    navigate('/profile');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <button className="w-10 h-10 mb-4 text-2xl bg-green-500 text-white rounded-md">&larr;</button>
        <div className='mt-10'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className="text-4xl font-bold mb-4">Hello Again!</h1>
            <p className="mb-6 text-[#818181]">Sign in to your account</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4 flex flex-col">
              <label className="text-left text-xm mb-2 w-full px-3 py-2 border border-green-500 rounded-md flex flex-col text-green-500">
                Email address
                <input
                  type="email"
                  placeholder="info@yourmail.com"
                  {...register("email", { required: "Email is required" })}
                  className="border-none focus:border-none focus:outline-none p-2"
                />
                {errors.email && <span className="text-red-500">{errors.email.message}</span>}
              </label>
            </div>
            <div className="mb-4 flex flex-col">
              <label className="text-left text-xm mb-2 w-full px-3 py-2 border rounded-md flex flex-col border-green-500 text-green-500">
                Password
                <input
                  type="password"
                  placeholder="Enter your password"
                  {...register("password", { required: "Password is required" })}
                  className="focus:outline-none"
                />
                {errors.password && <span className="text-red-500">{errors.password.message}</span>}
              </label>
            </div>
            <a href="#" className="text-green-500 text-sm mb-4 block underline">Forgot your password?</a>
            <button type="submit" className="w-full py-2 bg-green-500 text-white rounded-md mb-4">Sign in</button>
          </form>
          <div className='flex items-center justify-center'>
            <p className="mb-4 text-[#818181]">Or with</p>
          </div>
          <button className="w-full py-2 border rounded-md mb-2 flex items-center justify-center gap-2 font-bold sm:font-semibold">
            <SiGoogle />
            Sign in with Google
          </button>
          <button className="w-full py-2 border rounded-md mb-2 flex items-center justify-center gap-2 font-bold">
            <PiTwitterLogoBold />
            Sign in with Twitter
          </button>
          <div className='flex items-center justify-center'>
            <p className="mt-4">Don’t have account? <a href="#" className="text-green-500">Let’s Sign up</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

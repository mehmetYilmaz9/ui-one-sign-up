import React, { useCallback, useMemo } from 'react'; 
import {useForm, SubmitHandler} from 'react-hook-form';
import {FaLinkedin, FaGithub, FaFacebook, FaTwitter} from 'react-icons/fa'

import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import FormData from '../type/index';

export default function FormSignUp () {
 
  const validationSchema = useMemo(() => (
    Yup.object().shape({
      email: Yup.string()
                .email()
                .required('Email is required'),

      password: Yup.string()
                   .required('Password is requred'),
    })
  ), [])

 
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(validationSchema)
  });
  

  const onSubmit: SubmitHandler<FormData> = useCallback(({email,password, remember}) => {
    //display the email and password after the login 
    console.log({email,password, remember});
  }, []);


  ///Display the form 
  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div className="divide-gray-200">


              <div className="py-4 text-base leading-6 space-y-1 justify-center text-gray-700 sm:text-lg sm:leading-4">
                <h2 className="text-center">Sign Up to Daily UI Challenge</h2>
              </div>

              <form action="" onSubmit={handleSubmit(onSubmit)} className="bg-white rounded px-9 pt-6 pb-8 mb-6" >
                <div className="py-3 text-base leading-6 space-y-1 justify-center text-gray-700 sm:text-lg sm:leading-2">
                  <div className="grid justify-items-center">
                    <h2 className="" >Connect with :</h2>
                  </div>
                  
                  <button className="text-cyan-500 background-transparent font-bold uppercase px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                    >
                  <FaLinkedin className="flex items-center justify-center h-12 w-12 mx-1 fab fill-current text-gray text-2xl"  /> 
                </button>

                <button className="text-cyan-500 background-transparent font-bold uppercase px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                  >
                <FaGithub className="flex items-center justify-center h-12 w-12 mx-1 fab fill-current text-gray text-2xl"/> 
                </button>

                <button className="text-cyan-500 background-transparent font-bold uppercase px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                  >
                <FaTwitter className="flex items-center justify-center h-12 w-12 mx-1 fab fill-current text-gray text-2xl"/> 
                </button>

                <button className="text-cyan-500 background-transparent font-bold uppercase px-3 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button"
                  >
                  <FaFacebook className="flex items-center justify-center h-12 w-12 mx-1 fab fill-current text-gray text-2xl" />
                </button>
              </div>

              
              <div className="flex justify-between items-center mt-3">
                <hr className="w-full" /> <span className="p-2 text-gray-400 mb-1">OR</span>
                <hr className="w-full" />
              </div>


              <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" >
                    Username
                  </label>
                  <input 
                  {...register("email", { required: true,minLength:6 ,maxLength: 40 })}
                    name="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                    type="email" 
                    placeholder="Username" 
                    required
                  />
                  {errors.email && <span>This field is required</span>}
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" >
                  Password
                </label>
                <input 
                {...register("password", { required: true,minLength:6, maxLength: 40 })}
                  name="password"
                  className="shadow appearance-none border border-black-500  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  
                  type="password" 
                  placeholder="Password" 
                  required
                
                />
                {errors.password && <span>This field is required</span>}
              </div>

              <div className="flex items-center justify-between" >
                <div>
                  <input 
                  type="checkbox"
                  {...register("remember")}
                  className="h-4 w-4 text-sky-300 rounded" 
                  />
                  <label className="ml-2 text-sm text-gray-700" >Remember me</label>
                </div>
              </div>

            <div className="pt-6 text-base grid justify-items-center leading-3  sm:text-lg sm:leading-7">
          
              <div className="">
                <button 
                className="bg-gradient-to-r from-cyan-400 to-sky-500 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                type="submit"
                value="submit"
                >
                  Login
                </button>
              </div>

                  <div className="pt-6 text-base leading-3  sm:text-lg sm:leading-2">
                    <h2 className="text-gray-700 sm:text-lg sm:leading-2" > Have an account ? <a href="#" className="font-bold">Sign Up</a> </h2>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>
  
  )
};
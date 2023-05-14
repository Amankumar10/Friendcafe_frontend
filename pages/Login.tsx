
"use client";
// import Button from "@elements/Button";
import dynamic from "next/dynamic";

import { Textarea } from '@chakra-ui/react'
import { Flex, Grid, Heading, Stack, Text } from "@chakra-ui/layout";
import { effect, useToast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { InputControl, SubmitButton } from "formik-chakra-ui";
// import { useState } from "react";
import {  useSession } from "next-auth/react";

// import { Link } from "react-router-dom";
import Link from 'next/link';
import { useSigninUserMutation } from "./api/authApi"
import { useAppDispatch } from "@/store/hooks";

import { useRouter } from 'next/navigation'
import { useSignupUserMutation } from "./api/authApi"
import React, { useState } from "react";
import { useEffect } from "react";
// import Profile from "./Profile";
// import { recoilPersist } from "recoil-persist";
// import SignUp from '../pages/SignUp';
// import axios from "axios";

import { useRef } from 'react';
import { signIn } from 'next-auth/react';
import { redirect } from 'next/dist/server/api-utils';

import * as yup from 'yup';

interface IProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}




interface FormState {
  name: string;
  // lastName: string;
  email: string;
  password: string;
  day: string;
  month: string;
  year: string;
  errors: {
    [key: string]: string;
  };
}

const schema = yup.object().shape({
  // name: yup.string().required('Name is required'),
  // day: yup.string().required('day  is required'),
  // month: yup.string().required('month  is required'),
  // year: yup.string().required('year  is required'),

  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
});



const Login = ({ searchParams }: IProps) => {


const Header = dynamic(() => import('../components/Header'), {
    ssr: false
  });
  


const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  // const [credentials, setcredentials] = useState({ email: " ", password: " " });
  // const {persistAtom} = recoilPersist()
  // const [email, setEmail] = useState<string>();
 const router = useRouter();
 const dispatch = useAppDispatch();
 const email = useRef("")

 const pass = useRef("")
//  const [signinUser, { data, isLoading, error, isError, isSuccess }] =
//  useSigninUserMutation();

  const [showModal, setShowModal] = React.useState(true);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  }
  
  const togglePasswordVisibility = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };
  const onSubmit = async () => {
    const result = await signIn("credentials", {
      email: email.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  }
  const {data:session} = useSession()


  
  // console.log(data);
  // if (isSuccess) {
  //   // dispatch(setUser({ token: data.token, Username: data.Username,Dfirst:data.Dfirst,Cfirst:data.Cfirst  }));
  //   localStorage.setItem("token",JSON.stringify(data.token) );
  //   localStorage.setItem("Username",JSON.stringify(data.Username) );
  //   localStorage.setItem("date_of_birth",JSON.stringify(data.date_of_birth) );

  //   dispatch(setUser({ token: data.token, Username: data.Username, date_of_birth:data.date_of_birth}));

  //   // <Link href="/Profile"></Link>
  //   router.push('/Profile')
  //   // Cookie.set('token',data.token )
  //   // setCookie('kesdy','data.token')
  //   // console.log(data.token);
  //   // console.log(data.Username);
  //   // getCookie('data.token');
    
  // }
 
  
  // const json = await response.json();
  // console.log(json);
  
  
  
  //   if (json.success) {
  //     //save the auth token and redirect
     
  //     console.log("Logged in  Successfully");
  //     history.push("/");
  //   } else {
  //     props.showAlert("Invalid details", "danger");
  //   }
  // };







  return (
<div>

    {session?.user  ? <Header /> : null}

    <body
      className="bg-gray-100 h-screen  ">

        <div 
        >
          <h1 className='black text-6xl flex  justify-center pt-7'>ashberri</h1><br />
          <p className='text-gray-600 text-2xl flex justify-center '>ashberri help to find people who </p> <p className='text-gray-600 text-2xl flex justify-center '>are highly compatible...</p><br />

        </div>

        <div className="justify-center flex ">
        <div className="shadow-2xl  flex  flex-col bg-white p-8 rounded-xl w-96  justify-center   text-lg relative">
        {/* <div className={"flex flex-col justify-center items-center  h-screen bg-gradient-to-br gap-1 from-cyan-300 to-sky-600"}> */}




        {searchParams?.message && <p className="text-red-700 bg-red-100 py-2 px-5 rounded-md">{searchParams?.message}</p>}
      {/* <div className="px-7 py-4 shadow bg-white rounded-md flex flex-col gap-2"> */}
        {/* <input  placeholder="username" type="text" onChange={(e) => (Username.current = e.target.value)} ></input> */}
        <input className="px-4 h-12   my-2 border border-1 outline-violet-300 border-gray-200 rounded-lg"  placeholder="email" type="email" onChange={(e) => (email.current = e.target.value)} ></input>

        {/* <input className="px-4 h-12 my-2 border border-1 outline-violet-300 border-gray-200 rounded-lg"   placeholder="Password" type="password"   onChange={(e) => (pass.current = e.target.value)}  >



        </input> */}
        <div className="relative ">
      <input className= "w-80 px-4 h-12 my-2 border border-1 outline-violet-300 border-gray-200 rounded-lg" 
        type={isPasswordHidden ? 'password' : 'text'}
        name="password"
        autoComplete="current-password"
        required




        placeholder="Password"  onChange={(e) => (pass.current = e.target.value)}
        
        
        
        
      />
      <div className="absolute inset-y-0 right-0  flex items-center text-sm leading-5">
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="pr-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isPasswordHidden ? (
      

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor" ><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" id="mainIconPathAttribute" stroke-width="0" stroke="#ff0000" fill="#737373"></path></svg>

) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="IconChangeColor" ><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" id="mainIconPathAttribute" stroke-width="0" stroke="#ff0000" fill="#737373"></path></svg>

            )}
          </svg>



          
        </button>
      </div>

    </div>
        
        
        
        
        
        
        
        
        
{/*         
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
    <button type="button" id="show-password" className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12l2-2m0 0l6-6h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7l6 6zm8 0l2 2m-2-2V9"></path>
      </svg>
    </button>
  </div> */}
        <button className="bg-violet-300 hover:bg-violet-400 text-white my-2 py-3 rounded-md font-bold" onClick={onSubmit}>Login</button>
      {/* </div> */}
    {/* </div> */}
          {/* <input className="px-4 h-12   my-2 border border-1 outline-violet-300 border-gray-200 rounded-lg" type="text" placeholder="Email address or phone number" />
          <input className="px-4 h-12 my-2 border border-1 outline-violet-300 border-gray-200 rounded-lg" type="password" placeholder="Password" /> */}
          {/* <button className="bg-violet-300 hover:bg-violet-400 text-white my-2 py-3 rounded-md font-bold">Log In</button> */}





          <span className=" text-center text-sm my-2 cursor-pointer hover:underline">Forgotten password?</span>
          <hr className="my-2" />






          <button className="bg-green-600 hover:bg-green-700 text-white my-2 py-3 px-4 mx-auto rounded-md font-bold w-fit" type="button" onClick={() => router.push("/SignUp")}>Create New Account</button>


          {/* Signup Box */}



          {/* <button className="bg-green-600 hover:bg-green-700 text-white my-2 py-3 px-4 mx-auto rounded-md font-bold w-fit" type="button"
            onClick={() => setShowModal(false)}
    

            
            >Create New Account</button>
            <SignUp/> */}

          {/* {showModal ? (
            <>
             
            </>
          ) : null} */}










          <span className="absolute-bottom-12 text-sm"><span className="font-bold hover:underline cursor-pointer">Create a Page </span>

            for a celebrity, brand or business.</span>
        </div>
      </div>
 
{/* <Profile/> */}
          <div>

<br/>
<br/>


            
          </div>
    </body>




    
    </div>
  )
}

// export default Login


export default dynamic (() => Promise.resolve(Login), {ssr: false})







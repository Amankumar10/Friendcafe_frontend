
"use client";
// import Button from "@elements/Button";
import dynamic from "next/dynamic";

import { Textarea } from '@chakra-ui/react'
import { Flex, Grid, Heading, Stack, Text } from "@chakra-ui/layout";
import { effect, useToast } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { InputControl, SubmitButton } from "formik-chakra-ui";
// import { useState } from "react";

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


interface IProps {
  searchParams?: { [key: string]: string | string[] | undefined };
}

const Login = ({ searchParams }: IProps) => {



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



    <body
      className="bg-gray-100 ">

        <div className="mb-5 mt-7 "
        onClick={() => router.push("/")}>
          <h1 className='black text-6xl flex  justify-center'>frindcafe</h1><br />
          <p className='text-gray-600 text-2xl flex justify-center '>People those how highly compatible  <br /> and  think  like U,connect in frindcafe...</p>

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
        <div className="relative">
      <input className= " pr-24 pl-5 h-12 my-2 border border-1 outline-violet-300 border-gray-200 rounded-lg" 
        type={isPasswordHidden ? 'password' : 'text'}
        name="password"
        autoComplete="current-password"
        required




        placeholder="Password"  onChange={(e) => (pass.current = e.target.value)}
        
        
        
        
      />
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isPasswordHidden ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              d="M4 12l2-2m0 0l6-6h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7l6 6zm8 0l2 2m-2-2V9"

                
              />


              // <img width="50" height="50" src="https://img.icons8.com/ios/50/visible--v1.png" alt="visible--v1"/>
              

            ) : (
              // <path
              //   strokeLinecap="round"
              //   strokeLinejoin="round"
              //   strokeWidth={2}
              //   d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              // />


              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z"/>
              <path d="M12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8Z"/>
              <path d="M12 17C13.6569 17 15 15.6569 15 14C15 12.3431 13.6569 11 12 11C10.3431 11 9 12.3431 9 14C9 15.6569 10.3431 17 12 17Z"/>
            </svg>
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

    </body>





  )
}

// export default Login


export default dynamic (() => Promise.resolve(Login), {ssr: false})







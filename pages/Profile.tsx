"use client"


import React from 'react'
// import { useGetAllUserQuery } from "../pages/user/userSlice";
import { useProfileQuery } from "./api/authApi";
import { useAppSelector } from "@/store/hooks";
import { setUser } from "./api/state/authSlice";
import { useAppDispatch } from "@/store/hooks"
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/navigation'
import { useEffect } from 'react';
import { useState } from 'react';

// import Header from '../components/Header'

// import  { getToken }  from "./LocalStorage";
// import { setUserInfo, unsetUserInfo } from '../pages/user/setUserInfoSlice';
// import { useNavigate } from 'react-router';
// import { useSession } from 'next-auth/react';
import { signIn, signOut, useSession } from "next-auth/react";
// import Provider from '../Provider';

import { setUserInfo, unsetUserInfo } from './api/state/userSlice';




function Profile() {
  const dispatch = useAppDispatch();
  // const tok = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwMjc4Nzk2LCJpYXQiOjE2ODAxMDU5OTYsImp0aSI6Ijk1YWY2NzdkMDVhMTQ5YzJhZWE1MjgyYTIwNjgyNDg1IiwidXNlcl9pZCI6NDV9.QjC3ItmiCQiTtx_5qWpwofS_n2xtITZ2mDayELxtlXk"
  // const [cart,setCart] = useState()
  const {data:session} = useSession();
  // console.log({data:session});
  const token:any = session?.user.accessToken;

  // console.log("token",token);
  const router = useRouter();
 


  // console.log(token);
  const { data, isSuccess } =  useProfileQuery(token)


  const [userData, setUserData] = useState({
    email: "",
    name: "",
    // C_second:"",
    // D_second:"",
    date_of_birth:""

  })
  // console.log("profile data",data);
// console.log("email", userData. C_second);


  // Store User Data in Local State
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.email,
        name: data.name,
        // C_second:data.C_second,
        // D_second:data.D_second,
        date_of_birth:data.date_of_birth

      })
    }
  }, [data, isSuccess])

  // Store User Data in Redux Store
  // useEffect(() => {
  //   if (data && isSuccess) {
     
  //     dispatch(setUserInfo({
  //       email: data.email,
  //       name: data.name
  //       }))
  //   }
  // }, [data, isSuccess, dispatch])







  return (
    <div>
      
        {/* {
            responseInfo.data.map((post, i) =>
          <div key={i}>
            <h2>{post.name} {post.email}</h2>
            <p>{post.Dfirst}</p>
            <hr />
          </div>)} */}
{/* 
          {
        responseInfo.data?.map((data) =>
          <div key={i}>
         
            // <p>{post.name}</p>
            <hr />
          </div>
        )
      } */}





 
    {/* {data?.map((data:any) => (
          <h1> {data.name}</h1>
       <h1>{data.name}--{data.Dfirst}--{data.Cfirst}</h1>
    

          ))} */}
  {/* <Header/> */}

<h1>
          {/* Your Name: {name} <br/> */}
          {/* Your dateofbirth: {date_of_birth} <br/> */}


          {/* Your Dfirst: {Dfirst}<br/>
          Your Cfirst:  {Cfirst}<br/> */}
           
          </h1>
       {/* <h1>  Email: {userData.email}</h1>  */}
           <h5 className='text-lg'>Friends</h5>
           <h1>{userData.email}</h1>
       <h1>Your DOB:  {userData.date_of_birth}<br/></h1>   
        <button className="bg-gray-900 hover:bg-gray-700 text-white my-1 py-1 rounded-md font-bold" onClick={() => router.push("/EditYourProfile")}>Edit profile</button>
           {/* <div className={"  min-h-screen "}>{children}</div> */}
           
           
           {/* <h1>{data}</h1> */}
           
          </div>
           
        

  )
}

export default Profile









// import React from 'react'

// function profile() {
//   return (
//     <div>profile</div>
//   )
// }

// export default profile


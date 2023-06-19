// "use client"


// import React from 'react'
// // import { useGetAllUserQuery } from "../pages/user/userSlice";
// import { useProfileQuery } from "./api/authApi";
// import { useAppSelector } from "@/store/hooks";
// import { setUser } from "./api/state/authSlice";
// import { useAppDispatch } from "@/store/hooks"
// import { redirect } from 'next/dist/server/api-utils';
// import { useRouter } from 'next/navigation'
// import { useEffect } from 'react';
// import { useState } from 'react';

// // import Header from '../components/Header'

// // import  { getToken }  from "./LocalStorage";
// // import { setUserInfo, unsetUserInfo } from '../pages/user/setUserInfoSlice';
// // import { useNavigate } from 'react-router';
// // import { useSession } from 'next-auth/react';
// import { signIn, signOut, useSession } from "next-auth/react";
// // import Provider from '../Provider';

// import { setUserInfo, unsetUserInfo } from './api/state/userSlice';




// function Profile() {
//   const dispatch = useAppDispatch();
//   // const tok = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwMjc4Nzk2LCJpYXQiOjE2ODAxMDU5OTYsImp0aSI6Ijk1YWY2NzdkMDVhMTQ5YzJhZWE1MjgyYTIwNjgyNDg1IiwidXNlcl9pZCI6NDV9.QjC3ItmiCQiTtx_5qWpwofS_n2xtITZ2mDayELxtlXk"
//   // const [cart,setCart] = useState()
//   const {data:session} = useSession();
  
//   // console.log({data:session});
//   const token = session?.user.accessToken;

//   // console.log("token",token);
//   const router = useRouter();
 


//   // console.log(token);
//   const { data, isSuccess } =  useProfileQuery(token)
//  console.log(data);

//   // const [userData, setUserData] = useState({
//   //   email: "",
//   //   name: "",
//   //   // C_second:"",
//   //   // D_second:"",
//   //   date_of_birth:""

//   // })
//   // console.log("profile data",data);
// // console.log("email", userData. C_second);


//   // Store User Data in Local State
//   useEffect(() => {
//     if (data && isSuccess) {
//       // setUserData({
//       //   email: data.email,
//       //   name: data.name,
//       //   // C_second:data.C_second,
//       //   // D_second:data.D_second,
//       //   date_of_birth:data.date_of_birth

//       // })
//     }
//   }, [data, isSuccess])

//   // Store User Data in Redux Store
//   // useEffect(() => {
//   //   if (data && isSuccess) {
     
//   //     dispatch(setUserInfo({
//   //       email: data.email,
//   //       name: data.name
//   //       }))
//   //   }
//   // }, [data, isSuccess, dispatch])







//   return (
// //     <div>
      
   

// // <h1>
      
           
// //           </h1>
// //            <h5 className='text-lg'>Friends</h5>
// //            <h1>{userData.email}</h1>
// //        <h1>Your DOB:  {userData.date_of_birth}<br/></h1>   
// //         <button className="bg-gray-900 hover:bg-gray-700 text-white my-1 py-1 rounded-md font-bold" onClick={() => router.push("/EditYourProfile")}>Edit profile</button>
          
           
// //           </div>
//      <>
//      </>      
        

//   )
//   }
// export default Profile()

















// "use client"


// import React from 'react'
// // import { useGetAllUserQuery } from "../pages/user/userSlice";
// import { useProfileQuery } from "./api/authApi";
// import { useAppSelector } from "@/store/hooks";
// import { setUser } from "./api/state/authSlice";
// import { useAppDispatch } from "@/store/hooks"
// import { redirect } from 'next/dist/server/api-utils';
// import { useRouter } from 'next/navigation'
// import { useEffect } from 'react';
// import { useState } from 'react';

// // import Header from '../components/Header'

// // import  { getToken }  from "./LocalStorage";
// // import { setUserInfo, unsetUserInfo } from '../pages/user/setUserInfoSlice';
// // import { useNavigate } from 'react-router';
// // import { useSession } from 'next-auth/react';
// import { signIn, signOut, useSession } from "next-auth/react";
// // import Provider from '../Provider';

// import { setUserInfo, unsetUserInfo } from './api/state/userSlice';




// function Profile() {
//   const dispatch = useAppDispatch();
//   // const tok = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgwMjc4Nzk2LCJpYXQiOjE2ODAxMDU5OTYsImp0aSI6Ijk1YWY2NzdkMDVhMTQ5YzJhZWE1MjgyYTIwNjgyNDg1IiwidXNlcl9pZCI6NDV9.QjC3ItmiCQiTtx_5qWpwofS_n2xtITZ2mDayELxtlXk"
//   // const [cart,setCart] = useState()
//   const {data:session} = useSession();
//   // console.log({data:session});
//   const token:any = session?.user.accessToken;

//   // console.log("token",token);
//   const router = useRouter();
 


//   // console.log(token);
//   const { data, isSuccess } =  useProfileQuery(token)


//   const [userData, setUserData] = useState({
//     email: "",
//     name: "",
//     // C_second:"",
//     // D_second:"",
//     date_of_birth:"",
//     friend_request:""

//   })
//   console.log("profile data",data);
// // console.log("email", userData. C_second);


//   // Store User Data in Local State
//   useEffect(() => {
//     if (data && isSuccess) {
//       setUserData({
//         email: data.email,
//         name: data.name,
//         friend_request :data.friend_request,
//         date_of_birth:data.date_of_birth
//         // C_second:data.C_second,
//         // D_second:data.D_second,

//       })
//     }
//   }, [data, isSuccess])

//   // Store User Data in Redux Store
//   // useEffect(() => {
//   //   if (data && isSuccess) {
     
//   //     dispatch(setUserInfo({
//   //       email: data.email,
//   //       name: data.name
//   //       }))
//   //   }
//   // }, [data, isSuccess, dispatch])







//   return (
//     <div>
      
//         {/* {
//             responseInfo.data.map((post, i) =>
//           <div key={i}>
//             <h2>{post.name} {post.email}</h2>
//             <p>{post.Dfirst}</p>
//             <hr />
//           </div>)} */}
// {/* 
//           {
//         responseInfo.data?.map((data) =>
//           <div key={i}>
         
//             // <p>{post.name}</p>
//             <hr />
//           </div>
//         )
//       } */}





 
//     {/* {data?.map((data:any) => (
//           <h1> {data.name}</h1>
//        <h1>{data.name}--{data.Dfirst}--{data.Cfirst}</h1>
    

//           ))} */}
//   {/* <Header/> */}

// <h1>
//           {/* Your Name: {name} <br/> */}
//           {/* Your dateofbirth: {date_of_birth} <br/> */}


//           {/* Your Dfirst: {Dfirst}<br/>
//           Your Cfirst:  {Cfirst}<br/> */}
           
//           </h1>
//        {/* <h1>  Email: {userData.email}</h1>  */}
//            <h5 className='text-lg'>Friends</h5>
//            <h1>{userData.email}</h1>
//        <h1>Your DOB:  {userData.date_of_birth}<br/></h1>   
//        <h1>Your friendrequest:  {userData.friend_request}<br/></h1>   

//         <button className="bg-gray-900 hover:bg-gray-700 text-white my-1 py-1 rounded-md font-bold" onClick={() => router.push("/EditYourProfile")}>Edit profile</button>
//            {/* <div className={"  min-h-screen "}>{children}</div> */}
           
           
//            {/* <h1>{data}</h1> */}
           
//           </div>
           
        

//   )
// }

// export default Profile



// import React, { useEffect, useState } from 'react';
// import { getSession } from 'next-auth/react';

// interface UserProfile {
//   email: string;
//   name: string;
// }

// interface FriendRequest {
//   id: number;
//   sender: string;
// }

// interface UserData {
//   email: string;
//   name: string;
//   friend_requests: FriendRequest[];
// }

// const initialUserData: UserData = {
//   email: "",
//   name: "",
//   friend_requests: []
// };

// const Profile: React.VFC = () => {
//   const [userData, setUserData] = useState<UserData>(initialUserData);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const session = await getSession();
//         const token = session?.user?.accessToken;

//         if (token) {
//           const response = await fetch('http://127.0.0.1:8000/account/profile/', {
//             headers: {
//               'Authorization': `Bearer ${token}`,
//               'Content-Type': 'application/json' 
//             }
//           });
//           const data = await response.json();
//           console.log(data);
//           if (response.ok) {
//             setUserData({
//               email: data.user_profile.email,
//               name: data.user_profile.name,
//               // friend_requests: data.friend_requests
//               friend_requests: data.friend_requests || []
//             });
//           } else {
//             console.error('Failed to fetch user profile:', data);
//           }
//         }
//       } catch (error) {
//         console.error('Error fetching user profile:', error);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   return (
//     <div>
//       <h1>Your Name: {userData.name}</h1>
//       <h1>Your Email: {userData.email}</h1>
//       <h1>Your Friend Requests:</h1>
//       <ul>
//         {userData.friend_requests.map((request) => (
//           <li key={request.sender}></li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Profile;














// import React, { useEffect, useState } from 'react';
// import { getSession } from 'next-auth/react';

// interface UserProfile {
//   email: string;
//   name: string;
// }

// interface FriendRequest {
//   id: number;
//   name: string;
// }

// interface UserData {
//   email: string;
//   name: string;
//   friend_requests: FriendRequest[];
// }

// const initialUserData: UserData = {
//   email: '',
//   name: '',
//   friend_requests: [],
// };

// const Profile: React.VFC = () => {
//   const [userData, setUserData] = useState<UserData>(initialUserData);

//   useEffect(() => {
//     const fetchUserProfile = async () => {
//       try {
//         const session = await getSession();
//         const token = session?.user?.accessToken;

//         if (token) {
//           const response = await fetch('http://127.0.0.1:8000/account/profile/', {
//             headers: {
//               'Authorization': `Bearer ${token}`,
//               'Content-Type': 'application/json' // Add this header if necessary
//             }
//           });

//           if (response.ok) {
//             const data = await response.json();
//             console.log('API response:', data);

//             const { user_profile, friend_requests } = data;
//             const formattedFriendRequests = friend_requests.map((request: any) => ({
//               id: request.id,
//               name: request.name
//             }));

//             setUserData({
//               email: user_profile.email,
//               name: user_profile.name,
//               friend_requests: formattedFriendRequests
//             });
//           } else {
//             console.error('Failed to fetch user profile:', response);
//           }
//         }
//       } catch (error) {
//         console.error('Error fetching user profile:', error);
//       }
//     };

//     fetchUserProfile();
//   }, []);

//   console.log('User data:', userData);

//   return (
//     <div>
//       <h1>Your Name: {userData.name}</h1>
//       <h1>Your Email: {userData.email}</h1>
//       <h1>Your Friend Requests:</h1>
//       <ul>
//         {userData.friend_requests.map((request) => (
//           <li key={request.id}>{request.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Profile;









// Profile.tsx
import React, { useEffect } from 'react';
import { useGetUserProfileQuery } from '../pages/api/authApi';
import { getSession } from 'next-auth/react';
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'
// interface UserProfile {
//   email: string;
//   name: string;
// }

interface FriendRequest {
  id: number;
  name: string;
}

// interface UserData {
//   user_profile: UserProfile;
//   friend_requests: FriendRequest[];
// }



const Profile: React.VFC = () => {


const router = useRouter();
  
const {data:session} = useSession();
// const token:any = session?.user.accessToken;
// const token: string | undefined = session?.user.accessToken;
const token:any= session?.user.accessToken;

  const { data, error, isLoading } = useGetUserProfileQuery(token || '');

  useEffect(() => {
    if (error) {
      console.error('Failed to fetch user profile:', error);
    }
  }, [error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching user profile.</div>;
  }

  const userProfile = data?.user_profile;

  return (
    <div>
      <h1>Your Name: {userProfile?.name}</h1>
      <h1>Your Email: {userProfile?.email}</h1>
      <button className="bg-gray-900 hover:bg-gray-700 text-white my-1 py-1 rounded-md font-bold" onClick={() => router.push("/EditYourProfile")}>Edit profile</button>
      <h1>Your Friend Requests:</h1>
      <ul>
        {data?.friend_requests.map((request: FriendRequest) => (
          <li key={request.id}>{request.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;











// // Profile.tsx

// import React, { useEffect } from 'react';
// import { useGetUserProfileQuery } from '../pages/api/authApi';
// import { getSession } from 'next-auth/react';
// import { signIn, signOut, useSession } from "next-auth/react";

// // Profile.tsx

// interface UserProfile {
//   email: string;
//   name: string;
// }

// interface FriendRequest {
//   id: number;
//   name: string;
// }

// interface UserData {
//   userProfile?: UserProfile;
//   friend_requests: FriendRequest[];
// }

// const Profile: React.VFC = () => {
 
  
// const {data:session} = useSession();

// const token:any= session?.user.accessToken;
//   const { data, error, isLoading } = useGetUserProfileQuery(token || '');

//   useEffect(() => {
//     if (error) {
//       console.error('Failed to fetch user profile:', error);
//     }
//   }, [error]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error occurred while fetching user profile.</div>;
//   }
//   const userData = data as UserData;
//   const userProfile = userData.userProfile;

//   return (
//     <div>
//       {/* <h1>Your Name: {data?.user_profile?.name}</h1>
//       <h1>Your Email: {userProfile?.email}</h1>
//       <h1>Your Friend Requests:</h1> */}


// <h1>Your Name: {userProfile?.name || 'N/A'}</h1>
//       <h1>Your Email: {userProfile?.email || 'N/A'}</h1>
//       <h1>Your Friend Requests:</h1>
//       <ul>
//         {data?.friend_requests.map((request) => (
//           <li key={request.id}>{request.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Profile;
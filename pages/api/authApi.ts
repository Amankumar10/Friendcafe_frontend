"use client"
import { Id } from '@reduxjs/toolkit/dist/tsHelpers';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { signIn, signOut, useSession } from "next-auth/react";
import { headers } from 'next/dist/client/components/headers';
import { RootState } from '../../store/store'; 
// import { access } from 'fs';

import { getSession } from 'next-auth/react';

type User ={
  id:number
  name:string
  token:string
  email:string
  Dfirst:number
  Cfirst:number
  password:string
  access_token:string
  access:string
  FriendName:string
  data:any
  Compatibility :string
  day:string
  month:string
  year:string
  


}


// It is used to define our endpoints and allow to create the API slice
export const authApi = createApi({
 // The unique key that defines where the Redux store will store our cache.
 reducerPath: 'authApi',

 // The base query to request data.
 // RTK Query ships with fetchBaseQuery, which is a lightweight fetch wrapper that automatically handles request headers and response parsing in a manner similar to common libraries like axios.
 baseQuery: fetchBaseQuery({
  // baseUrl: 'http://127.0.0.1:8000/account/'
  baseUrl: 'https://ashberri-api.onrender.com/account',


      // return headers;
  // baseUrl:'https://jsonplaceholder.typicode.com/'
 }),




// export const authApi =  createApi({
//   reducerPath: 'authApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'http://127.0.0.1:8000/account/',
//     prepareHeaders: (headers, { getState })  => {
//       // const token = getState().auth.token;
//       // const token = (getState() as RootState).auth.token;
//       const {data:session} = useSession();

//       // const token = auth.token; // Assuming you store the token in auth.token
//       const token:any = session?.user.accessToken;
//           //  const session =  getSession();
//         // const token = session?.user?.accessToken;
//       if (token) {
//         headers.set('Authorization', `Bearer ${token}`);
//       }
//       // return headers;
//     },
//   }),

 // The set of operations that we want to perform against the server.
 endpoints: (builder) => ({

//GETALLUSER
  getAllUser: builder.query<User[], void>({
   query: () => ({
    url: 'getallusers/',
    // url: 'posts',
    // providesTags: [{ data: "Todos", id: "LIST" }],
    method: 'GET'
   })
  }),


//GETALLUSERById
   getAllUserId: builder.query({
    query: (id) => {
     console.log("ID:", id)
     return {
      url: `getallusers/?id=${id}`,
      // url: `posts/${id}`,
      method: 'GET'
     }
    }
   }),


// AllUserPredict
  AllUserPredict: builder.query({
    query: (access) => ({
      //  if (localStorage.getItem('token')) {
      url: 'friendStatusAndCompatibility/',
      method: 'GET',
      headers: {
        Authorization: `Bearer ${access}`,
      }

      // headers: {
      //   'Content-Type': 'application/json',
        
      // },
   
    })
    }),

//  UserPredictbyid
UserPredictById: builder.query({
  query: ({ access,id } ) => {
   return {url:`friendStatusAndCompatibilityById/?id=${id}`,
     method: 'GET',
     headers: {
      'authorization':  `Bearer ${access}`,
    }}
   }
  }), 
    // AllUserPredictById: builder.query({
    //   query: ({access,formData}) => ({
    //     url: 'FriendStatusAndCompatibilityById/',
    //     method: 'GET',
    //     headers: {
    //       Authorization: `Bearer ${access}`,

    //     },
    //     body:formData
    //   }),
    // }),







//PROFILE VIEW


  getUserProfile: builder.query({
    query: (token) => ({
      url: 'profile/',
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        // 'Content-Type': 'application/json'
      }
    }),
  }),

//SIGNIN
  signinUser: builder.mutation({
    query: (body: { email: string; password: string  }) => {
      return {
        url: "login/",
        method: "post",
        body,
      };
    },
  }),


// user signup
  signupUser: builder.mutation({
    // query: (body: { name: string;email:string,password:string,day:string,year:string,month:string;  }) => {
    query: (body: { name: string; email: string; password: string; day:string; month:string; year:string;}) => {
    // query: (body:  User ) => {
      // console.log(typeof body);

      return {

        url: "register/",
        method: "post",
        headers: {
               'Content-type': 'application/json; charset=UTF-8',
              },

        // api: {
        //         bodyParser: false, // Disallow body parsing, consume as stream
        //       },
        
        body
        };
    },

  }),
  




  updateUser: builder.mutation({
    query: ({access,formData}) => ({
      url: 'update/',
      method: 'PATCH',
      headers: {
        'authorization': `Bearer ${access}`,
      },
      body: formData,
    }),
  })






 }),

})

// Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
export const { useGetAllUserQuery,useAllUserPredictQuery,useUserPredictByIdQuery, useSignupUserMutation,useGetAllUserIdQuery, useSigninUserMutation ,useUpdateUserMutation,useGetUserProfileQuery } = authApi



















// import { Id } from '@reduxjs/toolkit/dist/tsHelpers';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { signIn, signOut, useSession } from "next-auth/react";
// import { headers } from 'next/dist/client/components/headers';
// import { RootState } from '../../store/store'; 
// // import { access } from 'fs';
// interface Users {
//   name: string;
//   email: string;
//   day:string
//   month:string
//   year:string
//   accessToken:string;


//   id:number
// }




// interface CreatePostParams {
//   body: {
//     name: string;
//     email: string;
//     day:string
//     month:string
//     year:string
//     access_token:string
 
//   };
//   access: string;
// }


// type User ={
//   id:number
//   name:string
//   token:string
//   email:string
//   Dfirst:number
//   Cfirst:number
//   password:string
//   access_token:string
//   access:string
//   FriendName:string
//   data:any
//   Compatibility :string
//   day:string
//   month:string
//   year:string
  


// }
// // It is used to define our endpoints and allow to create the API slice
// export const authApi = createApi({
//  // The unique key that defines where the Redux store will store our cache.
//  reducerPath: 'authApi',

//  // The base query to request data.
//  // RTK Query ships with fetchBaseQuery, which is a lightweight fetch wrapper that automatically handles request headers and response parsing in a manner similar to common libraries like axios.
//  baseQuery: fetchBaseQuery({
//   baseUrl: 'http://127.0.0.1:8000/account/',
//   // baseUrl: 'https://ashberri-api.onrender.com/api/user/',


//   // baseUrl:'https://jsonplaceholder.typicode.com/'
//  }),




// // export const authApi = createApi({
// //   reducerPath: 'authApi',
// //   baseQuery: fetchBaseQuery({
// //     baseUrl: 'http://127.0.0.1:8000/account/',
// //     prepareHeaders: (headers, { getState }) => {
// //       // const token = getState().auth.token;
// //       const token = (getState() as RootState).auth.token;
// //       // const {data:session} = useSession();

// //       // const token = auth.token; // Assuming you store the token in auth.token
// //       // const token:any = session?.user.accessToken;
// //       if (token) {
// //         headers.set('Authorization', `Bearer ${token}`);
// //       }
// //       return headers;
// //     },
// //   }),

//  // The set of operations that we want to perform against the server.
//  endpoints: (builder) => ({

// //GETALLUSER
//   getAllUser: builder.query<User[], void>({
//    query: () => ({
//     url: 'getallusers/',
//     // url: 'posts',
//     // providesTags: [{ data: "Todos", id: "LIST" }],
//     method: 'GET'
//    })
//   }),


//    //GETALLUSERById
//    getAllUserId: builder.query({
//     query: (id) => {
//      console.log("ID:", id)
//      return {
//       url: `getallusers/?id=${id}`,
//       // url: `posts/${id}`,
//       method: 'GET'
//      }
//     }
//    }),


//   // AllUserPredict
//   AllUserPredict: builder.query({
//     query: (token) => ({
//       //  if (localStorage.getItem('token')) {
//       url: 'Modelapi/',
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${token}`,
//       }

//       // headers: {
//       //   'Content-Type': 'application/json',
        
//       // },
   
//     })
//     }),
  




//  // UserPredictbyid
//   profileById: builder.query({
//      query: ({ access,id } ) => {
//       return {url:`Modelapi/?id=${id}`,
//         method: 'GET',
//         headers: {
//         'authorization': `Bearer ${access}`,
//        }}
//       }
//      }), 

  


// //PROFILE VIEW
//  profile: builder.query({
//    query: (token) => ({
//     //  if (localStorage.getItem('token')) {
//     url: 'profile/',
//     method: 'GET',
//     headers: {
//      Authorization: `Bearer ${token}`,
//     }

 
 
//     })
//    }),










 
//   //SIGNIN
//   signinUser: builder.mutation({
//     query: (body: { email: string; password: string  }) => {
//       return {
//         url: "login/",
//         method: "post",
//         body,
//       };
//     },
//   }),

  

// // user signup
//   signupUser: builder.mutation({
//     // query: (body: { name: string;email:string,password:string,day:string,year:string,month:string;  }) => {
//     query: (body: { name: string; email: string; password: string; day:string; month:string; year:string;}) => {
//     // query: (body: { name: string; email: string; password: string; day:string; month:string; year:string; }) => {


//     // query: (body:  User ) => {
//       console.log(typeof body);

//       return {

//         url: "register/",
//         method: "post",
//         headers: {
//                'Content-type': 'application/json; charset=UTF-8',
//               },

//         // api: {
//         //         bodyParser: false, // Disallow body parsing, consume as stream
//         //       },
        
//         body
//         };
//     },

//   }),
  
//   // UpdateUser
//   // updateUser: builder.mutation({
//   //   query:({body,access}:CreatePostParams) => ({
      
//   //     url: '/update',
//   //     method: 'PATCH',
      
//   //     headers: {
//   //       'authorization': `Bearer ${access}`,
//   //     },
//   //     body
//   //   }
    
//   //   )
//   // }),





//   // updateUser: builder.mutation<Users, { id: number; accessToken:string; formData:string; data: Partial<Users>  }>({
//   //   query: ( data) => ({
//   //     url: `/update/`,
//   //     method: 'PATCH',
//   //     headers: {
//   //       authorization: `Bearer ${data.accessToken}`,
//   //     },
//   //     body: data.formData,
//   //   }),
//   // })



//   // updateUser: builder.mutation({
//   //   query: ({data}) => ({
//   //     url: 'update/',
//   //     method: 'PATCH',
//   //     headers: {
//   //       'authorization': `Bearer ${data.access}`,
//   //     },
//   //     body: dataformData,
//   //   }),
//   // })



//   updateUser: builder.mutation({
//     query: ({access,formData}) => ({
//       url: 'update/',
//       method: 'PATCH',
//       headers: {
//         'authorization': `Bearer ${access}`,
//       },
//       body: formData,
//     }),
//   })






// // const body = { name, email, password, day:string; month:string; year:string }


//   // getuserById: builder.query({
//   //  query: (id) => {
//   //   console.log("ID:", id)
//   //   return {
//   //    url: `users/${id}`,
//   //    method: 'GET'
//   //   }
//   //  }
//   // }),

//   // getuserByLimit: builder.query({
//   //  query: (num) => {
//   //   console.log("Limit Number:", num)
//   //   return {
//   //    url: `users?_limit=${num}`,
//   //    method: 'GET'
//   //   }
//   //  }
//   // }),

//   // deleteuser: builder.mutation({
//   //  query: (id) => {
//   //   console.log("Delete ID:", id)
//   //   return {
//   //    url: `users/${id}`,
//   //    method: 'DELETE'
//   //   }
//   //  }
//   // }),

//   // createuser: builder.mutation({
//   //  query: (newuser) => {
//   //   console.log("Create user: ", newuser)
//   //   return {
//   //    url: `users`,
//   //    method: 'user',
//   //    body: newuser,
//   //    headers: {
//   //     'Content-type': 'application/json; charset=UTF-8',
//   //    }
//   //   }
//   //  }
//   // }),

//   // updateuser: builder.mutation({
//   //  query: (updateuserData) => {
//   //   console.log("Update user: ", updateuserData)
//   //   const { id, ...data } = updateuserData
//   //   console.log("Actual Update user: ", data)
//   //   return {
//   //    url: `users/${id}`,
//   //    method: 'PUT',
//   //    body: data,
//   //    headers: {
//   //     'Content-type': 'application/json; charset=UTF-8',
//   //    }
//   //   }
//   //  }
//   // }),
//  }),

// })

// // Export hooks for usage in functional components, which are auto-generated based on the defined endpoints
// export const { useGetAllUserQuery,useProfileQuery,useAllUserPredictQuery, useSignupUserMutation,useGetAllUserIdQuery, useSigninUserMutation,useProfileByIdQuery  ,useUpdateUserMutation } = authApi











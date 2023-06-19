import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { access } from 'fs';
import { signIn, signOut, useSession } from "next-auth/react";

// Function to retrieve the authentication token from your application's state
const getAuthToken = () => {
  // Retrieve the authentication token from your application's state (e.g., Redux store)
  // Return the token here
};

// Function to prepare the headers for the request, including the authorization header with the token


// export const friendApi = createApi({
//    reducerPath: 'friendApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'http://127.0.0.1:8000/friend/', // Replace '/api/' with the appropriate base URL for your API
//     prepareHeaders: (headers, { getState }) => {
//       // const { auth } = getState();
//       const {data:session} = useSession();

//       // const token = auth.token; // Assuming you store the token in auth.token
//       const token:any = session?.user.accessToken;

//       if (token) {
//         headers.set('Authorization', `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),




  export const friendApi  = createApi({
    // The unique key that defines where the Redux store will store our cache.
    reducerPath: 'friendApi ',
   
    // The base query to request data.
    // RTK Query ships with fetchBaseQuery, which is a lightweight fetch wrapper that automatically handles request headers and response parsing in a manner similar to common libraries like axios.
    baseQuery: fetchBaseQuery({
     baseUrl: 'http://127.0.0.1:8000/friend/'
     // baseUrl: 'https://ashberri-api.onrender.com/api/user/',

    
    }),
   
  endpoints: (builder) => ({


// SendingFriendRequest
      sendFriendRequest: builder.mutation({
        query: ({access,formData}) => ({
          url: 'send-friend-request/',
          method: 'POST',
          // body: friendRequestData,
          headers: {
            'authorization': `Bearer ${access}`,
          },
          body: formData,
        }),
      }),
  }),
});

export const { useSendFriendRequestMutation } = friendApi;

// export const { useSendFriendRequestMutation,useCancelFriendRequestMutation  } = friendApi;







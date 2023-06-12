import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { access } from 'fs';
import { signIn, signOut, useSession } from "next-auth/react";

// Function to retrieve the authentication token from your application's state
const getAuthToken = () => {
  // Retrieve the authentication token from your application's state (e.g., Redux store)
  // Return the token here
};

// Function to prepare the headers for the request, including the authorization header with the token


export const friendApi = createApi({
   reducerPath: 'friendApi',
  baseQuery: fetchBaseQuery({
    baseUrl: '/friend/', // Replace '/api/' with the appropriate base URL for your API
    prepareHeaders: (headers, { getState }) => {
      // const { auth } = getState();
      const {data:session} = useSession();

      // const token = auth.token; // Assuming you store the token in auth.token
      const token:any = session?.user.accessToken;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    sendFriendRequest: builder.mutation({
      query: (friendRequestData) => ({
        url: 'send-friend-request/',
        method: 'POST',
        body: friendRequestData,
        headers: {
          'Content-Type': 'application/json',
          // Add more headers here if needed
        },
      }),
    }),
  }),
});

export const { useSendFriendRequestMutation } = friendApi;

// export const { useSendFriendRequestMutation,useCancelFriendRequestMutation  } = friendApi;












// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const api = createApi({
//   reducerPath: 'friendApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: '/friend/', // Replace '/api/' with the appropriate base URL for your API
//     prepareHeaders: (headers, { getState }) => {
//       const { auth } = getState();
//       const token = auth.token; // Assuming you store the token in auth.token

//       if (token) {
//         headers.set('Authorization', `Bearer ${token}`);
//       }
//       return headers;
//     },
//   }),
//   endpoints: (builder) => ({
//     sendFriendRequest: builder.mutation({
//       query: (friendRequestData) => ({
//         url: 'send-friend-request/',
//         method: 'POST',
//         body: friendRequestData,
//         headers: {
//           'Content-Type': 'application/json',
//           // Add more headers here if needed
//         },
//       }),
//     }),
//   }),
// });

// export const { useSendFriendRequestMutation } = friendApi;

// export default friendApi;

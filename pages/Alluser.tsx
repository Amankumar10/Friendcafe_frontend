// import { useAllUserPredictQuery, useSendFriendRequestMutation } from "./api/authApi";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useAllUserPredictQuery, useGetAllUserQuery, useGetAllUserIdQuery, } from "./api/authApi";
import { useSendFriendRequestMutation } from "./api/friendApi";
import { getSession } from 'next-auth/react';
import { getToken } from "next-auth/jwt";
import { useQueryClient } from 'react-query';
import Link from "next/dist/client/link";


interface FriendProps {
  name: string;
  avatarUrl: string;
  status: string;
}

export default function Home({ name, avatarUrl, status }: FriendProps) {
  const { data: session } = useSession();
  const token: any = session?.user.accessToken;
  const { data, isSuccess } = useAllUserPredictQuery(token);
  const [sendFriendRequest, { isLoading }] = useSendFriendRequestMutation();
  console.log(data);

  const handleSendFriendRequest = async (friendId: string) => {
    try {
      await sendFriendRequest({ access: token, formData: { receiver: friendId } });
      console.log(`Friend request sent successfully to ${friendId}`);
    } catch (error: any) {
      console.log(`Failed to send friend request to ${friendId}: ${error.message}`);
    }
  };

  return (
    <>
      <h1 className="font-bold text-2xl mb-4">Friends</h1>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((curElem: any) => (
          <div key={curElem.id} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
            <Link href={`/${curElem.id}`}>
              <div className="relative">
                <img className="w-full h-56 object-cover" src={curElem.avatarUrl} alt={curElem.name} />
              </div>
            </Link>
            <div className="px-4 py-3">
              <h1 className="text-lg font-semibold">{curElem.name}</h1>
              <p className="text-sm text-gray-500">{curElem.status}</p>
              <div className="flex items-center mt-2">
                <span className="text-sm font-medium mr-1">Friend:</span>
                <span className="text-sm">{curElem.FriendName}</span>
              </div>
              <div className="flex items-center mt-1">
                <span className="text-sm font-medium mr-1">Compatibility:</span>
                <span className="text-sm">{curElem.Compatibility}</span>
              </div>
              <div className="flex items-center mt-1">
                <span className="text-sm font-medium mr-1">Status:</span>
                <span className="text-sm">{curElem.FriendStatus}</span>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 w-full"
                onClick={() => handleSendFriendRequest(curElem.id)}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : "Send Friend Request"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}






// import { useAllUserPredictQuery, useGetAllUserQuery, useGetAllUserIdQuery, } from "./api/authApi";
// import { useSendFriendRequestMutation } from "./api/friendApi";
// import { getSession } from 'next-auth/react';
// import { getToken } from "next-auth/jwt";
// import { useQueryClient } from 'react-query';

// import Link from 'next/link';
// import { signIn, signOut, useSession } from "next-auth/react";
// import { authOptions } from '../pages/api/auth/[...nextauth]'
// import { QueryClient, QueryClientProvider } from 'react-query';
// import { getServerSession } from "next-auth/next"
// interface FriendProps {
//   name: string
//   avatarUrl: string
//   status: string
// }

// export default function Home({ name, avatarUrl, status }: FriendProps) {
//   const { data: session } = useSession();
//   const token: any = session?.user.accessToken;
//   const { data, isSuccess } = useAllUserPredictQuery(token);
//   const [sendFriendRequest, { isLoading, isError, error }] = useSendFriendRequestMutation();
//   console.log(data);

//   // const queryClient = useQueryClient();

//   // const handleSendFriendRequest = async (friendId: string) => {
//   //   try {
//   //     await sendFriendRequest({ access:token,formData:{receiver:friendId} });
//   //     console.log(`Friend request sent successfully to ${friendId}`);
//   //   } catch (error:any) {
//   //     console.log(`Failed to send friend request to ${friendId}: ${error.message}`);
//   //   }
//   // };





//   const handleSendFriendRequest = async (friendId: string) => {
//     try {
//       await sendFriendRequest({ access: token, formData: { receiver: friendId } });
//       console.log(`Friend request sent successfully to ${friendId}`);
//     } catch (error: any) {
//       console.log(`Failed to send friend request to ${friendId}: ${error.message}`);
//     }
//   };


//   return (
//     <>
//       <h1 className="font-bold text-2xl mb-4">Friends</h1>

//       <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
//         {data?.map((curElem: any) => (
//           <div key={curElem.id} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
//             {/* <Link href={`/UserById}`}>
//               <div className="relative">
//                 <img
//                   className="w-full h-56 object-cover"
//                   src={curElem.avatarUrl}
//                   alt={curElem.name}
//                 />
//               </div>
//             </Link> */}



//             <Link href={`/${curElem.id}`}>
//               <div className="relative">
//                 <img
//                   className="w-full h-56 object-cover"
//                   src={curElem.avatarUrl}
//                   alt={curElem.name}
//                 />
//               </div>
//             </Link>
//             <div className="px-4 py-3">
//               <h1 className="text-lg font-semibold">{curElem.name}</h1>
//               <p className="text-sm text-gray-500">{curElem.status}</p>
//               <div className="flex items-center mt-2">
//                 <span className="text-sm font-medium mr-1">Friend:</span>
//                 <span className="text-sm">{curElem.FriendName}</span>
//               </div>
//               <div className="flex items-center mt-1">
//                 <span className="text-sm font-medium mr-1">Compatibility:</span>
//                 <span className="text-sm">{curElem.Compatibility}</span>
//               </div>
//               <div className="flex items-center mt-1">
//                 <span className="text-sm font-medium mr-1">status:</span>
//                 <span className="text-sm">{curElem.FriendStatus
// }</span>
//               </div>
//               <button
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 w-full"
//                 onClick={() => handleSendFriendRequest(curElem.id)}
//                 disabled={isLoading}
//               >
//                 {isLoading ? "Sending..." : "Send Friend Request"}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </>

//   );
// }
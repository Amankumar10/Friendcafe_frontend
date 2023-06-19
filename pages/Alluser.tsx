


// import { useAllUserPredictQuery,useGetAllUserQuery,useGetAllUserIdQuery } from "./api/authApi";
// import { getSession } from 'next-auth/react';
// import { getToken } from "next-auth/jwt";
// // import { getServerSession } from "next-auth/next"
import { access } from 'fs';

//  import Link from 'next/link';
//  import { signIn, signOut, useSession } from "next-auth/react";
//  import { authOptions } from '../pages/api/auth/[...nextauth]'
//  import { getServerSession } from "next-auth/next"


// // interface FriendProps {
// //   name: string
// //   avatarUrl: string
// //   status: string
// // }

  
  


// export default function Home() {


// const {data:session} = useSession();
// // const token:any = session?.user.accessToken;
// // const token: string | undefined = session?.user.accessToken;
// const token:any= session?.user.accessToken;
// const {data,isSuccess} =  useAllUserPredictQuery(token)

//   return (

// <>
// <h1  className="font-bold text-xl">Friends</h1>

//     <div className="grid  gap-4  phone:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 "  >

// {data?.map((curElem:any) => (

//    <div key={curElem.id}>
    



//      <div className="bg-gray-100  ">
//  <main className=" mx-auto   ">
//    <div className="px-2 py-2  sm:bg">
//      <ul className="">
//      <li className="bg-red-100 rounded-lg shadow-lg overflow-hidden">
//      <Link  href={`/${curElem.id}`}>
//        <div className="relative">
//          <img className="w-full h-64 object-cover" />
    
//        </div>
//        <div className="px-4 py-3">
//          {/* <h2 className="text-gray-800 font-bold text-lg"> */}
//          {/* <Link  href={`/${curElem.id}`}> */}
          
//           {/* {curElem.FriendName} */}
//           {/* <div className="absolute bottom-0 right-0 bg-gray-800 text-white py-2 px-4 rounded-bl-lg"> */}
//          {/* </div> */}
//           {/* </Link> */}
//           {/* &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{curElem.Compatibility } */}
//      <h1 className="text-5xl ">{curElem.FriendName}&nbsp;&nbsp;&nbsp;{curElem.Compatibility }</h1> 
//           {/* </h2> */}

//        </div>
//        </Link>
//      </li>
//      </ul>
//    </div>
//  </main>
//  </div>

//    </div>
//  ))} 


// </div>

// </>
// );
// }

      



import { useAllUserPredictQuery, useGetAllUserQuery, useGetAllUserIdQuery, } from "./api/authApi";
import { useSendFriendRequestMutation } from "./api/friendApi";


import { getSession } from 'next-auth/react';
import { getToken } from "next-auth/jwt";
import Link from 'next/link';
import { signIn, signOut, useSession } from "next-auth/react";
import { authOptions } from '../pages/api/auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
interface FriendProps {
  name: string
  avatarUrl: string
  status: string
}

export default function Home({ name, avatarUrl, status }: FriendProps) {
  const { data: session } = useSession();
  const token: any = session?.user.accessToken;
  const { data, isSuccess } = useAllUserPredictQuery(token);
  const [sendFriendRequest, { isLoading, isError, error }] = useSendFriendRequestMutation();

  const handleSendFriendRequest = async (friendId: string) => {
    try {
      await sendFriendRequest({ access:token,formData:{receiver:friendId} });
      console.log(`Friend request sent successfully to ${friendId}`);
    } catch (error:any) {
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
                <img
                  className="w-full h-56 object-cover"
                  src={curElem.avatarUrl}
                  alt={curElem.name}
                />
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
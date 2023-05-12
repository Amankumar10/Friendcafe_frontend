


import { useAllUserPredictQuery,useGetAllUserQuery,useGetAllUserIdQuery } from "./api/authApi";
import { getSession } from 'next-auth/react';
import { getToken } from "next-auth/jwt";
// import { getServerSession } from "next-auth/next"
import { GetStaticPaths, GetStaticProps } from "next";
import { GetServerSideProps} from "next"
 import Link from 'next/link';
 import { signIn, signOut, useSession } from "next-auth/react";
 import { authOptions } from '../pages/api/auth/[...nextauth]'
 import { getServerSession } from "next-auth/next"
//  import { signIn, signOut, useSession } from "next-auth/react";
interface BreakingNewsPageProps {
  newsArticles: NewsArticle[],
}


export interface NewsResponse {
  articles: NewsArticle[],
}


export interface NewsArticle {
  id: string,
  ProfileName: string,
  FriendName: string,
  Compatiblity: string,

}










export interface NewsArticle {
  id: string,
  email: string,
  name: string,
  D_second: string,
  C_second: string,
  date_of_birth: string,
  day: string,
  year: string,
  month: string

}


interface FriendProps {
  name: string
  avatarUrl: string
  status: string
}

  
  


export default function Home({ name, avatarUrl, status }: FriendProps) {


const {data:session} = useSession();
const token:any = session?.user.accessToken;
const {data,isSuccess} =  useAllUserPredictQuery(token)

  return (
  
//     <div className="grid grid-cols-3 gap-4">
// {data?.map((curElem:any) => (
//    <div key={curElem.id}>
//     <li className="bg-white rounded-lg shadow-lg overflow-hidden">
//      <div>

//       <Link href={`/${curElem.id}`}> {curElem.FriendName}={curElem.Compatiblity}</Link>     
      


//      </div>
//      </li>
//    </div>
//  ))} 


// </div>


// );
// }







<>
<h1  className="font-bold text-xl">Friends</h1>

    <div className="grid grid-cols-3 gap-4">

{data?.map((curElem:any) => (

   <div key={curElem.id}>
    
     {/* <div>

      <Link href={`/${curElem.id}`}> {curElem.FriendName}={curElem.Compatiblity}</Link>     
      


     </div> */}



     <div className="bg-gray-100 ">
 <main className=" mx-auto   ">
   <div className="px-2 py-2 ">
     <ul className="">
     <li className="bg-white rounded-lg shadow-lg overflow-hidden">
     <Link  href={`/${curElem.id}`}>
       <div className="relative">
         <img className="w-full h-64 object-cover" src={avatarUrl} alt={name} />
    
       </div>
       <div className="px-4 py-3">
         <h2 className="text-gray-800 font-bold text-lg">
         {/* <Link  href={`/${curElem.id}`}> */}
          
          {curElem.FriendName}
          {/* <div className="absolute bottom-0 right-0 bg-gray-800 text-white py-2 px-4 rounded-bl-lg"> */}
         {/* </div> */}
          {/* </Link> */}
          {/* &nbsp;&nbsp;&nbsp;  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{curElem.Compatiblity} */}
      {curElem.Compatiblity}
          </h2>

       </div>
       </Link>
     </li>
     </ul>
   </div>
 </main>
 </div>




   
   </div>
 ))} 


</div>

</>
);
}

      








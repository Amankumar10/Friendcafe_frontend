


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




  
  


export default function Home() {


const {data:session} = useSession();
const token:any = session?.user.accessToken;
const {data,isSuccess} =  useAllUserPredictQuery(token)

  return (
  
           <div className="todos">
       {data?.map((curElem:any) => (
          <div key={curElem.id}>
           
            <div>

             <Link href={`/${curElem.id}`}> {curElem.FriendName}={curElem.Compatiblity}</Link>     
             
       

            </div>
          
          </div>
        ))} 


       </div>


  );
}































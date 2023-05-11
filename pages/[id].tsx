import { useProfileByIdQuery } from "./api/authApi";
import { useAllUserPredictQuery,useGetAllUserQuery,useGetAllUserIdQuery } from "./api/authApi";
import { getSession } from 'next-auth/react';
import { GetStaticPaths, GetStaticProps } from "next";
// import { GetServerSideProps} from "next"
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router'
import { useEffect,useState } from "react";
// imports end

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
// INTERFACE ENDS



// function  ends

// main function 
export default function MyData() {

    const [users, setUsers] = useState([])


// * we can also use fetchapi but in that we have write long code that why we are user rtk query
//  async function fetchData() {
//     const router = useRouter()
//     // const session:any = useSession();

//     const  {id} = router.query
//     const session:any = await  getSession()
 
//       const response = await fetch(`http://127.0.0.1:8000/api/user/Modelapi/?id=${id}`,{
//       method: 'GET',
//       headers: {
       
//        'authorization': `Bearer ${session?.user.accessToken}`,
//       //  'authorization': `Bearer ${token}`,

//     }
//   })
//   const data:any = await response.json();
//       console.log(data);

//     }
 
// fetchData()


const router = useRouter()
const  {id} = router.query
// const session:any = await  getSession()
const {data:session} = useSession();
const token:any = session?.user.accessToken
// console.log(token);
  const {data,isSuccess} =  useProfileByIdQuery({access:token,id:id})

  console.log(data);


    return (
      <div className="todos">


        <ul>
          {data?.map((user:any) => (
            <div key={user.id}>
              <div>
              {user.FriendName}={user.Compatiblity}
              
              </div></div>
          ))}
        </ul>
  
      </div>
    );
  }
// main ends


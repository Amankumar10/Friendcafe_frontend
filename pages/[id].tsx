// // Without using rtk and using normal fetch api


// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import { useSession } from "next-auth/react";

// interface User {
//   id: string;
//   FriendName: string;
//   Compatibility : string;
// }

// export default function Data() {
//   const [users, setUsers] = useState<User[]>([]);
//   const router = useRouter();
//   const { id } = router.query;
//   const { data: session } = useSession();
//   // const token: string | undefined = session?.user.accessToken;
//   const token:any = session?.user.accessToken;


//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(
//           `http://127.0.0.1:8000/account/Modelapi/?id=${id}`,
//           {
//             method: "GET",
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           }
//         );
//         const data = await response.json();
//         // console.log(data);

//         // Assuming the response data is an array of users
//         setUsers(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     }

//     if (id && token) {
//       fetchData();
//     }
//   }, [id, token]);

//   return (
//     <div className="todos">
//       <ul>
//         {users.map((user) => (
//           <div key={user.id}>
//             <div>
//               {user.FriendName}={user.Compatibility }
//             </div>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// }






// Using rtk using

import { useProfileByIdQuery } from "./api/authApi";
import { useAllUserPredictQuery,useGetAllUserQuery,useGetAllUserIdQuery } from "./api/authApi";
import { getSession } from 'next-auth/react';
import { GetStaticPaths, GetStaticProps } from "next";
import { GetServerSideProps} from "next"
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/router'
import { useEffect,useState } from "react";
// imports end




// main function 
export default function myData() {

    const [users, setUsers] = useState([])

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
              {user.FriendName}={user.Compatibility }
              
              </div></div>
          ))}
        </ul>
  
      </div>
    );
  }
// main ends




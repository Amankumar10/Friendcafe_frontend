// Without using rtk and using normal fetch api


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
//           `http://127.0.0.1:8000/account/friendStatusAndCompatibilityById/?id=${id}`,
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
//     <div className="max-w-lg mx-auto p-4">
//     <h1 className="text-2xl font-bold mb-4">User Data</h1>

//     <ul className="bg-white shadow-md p-4 rounded-md">
//       {Array.isArray(users) ? (
//         users.map((user) => (
//           <li key={user.id} className="mb-2">
//             <div>
//               {user.FriendName} = {user.Compatibility}
//             </div>
//           </li>
//         ))
//       ) : (
//         <li>No users available.</li>
//       )}
//     </ul>
//   </div>
// );
// }





// Using rtk using
import { useSession } from "next-auth/react";
import {useUserPredictByIdQuery} from "./api/authApi";
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from "react";

interface UserData {
  id: string;
  FriendName: string;
  Compatibility: number;
}

export default function MyData() {
  const [users, setUsers] = useState<UserData[]>([]);

  const router = useRouter();
  const { id } = router.query;
  const { data: session } = useSession();
  const token = session?.user.accessToken;

  const { data, isSuccess } = useUserPredictByIdQuery({ access: token, id: id });

  useEffect(() => {
    if (isSuccess) {
      setUsers(data);
    }
  }, [data, isSuccess]);

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Data</h1>

      <ul className="bg-white shadow-md p-4 rounded-md">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            <div>{user.FriendName} = {user.Compatibility}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
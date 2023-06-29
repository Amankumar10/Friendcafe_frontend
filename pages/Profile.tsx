// // using chakra ui
// import React, { useEffect } from 'react';
// import { useGetUserProfileQuery } from '../pages/api/authApi';
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/router';
// import { Box, Heading, Text, Button, Stack, List, ListItem, Avatar, Spacer, Divider } from '@chakra-ui/react';

// interface FriendRequest {
//   id: number;
//   name: string;
// }

// const Profile: React.VFC = () => {
//   const router = useRouter();
//   const { data: session } = useSession();
//   const token: any = session?.user.accessToken;

//   const { data, error, isLoading } = useGetUserProfileQuery(token || '');

//   useEffect(() => {
//     if (error) {
//       console.error('Failed to fetch user profile:', error);
//     }
//   }, [error]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error occurred while fetching user profile.</div>;
//   }

//   const userProfile = data?.user_profile;
//   const friendRequests = data?.friend_requests || [];

//   return (
//     <Box maxW="lg" mx="auto" p={4}>
//       <Box bg="white" boxShadow="md" p={4} rounded="md">
//         <Stack direction="row" align="center" mb={4}>
//           <Avatar size="lg" name={userProfile?.name} src={userProfile?.avatar} />
//           <Stack>
//             <Heading as="h2" size="lg" fontWeight="bold">
//               {userProfile?.name}
//             </Heading>
//             <Text fontSize="md" color="gray.500">
//               {userProfile?.email}
//             </Text>
//           </Stack>
//           <Spacer />
//           <Button
//             colorScheme="blue"
//             variant="outline"
//             size="sm"
//             fontWeight="bold"
//             onClick={() => router.push('/EditYourProfile')}
//           >
//             Edit Profile
//           </Button>
//         </Stack>
//         <Divider />
//         <Stack spacing={4} mt={4}>
//           <Heading as="h3" size="md" fontWeight="bold">
//             About Me
//           </Heading>
//           <Text>{userProfile?.bio}</Text>
//         </Stack>
//         <Divider />
//         <Stack spacing={4} mt={4}>
//           <Heading as="h3" size="md" fontWeight="bold">
//             Friend Requests
//           </Heading>
//           {friendRequests.length > 0 ? (
//             <List>
//               {friendRequests.map((request: FriendRequest) => (
//                 <ListItem key={request.id}>
//                   <Avatar size="sm" name={request.name} />
//                   <Text ml={2}>{request.name}</Text>
//                 </ListItem>
//               ))}
//             </List>
//           ) : (
//             <Text>No friend requests.</Text>
//           )}
//         </Stack>
//       </Box>
//     </Box>
//   );
// };

// export default Profile;




// headless ui
import React, { useEffect } from 'react';
import { useGetUserProfileQuery } from '../pages/api/authApi';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { Disclosure, Transition } from '@headlessui/react';

interface FriendRequest {
  id: number;
  name: string;
}

const Profile: React.VFC = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const token: any = session?.user.accessToken;

  const { data, error, isLoading } = useGetUserProfileQuery(token || '');

  useEffect(() => {
    if (error) {
      console.error('Failed to fetch user profile:', error);
    }
  }, [error]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error occurred while fetching user profile.</div>;
  }

  const userProfile = data?.user_profile;
  const friendRequests = data?.friend_requests || [];

  return (
    <div className="max-w-lg mx-auto p-4">
      <div className="bg-white shadow-md p-4 rounded-md">
        <div className="flex items-center mb-4">
          <img className="w-12 h-12 rounded-full" src={userProfile?.avatar} alt={userProfile?.name} />
          <div className="ml-4">
            <h2 className="text-lg font-bold">{userProfile?.name}</h2>
            <p className="text-gray-500">{userProfile?.email}</p>
          </div>
          <button
            className="ml-auto text-blue-500 font-bold outline-none focus:outline-none"
            onClick={() => router.push('/EditYourProfile')}
          >
            Edit Profile
          </button>
        </div>
        <hr className="my-4" />
        <div className="mb-4">
          <h3 className="text-md font-bold">About Me</h3>
          <p>{userProfile?.bio}</p>
        </div>
        <hr className="my-4" />
        <div className="mb-4">
          <h3 className="text-md font-bold">Friend Requests</h3>
          {friendRequests.length > 0 ? (
            <ul>
              {friendRequests.map((request: FriendRequest) => (
                <li key={request.id} className="flex items-center mb-2">
                  {/* <img className="w-6 h-6 rounded-full" src={request.avatar} alt={request.name} /> */}
                  <span className="ml-2">{request.name}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p>No friend requests.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;








// only tailwindcss
// import React, { useEffect } from 'react';
// import { useGetUserProfileQuery } from '../pages/api/authApi';
// import { useSession } from 'next-auth/react';
// import { useRouter } from 'next/router';

// interface FriendRequest {
//   id: number;
//   name: string;
// }

// const Profile: React.VFC = () => {
//   const router = useRouter();
//   const { data: session } = useSession();
//   const token: any = session?.user.accessToken;

//   const { data, error, isLoading } = useGetUserProfileQuery(token || '');

//   useEffect(() => {
//     if (error) {
//       console.error('Failed to fetch user profile:', error);
//     }
//   }, [error]);

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error occurred while fetching user profile.</div>;
//   }

//   const userProfile = data?.user_profile;
//   const friendRequests = data?.friend_requests || [];

//   return (
//     <div className="max-w-lg mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
//       <div className="bg-white shadow-md p-4 rounded-md">
//         <div className="mb-4">
//           <h2 className="text-lg font-semibold">Name:</h2>
//           <p>{userProfile?.name}</p>
//         </div>
//         <div className="mb-4">
//           <h2 className="text-lg font-semibold">Email:</h2>
//           <p>{userProfile?.email}</p>
//         </div>
//         <button
//           className="bg-gray-900 hover:bg-gray-700 text-white my-1 py-2 px-4 rounded-md font-bold w-full"
//           onClick={() => router.push("/EditYourProfile")}
//         >
//           Edit Profile
//         </button>
//       </div>
//       <div className="mt-4">
//         <h2 className="text-xl font-bold mb-2">Friend Requests:</h2>
//         {friendRequests.length > 0 ? (
//           <ul className="bg-white shadow-md p-4 rounded-md">
//             {friendRequests.map((request: FriendRequest) => (
//               <li key={request.id} className="mb-2">
//                 {request.name}
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No friend requests.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;

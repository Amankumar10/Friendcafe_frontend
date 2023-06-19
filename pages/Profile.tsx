




// Profile.tsx
import React, { useEffect } from 'react';
import { useGetUserProfileQuery } from '../pages/api/authApi';
import { getSession } from 'next-auth/react';
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from 'next/navigation'
// interface UserProfile {
//   email: string;
//   name: string;
// }

interface FriendRequest {
  id: number;
  name: string;
}

// interface UserData {
//   user_profile: UserProfile;
//   friend_requests: FriendRequest[];
// }



const Profile: React.VFC = () => {


const router = useRouter();
  
const {data:session} = useSession();
// const token:any = session?.user.accessToken;
// const token: string | undefined = session?.user.accessToken;
const token:any= session?.user.accessToken;

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
    <h1 className="text-2xl font-bold mb-4">Your Profile</h1>
    <div className="bg-white shadow-md p-4 rounded-md">
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Name:</h2>
        <p>{userProfile?.name}</p>
      </div>
      <div className="mb-4">
        <h2 className="text-lg font-semibold">Email:</h2>
        <p>{userProfile?.email}</p>
      </div>
      <button
        className="bg-gray-900 hover:bg-gray-700 text-white my-1 py-2 px-4 rounded-md font-bold w-full"
        onClick={() => router.push("/EditYourProfile")}
      >
        Edit Profile
      </button>
    </div>
    <div className="mt-4">
      <h2 className="text-xl font-bold mb-2">Friend Requests:</h2>
      {friendRequests.length > 0 ? (
        <ul className="bg-white shadow-md p-4 rounded-md">
          {friendRequests.map((request: FriendRequest) => (
            <li key={request.id} className="mb-2">
              {request.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No friend requests.</p>
      )}
    </div>
  </div>
  );
};

export default Profile;









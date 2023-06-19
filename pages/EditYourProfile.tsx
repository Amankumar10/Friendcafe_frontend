

import { useEffect } from 'react';
import { useUpdateUserMutation } from "./api/authApi";
import { signIn, signOut, useSession } from "next-auth/react";
import { useAppSelector } from "./../store/hooks";
import { useState, FormEvent, ChangeEvent } from 'react';
import { useGetUserProfileQuery } from "./api/authApi";
import Image from 'next/image';

const EditYourProfile = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    year: '',
    day: '',
    month: '',
    file: null,
  });
  
  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e?.target.files?.[0] || null;
    setValues((prevValues) => ({
      ...prevValues,
      file: file as null,
    }));
  };

  const [userData, setUserData] = useState({
    email: "",
    name: "",
    day:"",
    month:"",
    year:"",
    file: ""
  });

  const [updateUserMutation] = useUpdateUserMutation();
  const { data: session } = useSession();
  const token: any = session?.user.accessToken;

   const { data, error, isLoading,isSuccess } = useGetUserProfileQuery(token || '');
  const userProfile = data?.user_profile;

  const handleUpload = async () => {
    const { name, day, file, email, year, month } = values;
    const formData = new FormData();
    if (name) formData.append('name', name);
    if (email) formData.append('email', email);
    if (day) formData.append('day', day);
    if (year) formData.append('year', year);
    if (month) formData.append('month', month);
    file && formData.append('file', file);

    try {
      const response = await updateUserMutation({
        access: token,
        formData: formData,
      });

      if (response) {
        console.log('Successfully uploaded');
        window.location.reload(); // Reload the page after successful upload
      } else {
        console.log('Failed uploading');
      }
    } catch (error) {
      console.error('Error while transferring to API:', error);
    }

    // Clear the file input
    setValues((prevValues) => ({
      ...prevValues,
      file: null,
    }));
  };

  // Store User Data in Local State
  useEffect(() => {
    if (userProfile && isSuccess) {
      setUserData({
        email: userProfile.email,
        name: userProfile.name,
        day: userProfile.day,
        month: userProfile.month,
        year: userProfile.year,
        file: userProfile.file // Assuming the file URL is provided in the API response
      });
    }
  }, [userProfile, isSuccess]);

  return (
    <>
    <div className="container mx-auto">
      <fieldset className="mb-6">
        <legend className="text-lg font-semibold mb-2">Personal Information</legend>
        <div className="flex flex-col mb-4">
          <label htmlFor="name" className="mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleInputChange}
            placeholder={userData.name || ''}
            className="p-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="email" className="mb-2">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            placeholder={userData.email || ''}
            className="p-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="day" className="mb-2">Day</label>
          <input
            type="text"
            id="day"
            name="day"
            value={values.day}
            onChange={handleInputChange}
            placeholder={userData.day || ''}
            className="p-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="month" className="mb-2">Month</label>
          <input
            type="text"
            id="month"
            name="month"
            value={values.month}
            onChange={handleInputChange}
            placeholder={userData.month || ''}
            className="p-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="year" className="mb-2">Year</label>
          <input
            type="text"
            id="year"
            name="year"
            value={values.year}
            onChange={handleInputChange}
            placeholder={userData.year || ''}
            className="p-2 border border-gray-300 rounded-md focus:outline-none"
          />
        </div>
      </fieldset>
      
      <fieldset className="mb-6">
        <legend className="text-lg font-semibold mb-2">Profile Photo</legend>
        <div className="flex flex-col mb-4">
          {userData.file && (
            <Image
              src={userData.file}
              alt="Profile Photo"
              width={200}
              height={200}
            />
          )}
          <input type="file" name="file" onChange={handleFileChange} className="mt-2" />
        </div>
      </fieldset>

      <button
        className="bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md font-bold"
        type="submit"
        onClick={handleUpload}
      >
        Update
      </button>
    </div>
  </>
  );
};

export default EditYourProfile;














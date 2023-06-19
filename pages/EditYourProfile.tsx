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
    month: '',
    day: '',
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
    day: "",
    month: "",
    year: "",
    file: "",
  });

  const [updateUserMutation] = useUpdateUserMutation();
  const { data: session } = useSession();
  const token: any = session?.user.accessToken;

  const { data, error, isLoading, isSuccess } = useGetUserProfileQuery(token || '');
  const userProfile = data?.user_profile;
  
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.currentTarget;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
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
        file: userProfile.file, // Assuming the file URL is provided in the API response
      });
    }
  }, [userProfile, isSuccess]);

  const months = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];

  const days = Array.from({ length: 31 }, (_, index) => String(index + 1));
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, index) => String(currentYear - index));

  return (
    <>
      <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-4 sm:p-6">
            <div className="flex items-center mb-2">
              <h2 className="text-xl font-semibold">Edit Profile</h2>
            </div>
            <div className="mt-4">
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
              <div className="mt-6">
                <div className="flex items-center mb-2">
                  <label htmlFor="birthday" className="mr-2 font-semibold">Birthday</label>
                  <span className="text-gray-500 text-sm">Your Current DOB={userData.day}/{userData.month}/{userData.year}</span>
                </div>
                <div className="grid grid-cols-3 gap-4 sm:grid-cols-auto">
                  <div className="flex flex-col">
                    <label htmlFor="day" className="sr-only">Day</label>
                    <select
                      id="day"
                      name="day"
                      value={values.day}
                      onChange={handleChange}
                      className="p-3 border border-gray-300 rounded-md focus:outline-none"
                    >
                      <option value="">Day</option>
                      {days.map((day) => (
                        <option key={day} value={day}>
                          {day}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="month" className="sr-only">Month</label>
                    <select
                      id="month"
                      name="month"
                      value={values.month}
                      onChange={handleChange}
                      className="p-3 border border-gray-300 rounded-md focus:outline-none"
                    >
                      <option value="">Month</option>
                      {months.map((month) => (
                        <option key={month.value} value={month.value}>
                          {month.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="year" className="sr-only">Year</label>
                    <select
                      id="year"
                      name="year"
                      value={values.year}
                      onChange={handleChange}
                      className="p-3 border border-gray-300 rounded-md focus:outline-none"
                    >
                      <option value="">Year</option>
                      {years.map((year) => (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <div className="flex items-center mb-2">
                  <label htmlFor="profilePhoto" className="mr-2 font-semibold">Profile Photo</label>
                  <span className="text-gray-500 text-sm">(Optional)</span>
                </div>
                <div className="flex flex-col items-center">
                  {userData.file && (
                    <div className="w-32 h-32 mb-2">
                      <Image
                        src={userData.file}
                        alt="Profile Photo"
                        layout="responsive"
                        width={200}
                        height={200}
                      />
                    </div>
                  )}
                  <input type="file" name="file" onChange={handleFileChange} className="mt-2" />
                </div>
              </div>
              <div className="mt-6">
                <button
                  className="bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md font-bold"
                  type="submit"
                  onClick={handleUpload}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditYourProfile;

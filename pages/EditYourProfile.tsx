// using headless ui
import { useEffect } from 'react';
import { useUpdateUserMutation } from "./api/authApi";
import { signIn, signOut, useSession } from "next-auth/react";
import { useAppSelector } from "./../store/hooks";
import { useState, FormEvent, ChangeEvent } from 'react';
import { useGetUserProfileQuery } from "./api/authApi";
import Image from 'next/image';
import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
// import { ExclamationIcon } from '@heroicons/react/outline';
import { useRouter } from 'next/router';

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
  const router = useRouter();

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
    <Transition.Root show={true} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={() => {}}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left">
                    <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                      Edit Profile
                    </Dialog.Title>
                    <div className="mt-2">
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block font-medium">
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={values.name}
                            onChange={handleInputChange}
                            className="rounded-lg w-full border-gray-300 shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                            placeholder={userData.name || ''}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block font-medium">
                            Email
                          </label>
                          <input
                            type="text"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={handleInputChange}
                            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                            placeholder={userData.email || ''}
                          />
                        </div>
                        <div>
                          <label htmlFor="day" className="block font-medium">
                            Birthday
                          </label>
                          <div className="flex space-x-2">
                            <select
                              id="day"
                              name="day"
                              value={values.day}
                              onChange={handleChange}
                              className="flex-grow border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                            >
                              <option value="">Day</option>
                              {days.map((day) => (
                                <option key={day} value={day}>
                                  {day}
                                </option>
                              ))}
                            </select>
                            <select
                              id="month"
                              name="month"
                              value={values.month}
                              onChange={handleChange}
                              className="flex-grow border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                            >
                              <option value="">Month</option>
                              {months.map((month) => (
                                <option key={month.value} value={month.value}>
                                  {month.label}
                                </option>
                              ))}
                            </select>
                            <select
                              id="year"
                              name="year"
                              value={values.year}
                              onChange={handleChange}
                              className="flex-grow border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                            >
                              <option value="">Year</option>
                              {years.map((year) => (
                                <option key={year} value={year}>
                                  {year}
                                </option>
                              ))}
                            </select>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            Your Current DOB: {userData.day}/{userData.month}/{userData.year}
                          </p>
                        </div>
                        <div>
                          <label htmlFor="file" className="block font-medium">
                            Profile Photo
                          </label>
                          <div className="flex items-center space-x-2">
                            {userData.file && (
                              <div className="w-32 h-32">
                                <Image
                                  src={userData.file}
                                  alt="Profile Photo"
                                  layout="responsive"
                                  width={200}
                                  height={200}
                                />
                              </div>
                            )}
                            <input
                              type="file"
                              id="file"
                              name="file"
                              onChange={handleFileChange}
                              className="flex-grow border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-200 focus:outline-none"
                            />
                          </div>
                          <p className="mt-1 text-sm text-gray-500">(Optional)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={handleUpload}
                  disabled={isLoading}
                >
                  {isLoading ? 'Uploading...' : 'Save'}
                </button>
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:w-auto sm:text-sm"
                  // onClick={() => signOut()}

                  onClick={() => router.push("/Profile")}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default EditYourProfile;








// using chakra ui
// import { useEffect } from 'react';
// import { useUpdateUserMutation } from "./api/authApi";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { useAppSelector } from "./../store/hooks";
// import { useState, FormEvent, ChangeEvent } from 'react';
// import { useGetUserProfileQuery } from "./api/authApi";
// import Image from 'next/image';
// import { Box, Heading, Text, Stack, FormControl, FormLabel, Input, Button, Select } from '@chakra-ui/react';

// const EditYourProfile = () => {
//   const [values, setValues] = useState({
//     name: '',
//     email: '',
//     year: '',
//     month: '',
//     day: '',
//     file: null,
//   });

//   const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
//     const { name, value } = e.currentTarget;
//     setValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e?.target.files?.[0] || null;
//     setValues((prevValues) => ({
//       ...prevValues,
//       file: file as null,
//     }));
//   };

//   const [userData, setUserData] = useState({
//     email: "",
//     name: "",
//     day: "",
//     month: "",
//     year: "",
//     file: "",
//   });

//   const [updateUserMutation] = useUpdateUserMutation();
//   const { data: session } = useSession();
//   const token: any = session?.user.accessToken;

//   const { data, error, isLoading, isSuccess } = useGetUserProfileQuery(token || '');
//   const userProfile = data?.user_profile;
  
//   const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
//     const { name, value } = e.currentTarget;
//     setValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };
//   const handleUpload = async () => {
//     const { name, day, file, email, year, month } = values;
//     const formData = new FormData();
//     if (name) formData.append('name', name);
//     if (email) formData.append('email', email);
//     if (day) formData.append('day', day);
//     if (year) formData.append('year', year);
//     if (month) formData.append('month', month);
//     file && formData.append('file', file);

//     try {
//       const response = await updateUserMutation({
//         access: token,
//         formData: formData,
//       });

//       if (response) {
//         console.log('Successfully uploaded');
//         window.location.reload(); // Reload the page after successful upload
//       } else {
//         console.log('Failed uploading');
//       }
//     } catch (error) {
//       console.error('Error while transferring to API:', error);
//     }

//     // Clear the file input
//     setValues((prevValues) => ({
//       ...prevValues,
//       file: null,
//     }));
//   };


//   // Store User Data in Local State
//   useEffect(() => {
//     if (userProfile && isSuccess) {
//       setUserData({
//         email: userProfile.email,
//         name: userProfile.name,
//         day: userProfile.day,
//         month: userProfile.month,
//         year: userProfile.year,
//         file: userProfile.file, // Assuming the file URL is provided in the API response
//       });
//     }
//   }, [userProfile, isSuccess]);

//   const months = [
//     { value: '01', label: 'January' },
//     { value: '02', label: 'February' },
//     { value: '03', label: 'March' },
//     { value: '04', label: 'April' },
//     { value: '05', label: 'May' },
//     { value: '06', label: 'June' },
//     { value: '07', label: 'July' },
//     { value: '08', label: 'August' },
//     { value: '09', label: 'September' },
//     { value: '10', label: 'October' },
//     { value: '11', label: 'November' },
//     { value: '12', label: 'December' },
//   ];

//   const days = Array.from({ length: 31 }, (_, index) => String(index + 1));
//   const currentYear = new Date().getFullYear();
//   const years = Array.from({ length: 100 }, (_, index) => String(currentYear - index));

//   return (
//     <Box maxW="lg" mx="auto" p={6}>
//       <Heading as="h2" size="xl" fontWeight="semibold" mb={4}>Edit Profile</Heading>
//       <Box bg="white" borderRadius="lg" shadow="md" p={6}>
//         <Stack spacing={4}>
//           <FormControl>
//             <FormLabel>Name</FormLabel>
//             <Input
//               type="text"
//               name="name"
//               value={values.name}
//               onChange={handleInputChange}
//               placeholder={userData.name || ''}
//             />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Email</FormLabel>
//             <Input
//               type="text"
//               name="email"
//               value={values.email}
//               onChange={handleInputChange}
//               placeholder={userData.email || ''}
//             />
//           </FormControl>
//           <FormControl>
//             <FormLabel>Birthday</FormLabel>
//             <Stack direction="row" spacing={2}>
//               <Select
//                 name="day"
//                 value={values.day}
//                 onChange={handleChange}
//                 placeholder="Day"
//               >
//                 <option value="">Day</option>
//                 {days.map((day) => (
//                   <option key={day} value={day}>
//                     {day}
//                   </option>
//                 ))}
//               </Select>
//               <Select
//                 name="month"
//                 value={values.month}
//                 onChange={handleChange}
//                 placeholder="Month"
//               >
//                 <option value="">Month</option>
//                 {months.map((month) => (
//                   <option key={month.value} value={month.value}>
//                     {month.label}
//                   </option>
//                 ))}
//               </Select>
//               <Select
//                 name="year"
//                 value={values.year}
//                 onChange={handleChange}
//                 placeholder="Year"
//               >
//                 <option value="">Year</option>
//                 {years.map((year) => (
//                   <option key={year} value={year}>
//                     {year}
//                   </option>
//                 ))}
//               </Select>
//             </Stack>
//             <Text mt={1} color="gray.500" fontSize="sm">Your Current DOB: {userData.day}/{userData.month}/{userData.year}</Text>
//           </FormControl>
//           <FormControl>
//             <FormLabel>Profile Photo</FormLabel>
//             <Stack direction="row" alignItems="center">
//               {userData.file && (
//                 <Box w={32} h={32} mb={2}>
//                   <Image
//                     src={userData.file}
//                     alt="Profile Photo"
//                     layout="responsive"
//                     width={200}
//                     height={200}
//                   />
//                 </Box>
//               )}
//               <Input type="file" name="file" onChange={handleFileChange} />
//             </Stack>
//             <Text mt={1} color="gray.500" fontSize="sm">(Optional)</Text>
//           </FormControl>
//           <Button
//             colorScheme="green"
//             onClick={handleUpload}
//             isLoading={isLoading}
//             loadingText="Updating..."
//           >
//             Update
//           </Button>
//         </Stack>
//       </Box>
//     </Box>
//   );
// };

// export default EditYourProfile;














// only tailwind css
// import { useEffect } from 'react';
// import { useUpdateUserMutation } from "./api/authApi";
// import { signIn, signOut, useSession } from "next-auth/react";
// import { useAppSelector } from "./../store/hooks";
// import { useState, FormEvent, ChangeEvent } from 'react';
// import { useGetUserProfileQuery } from "./api/authApi";
// import Image from 'next/image';

// const EditYourProfile = () => {
//   const [values, setValues] = useState({
//     name: '',
//     email: '',
//     year: '',
//     month: '',
//     day: '',
//     file: null,
//   });

//   const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
//     const { name, value } = e.currentTarget;
//     setValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };

//   const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const file = e?.target.files?.[0] || null;
//     setValues((prevValues) => ({
//       ...prevValues,
//       file: file as null,
//     }));
//   };

//   const [userData, setUserData] = useState({
//     email: "",
//     name: "",
//     day: "",
//     month: "",
//     year: "",
//     file: "",
//   });

//   const [updateUserMutation] = useUpdateUserMutation();
//   const { data: session } = useSession();
//   const token: any = session?.user.accessToken;

//   const { data, error, isLoading, isSuccess } = useGetUserProfileQuery(token || '');
//   const userProfile = data?.user_profile;
  
//   const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
//     const { name, value } = e.currentTarget;
//     setValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };
//   const handleUpload = async () => {
//     const { name, day, file, email, year, month } = values;
//     const formData = new FormData();
//     if (name) formData.append('name', name);
//     if (email) formData.append('email', email);
//     if (day) formData.append('day', day);
//     if (year) formData.append('year', year);
//     if (month) formData.append('month', month);
//     file && formData.append('file', file);

//     try {
//       const response = await updateUserMutation({
//         access: token,
//         formData: formData,
//       });

//       if (response) {
//         console.log('Successfully uploaded');
//         window.location.reload(); // Reload the page after successful upload
//       } else {
//         console.log('Failed uploading');
//       }
//     } catch (error) {
//       console.error('Error while transferring to API:', error);
//     }

//     // Clear the file input
//     setValues((prevValues) => ({
//       ...prevValues,
//       file: null,
//     }));
//   };


//   // Store User Data in Local State
//   useEffect(() => {
//     if (userProfile && isSuccess) {
//       setUserData({
//         email: userProfile.email,
//         name: userProfile.name,
//         day: userProfile.day,
//         month: userProfile.month,
//         year: userProfile.year,
//         file: userProfile.file, // Assuming the file URL is provided in the API response
//       });
//     }
//   }, [userProfile, isSuccess]);

//   const months = [
//     { value: '01', label: 'January' },
//     { value: '02', label: 'February' },
//     { value: '03', label: 'March' },
//     { value: '04', label: 'April' },
//     { value: '05', label: 'May' },
//     { value: '06', label: 'June' },
//     { value: '07', label: 'July' },
//     { value: '08', label: 'August' },
//     { value: '09', label: 'September' },
//     { value: '10', label: 'October' },
//     { value: '11', label: 'November' },
//     { value: '12', label: 'December' },
//   ];

//   const days = Array.from({ length: 31 }, (_, index) => String(index + 1));
//   const currentYear = new Date().getFullYear();
//   const years = Array.from({ length: 100 }, (_, index) => String(currentYear - index));

//   return (
//     <>
//       <div className="container mx-auto">
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//           <div className="p-4 sm:p-6">
//             <div className="flex items-center mb-2">
//               <h2 className="text-xl font-semibold">Edit Profile</h2>
//             </div>
//             <div className="mt-4">
//               <div className="flex flex-col mb-4">
//                 <label htmlFor="name" className="mb-2">Name</label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   value={values.name}
//                   onChange={handleInputChange}
//                   placeholder={userData.name || ''}
//                   className="p-2 border border-gray-300 rounded-md focus:outline-none"
//                 />
//               </div>
//               <div className="flex flex-col mb-4">
//                 <label htmlFor="email" className="mb-2">Email</label>
//                 <input
//                   type="text"
//                   id="email"
//                   name="email"
//                   value={values.email}
//                   onChange={handleInputChange}
//                   placeholder={userData.email || ''}
//                   className="p-2 border border-gray-300 rounded-md focus:outline-none"
//                 />
//               </div>
//               <div className="mt-6">
//                 <div className="flex items-center mb-2">
//                   <label htmlFor="birthday" className="mr-2 font-semibold">Birthday</label>
//                   <span className="text-gray-500 text-sm">Your Current DOB={userData.day}/{userData.month}/{userData.year}</span>
//                 </div>
//                 <div className="grid grid-cols-3 gap-4 sm:grid-cols-auto">
//                   <div className="flex flex-col">
//                     <label htmlFor="day" className="sr-only">Day</label>
//                     <select
//                       id="day"
//                       name="day"
//                       value={values.day}
//                       onChange={handleChange}
//                       className="p-3 border border-gray-300 rounded-md focus:outline-none"
//                     >
//                       <option value="">Day</option>
//                       {days.map((day) => (
//                         <option key={day} value={day}>
//                           {day}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <div className="flex flex-col">
//                     <label htmlFor="month" className="sr-only">Month</label>
//                     <select
//                       id="month"
//                       name="month"
//                       value={values.month}
//                       onChange={handleChange}
//                       className="p-3 border border-gray-300 rounded-md focus:outline-none"
//                     >
//                       <option value="">Month</option>
//                       {months.map((month) => (
//                         <option key={month.value} value={month.value}>
//                           {month.label}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                   <div className="flex flex-col">
//                     <label htmlFor="year" className="sr-only">Year</label>
//                     <select
//                       id="year"
//                       name="year"
//                       value={values.year}
//                       onChange={handleChange}
//                       className="p-3 border border-gray-300 rounded-md focus:outline-none"
//                     >
//                       <option value="">Year</option>
//                       {years.map((year) => (
//                         <option key={year} value={year}>
//                           {year}
//                         </option>
//                       ))}
//                     </select>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-6">
//                 <div className="flex items-center mb-2">
//                   <label htmlFor="profilePhoto" className="mr-2 font-semibold">Profile Photo</label>
//                   <span className="text-gray-500 text-sm">(Optional)</span>
//                 </div>
//                 <div className="flex flex-col items-center">
//                   {userData.file && (
//                     <div className="w-32 h-32 mb-2">
//                       <Image
//                         src={userData.file}
//                         alt="Profile Photo"
//                         layout="responsive"
//                         width={200}
//                         height={200}
//                       />
//                     </div>
//                   )}
//                   <input type="file" name="file" onChange={handleFileChange} className="mt-2" />
//                 </div>
//               </div>
//               <div className="mt-6">
//                 <button
//                   className="bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md font-bold"
//                   type="submit"
//                   onClick={handleUpload}
//                 >
//                   Update
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default EditYourProfile;

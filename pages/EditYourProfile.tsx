


// import { useState, FormEvent, ChangeEvent } from 'react';
// import { getSession } from 'next-auth/react';
// import { useProfileQuery } from "./api/authApi";
// import { useAppSelector } from "./../store/hooks";

// const EditYourProfile = () => {
//   const [values, setValues] = useState({
//     name: '',
//     email: '',
//     year: '',
//     day: '',
//     month: '',
//     file: null,
//   });
//   // const { name } = useAppSelector((state) => state.auth);
//   // console.log(name);
//   const token:any = session?.user.accessToken;

//   const { data, isSuccess } =  useProfileQuery(token)

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

//   const handleUpload = async () => {
//     const session: any = await getSession();
//     const { name, day, file, email, year, month } = values;
//     const formData = new FormData();
//     if (name) formData.append('name', name);
//     if (email) formData.append('email', email);
//     if (day) formData.append('day', day);
//     if (year) formData.append('year', year);
//     if (month) formData.append('month', month);
//     file && formData.append('file', file);

//     try {
//       // const response = await fetch('http://ashberri-api.onrender.com/api/user/update/', {
//       const response = await fetch('http://127.0.0.1:8000/api/user/update/', {

//         method: 'PATCH',
//         headers: {
//           authorization: `Bearer ${session?.user.accessToken}`,
//         },
//         body: formData,
//       });

//       if (response.ok) {
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

//   return (
//     <>

//     {/* User Name - {name} */}
//       <div>
//         <input
//           type="text"
//           name="name"
//           value={values.name}
//           onChange={handleInputChange}
//           placeholder="Enter name"
//         />
//         <input
//           type="text"
//           name="email"
//           value={values.email}
//           onChange={handleInputChange}
//           placeholder="Enter email"
//         />
//         <input
//           type="text"
//           name="day"
//           value={values.day}
//           onChange={handleInputChange}
//           placeholder="Enter day"
//         />
//         <input
//           type="text"
//           name="month"
//           value={values.month}
//           onChange={handleInputChange}
//           placeholder="Enter month"
//         />
//         <input
//           type="text"
//           name="year"
//           value={values.year}
//           onChange={handleInputChange}
//           placeholder="Enter year"
//         />
//         <input type="file" name="file" onChange={handleFileChange} />
//         <button type="submit" onClick={handleUpload}>
//           Update File
//         </button>
//       </div>
//     </>
//   );
// };

//  export default EditYourProfile













import { useEffect } from 'react';

 import { useUpdateUserMutation } from "./api/authApi"
 import { signIn, signOut, useSession } from "next-auth/react";
 import { useAppSelector } from "./../store/hooks";
 import { useState, FormEvent, ChangeEvent } from 'react';

 import { useProfileQuery } from "./api/authApi";


import React from 'react'

const EditYourProfile = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    year: '',
    day: '',
    month: '',
    file: null,
  });
  // const { name } = useAppSelector((state) => state.auth);
  // console.log(name);
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
    // C_second:"",
    // D_second:"",
    day:"",
    month:"",
    year:"",
    // file:""


  })

  
  const [updateUserMutation] = useUpdateUserMutation();
  
  const {data:session} = useSession();
  const token:any = session?.user.accessToken



  const { data, isSuccess } =  useProfileQuery(token)


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
    // if (response.ok) {

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
    if (data && isSuccess) {
      setUserData({
        email: data.email,
        name: data.name,
        day:data.day,
        month:data.month,
        year:data.year

      })
    }
  }, [data, isSuccess])

  return (
    <>
      <div>
        Your Current Name = 
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleInputChange}
          placeholder={userData.name}
        />
        <br/>
        Your Current Email = 
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleInputChange}
          // placeholder="Enter email"
          placeholder={userData.email}

          // <h1>{userData.email}</h1>

        />
        <br/>
        Your Current day = 

        <input
          type="text"
          name="day"
          value={values.day}
          onChange={handleInputChange}
          placeholder={userData.day}


        />
         <br/>
         Your Current Month = 
        <input
          type="text"
          name="month"
          value={values.month}
          onChange={handleInputChange}
          placeholder={userData.email}
        />
        <br/>
        Your Current Year = 
        <input
          type="text"
          name="year"
          value={values.year}
          onChange={handleInputChange}
          placeholder={userData.year}
        />
        <br/>
        Your Current File = 
        <input type="file" name="file" onChange={handleFileChange} />
        <br/>

        <button className="bg-green-600 hover:bg-green-700 text-white my-2 py-3 px-4 mx-auto rounded-md font-bold w-fit"  type="submit" onClick={handleUpload}>
          Update 
        </button>
      </div>
    </>
  );



};

export default EditYourProfile
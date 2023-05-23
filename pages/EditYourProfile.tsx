

import { useState, FormEvent, ChangeEvent } from 'react';
import { getSession } from 'next-auth/react';

const UpdateUserForm: React.FC = () => {
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

  const handleUpload = async () => {
    const session: any = await getSession();
    const { name, day, file, email, year, month } = values;
    const formData = new FormData();
    if (name) formData.append('name', name);
    if (email) formData.append('email', email);
    if (day) formData.append('day', day);
    if (year) formData.append('year', year);
    if (month) formData.append('month', month);
    file && formData.append('file', file);

    try {
      const response = await fetch('http://127.0.0.1:8000/api/user/update/', {
        method: 'PATCH',
        headers: {
          authorization: `Bearer ${session?.user.accessToken}`,
        },
        body: formData,
      });

      if (response.ok) {
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

  return (
    <>
      <div>
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleInputChange}
          placeholder="Enter name"
        />
        <input
          type="text"
          name="email"
          value={values.email}
          onChange={handleInputChange}
          placeholder="Enter email"
        />
        <input
          type="text"
          name="day"
          value={values.day}
          onChange={handleInputChange}
          placeholder="Enter day"
        />
        <input
          type="text"
          name="month"
          value={values.month}
          onChange={handleInputChange}
          placeholder="Enter month"
        />
        <input
          type="text"
          name="year"
          value={values.year}
          onChange={handleInputChange}
          placeholder="Enter year"
        />
        <input type="file" name="file" onChange={handleFileChange} />
        <button type="submit" onClick={handleUpload}>
          Update File
        </button>
      </div>
    </>
  );
};

export default UpdateUserForm;





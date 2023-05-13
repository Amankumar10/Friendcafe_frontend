"use client"

import React from 'react'
import { useRouter } from "next/navigation";
import { useSignupUserMutation } from "./api/authApi";
import { Form, Formik, Field } from "formik";
import { signIn } from 'next-auth/react';
import { useRef } from 'react';

function Signup() {

  interface MyFormValues {
    name: string;
    email: string;
    password: string;
    day: string;
    month: string;
    year: string;
    // profile_photo:string;
    // file: null;
  }
  const email = useRef("")

  const pass = useRef("")

  // const fileRef = useRef(null);
  const [showModal, setShowModal] = React.useState(false);
  const router = useRouter();

  const [signupUser, { data, isLoading }] = useSignupUserMutation();

  const initialValues: MyFormValues = { name: "", email: "", password: "", day: "", month: "", year: "" }

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      email: email.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/",
    });
  }

  return (
    <>

      {/* {showModal ? ( */}

      <body
        className="bg-gray-100">
        <div className="mb-5">
          <h1 className='text-black text-6xl flex  justify-center'>ashberri</h1><br />
          <p className='text-gray-600 text-2xl flex justify-center '>People those how highly compatible  <br /> and  think  like U,connect in ashberri...</p>
        </div>
        <div
          className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        >
          <div className="relative w-auto my-6 ">
            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col  bg-white outline-none focus:outline-none">
              {/*header*/}
              <div className="flex items-start justify-between p-5 border-b ">
                <h3 className="text-3xl text-black font-semibold">
                  Sign Up
                </h3>

                <button
                  className=" bg-transparent border-0 text-black opacity-5 text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setShowModal(false)}
                >

                </button>
              </div>



              <Formik
                initialValues={initialValues}
                onSubmit={(values) => {
                  signupUser({ ...values });
                  console.log('Form data', values);
                  // console.log({
                  //   fileName: values.file.name,

                  // })

                }}
              >
                {({ handleSubmit, values, handleChange, setFieldValue }) => (



                  <Form onSubmit={handleSubmit} >

                    <p className="my-2 p-4 text-blueGray-500 text-sm leading-relaxed ">
                      <Field className="px-2 h-10 mb-2  border border-2 outline-violet-300 border-gray-200 rounded-lg"

                        type="text"
                        name='name'
                        placeholder="Fullname"


                      /><br />

                      {/* <label  htmlFor="email">E-mail</label> */}
                      <Field className="px-2 h-10 mb-2 w-full border border-2 outline-violet-300 border-gray-200 rounded-lg" placeholder="email address" name='email'

                      /><br />


                      {/* <label htmlFor="password">Password</label> */}
                      <Field className="px-2 h-10 mb-6 w-full border border-2 outline-violet-300 border-gray-200 rounded-lg" type='password' placeholder="Password" name='password'

                      />

                      <label className="pl-1 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-1" htmlFor="grid-state">
                        Date of Birth (Provide correct DOB for your better future)
                      </label>
                      <Field className="px-10 h-10 mb-2  border border-2 outline-violet-300 border-gray-200 rounded-lg" as="select" placeholder="DD" id='day' name='day' >




                        <option className="hidden">DD</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>



                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>

                      </Field>



                      <Field className="px-10 h-10 mb-2  border border-2 outline-violet-300 border-gray-200 rounded-lg" as="select" placeholder="MM" name='month' >



                  

                        <option className="hidden">MM</option>
                        <option value="1">Jan</option>
                        <option value="2">Feb</option>
                        <option value="3">Mar</option>
                        <option value="4">Ari</option>
                        <option value="5">May</option>
                        <option value="6">Jun</option>
                        <option value="7">Jul</option>
                        <option value="8">Aug</option>
                        <option value="9">Sep</option>
                        <option value="10">Oct</option>
                        <option value="11">Nov</option>
                        <option value="12">Dev</option>


                        {/* </select> */}

                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg className="fill-current h-4  " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>

                      </Field>



                      <Field className="px-10 h-10 mb-2  border border-2 outline-violet-300 border-gray-200 rounded-lg" as="select" placeholder="YYYY" name='year' >


                        <option className="hidden">YYYY</option>
                        <option value="1999">1999</option>
                        <option value="2000">2000</option>
                        <option value="2001">2001</option>
                        <option value="2002">2002</option>
                        <option value="2003">2003</option>
                        <option value="2004">2004</option>

                      </Field>


                    </p>


                    {/* <Form>

                      <input className="px-10 h-10 mb-2  border border-2 outline-violet-300 border-gray-200 rounded-lg"
                        ref={fileRef}
                        type="file"
                        onChange={(e) => {
                          setFieldValue("file", e.target.files[0])

                        }}
                     
                      />
                      {values.file && <PreviewImage file={values.file} />}

                    </Form> */}

                    {/* </p> */}



                    {/*footer*/}
                    <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => router.push("/Login")}
                      >
                        Close
                      </button>

                      <button className="bg-green-600 hover:bg-green-700 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        onClick={onSubmit}>
                        {/* type="submit"> */}
                        Submit</button>

                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

      </body>

    </>


  );
};

export default Signup;

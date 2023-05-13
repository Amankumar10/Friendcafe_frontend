// // "use client";
// import React, { useState } from "react";
// import { Transition } from "@headlessui/react";
// import Link from 'next/link';
// import { useRouter } from "next/navigation";
// //  import { UserView }  from '../pages/user/UserView';
// // import Protect from './protect/page';
// // import SignUp from "../pages/SignUp";
// import { signIn, signOut, useSession } from "next-auth/react";
// // import mockRouter from 'next-router-mock';
// import dynamic from "next/dynamic";

// function Header() {
//   const [isOpen, setIsOpen] = useState(false);
//   const router = useRouter();
  
//   const {data:session} = useSession()


//   return (
//     <div>
//       <nav className="bg-white py-1 lg:px-12 shadow border-solid border-t-1">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center">
              
               
//               <div onClick={() => router.push("/")} className="bt cursor-pointer flex items-center flex-shrink-0 text-gray-800 mr-16">
//                 {/* <img
//                   className="h-8 w-8"
//                   src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
//                   alt="Workflow"
//                 /> */}
//               <span className="font-semibold text-4xl tracking-tight">ashberri</span>
              
//               </div>
              
//               <div className="hidden md:block text-sky-400">
//                 <div className="ml-10 flex items-baseline space-x-4">
                
//                     <a  onClick={() => router.push("/")}
//                         className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-sky-300 mr-2">
                       
//                      <svg className="h-8 w-8 "  width="4" height="4" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /> </svg>
//                      </a>
                    
                  
//                      <a onClick={() => router.push("/Alluser")}
                 
//                         className="text-sky-400 block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-sky-400 mr-2">
//                      <svg className="h-8 w-8 "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />   <h6 className="text-black">Home</h6> </svg>
//                      <h6 >Alluser</h6>
//                      {/* <h6 >trail</h6> */}

//                      </a>

//                      {/* <Link className="text-sky-600 hover:text-sky-700" href={"/userprofile"}>
//         UserProfile
//       </Link> */}
                    

//                      <a  onClick={() => router.push("/Profile")}
//                         className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-sky-400 mr-2">
                       
//                      <svg className="h-8 w-8 "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />  <circle cx="12" cy="12" r="3" /></svg>
//                      Profile
//                      </a>
                 

                     
                


// <div className="ml-auto flex gap-2">
//         {session?.user ? (
//           <>
//             <p className="text-sky-600"> {session.user.name}</p>
//             <button className="text-red-500" onClick={() => signOut()}>
//               Sign Out
//             </button>
//           </>
//         ) : (
//           <button className="text-green-600" onClick={() => signIn()}>
//             Sign In
//           </button>
//         )}
//       </div>


//                 </div>
//               </div>
//             </div>
     


//   <div className="flex">
//       <div className="relative mr-3  md:block">
//         <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
//           <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
//         </div>
//         <input type="text" id="email-adress-icon" className="block p-2 pl-10 w-full text text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm" placeholder="Search..."/>
//       </div>
   
//   </div>
  
                 

//             <div className= "content-center  flex md:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 type="button"
//                 className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                 aria-controls="mobile-menu"
//                 aria-expanded="false"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 {!isOpen ? (
//                   <svg
//                     className="block h-6 w-6"
                
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
                    
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     className="block h-6 w-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     aria-hidden="true"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//         </div>

//         <Transition
//           show={isOpen}
//           enter="transition ease-out duration-100 transform"
//           enterFrom="opacity-0 scale-95"
//           enterTo="opacity-100 scale-100"
//           leave="transition ease-in duration-75 transform"
//           leaveFrom="opacity-100 scale-100"
//           leaveTo="opacity-0 scale-95"
//         >
       
//             <div className="md:hidden " id="mobile-menu">
//               <div className="mr-12 px-2 pt-2 pb-3 space-y-1 sm:px-3 ">
              


        

//                 <Link href="/"
                
//                         className="block mt-4 lg:inline-block lg:mt-0 hover:text-white text-sky-400 px-4 py-2 rounded hover:bg-sky-400 mr-2">
//                      <svg className="h-8 w-8 " width="4" height="4" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z"/><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
//           HOME
                    
//                      </Link>

                 

//          <a onClick={() => router.push("/Alluser")}
//         //  <a onClick={() => router.push("/Trail")}

// className="text-sky-400 block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-sky-400 mr-2">
// <svg className="h-8 w-8 "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3" />   <h6 className="text-black">Home</h6> </svg>
// <h6 >Alluser</h6>
// {/* <h6 >trail</h6> */}

// </a>






//       {/* <Link className="text-sky-600 hover:text-sky-700" href={"/userprofile"}>
//         UserProfile
//       </Link> */}

//                      <a onClick={() => router.push("/Profile")}
//                         className="text-sky-400 block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-sky-400 mr-2">
                       
//                      <svg className="h-8 w-8 "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />  <circle cx="12" cy="12" r="3" /></svg>
//                      <h6 >profile</h6>

//                      </a>

//                      {/* <Link  href="/Login"
                  
//                   className="text-sky-400 block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-sky-400 mr-2">
                       
//                        <svg className="h-8 w-8 "  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />  <path d="M20 12h-13l3 -3m0 6l-3 -3" /></svg>
//                      <h6>lOGIN</h6>
                 
//                      </Link> */}



                     
// <div className="ml-auto flex gap-2">
//         {session?.user ? (
//           <>
//             <p className="text-sky-600"> {session.user.name}</p>
//             <button className="text-red-500" onClick={() => signOut()}>
//             {/* <button className="text-red-500" onClick={() => signOut()  , router.push("/")}> */}

//               Sign Out
//             </button>
//           </>
//         ) : (
//           <button className="text-green-600" onClick={() => signIn()}>
//             Sign In
//           </button>
//         )}
//       </div>

//               </div>
//             </div>
       
//         </Transition>
//       </nav>



//     </div>
//   );
// }


// export default dynamic (() => Promise.resolve(Header), {ssr: false})








// "use client";

import { Transition } from "@headlessui/react";

import { useRouter } from "next/navigation";
//  import { UserView }  from '../pages/user/UserView';
// import Protect from './protect/page';
// import SignUp from "../pages/SignUp";
import { signIn, signOut, useSession } from "next-auth/react";
// import mockRouter from 'next-router-mock';
import dynamic from "next/dynamic";

import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  
  const {data:session} = useSession()

  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link className="text-white font-bold text-xl" href="/">
                {/* <a className="text-white font-bold text-xl">My Website</a> */}
                Ashberri
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href ="/Alluser">
                  {/* <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a> */}
                  Alluser
                </Link>
                <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href ="/Profile">
                  {/* <a className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a> */}
                  Profile

                </Link>
                {/* <Link className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium" href="/contact">
                  
                </Link> */}




                 <div className="ml-auto flex gap-2">
        {session?.user ? (
          <>
            <p className="text-sky-600"> {session.user.name}</p>
            <button className="text-red-500" onClick={() => signOut()}>
            {/* <button className="text-red-500" onClick={() => signOut()  , router.push("/")}> */}

              Sign Out
            </button>
          </>
        ) : (
          <button className="text-green-600" onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-label="Toggle mobile menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/">
             Home
            </Link>
            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"  href="/Alluser">
             Alluser
              </Link>
            <Link className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium" href="/Profile">
              {/* <a className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a> */}
              Profile
            </Link>
            
            <div className="ml-auto flex gap-2">
        {session?.user ? (
          <>
            <p className="text-sky-600"> {session.user.name}</p>
            <button className="text-red-500" onClick={() => signOut()}>
            {/* <button className="text-red-500" onClick={() => signOut()  , router.push("/")}> */}

              Sign Out
            </button>
          </>
        ) : (
          <button className="text-green-600" onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
            
            
          </div>
        </div>
      )}
    </nav>
  )
}
// // "use client";
// import { SessionProvider } from "next-auth/react";
// import React, { ReactNode } from "react";

// interface Props {
//   children: ReactNode;
// }
// function Provider({ children }: Props) {
//   return <SessionProvider>{children}</SessionProvider>;
// }

// export default Provider;





// "use client";

// import { Provider } from "react-redux";
// import { store } from "./store/store";

// export function Providers({ children }: { children: React.ReactNode }) {
//   return <Provider store={store}>{children}</Provider>;
// }


// "use client";

// import React from 'react'
// import { Provider } from "react-redux";
// import { store } from "./store/store";
// const Provider = ({ children }: { children: React.ReactNode }) => {
//   return (<>
//     <Provider store={store}>{children}</Provider>
//     </>
//   )
// }

// export default Provider




import React from 'react'
import { Provider } from "react-redux";
import { store } from "@/store/store";
function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
    <Provider store={store}>{children}</Provider>
    </>
  )
}

export default Providers
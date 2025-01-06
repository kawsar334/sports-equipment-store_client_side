// import React from 'react';


// const Loader = () => {
//   return (
//     <div>
//       {/* <span className="loading loading-ring loading-lg   "></span>
//       <span className="loading loading-ring loading-lg   "></span>
//       <span className="loading loading-ring loading-md   "></span>
//       <span className="loading loading-ring loading-lg   "></span> */}

//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="flex space-x-2">
//           <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
//           <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce delay-200"></div>
//           <div className="w-4 h-4 bg-red-500 rounded-full animate-bounce delay-400"></div>
//         </div>
//       </div>
//     </div>
//   );
// };


// export default Loader

import React from "react";
import { BarLoader, BounceLoader, ClockLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <BarLoader color="#3498db" size={100} />
    </div>
  );
};

export default Loader;

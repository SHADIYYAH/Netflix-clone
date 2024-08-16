

// import React from 'react';
// import netflixLogo from "../assets/images/netflix-logo.png";

// const Navbar = () => {
//   return (
//     <nav className="flex items-center  justify-between p-4 md:px-8 lg:px-16 bg-transparent absolute top-0 w-full z-10">
//       <img className="cursor-pointer" src={netflixLogo} alt="Netflix Logo" width={150} />
//       <button className="text-white bg-red-600 px-3 py-1 rounded-md ">Sign In</button>
//     </nav>
//   );
// }

// export default Navbar;


// import React from 'react';
// // import { Link } from 'react-router-dom'; 
// import netflixLogo from "../assets/images/netflix-logo.png";

// const Navbar = () => {
//   return (
//     <nav className="flex items-center justify-between p-4 md:px-8 lg:px-16 bg-transparent absolute top-0 w-full z-10">
//       <img className="cursor-pointer" src={netflixLogo} alt="Netflix Logo" width={150} />
      
// {/*       
//       <Link to="/login">
//         <button className="text-white bg-red-600 px-3 py-1 rounded-md">
//           Sign In
//         </button>
//       </Link> */}
//     </nav>
//   );
// }

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom'; 
import netflixLogo from '../assets/images/netflix-logo.png';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 md:px-8 lg:px-16 bg-transparent absolute top-0 w-full z-10">
      <img className="cursor-pointer" src={netflixLogo} alt="Netflix Logo" width={150} />
      
     
      <Link to="/login">
        <button className="text-white bg-red-600 px-3 py-1 rounded-md">
          Sign In
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;


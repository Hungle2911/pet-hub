// import Logo from "./Logo/";

// const NavBar = () => {
//   return (
//     <nav>
//       <div className=" mx-20 flex items-center justify-around">
//         <div>
//           <Logo />
//         </div>
//         <div>Nav right</div>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo/";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav>
      <div className="mx-20 flex items-center justify-around">
        <div>
          <Logo />
        </div>
        <div>
          {location.pathname === "/" && (
            <>
              <Link to="/login" className="mr-4">
                Login
              </Link>
              <Link to="/register" className="mr-4">
                Register
              </Link>
            </>
          )}
          {location.pathname !== "/" && location.pathname !== "/register" && (
            <Link to="/logout" className="mr-4">
              Logout
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
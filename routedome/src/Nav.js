import react from "react";

import { Link, useHistory } from "react-router-dom";
function Nav() {
  const history = useHistory();
  console.log("history");

  const navstyle = {
    color: "white",
  };
  return (
    <nav className="">
      <h3>logo</h3>

      <ul className="nav-links">
        <Link style={navstyle} to="/about">
          <li> shop</li>
          {/* <li onClick={()=> history.push('/about')} className={history.location.pathname === '/about' ? 'activeClass' : ''}>About</li> */}
        </Link>
        <Link style={navstyle} to="/shop">
          <li> shop</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;

// <li onClick={()=> history.push('/about')} className={history.location.pathname === '/about' ? 'activeClass' : ''}>About</li>
// <li onClick={()=> history.push('/about')} className={history.location.pathname === '/about' ? 'activeClass' : ''}>About</li>
//

//       <nav className="">
//   <h3>logo</h3>

//   <ul className="nav-links">

//       <li onClick={()=> history.push('/about')} className={history.location.pathname === '/about' ? 'activeClass' : ''}>About</li>

//     <Link style={navstyle} to="/shop">
//       <li  className={history.location.pathname === '/shop' ? 'activeClass' : ''}>shop</li>
//     </Link>
//   </ul>
// </nav>

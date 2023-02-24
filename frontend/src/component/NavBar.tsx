import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header>
        <div className="container">
          <Link to="/">
            <h1>Workout Buddy</h1>
          </Link>
        </div>
      </header>
      <div className="pages">
        <Outlet />
      </div>
    </>
  );
};
export default NavBar;

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout Successful");
        navigate("/");
      })
      .catch((error) => {
        toast.error(error);
      });
  };
  console.log(user);
  return (
    <div className=" pr-20 flex justify-end py-5">
      <Link to="/">
        {" "}
        <p className=" mr-14">Blog</p>
      </Link>
      {user?.uid ? (
        <>
          <Link to="/add-blog">
            <p className="rounded-md mr-14">Add Blog</p>
          </Link>
          <p onClick={handleLogout} className="rounded-md cursor-pointer">
            Logout
          </p>
        </>
      ) : (
        <>
          <Link to="/sign-up">
            <p className="rounded-md">Sign Up</p>
          </Link>
          <Link to="/login">
            <p className=" ml-14">Login</p>
          </Link>
        </>
      )}
    </div>
  );
};

export default Navbar;

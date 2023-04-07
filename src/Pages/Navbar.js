import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" pr-20 flex justify-end py-5">
      <Link to="/">
        {" "}
        <p className=" text-sm mr-14">Blog</p>
      </Link>
      <Link to="/sign-up">
        <p className="rounded-md">Sign Up</p>
      </Link>
      <Link to="/login">
        <p className=" ml-14">Login</p>
      </Link>
    </div>
  );
};

export default Navbar;

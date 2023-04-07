import React from "react";
import "../App.css";

const Login = () => {
  return (
    <div className=" background-image flex justify-center items-center h-screen">
      <form action="">
        <div className="flex bg-slate-100 p-2 rounded-sm mb-7">
          <p className=" text-white text-center bg-black rounded-md px-11 py-2 ">
            Email
          </p>
          <input
            className=" pl-6 bg-slate-100 md:w-72"
            placeholder="Enter your Email"
            type="email"
            name=""
            id=""
          />
        </div>
        <div className="flex bg-slate-100 p-2 rounded-sm">
          <p className=" text-white text-center bg-black rounded-md px-8 py-2 ">
            Password
          </p>
          <input
            className=" pl-6 bg-slate-100 md:w-72"
            placeholder="Enter your Password"
            type="password"
            name=""
            id=""
          />
        </div>
        <button
          className="text-white mt-16 bg-black rounded-md px-4 py-1 border-2 border-s-white text-base"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

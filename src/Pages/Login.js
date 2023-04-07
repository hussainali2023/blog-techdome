import React, { useContext, useState } from "react";
import "../App.css";
import { AuthContext } from "../context/AuthProvider";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { signInUser, user } = useContext(AuthContext);
  const {
    register,
    formState: { error },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        toast.success("Successfully Login");
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };

  return (
    <div className=" background-image flex justify-center items-center h-screen">
      <form action="" onSubmit={handleSubmit(handleLogin)}>
        <div className="flex bg-slate-100 p-2 rounded-sm mb-7">
          <p className=" text-white text-center bg-black rounded-md px-11 py-2 ">
            Email
          </p>
          <input
            {...register("email")}
            className=" pl-6 bg-slate-100 md:w-72"
            placeholder="Enter your Email"
            type="email"
            name="email"
            id=""
          />
        </div>
        <div className="flex bg-slate-100 p-2 rounded-sm">
          <p className=" text-white text-center bg-black rounded-md px-8 py-2 ">
            Password
          </p>
          <input
            {...register("password")}
            className=" pl-6 bg-slate-100 md:w-72"
            placeholder="Enter your Password"
            type="password"
            name="password"
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

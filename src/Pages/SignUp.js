import React, { useContext, useState } from "react";
import "../App.css";
import { AuthContext } from "../context/AuthProvider";

import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { createUser, updateUser, user } = useContext(AuthContext);

  const {
    register,
    formState: { error },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  const handleSignup = (data) => {
    createUser(data.email, data.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            toast.success("Registration Successfull");
            saveUsersInDatabase(data.name, data.email);
            navigate("/");
          })
          .catch((err) => {
            console.log(err);
          });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };

  console.log(user);

  const saveUsersInDatabase = (name, email) => {
    const user = { name: name, email: email };
    // console.log(user);
    fetch("https://blog-app-server-hussainali2023.vercel.app/adduser", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className=" background-image flex justify-center items-center h-screen">
      <form action="" onSubmit={handleSubmit(handleSignup)}>
        <div className="flex bg-slate-100 p-2 rounded-sm mb-7">
          <p className=" text-white text-center bg-black rounded-md px-10 py-2 ">
            Name
          </p>
          <input
            {...register("name")}
            className=" pl-6 bg-slate-100 md:w-72"
            placeholder="Enter your Name"
            type="text"
            name="name"
            id=""
          />
        </div>
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
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;

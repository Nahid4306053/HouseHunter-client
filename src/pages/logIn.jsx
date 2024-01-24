/* eslint-disable no-useless-escape */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import React, { useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../Context/AuthnicationContext";
import Pagetitle from "../Hooks/Pagetitle";
import ScrollTop from "../Hooks/ScrollTop";
import EntrypointDesc from "../components/Authparts/EntrypointDesc";
import logo from "/images/color-logo.png";
import log_bg from "/images/login_bg.png";
export default function Login() {
  ScrollTop();
  const toastId = useRef(null);
  const getemail = useRef();
  const [Errors, setErrors] = useState([]);
  const { SignIn } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const { Vpath } = state || {};

  const mutation = useMutation({
    mutationFn: async ({ email, password }) => {
      await SignIn(email, password);
    },
    onSuccess: async () => {
      toast.success(` Log in Succsessfully`);
      navigate("/");
    },
    onError: (err) => {
      setErrors([err?.response?.data?.error?.message]);
    },
  });

  const handelesubmit = async (form) => {
    form.preventDefault();
    let email = form.target.email.value;
    let password = form.target.password.value;
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}$/;

    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const err = [];

    if (password.trim() === "") {
      err.push("Password is required");
    } else if (!passwordPattern.test(password)) {
      err.push(
        "Password should include one uppercase , one lowercase , one special  character and length should 6 character"
      );
    }
    if (email.trim() === "") {
      err.push("Email is required");
    } else if (!emailPattern.test(email)) {
      err.push("Please provide verified email");
    }
    setErrors(err);
    if (err.length === 0) {
      mutation.mutate({ email, password });
    }
  };

  return (
    <>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      <Pagetitle>log in || HouseHunter</Pagetitle>
      {/* Same as */}

      <div
        style={{
          backgroundImage: `url(${log_bg})`,
        }}
        className="hero  min-h-screen "
      >
        <div className="overlay absolute h-full w-full   bg-black opacity-50"></div>
        <div className="hero-content relative z-10 container">
          <div
            className={` overflow-hidden bg-sky-100 md:grid lg:grid-cols-5 md:grid-cols-6  items-center  shadow-black  shadow-2xl `}
          >
            <EntrypointDesc></EntrypointDesc>
            <div className=" bg-sky-100  p-10 text-sky-500  w-full md:col-span-3 lg:col-span-2 z-50">
              <div className="mb-10">
                <img className=" w-72 lg:w-xs mx-auto " src={logo} alt="" />
                <h3 className="text-xl mt-3 text-center">
                  Log in to your account
                </h3>
              </div>
              {Errors.length > 0 && (
                <div className="erorrs  text-red-500    my-4 bg-red-200 p-4 rounded-lg">
                  <ul className="list-disc grid gap-2">
                    {Errors.map((ele, ind) => {
                      return (
                        <li key={ind} className="capitalize  ml-4">
                          {ele}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
              <form onSubmit={handelesubmit} className="mt-5 space-y-5">
                <TextField name="email" fullWidth id="email" label="Email" variant="outlined" />

                <TextField name="password" fullWidth id="password" label="Password" variant="outlined" />
                <button type="submit" className="btn text-white w-full hover:bg-sky-500    bg-sky-500    border-none " > Log in </button>
              </form>
              <p className="mt-7 text-center"> Dont't have an Account? <Link className="text-gray-500 ml-2 font-bold" to="/signup"> Sign Up </Link> </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

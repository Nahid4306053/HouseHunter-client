/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useAuth } from "../Context/AuthnicationContext";
import Pagetitle from "../Hooks/Pagetitle";
import ScrollTop from "../Hooks/ScrollTop";
import UploadIMG from "../Utils/UploadIMG";
import EntrypointDesc from "../components/Authparts/EntrypointDesc";
import logo from "/images/color-logo.png";
import log_bg from "/images/login_bg.png";

export default function Signup() {
  ScrollTop();
  const [Errors, setErrors] = useState([]);

  const { Signup, signout, } = useAuth();
  const [role, setRole] = useState("");
  const handleChange = (e) => {
    setRole(e.target.value);
  };
  const navigate = useNavigate();
  const { state } = useLocation();
  const { Vpath } = state || {};
  const [Uploadimg, setUploadimg] = useState();
  const [loading, setloading] = useState(false);

  const mutation = useMutation({
    mutationFn: async ({ username, email, password, avatar, phone, role }) => {
      await Signup(username, email, password, avatar, phone, role);
    },
    onSuccess: async () => {
      await signout();
      toast.success(`Registration SuccessFully`);

      navigate("/login");
    },
    onError: (err) => {
      setErrors([[err?.response?.data?.error?.message]]);
    },
  });

  const handelesubmit = async (form) => {
    form.preventDefault();
    let username = form.target.username.value;
    let email = form.target.email.value;
    let phone = form.target.phone.value;
    let password = form.target.password.value;
    let avatar = form.target.avatar.files;

    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{6,}$/;
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    const PhonePattern = /^(01[3-9]\d{8}|018[0-9]\d{7})$/;

    const err = [];

    if (username.trim() === "" || typeof username !== "string") {
      err.push("Username is requred");
    } else if (username.trim().length < 3 || username.trim().length > 25) {
      err.push("Username should max 25 and min 3 charecter");
    }

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
      err.push("Please provide a verified email");
    }

    if (phone.trim() === "") {
      err.push("Phone Number is required");
    } else if (!PhonePattern.test(phone)) {
      err.push("Please provide a Bangladeshi Phone Number");
    }

    if (avatar.length === 0) {
      err.push("Please Upload a profile Picture");
    }

    setErrors(err);

    if (err.length === 0) {
      try {
        setloading(true);
        const result = await UploadIMG(avatar[0]);
        if (result.data.data.display_url) {
          avatar = result.data.data.display_url;
          setloading(false);
          mutation.mutate({ username, email, password, avatar, phone, role });
        }
      } catch (err) {
        console.log(err);
        setErrors(["There is a Problem Occured while Uploading Img"]);
      }
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Pagetitle>Sign up || HouseHunter</Pagetitle>
      <div
        style={{
          backgroundImage: `url(${log_bg})`,
        }}
        className="hero  min-h-screen "
      >
        <div className="overlay absolute h-full w-full   bg-black opacity-50"></div>
        <div className="hero-content relative z-10 container">
          <div
            className={` overflow-hidden  md:grid lg:grid-cols-5 md:grid-cols-6  items-center  shadow-black bg-sky-100 shadow-2xl `}
          >
            <EntrypointDesc></EntrypointDesc>
            <div className=" bg-sky-100  p-10 text-sky-500   w-full md:col-span-3 lg:col-span-2 z-50">
              <div className="mb-10">
                <img className=" w-64 lg:w-xs mx-auto   " src={logo} alt="" />
                <h3 className="text-xl mt-3 text-center">Create an account</h3>
              </div>
              {Errors.length > 0 && (
                <div className="erorrs  text-sky-500   my-1 bg-sky-200 p-4 rounded-lg">
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
                <TextField
                  name="username"
                  fullWidth
                  id="username"
                  label="Full Name"
                  variant="outlined"
                />
                <TextField
                  name="email"
                  fullWidth
                  id="email"
                  label="Email"
                  variant="outlined"
                />
                <TextField
                  name="phone"
                  fullWidth
                  id="phone"
                  label="Phone Number"
                  variant="outlined"
                />
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={role}
                    label="Role"
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value={"House Owner"}>House Owner</MenuItem>
                    <MenuItem value={"House Renter"}>House Renter</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  name="password"
                  fullWidth
                  id="password"
                  label="Password"
                  variant="outlined"
                />

                <div className="btn p-0 overflow-hidden flex justify-between w-full text-sky-500   capitalize relative ">
                  <div className="ml-2">
                    <i className="fa-solid fa-arrow-up-from-bracket mr-2"></i>
                    Upload a profile picture
                  </div>
                  <img src={Uploadimg} className="h-full" alt="" />
                  <input
                    name="avatar"
                    type="file"
                    required
                    onChange={(e) =>
                      setUploadimg(URL.createObjectURL(e.target.files[0]))
                    }
                    className="absolute h-12 opacity-0  w-full"
                    accept=".jpg , .png , jpeg"
                  />
                </div>

                <button
                  type="submit"
                  className="btn text-white w-full hover:bg-sky-500   bg-sky-500   border-none "
                  disabled={mutation.isPending || loading}
                >
                  {mutation.isPending || loading ? (
                    <span className="loading loading-dots loading-md"></span>
                  ) : (
                    "Sign up"
                  )}
                </button>
              </form>
              <p className="mt-7 text-center">
                Already have an Account?
                <Link className="text-blue-950 ml-2  font-bold" to="/login">
                  Log In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
